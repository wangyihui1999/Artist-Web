import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Radio,
  Music
} from 'lucide-react';
import { Language, dictionary, audioTracksData, AudioTrack } from '../data/translations';

interface AudioPlayerProps {
  currentLang: Language;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ currentLang }) => {
  const t = dictionary[currentLang];
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.9);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const currentTrack: AudioTrack = audioTracksData[currentTrackIndex];

  // Update audio source when track index changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = currentTrack.audioSrc;
    audio.load();
    setCurrentTime(0);

    if (isPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [currentTrackIndex]);

  // Sync volume with audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Dynamic visualizer canvas loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let phase = 0;
    const barCount = 38;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const barWidth = (width / barCount) - 2;
      phase += 0.08;

      for (let i = 0; i < barCount; i++) {
        let barHeight = 4;
        if (isPlaying) {
          // Dynamic harmonic motion simulating lyric vocal resonance
          const wave1 = Math.sin(phase + i * 0.35);
          const wave2 = Math.cos(phase * 1.4 + i * 0.18);
          const wave3 = Math.sin(phase * 0.7 + i * 0.5);
          const intensity = Math.max(0.12, (wave1 + wave2 + wave3 + 2.5) / 5);
          barHeight = Math.max(4, intensity * (height - 6));

          const gradient = ctx.createLinearGradient(0, height, 0, height - barHeight);
          gradient.addColorStop(0, '#0C192E');
          gradient.addColorStop(0.65, '#9B1B30');
          gradient.addColorStop(1, '#E11D48');
          ctx.fillStyle = gradient;
        } else {
          ctx.fillStyle = '#CBD5E1';
          barHeight = 4 + Math.sin(i * 0.3) * 1.5;
        }

        const x = i * (barWidth + 2);
        const y = height - barHeight;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barHeight, [2, 2, 0, 0]);
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying]);

  const handleTogglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Audio playback error:", err);
      }
    }
  };

  const handleSelectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    const nextIdx = (currentTrackIndex - 1 + audioTracksData.length) % audioTracksData.length;
    handleSelectTrack(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentTrackIndex + 1) % audioTracksData.length;
    handleSelectTrack(nextIdx);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newPercent = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = newPercent * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    setIsMuted(val === 0);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = duration ? Math.min(100, (currentTime / duration) * 100) : 0;

  return (
    <section id="audio" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Direct HTML5 Audio Element for Bulletproof Native Playback */}
        <audio
          ref={audioRef}
          src={currentTrack.audioSrc}
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={() => {
            if (audioRef.current) {
              setCurrentTime(audioRef.current.currentTime);
              if (!duration && audioRef.current.duration) {
                setDuration(audioRef.current.duration);
              }
            }
          }}
          onLoadedMetadata={() => {
            if (audioRef.current) {
              setDuration(audioRef.current.duration || 0);
            }
          }}
          onEnded={handleNext}
        />

        {/* Section Header */}
        <div className="mb-10 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-5 h-[2px] bg-[#9B1B30]" />
            <span className="text-xs uppercase font-bold tracking-widest text-[#9B1B30]">
              {currentLang === 'zh' ? '声乐选段试听' : 'Soundroom Recordings'}
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0C192E]">
            {t.audio.sectionTitle}
          </h2>
          <p className="text-slate-600 text-xs md:text-sm mt-1 max-w-2xl">
            {t.audio.sectionSubtitle}
          </p>
        </div>

        {/* Main Audio Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Track List */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
              {currentLang === 'zh' ? '实录保留曲目' : 'Live Recorded Excerpts'} ({audioTracksData.length})
            </span>

            {audioTracksData.map((track, idx) => {
              const isSelected = idx === currentTrackIndex;
              return (
                <div
                  key={track.id}
                  onClick={() => handleSelectTrack(idx)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer text-left flex items-center gap-3.5 ${
                    isSelected
                      ? 'bg-[#FAF9F6] border-[#0C192E] shadow-2xs'
                      : 'bg-white border-slate-200/80 hover:bg-slate-50/80'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isSelected && isPlaying
                        ? 'bg-[#9B1B30] text-white animate-pulse'
                        : isSelected
                        ? 'bg-[#0C192E] text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {isSelected && isPlaying ? (
                      <Radio className="w-3.5 h-3.5" />
                    ) : (
                      <Play className="w-3 h-3 ml-0.5" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <h4
                        className={`font-serif text-sm font-bold truncate ${
                          isSelected ? 'text-[#0C192E]' : 'text-slate-800'
                        }`}
                      >
                        {track.title}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-400 shrink-0">
                        {track.role}
                      </span>
                    </div>

                    <p className="text-xs text-[#9B1B30] font-medium truncate mt-0.5">
                      {track.opera} · {track.composer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Ultra-Clean Active Console (No Vocal Interpretation, No Libretto) */}
          <div className="lg:col-span-7 bg-[#FAF9F6] p-6 md:p-8 rounded-2xl border border-slate-200/90 shadow-2xs space-y-5">
            
            {/* Header Track Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#9B1B30] block mb-1">
                  {t.audio.nowPlaying}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0C192E]">
                  "{currentTrack.title}"
                </h3>
                <p className="text-sm font-semibold text-slate-600 mt-1">
                  {currentTrack.opera} — <span className="font-normal text-slate-500">{currentTrack.composer}</span>
                </p>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <span className="inline-block text-xs font-mono font-medium bg-white px-3 py-1.5 rounded-md border border-slate-200 text-slate-700">
                  {currentTrack.role}
                </span>
              </div>
            </div>

            {/* Live Canvas Visualizer */}
            <div className="bg-[#0C192E] p-3.5 rounded-xl shadow-inner">
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-2 px-1">
                <span className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'}`} />
                  {isPlaying ? 'AUDIO: PLAYING' : 'AUDIO: READY'}
                </span>
                <span>SPECTRUM RESONANCE</span>
              </div>
              <canvas
                ref={canvasRef}
                width={560}
                height={65}
                className="w-full h-16 rounded-md"
              />
            </div>

            {/* Timeline Progress Bar (Interactive Seeking) */}
            <div className="space-y-1.5 pt-1">
              <div
                onClick={handleSeek}
                className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden relative cursor-pointer group"
                title="Click to seek"
              >
                <div
                  className="bg-[#9B1B30] h-full transition-all duration-75"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-xs font-mono text-slate-500">
                <span>{formatTime(currentTime)}</span>
                <span>{duration ? formatTime(duration) : 'Live Excerpt'}</span>
              </div>
            </div>

            {/* Player Main Controls Bar */}
            <div className="flex items-center justify-between gap-4 pt-1">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 text-slate-600 hover:text-[#0C192E] hover:bg-slate-200/60 rounded-full transition-colors cursor-pointer"
                  aria-label="Previous Track"
                >
                  <SkipBack className="w-5 h-5" />
                </button>

                <button
                  onClick={handleTogglePlay}
                  className="w-12 h-12 rounded-full bg-[#9B1B30] hover:bg-[#7C1324] text-white flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-white text-white" />
                  ) : (
                    <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                  )}
                </button>

                <button
                  onClick={handleNext}
                  className="p-2.5 text-slate-600 hover:text-[#0C192E] hover:bg-slate-200/60 rounded-full transition-colors cursor-pointer"
                  aria-label="Next Track"
                >
                  <SkipForward className="w-5 h-5" />
                </button>
              </div>

              {/* Volume Slider */}
              <div className="flex items-center gap-2.5">
                <button
                  onClick={toggleMute}
                  className="p-1.5 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                  aria-label="Toggle Mute"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-rose-600" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-20 sm:w-28 accent-[#9B1B30] h-1.5 bg-slate-300 rounded-lg cursor-pointer"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
