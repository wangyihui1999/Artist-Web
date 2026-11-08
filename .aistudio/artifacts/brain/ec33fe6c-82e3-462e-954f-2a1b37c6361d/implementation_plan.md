# Artist Portfolio Refinement for Yihui Wang, Tenor

Refine and elevate the official portfolio website of Chinese Lyric Spinto Tenor Yihui Wang with his high-resolution studio portrait, real MP3 audio recordings, streamlined collapsible repertoire accordions, UK opera press reviews, and an authentic production/rehearsal gallery.

> [!IMPORTANT]
> All user specifications from Turn 5 have been mapped directly to actionable implementations:
> - **Headshot**: High-resolution studio portrait `/assets/aistudio/new_headshot_62d7c1d8.JPG` set as primary hero portrait with crisp classical framing.
> - **Repertoire**: Operatic arias and Art songs/Lieder/duets restructured with clean accordion expanders, default collapsed, removing semantic redundancy.
> - **Audio Engine**: Swapped from harmonic synthesis to authentic HTML5 audio playback of the 5 user-provided MP3 recordings (Lehár, Donizetti, Handel, Britten, Strauss), with live Web Audio frequency spectrum analyzer.
> - **Now Playing Console**: Omitted verbose libretto and text translations, resulting in an uncluttered, modern listening console.
> - **Press & Acclaim**: Replaced mentor quotes with prestigious UK opera reviews (*Opera Today*, *Planet Hugill*, *Seen and Heard International*).
> - **Gallery**: Expanded with all 11 stage, rehearsal, and collaboration photographs with interactive lightbox.

---

### 1. Overview & Core Concept

- **What It Does**: Presents a refined, international-grade portfolio for tenor Yihui Wang, highlighting his vocal identity as a Lyric Spinto tenor (Royal Academy of Music full scholarship, RNCM First Class).
- **Target Audience**: Opera house casting directors, artistic planners, conductors, festival directors, and classical music audiences across the UK, Europe, and China.
- **Languages**: Seamless trilingual support (English default, Deutsch, 中文) across all updated components.

---

### 2. User Experience & Visual Design

- **Color Palette & Discipline (60-30-10)**:
  - 60% Neutral Canvas: Off-white `#FAF9F6` and crisp white `#FFFFFF` providing an editorial, gallery-like background.
  - 30% Structural Surfaces: Deep Navy `#0C192E` for primary typography, borders, and dark player surfaces.
  - 10% Vibrant Accent: Regal Opera Crimson (`#9B1B30` / `#E11D48`) for interactive triggers, active tab highlights, and visualizer peaks.
- **Hero & Portrait Section**:
  - Utilizes the newly uploaded studio portrait (`/assets/aistudio/new_headshot_62d7c1d8.JPG`) in an elegant 3:4 portrait card with subtle edge lighting.
  - High-impact display typography (`Yihui Wang` / `王一辉`) with unboxed metadata: *Lyric Spinto Tenor · Royal Academy of Music Full Scholarship · London*.
- **Repertoire Section Simplification**:
  - Operatic Arias: Clean card header with count indicator and an expand/collapse toggle (`ChevronDown` / `ChevronUp`), default collapsed. When expanded, reveals the comprehensive table of 24 arias categorized by tradition.
  - Art Songs & Duets: Consolidated under a single streamlined section "Art Songs, Lieder & Chamber Duets", default collapsed with accordion toggle to avoid semantic duplication.
- **Audio Soundroom**:
  - Uses native `<audio>` element integrated with Web Audio API `AudioContext` and `AnalyserNode` for real-time waveform visualization while playing authentic MP3 recordings.
  - Streamlined player console: track title, opera, composer, vocal role, audio scrubber with interactive seeking, volume control, and frequency spectrum.
  - Completely omits the verbose libretto and translation text.
- **Critical Press Acclaim Section**:
  - Replaces previous mentor quotes with curated critical reviews for Benjamin Britten's *The Rape of Lucretia* (Royal Academy Opera):
    1. *Opera Today*: "There were also involving performances from Yihui Wang (Male Chorus)... sung with excellent diction. Tarquinius’s hot-headed ride to Rome was sung with tremendous authority, every note of Wang’s bright tenor ringing true."
    2. *Planet Hugill*: "Yihui Wang made an edgy, intense Male Chorus... the vibrancy of Wang's performance made that clear... brought an interesting new perspective on the role."
    3. *Seen and Heard International*: "Yihui Wang’s Male Chorus who emerged as first among a team of fine equals, his diction and musical line quite superlative..."
- **Authentic Production & Rehearsal Gallery**:
  - Categorized gallery containing all 11 uploaded photos:
    1. Stage Productions (*The Rape of Lucretia*, *Mansfield Park*, *Rinaldo*, *Die Fledermaus*)
    2. Rehearsal & Working Process (Rehearsal room 2026, coaching sessions)
    3. Mentors & Collaborators (with Conductor David Parry, Director Paul Carr, Pianist Lada Valešová, Professor Thomas Schulze)
  - Fullscreen lightbox with keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`).

---

### 3. Key Product Decisions & Trade-Offs

- **Audio Playback**:
  - *Chosen Approach*: Direct HTML5 `<audio>` streaming of the 5 local MP3 assets in `/public/assets/aistudio/`, connected to an `AnalyserNode` for dynamic frequency bar animations.
  - *Why*: Delivers 100% authentic vocal performance of Yihui Wang's actual voice, eliminating synthetic emulation.
- **Repertoire Collapsibility**:
  - *Chosen Approach*: Accordion toggles with item count badges and clear "Show / Hide" actions.
  - *Why*: Keeps the page tidy and uncluttered on first load while allowing casting directors to inspect full repertoire depth with one click.
- **Press Acclaim Placement**:
  - *Chosen Approach*: Prominently positioned adjacent to Biography and Audio sections to immediately establish external validation from major British opera critics.

---

### 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                       Yihui Wang SPA                        │
├─────────────────────────────────────────────────────────────┤
│  Navbar (Trilingual toggle: EN / DE / ZH, Quick Links)      │
├──────────────────────────────┬──────────────────────────────┤
│  Hero Section                │  Press & Critical Acclaim    │
│  - New HD Studio Portrait    │  - Opera Today               │
│  - Primary CTAs & Highlights │  - Planet Hugill             │
│                              │  - Seen & Heard Int'l        │
├──────────────────────────────┴──────────────────────────────┤
│  Biography (Narrative, Education, Masterclasses)            │
├─────────────────────────────────────────────────────────────┤
│  Repertoire (Accordion Collapsible Sections)                │
│  - Operatic Roles (Cards)                                   │
│  - Operatic Arias (Collapsible Table, default closed)       │
│  - Art Songs & Duets (Collapsible, default closed)          │
│  - Concert & Oratorio (Highlights)                          │
├─────────────────────────────────────────────────────────────┤
│  Audio Listening Room                                       │
│  - 5 Real Local MP3s                                        │
│  - Web Audio Spectrum Visualizer                            │
│  - Streamlined Console (No Libretto / No Translation)       │
├─────────────────────────────────────────────────────────────┤
│  Performance & Rehearsal Gallery (11 authentic photos)      │
│  - Filter Tabs (All / Stage / Rehearsals / Collaborations)  │
│  - Lightbox viewer with metadata captions                   │
├─────────────────────────────────────────────────────────────┤
│  Contact & Booking Form + Dossier PDF Downloads             │
│  Footer                                                     │
└─────────────────────────────────────────────────────────────┘
```

#### Audio Track Inventory (Real Local MP3s):
1. **Benjamin Britten**: *The Rape of Lucretia* — "Rome is now ruled" (Male Chorus)
   - Path: `/assets/aistudio/Rome_is_now_ruled_The_rape_of_lucretia__male_chorus__69f31282.mp3`
2. **Franz Lehár**: *Das Land des Lächelns* — "Dein ist mein ganzes Herz" (Prince Sou-Chong)
   - Path: `/assets/aistudio/dein_ist_mein_ganzes_hertz__Das_Land_des_L_chelns__a5be0050.mp3`
3. **Gaetano Donizetti**: *Lucia di Lammermoor* — "Fra poco a me ricovero" (Edgardo)
   - Path: `/assets/aistudio/fra_poco_a_me_ricovero_Lucia_di_lammermoor__659ea742.mp3`
4. **Richard Strauss**: *Capriccio* — "Kein andres, das mir so im Herzen loht" (Flamand)
   - Path: `/assets/aistudio/kein_andres__Capriccio__flamand_s_aria__aa34d1d4.mp3`
5. **George Frideric Handel**: *Rinaldo* — "Mio cor, che mi sai dir?" (Goffredo)
   - Path: `/assets/aistudio/Mio_cor__che_mi_sai_dir__Rinaldo__Goffredo_s_aria___90b34122.mp3`

#### Gallery Photo Inventory (11 Uploaded Photos):
1. `Yihui_Wang_in_as_male_chorus__e1d77452.jpg` — As Male Chorus in Britten's *The Rape of Lucretia*
2. `Yihui_Wang_in_Mansfield_Park__3f0205dd.JPG` — As Henry Crawford in Dove's *Mansfield Park*
3. `Yihui_wang_in_mansfield_park2_296362f6.JPG` — Mansfield Park Ensemble Scene
4. `Yihui_Wang_in_Rinaldo_2_4c5e068e.JPG` — As Goffredo in Handel's *Rinaldo* (Stage Costume)
5. `Yihui_Wang_in_Rinaldo_edb4756c.JPG` — *Rinaldo* Production Cast
6. `Yihui_wang_in_die_fledermaus_f5c4454c.JPG` — In *Die Fledermaus* (Table Scene)
7. `Yihui_Wang_in_die_fledermaus2_f72b27ea.JPG` — In *Die Fledermaus* (Balcony Scene)
8. `Yihui_wang_in_rehearsal_room_2026_c69fc7db.JPG` — Rehearsal Room 2026
9. `Yihui_Wang_and_David_Parry...` — With Conductor David Parry & Director Paul Carr
10. `Yihui_Wang_and_Lada_Valesova_fb472969.JPG` — With Pianist & Vocal Coach Lada Valešová
11. `Yihui_Wang_and_Thomas_Schulze_8f264995.JPG` — With Vocal Professor Thomas Schulze
