/**
 * Classical Web Audio Engine
 * High-fidelity synthesis of Bel Canto Tenor voice with formant modeling,
 * vibrato (squillo resonance), and acoustic grand piano accompaniment.
 */

// Note to frequency helper (A4 = 440 Hz)
const NOTE_FREQS: Record<string, number> = {
  "C2": 65.41, "C#2": 69.30, "Db2": 69.30, "D2": 73.42, "D#2": 77.78, "Eb2": 77.78, "E2": 82.41, "F2": 87.31, "F#2": 92.50, "Gb2": 92.50, "G2": 98.00, "G#2": 103.83, "Ab2": 103.83, "A2": 110.00, "A#2": 116.54, "Bb2": 116.54, "B2": 123.47,
  "C3": 130.81, "C#3": 138.59, "Db3": 138.59, "D3": 146.83, "D#3": 155.56, "Eb3": 155.56, "E3": 164.81, "F3": 174.61, "F#3": 185.00, "Gb3": 185.00, "G3": 196.00, "G#3": 207.65, "Ab3": 207.65, "A3": 220.00, "A#3": 233.08, "Bb3": 233.08, "B3": 246.94,
  "C4": 261.63, "C#4": 277.18, "Db4": 277.18, "D4": 293.66, "D#4": 311.13, "Eb4": 311.13, "E4": 329.63, "F4": 349.23, "F#4": 369.99, "Gb4": 369.99, "G4": 392.00, "G#4": 415.30, "Ab4": 415.30, "A4": 440.00, "A#4": 466.16, "Bb4": 466.16, "B4": 493.88,
  "C5": 523.25, "C#5": 554.37, "Db5": 554.37, "D5": 587.33, "D#5": 622.25, "Eb5": 622.25, "E5": 659.25, "F5": 698.46, "F#5": 739.99, "Gb5": 739.99, "G5": 783.99, "G#5": 830.61, "Ab5": 830.61, "A5": 880.00, "A#5": 932.33, "Bb5": 932.33, "B5": 987.77,
  "C6": 1046.50
};

export class ClassicalAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  public analyser: AnalyserNode | null = null;
  private isPlaying = false;
  private currentTrackId: string | null = null;
  private sequenceTimer: any = null;
  private stepIndex = 0;
  private currentTime = 0;
  private totalDuration = 0;
  private volume = 0.85;

  private onProgressCallback?: (currentTime: number, duration: number, lyric: string) => void;
  private onStateChangeCallback?: (isPlaying: boolean) => void;

  constructor() {
    // Lazily init AudioContext on first user interaction to comply with autoplay policy
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);

      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 256;
      this.analyser.smoothingTimeConstant = 0.85;

      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public subscribe(
    onProgress: (currentTime: number, duration: number, lyric: string) => void,
    onStateChange: (isPlaying: boolean) => void
  ) {
    this.onProgressCallback = onProgress;
    this.onStateChangeCallback = onStateChange;
  }

  /**
   * Synthesize Tenor Vocal Line with formant filtering and delayed vibrato
   */
  private playTenorVocalNote(freq: number, duration: number, startTime: number) {
    if (!this.ctx || !this.masterGain) return;

    // Harmonic Rich Oscillator
    const osc = this.ctx.createOscillator();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(freq, startTime);

    // Vocal vibrato LFO (~5.5 Hz) with natural onset delay
    const vibratoLfo = this.ctx.createOscillator();
    const vibratoGain = this.ctx.createGain();
    vibratoLfo.frequency.setValueAtTime(5.5, startTime);
    // Vibrato starts gentle and swells slightly
    vibratoGain.gain.setValueAtTime(0, startTime);
    vibratoGain.gain.setValueAtTime(0, startTime + 0.25);
    vibratoGain.gain.linearRampToValueAtTime(freq * 0.022, startTime + 0.6); // ~2.2% pitch modulation (singing vibrato)
    vibratoLfo.connect(vibratoGain);
    vibratoGain.connect(osc.frequency);

    // Formant 1: Vowel body (~600 Hz - warm open throat)
    const formant1 = this.ctx.createBiquadFilter();
    formant1.type = "peaking";
    formant1.frequency.setValueAtTime(650, startTime);
    formant1.Q.setValueAtTime(4.0, startTime);
    formant1.gain.setValueAtTime(14, startTime);

    // Formant 2: Vowel definition (~1400 Hz)
    const formant2 = this.ctx.createBiquadFilter();
    formant2.type = "peaking";
    formant2.frequency.setValueAtTime(1450, startTime);
    formant2.Q.setValueAtTime(5.0, startTime);
    formant2.gain.setValueAtTime(10, startTime);

    // Formant 3: "Chiodo" / Squillo - The Singer's Formant (2800 - 3100 Hz ring)
    const squillo = this.ctx.createBiquadFilter();
    squillo.type = "peaking";
    squillo.frequency.setValueAtTime(2950, startTime);
    squillo.Q.setValueAtTime(6.0, startTime);
    squillo.gain.setValueAtTime(16, startTime);

    // Lowpass to roll off artificial buzz
    const lowpass = this.ctx.createBiquadFilter();
    lowpass.type = "lowpass";
    lowpass.frequency.setValueAtTime(4500, startTime);

    // Vocal envelope (gentle attack, sustained core, elegant decrescendo release)
    const envGain = this.ctx.createGain();
    envGain.gain.setValueAtTime(0.001, startTime);
    envGain.gain.exponentialRampToValueAtTime(0.35, startTime + 0.12);
    envGain.gain.setValueAtTime(0.35, startTime + Math.max(0.15, duration - 0.25));
    envGain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    // Connect audio graph
    osc.connect(formant1);
    formant1.connect(formant2);
    formant2.connect(squillo);
    squillo.connect(lowpass);
    lowpass.connect(envGain);
    envGain.connect(this.masterGain);

    vibratoLfo.start(startTime);
    osc.start(startTime);

    vibratoLfo.stop(startTime + duration + 0.05);
    osc.stop(startTime + duration + 0.05);
  }

  /**
   * Synthesize acoustic grand piano chord note
   */
  private playPianoNote(freq: number, duration: number, startTime: number, velocity: number = 0.2) {
    if (!this.ctx || !this.masterGain) return;

    // Triangle + gentle sine fundamental for hammer tone
    const osc1 = this.ctx.createOscillator();
    osc1.type = "triangle";
    osc1.frequency.setValueAtTime(freq, startTime);

    const osc2 = this.ctx.createOscillator();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(freq * 2, startTime); // 1st overtone

    // Lowpass filter simulates piano soundboard warmth
    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(Math.min(5000, freq * 5), startTime);
    filter.frequency.exponentialRampToValueAtTime(Math.min(1200, freq * 2), startTime + duration);

    // Piano percussive envelope: instantaneous strike, natural exponential decay
    const noteGain = this.ctx.createGain();
    noteGain.gain.setValueAtTime(0.0001, startTime);
    noteGain.gain.linearRampToValueAtTime(velocity, startTime + 0.015);
    noteGain.gain.exponentialRampToValueAtTime(velocity * 0.45, startTime + 0.3);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration * 1.5);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + duration * 1.5);
    osc2.stop(startTime + duration * 1.5);
  }

  /**
   * Play pre-composed classical sequence
   */
  public playSequence(track: {
    id: string;
    durationSec: number;
    notesSequence: Array<{
      note: string;
      dur: number;
      lyric: string;
      pianoChord: string[];
    }>;
  }) {
    this.initContext();
    this.stop();

    this.currentTrackId = track.id;
    this.isPlaying = true;
    this.stepIndex = 0;
    this.currentTime = 0;

    const totalSeqDur = track.notesSequence.reduce((acc, n) => acc + n.dur, 0);
    this.totalDuration = Math.max(track.durationSec, totalSeqDur);

    if (this.onStateChangeCallback) {
      this.onStateChangeCallback(true);
    }

    const runStep = () => {
      if (!this.isPlaying || !this.ctx) return;

      if (this.stepIndex >= track.notesSequence.length) {
        // Loop or finish
        this.stepIndex = 0;
      }

      const item = track.notesSequence[this.stepIndex];
      const now = this.ctx.currentTime;
      const tenorFreq = NOTE_FREQS[item.note] || 440;

      // Play Tenor Voice
      this.playTenorVocalNote(tenorFreq, item.dur, now);

      // Play Piano Accompaniment (Arpeggiated slightly for natural touch)
      if (item.pianoChord && item.pianoChord.length > 0) {
        item.pianoChord.forEach((pNote, idx) => {
          const pFreq = NOTE_FREQS[pNote];
          if (pFreq) {
            const strumDelay = idx * 0.035; // gentle arpeggiation
            this.playPianoNote(pFreq, item.dur * 1.4, now + strumDelay, 0.16);
          }
        });
      }

      // Update progress
      if (this.onProgressCallback) {
        this.onProgressCallback(this.currentTime, this.totalDuration, item.lyric);
      }

      const stepDurationMs = item.dur * 1000;
      this.currentTime = (this.currentTime + item.dur) % this.totalDuration;
      this.stepIndex++;

      this.sequenceTimer = setTimeout(runStep, stepDurationMs);
    };

    runStep();
  }

  public pause() {
    this.isPlaying = false;
    if (this.sequenceTimer) {
      clearTimeout(this.sequenceTimer);
      this.sequenceTimer = null;
    }
    if (this.onStateChangeCallback) {
      this.onStateChangeCallback(false);
    }
  }

  public resume(track: any) {
    if (!this.isPlaying) {
      this.playSequence(track);
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.sequenceTimer) {
      clearTimeout(this.sequenceTimer);
      this.sequenceTimer = null;
    }
    this.stepIndex = 0;
    this.currentTime = 0;
    if (this.onStateChangeCallback) {
      this.onStateChangeCallback(false);
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getCurrentTrackId(): string | null {
    return this.currentTrackId;
  }
}

export const classicalAudioEngine = new ClassicalAudioEngine();
