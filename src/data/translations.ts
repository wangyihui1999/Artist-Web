export type Language = 'en' | 'de' | 'zh';

export interface UpcomingPerformance {
  id: string;
  opera: string;
  operaZh?: string;
  composer: string;
  role: string;
  roleZh?: string;
  roleDe?: string;
  dates: string;
  datesZh: string;
  datesDe: string;
  venue: string;
  venueZh?: string;
  venueDe?: string;
  company: string;
  companyZh?: string;
  companyDe?: string;
  conductor: string;
  orchestra: string;
  status: 'upcoming' | 'rehearsal';
  audioTrackId?: string;
  notes?: {
    en: string;
    de: string;
    zh: string;
  };
}

export interface MajorEngagement {
  id: string;
  opera: string;
  role: string;
  roleZh?: string;
  composer: string;
  year: string;
  company: string;
  venue: string;
  orchestra: string;
  conductor: string;
  category: 'opera' | 'recording' | 'festival';
}

export interface AriaItem {
  title: string;
  operaOrWork: string;
  composer: string;
  tradition: 'belcanto' | 'german' | 'french' | 'slavic' | 'oratorio' | 'verismo';
  actOrCharacter?: string;
}

export interface ArtSongItem {
  composer: string;
  titles: string[];
}

export interface AudioTrack {
  id: string;
  title: string;
  opera: string;
  composer: string;
  role: string;
  audioSrc: string;
  duration: string;
}

export interface PressReview {
  id: string;
  publication: string;
  author?: string;
  opera: string;
  role: string;
  venue: string;
  date: string;
  url: string;
  quoteEn: string;
  quoteDe: string;
  quoteZh: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  title: {
    en: string;
    de: string;
    zh: string;
  };
  caption: {
    en: string;
    de: string;
    zh: string;
  };
  credit?: string;
  category: 'stage' | 'rehearsal' | 'portrait';
  year: string;
  location: string;
}

export const pressReviewsData: PressReview[] = [
  {
    id: "opera-today",
    publication: "Opera Today",
    opera: "The Rape of Lucretia",
    role: "Male Chorus",
    venue: "Royal Academy Opera (RAM)",
    date: "May 2026",
    url: "https://operatoday.com/2026/05/exceptional-student-performances-of-brittens-rape-of-lucretia-from-the-royal-academy-of-music/",
    quoteEn: "There were also involving performances from Yihui Wang (Male Chorus) and Madeleine Perring (Female Chorus), both roles sung with excellent diction. Tarquinius’s hot-headed ride to Rome was sung with tremendous authority, every note of Wang’s bright tenor ringing true.",
    quoteDe: "Hervorzuheben waren die packenden Darbietungen von Yihui Wang (Male Chorus) und Madeleine Perring (Female Chorus), beide Partien mit exzellenter Diktion gesungen. Tarquinius' ungestümer Ritt nach Rom wurde mit gewaltiger Autorität dargeboten, wobei jede Note von Wangs strahlendem Tenor vollkommen überzeugte.",
    quoteZh: "王益辉（饰演男声解说 Male Chorus）与玛德琳·佩灵的表现同样引人入胜，二人的吐字咬字皆无可挑剔。塔克文奔袭罗马的唱段被王益辉演唱得极具震慑力与威严，他那明亮透彻的男高音，每一个音符都掷地有声。"
  },
  {
    id: "seen-and-heard",
    publication: "Seen and Heard International",
    opera: "The Rape of Lucretia",
    role: "Male Chorus",
    venue: "Royal Academy of Music",
    date: "May 2026",
    url: "https://seenandheard-international.com/2026/05/impressive-production-and-performance-of-the-rape-of-lucretia-at-the-royal-academy-of-music/",
    quoteEn: "For me, though, it was Yihui Wang’s Male Chorus who emerged as first among a team of fine equals, his diction and musical line quite superlative, all a means to a properly ambiguous dramatic end.",
    quoteDe: "Für mich ragte jedoch Yihui Wangs Male Chorus aus einem Ensemble gleichrangiger Spitzenkräfte heraus; seine Diktion und seine musikalische Linie waren schlicht herausragend und dienten vollendet dem vielschichtigen dramatischen Schluss.",
    quoteZh: "对我而言，在整支出色的演员团队中，王益辉饰演的男声解说脱颖而出、位居群雄之首。他的咬字清晰度与音乐线条堪称登峰造极，以极高的艺术完成度服务于全剧复杂而深刻的戏剧宿命。"
  },
  {
    id: "planet-hugill",
    publication: "Planet Hugill",
    opera: "The Rape of Lucretia",
    role: "Male Chorus",
    venue: "Royal Academy Opera",
    date: "May 2026",
    url: "https://www.planethugill.com/2026/05/rising-to-challenge-brittens-rape-of.html?m=1",
    quoteEn: "Yihui Wang made an edgy, intense Male Chorus and you were conscious of the way he projected the words allied to the character's lack of distance. Whilst the Male Chorus might say he was a disinterested mirror, this Male Chorus was definitely involved and the vibrancy of Wang's performance made that clear. His is not a classic 'English' lyric tenor (why would it be, he is Chinese), but he brought an interesting new perspective on the role.",
    quoteDe: "Yihui Wang gestaltete einen kantigen, intensiven Male Chorus; man spürte eindringlich, wie er jedes Wort artikulierte. Die Lebendigkeit und Kraft von Wangs Darstellung verlieh der Rolle eine faszinierende neue Tiefe und Frische.",
    quoteZh: "王益辉塑造了一个棱角分明、张力紧绷的男声解说，观众能深切感受到他清晰的吐字投射以及打破角色冷漠疏离感的处理。王益辉充满活力的精湛演绎，为这一经典角色注入了引人入胜的崭新视角。"
  }
];

export const audioTracksData: AudioTrack[] = [
  {
    id: "britten-lucretia",
    title: "Rome is now ruled",
    opera: "The Rape of Lucretia",
    composer: "Benjamin Britten",
    role: "Male Chorus",
    duration: "Live Excerpt",
    audioSrc: "/assets/aistudio/Rome_is_now_ruled_The_rape_of_lucretia__male_chorus__69f31282.mp3"
  },
  {
    id: "lehar-dein-ist-mein-ganzes-herz",
    title: "Dein ist mein ganzes Herz",
    opera: "Das Land des Lächelns",
    composer: "Franz Lehár",
    role: "Prince Sou-Chong",
    duration: "Live Excerpt",
    audioSrc: "/assets/aistudio/dein_ist_mein_ganzes_hertz__Das_Land_des_L_chelns__a5be0050.mp3"
  },
  {
    id: "donizetti-fra-poco",
    title: "Fra poco a me ricovero",
    opera: "Lucia di Lammermoor",
    composer: "Gaetano Donizetti",
    role: "Edgardo",
    duration: "Live Excerpt",
    audioSrc: "/assets/aistudio/fra_poco_a_me_ricovero_Lucia_di_lammermoor__659ea742.mp3"
  },
  {
    id: "strauss-capriccio",
    title: "Kein andres, das mir so im Herzen loht",
    opera: "Capriccio",
    composer: "Richard Strauss",
    role: "Flamand",
    duration: "Live Excerpt",
    audioSrc: "/assets/aistudio/kein_andres__Capriccio__flamand_s_aria__aa34d1d4.mp3"
  },
  {
    id: "handel-rinaldo",
    title: "Mio cor, che mi sai dir?",
    opera: "Rinaldo",
    composer: "George Frideric Handel",
    role: "Goffredo",
    duration: "Live Excerpt",
    audioSrc: "/assets/aistudio/Mio_cor__che_mi_sai_dir__Rinaldo__Goffredo_s_aria___90b34122.mp3"
  }
];

export const majorEngagementsData: MajorEngagement[] = [
  {
    id: "ram-lucretia-2026",
    opera: "The Rape of Lucretia",
    role: "Male Chorus",
    roleZh: "男声解说 (Male Chorus)",
    composer: "Benjamin Britten",
    year: "2026",
    company: "Royal Academy of Music Opera Production",
    venue: "Royal Academy of Music, London",
    orchestra: "Royal Academy Sinfonia",
    conductor: "Lada Valešová",
    category: "opera"
  },
  {
    id: "ram-rinaldo-2026",
    opera: "Rinaldo",
    role: "Goffredo",
    roleZh: "戈弗雷多 (Goffredo)",
    composer: "George Frideric Handel",
    year: "2026",
    company: "Royal Academy of Music Opera Production",
    venue: "Royal Academy of Music, London",
    orchestra: "Royal Academy Sinfonia",
    conductor: "David Bates",
    category: "opera"
  },
  {
    id: "ram-carmen-2025",
    opera: "Carmen",
    role: "Le Remendado",
    roleZh: "雷门达多 (Le Remendado)",
    composer: "Georges Bizet",
    year: "2025",
    company: "Royal Academy of Music Opera Production",
    venue: "Royal Academy of Music, London",
    orchestra: "Royal Academy Sinfonia",
    conductor: "Christopher White",
    category: "opera"
  },
  {
    id: "bergen-romeo-2025",
    opera: "Roméo et Juliette",
    role: "Tenor Soloist / Chorus Project",
    roleZh: "柏辽兹《罗密欧与朱丽叶》唱片录音与演出",
    composer: "Hector Berlioz",
    year: "2025",
    company: "Bergen Philharmonic & Edvard Grieg Kor",
    venue: "Grieg Hall, Bergen, Norway",
    orchestra: "Bergen Philharmonic Orchestra",
    conductor: "Sir Mark Elder",
    category: "recording"
  },
  {
    id: "buxton-ernani-2024",
    opera: "Ernani",
    role: "Chorus, Young Artist",
    roleZh: "青年艺术家 / 歌剧合唱",
    composer: "Giuseppe Verdi",
    year: "2024",
    company: "Buxton International Festival 2024",
    venue: "Buxton Opera House, UK",
    orchestra: "Opera North Orchestra",
    conductor: "Adrian Kelly",
    category: "festival"
  },
  {
    id: "rncm-scala-2024",
    opera: "La scala di seta",
    role: "Dorvil",
    roleZh: "多尔维尔 (Dorvil)",
    composer: "Gioachino Rossini",
    year: "2024",
    company: "Royal Northern College of Music Opera",
    venue: "RNCM Opera Theatre, Manchester",
    orchestra: "RNCM Opera Orchestra",
    conductor: "Wyn Davies",
    category: "opera"
  },
  {
    id: "rncm-snowmaiden-2023",
    opera: "The Snow Maiden",
    role: "Bobil",
    roleZh: "博比尔 (Bobil)",
    composer: "Nikolai Rimsky-Korsakov",
    year: "2023",
    company: "Royal Northern College of Music Opera",
    venue: "RNCM Opera Theatre, Manchester",
    orchestra: "RNCM Opera Orchestra",
    conductor: "Matthew Kofi-Waldren",
    category: "opera"
  },
  {
    id: "halle-apostles-2023",
    opera: "The Apostles",
    role: "Tenor Soloist / Recording",
    roleZh: "埃尔加《使徒》现场演出与唱片录制",
    composer: "Edward Elgar",
    year: "2023",
    company: "The Hallé",
    venue: "Bridgewater Hall, Manchester",
    orchestra: "Hallé Orchestra",
    conductor: "Sir Mark Elder",
    category: "recording"
  },
  {
    id: "rncm-mansfield-2023",
    opera: "Mansfield Park",
    role: "Henry Crawford",
    roleZh: "亨利·克劳福德 (Henry Crawford)",
    composer: "Jonathan Dove",
    year: "2023",
    company: "Royal Northern College of Music Opera",
    venue: "RNCM Opera Theatre, Manchester",
    orchestra: "RNCM Opera Orchestra",
    conductor: "Lee Reynolds",
    category: "opera"
  },
  {
    id: "rncm-fledermaus-2022",
    opera: "Die Fledermaus",
    role: "Alfred",
    roleZh: "阿尔弗雷德 (Alfred) - 歌剧首演",
    composer: "Johann Strauss II",
    year: "2022",
    company: "Royal Northern College of Music Opera",
    venue: "RNCM Opera Theatre, Manchester",
    orchestra: "RNCM Opera Orchestra",
    conductor: "David Parry",
    category: "opera"
  }
];

export const upcomingPerformancesData: UpcomingPerformance[] = [
  {
    id: "capriccio-2026",
    opera: "Capriccio",
    operaZh: "随想曲 (Capriccio)",
    composer: "Richard Strauss",
    role: "Flamand",
    roleZh: "弗拉芒 (Flamand, 作曲家)",
    roleDe: "Flamand (Komponist)",
    dates: "25 & 27 November 2026",
    datesZh: "2026年11月25日 & 27日",
    datesDe: "25. & 27. November 2026",
    venue: "Susie Sainsbury Theatre, Royal Academy of Music, London",
    venueZh: "伦敦英国皇家音乐学院 苏西·塞恩斯伯里剧场",
    venueDe: "Susie Sainsbury Theatre, Royal Academy of Music, London",
    company: "Royal Academy Opera",
    companyZh: "英国皇家音乐学院歌剧团 (Royal Academy Opera)",
    companyDe: "Royal Academy Opera",
    conductor: "Christopher White",
    orchestra: "Royal Academy Sinfonia",
    status: "upcoming",
    audioTrackId: "strauss-capriccio",
    notes: {
      en: "Richard Strauss's final opera exploring the eternal debate: prima la musica e poi le parole? Yihui Wang stars as the passionate composer Flamand.",
      de: "Richard Strauss' Konversationsstück für Musik über den Disput zwischen Wort und Ton. Yihui Wang verkörpert den leidenschaftlichen Komponisten Flamand.",
      zh: "理查·施特劳斯最后一部歌剧杰作，探讨‘音乐还是词句更崇高’的永恒母题。王益辉担纲主演热忱执着的作曲家弗拉芒（Flamand）。"
    }
  },
  {
    id: "figaro-2027",
    opera: "Le nozze di Figaro",
    operaZh: "费加罗的婚礼 (Le nozze di Figaro)",
    composer: "W. A. Mozart",
    role: "Basilio / Don Curzio",
    roleZh: "巴西利奥 / 库尔齐奥 (Basilio / Don Curzio)",
    roleDe: "Basilio / Don Curzio",
    dates: "March 2027",
    datesZh: "2027年3月",
    datesDe: "März 2027",
    venue: "Susie Sainsbury Theatre, Royal Academy of Music, London",
    venueZh: "伦敦英国皇家音乐学院 苏西·塞恩斯伯里剧场",
    venueDe: "Susie Sainsbury Theatre, Royal Academy of Music, London",
    company: "Royal Academy Opera",
    companyZh: "英国皇家音乐学院歌剧团 (Royal Academy Opera)",
    companyDe: "Royal Academy Opera",
    conductor: "Lee Reynolds",
    orchestra: "Royal Academy Sinfonia",
    status: "upcoming",
    notes: {
      en: "Mozart's immortal masterwork presented by Royal Academy Opera, featuring Yihui Wang in the lively comedic character roles of Don Basilio and Don Curzio.",
      de: "Mozarts unsterbliches Meisterwerk an der Royal Academy Opera, mit Yihui Wang in den virtuosen Charakterrollen Don Basilio und Don Curzio.",
      zh: "莫扎特不朽喜歌剧巨作，王益辉将在皇家音乐学院歌剧制作中饰演兼具机敏与诙谐的巴西利奥与库尔齐奥角色。"
    }
  }
];

export const operaticAriasData: AriaItem[] = [
  { title: "Ah, sì, ben mio", operaOrWork: "Il Trovatore", composer: "Giuseppe Verdi", tradition: "verismo", actOrCharacter: "Manrico" },
  { title: "Dies Bildnis ist bezaubernd schön", operaOrWork: "Die Zauberflöte", composer: "W. A. Mozart", tradition: "german", actOrCharacter: "Tamino" },
  { title: "Fra poco a me ricovero", operaOrWork: "Lucia di Lammermoor", composer: "Gaetano Donizetti", tradition: "belcanto", actOrCharacter: "Edgardo" },
  { title: "O, paradiso!", operaOrWork: "L'Africana", composer: "Giacomo Meyerbeer", tradition: "french", actOrCharacter: "Vasco da Gama" },
  { title: "Povero Ernesto", operaOrWork: "Don Pasquale", composer: "Gaetano Donizetti", tradition: "belcanto", actOrCharacter: "Ernesto" },
  { title: "Recondita armonia", operaOrWork: "Tosca", composer: "Giacomo Puccini", tradition: "verismo", actOrCharacter: "Cavaradossi" },
  { title: "Una furtiva lagrima", operaOrWork: "L'elisir d'amore", composer: "Gaetano Donizetti", tradition: "belcanto", actOrCharacter: "Nemorino" },
  { title: "Cielo e mar", operaOrWork: "La Gioconda", composer: "Amilcare Ponchielli", tradition: "verismo", actOrCharacter: "Enzo Grimaldo" },
  { title: "È la solita storia del pastore", operaOrWork: "L'Arlesiana", composer: "Francesco Cilea", tradition: "verismo", actOrCharacter: "Federico" },
  { title: "Kein andres, das mir so im Herzen loht", operaOrWork: "Capriccio", composer: "Richard Strauss", tradition: "german", actOrCharacter: "Flamand" },
  { title: "O muto asil del pianto", operaOrWork: "Guglielmo Tell", composer: "Gioachino Rossini", tradition: "belcanto", actOrCharacter: "Arnold" },
  { title: "Quanto è bella, quanto è cara", operaOrWork: "L'elisir d'amore", composer: "Gaetano Donizetti", tradition: "belcanto", actOrCharacter: "Nemorino" },
  { title: "Un dì all'azzurro spazio", operaOrWork: "Andrea Chénier", composer: "Umberto Giordano", tradition: "verismo", actOrCharacter: "Chénier" },
  { title: "Una Vergine, un angiol di Dio", operaOrWork: "La Favorita", composer: "Gaetano Donizetti", tradition: "belcanto", actOrCharacter: "Fernando" },
  { title: "Mein lieber Schwan", operaOrWork: "Lohengrin", composer: "Richard Wagner", tradition: "german", actOrCharacter: "Lohengrin" },
  { title: "Dein ist mein ganzes Herz", operaOrWork: "Das Land des Lächelns", composer: "Franz Lehár", tradition: "german", actOrCharacter: "Sou-Chong" },
  { title: "Von Apfelblüten einen Kranz", operaOrWork: "Das Land des Lächelns", composer: "Franz Lehár", tradition: "german", actOrCharacter: "Sou-Chong" },
  { title: "Ah! lève-toi, soleil!", operaOrWork: "Roméo et Juliette", composer: "Charles Gounod", tradition: "french", actOrCharacter: "Roméo" },
  { title: "Pourquoi me réveiller", operaOrWork: "Werther", composer: "Jules Massenet", tradition: "french", actOrCharacter: "Werther" },
  { title: "Ah, fuyez, douce image", operaOrWork: "Manon", composer: "Jules Massenet", tradition: "french", actOrCharacter: "Des Grieux" },
  { title: "Salut! demeure chaste et pure", operaOrWork: "Faust", composer: "Charles Gounod", tradition: "french", actOrCharacter: "Faust" },
  { title: "La fleur que tu m'avais jetée", operaOrWork: "Carmen", composer: "Georges Bizet", tradition: "french", actOrCharacter: "Don José" },
  { title: "Kuda, kuda, kuda vi udalilis", operaOrWork: "Eugene Onegin", composer: "Pyotr Ilyich Tchaikovsky", tradition: "slavic", actOrCharacter: "Lensky" },
  { title: "Ye people rend your hearts", operaOrWork: "Elijah", composer: "Felix Mendelssohn", tradition: "oratorio", actOrCharacter: "Obadiah" }
];

export const artSongsData: ArtSongItem[] = [
  { composer: "F. P. Tosti", titles: ["Ideale", "L'alba separa dalla luce l'ombra", "L'ultima canzone", "Malia", "Non t'amo più", "Tristezza"] },
  { composer: "F. Poulenc", titles: ["Les Chemins de l'amour"] },
  { composer: "G. Fauré", titles: ["Chanson d'amour", "Les berceaux"] },
  { composer: "W. A. Mozart", titles: ["Dans un bois, K. 308"] },
  { composer: "F. Schubert", titles: ["Der Erlkönig"] },
  { composer: "R. Schumann", titles: ["Widmung"] },
  { composer: "R. Strauss", titles: ["Zueignung"] },
  { composer: "F. Obradors", titles: ["Del cabello más sutil"] }
];

export const operaticDuetsData = [
  { work: "L'elisir d'amore (Act I)", excerpt: "Una parola, o Adina... Chiedi all'aura lusinghiera", composer: "G. Donizetti" },
  { work: "La Bohème (Act I)", excerpt: "O soave fanciulla", composer: "G. Puccini" },
  { work: "La Bohème (Act IV)", excerpt: "In un coupé?... O Mimì, tu più non torni", composer: "G. Puccini" },
  { work: "La traviata (Act I)", excerpt: "Un dì, felice, eterea", composer: "G. Verdi" },
  { work: "La traviata (Act III)", excerpt: "Parigi, o cara", composer: "G. Verdi" },
  { work: "Rigoletto (Act I)", excerpt: "È il sol dell'anima", composer: "G. Verdi" },
  { work: "Lucia di Lammermoor (Act I)", excerpt: "Verranno a te sull'aure", composer: "G. Donizetti" },
  { work: "Don Pasquale (Finale)", excerpt: "Tornami a dir che m'ami", composer: "G. Donizetti" },
  { work: "Die lustige Witwe", excerpt: "No. 11 Duet and Romanza", composer: "F. Lehár" }
];

export const galleryPhotosData: GalleryPhoto[] = [
  {
    id: "studio-vintage-portrait",
    src: "/assets/aistudio/IMG_0095_cd4421db.JPG",
    title: {
      en: "Studio Portrait (Large Format)",
      de: "Künstlerporträt (Großformat)",
      zh: "标准艺术家肖像（经典银盐黑白）"
    },
    caption: {
      en: "Studio portrait in formal waistcoat and tie, London.",
      de: "Studioaufnahme in Weste und Krawatte, London.",
      zh: "经典大画幅黑白肖像写真（伦敦）。"
    },
    credit: "Max Han",
    category: "portrait",
    year: "2026",
    location: "London, UK"
  },
  {
    id: "studio-headshot",
    src: "/assets/aistudio/new_headshot_62d7c1d8.JPG",
    title: {
      en: "Official Studio Portrait",
      de: "Offizielles Porträt",
      zh: "官方艺术家肖像（彩色）"
    },
    caption: {
      en: "Official high-definition studio portrait, London.",
      de: "Offizielles Studio-Künstlerporträt, London.",
      zh: "官方高清艺术家工作室定妆肖像（伦敦）。"
    },
    credit: "Max Han",
    category: "portrait",
    year: "2026",
    location: "London, UK"
  },
  {
    id: "lucretia-male-chorus",
    src: "/assets/aistudio/Yihui_Wang_in_as_male_chorus__e1d77452.jpg",
    title: {
      en: "The Rape of Lucretia (Male Chorus)",
      de: "The Rape of Lucretia (Male Chorus)",
      zh: "《卢克蕾齐娅的受辱》（男声解说）"
    },
    caption: {
      en: "Royal Academy Opera production of Benjamin Britten's masterpiece.",
      de: "Produktion der Royal Academy Opera von Benjamin Brittens Meisterwerk.",
      zh: "英国皇家音乐学院歌剧制作，饰演核心男高音解说角色。"
    },
    category: "stage",
    year: "2026",
    location: "Royal Academy of Music, London"
  },
  {
    id: "mansfield-park-crawford",
    src: "/assets/aistudio/Yihui_Wang_in_Mansfield_Park__3f0205dd.JPG",
    title: {
      en: "Mansfield Park (Henry Crawford)",
      de: "Mansfield Park (Henry Crawford)",
      zh: "《曼斯菲尔德庄园》（亨利·克劳福德）"
    },
    caption: {
      en: "Jonathan Dove's opera staged at the RNCM Opera Theatre.",
      de: "Jonathan Doves Oper im RNCM Opera Theatre.",
      zh: "乔纳森·多夫当代歌剧，于RNCM歌剧院舞台饰演男主角克劳福德。"
    },
    category: "stage",
    year: "2023",
    location: "RNCM Opera Theatre, Manchester"
  },
  {
    id: "mansfield-park-ensemble",
    src: "/assets/aistudio/Yihui_wang_in_mansfield_park2_296362f6.JPG",
    title: {
      en: "Mansfield Park (Ensemble)",
      de: "Mansfield Park (Ensemble)",
      zh: "《曼斯菲尔德庄园》（重唱场景）"
    },
    caption: {
      en: "Quartet ensemble scene from Dove's contemporary opera.",
      de: "Ensembleszene aus Jonathan Doves Oper.",
      zh: "现代英国歌剧多重唱舞台现场。"
    },
    category: "stage",
    year: "2023",
    location: "RNCM Opera Theatre"
  },
  {
    id: "rinaldo-goffredo-stage",
    src: "/assets/aistudio/Yihui_Wang_in_Rinaldo_2_4c5e068e.JPG",
    title: {
      en: "Rinaldo (Goffredo)",
      de: "Rinaldo (Goffredo)",
      zh: "《里纳尔多》（戈弗雷多）"
    },
    caption: {
      en: "Handel's Baroque opera in period staging at RAM Opera.",
      de: "Händels Barockoper an der Royal Academy Opera.",
      zh: "英国皇家音乐学院歌剧院古典巴洛克实景制作舞台照。"
    },
    category: "stage",
    year: "2026",
    location: "RAM Opera, London"
  },
  {
    id: "rinaldo-cast",
    src: "/assets/aistudio/Yihui_Wang_in_Rinaldo_edb4756c.JPG",
    title: {
      en: "Rinaldo (Cast & Company)",
      de: "Rinaldo (Ensemble)",
      zh: "《里纳尔多》（剧组成员合影）"
    },
    caption: {
      en: "Cast of Handel's Rinaldo at the Royal Academy of Music.",
      de: "Ensemble von Händels Rinaldo an der Royal Academy of Music.",
      zh: "亨德尔歌剧《里纳尔多》全体演员剧场合影。"
    },
    category: "stage",
    year: "2026",
    location: "London, UK"
  },
  {
    id: "fledermaus-table",
    src: "/assets/aistudio/Yihui_wang_in_die_fledermaus_f5c4454c.JPG",
    title: {
      en: "Die Fledermaus (Alfred)",
      de: "Die Fledermaus (Alfred)",
      zh: "《蝙蝠》（阿尔弗雷德）"
    },
    caption: {
      en: "Operatic debut production conducted by David Parry.",
      de: "Operndebüt unter der Leitung von Maestro David Parry.",
      zh: "大卫·帕里执棒的轻歌剧舞台正式首演剧照。"
    },
    category: "stage",
    year: "2022",
    location: "RNCM Opera Theatre"
  },
  {
    id: "fledermaus-balcony",
    src: "/assets/aistudio/Yihui_Wang_in_die_fledermaus2_f72b27ea.JPG",
    title: {
      en: "Die Fledermaus (Act I Duo)",
      de: "Die Fledermaus (1. Akt Duett)",
      zh: "《蝙蝠》（第一幕重唱场景）"
    },
    caption: {
      en: "Act I duo scene in Johann Strauss's operetta.",
      de: "Duettszene im 1. Akt von Johann Strauss' Operette.",
      zh: "约翰·施特劳斯轻歌剧首演二重唱片段。"
    },
    category: "stage",
    year: "2022",
    location: "RNCM Opera Theatre"
  },
  {
    id: "rehearsal-room",
    src: "/assets/aistudio/Yihui_wang_in_rehearsal_room_2026_c69fc7db.JPG",
    title: {
      en: "Rehearsal Studio",
      de: "Probenraum",
      zh: "排练厅排演瞬间"
    },
    caption: {
      en: "Preparation in the conservatory rehearsal room, 2026 season.",
      de: "Vorbereitung im Probenraum, Spielzeit 2026.",
      zh: "2026演出季歌剧排练厅排练实景。"
    },
    category: "rehearsal",
    year: "2026",
    location: "London, UK"
  },
  {
    id: "collab-parry-carr",
    src: "/assets/aistudio/Yihui_Wang_and_Paul_Carr_left__and_David_Parry__Right__fb17dc47.JPG",
    title: {
      en: "With David Parry & Paul Carr",
      de: "Mit David Parry & Paul Carr",
      zh: "与指挥家大卫·帕里及导演保罗·卡尔"
    },
    caption: {
      en: "With conductor David Parry (right) and stage director Paul Carr (left).",
      de: "Mit Dirigent David Parry (rechts) und Regisseur Paul Carr (links).",
      zh: "演出后与传奇指挥家大卫·帕里（右）及歌剧导演保罗·卡尔（左）合影。"
    },
    category: "rehearsal",
    year: "2023",
    location: "RNCM, Manchester"
  },
  {
    id: "collab-lada-valesova",
    src: "/assets/aistudio/Yihui_Wang_and_Lada_Valesova_fb472969.JPG",
    title: {
      en: "With Lada Valešová",
      de: "Mit Lada Valešová",
      zh: "与声乐艺术指导拉达·瓦莱索娃"
    },
    caption: {
      en: "With acclaimed vocal coach and collaborative pianist Lada Valešová.",
      de: "Mit Pianistin und Gesangscoach Lada Valešová.",
      zh: "与英国著名钢琴家、声乐指导拉达·瓦莱索娃在排练厅合影。"
    },
    category: "rehearsal",
    year: "2025",
    location: "London, UK"
  },
  {
    id: "collab-thomas-schulze",
    src: "/assets/aistudio/Yihui_Wang_and_Thomas_Schulze_8f264995.JPG",
    title: {
      en: "With Thomas Schulze",
      de: "Mit Thomas Schulze",
      zh: "与声乐导师托马斯·舒尔策"
    },
    caption: {
      en: "With vocal tutor Thomas Schulze after concert performance.",
      de: "Mit Gesangspädagoge Thomas Schulze nach dem Konzert.",
      zh: "演出后与声乐导师托马斯·舒尔策合影。"
    },
    category: "rehearsal",
    year: "2024",
    location: "Manchester, UK"
  }
];

export const dictionary = {
  en: {
    nav: {
      home: "Home",
      schedule: "Schedule",
      biography: "Biography",
      repertoire: "Repertoire",
      audio: "Audio",
      gallery: "Gallery",
      contact: "Contact",
      downloadCv: "Download CV"
    },
    performances: {
      sectionTitle: "Performances & Schedule",
      sectionSubtitle: "Upcoming operatic appearances at the Royal Academy of Music and consolidated production history.",
      upcomingTitle: "Upcoming Performances",
      upcomingBadge: "2026 / 2027 Season",
      pastTitle: "Past Productions & Historical Archive",
      allFilter: "All Engagements",
      operaFilter: "Opera Productions",
      recordingsFilter: "Recordings & Concerts",
      festivalsFilter: "International Festivals",
      searchPlaceholder: "Search by opera, role, conductor, or orchestra...",
      roleLabel: "Role",
      conductorLabel: "Conductor",
      orchestraLabel: "Orchestra",
      venueLabel: "Venue",
      datesLabel: "Dates",
      listenAriaButton: "Listen to Flamand's Aria",
      inquireTickets: "Inquiries & Tickets",
      totalEngagements: "Major Engagements Documented"
    },
    hero: {
      roleBadge: "Lyric Tenor",
      headline: "Yihui Wang",
      tagline: "Bridging the Italian Bel Canto tradition, late-romantic German masterpieces, and contemporary English opera with nuanced musicality and dramatic clarity.",
      scholarship: "The Robert W Hendra Award",
      institution: "Royal Academy of Music, London",
      mentor: "Mentored by David Parry",
      tutor: "Under tutelage of Catherine Wyn-Rogers",
      ctaListen: "Listen to Excerpts",
      ctaRepertoire: "View Repertoire",
      ctaContact: "Get in Touch",
      stats: {
        productions: "8+ Operatic Productions",
        roles: "Bel Canto to German Romantic",
        pedigree: "The Robert W Hendra Award",
        recordings: "Bergen Philharmonic & Hallé"
      }
    },
    press: {
      sectionTitle: "Critical Acclaim",
      sectionSubtitle: "Reviews from UK opera critics for Royal Academy Opera's production of Britten's The Rape of Lucretia.",
      readFullReview: "Read Full Review"
    },
    biography: {
      sectionTitle: "Biography",
      leadParagraph: "Based in London, Chinese tenor Yihui Wang possesses a highly versatile repertoire that spans the Italian Bel Canto tradition, late-romantic German works, and contemporary English opera. Supported by the Robert W Hendra Award from the Robert W Hendra Charitable Trust, he is currently completing his Advanced Opera Diploma at the Royal Academy of Music (RAM) under the tutelage of Catherine Wyn-Rogers.",
      secondParagraph: "Prior to this, he received extensive training at the Royal Northern College of Music (RNCM), where he completed his Bachelor of Music with First Class Honours, followed by his Master of Music and Postgraduate Diploma in Musical Performance. To date, Wang has performed in over eight operatic productions. His stage experience reflects a remarkable vocal flexibility, navigating Bel Canto roles such as Dorvil in Rossini's La scala di seta, contemporary works like Henry Crawford in Jonathan Dove's Mansfield Park, and French repertoire including Le Remendado in Bizet's Carmen.",
      debutHighlight: "Wang made his operatic debut in 2022 as Alfred in Johann Strauss's Die Fledermaus at the RNCM, conducted by the renowned David Parry. Recognizing Wang's vocal potential during this debut, Parry subsequently became his mentor, guiding his development in late-romantic German works and classic Italian repertoire.",
      concertParagraph: "Equally at home on the concert platform, Wang maintains a highly active schedule. Engagements include performances at the Buxton International Festival, an international recording project of Berlioz's Roméo et Juliette with the Bergen Philharmonic under Sir Mark Elder in Norway, and Elgar's The Apostles with the Hallé Orchestra at Bridgewater Hall in Manchester.",
      artisticCreed: "Whether interpreting complex operatic roles or intimate concert repertoire, Wang is dedicated to the precise synthesis of text articulation and honest emotional delivery.",
      educationTitle: "Educational Background",
      tutorsTitle: "Vocal Tutors & Mentorship",
      scholarshipsTitle: "Scholarships & Awards",
      masterclassesTitle: "Masterclasses & Conferences",
      downloadBioPdf: "Download Official Biography (PDF)",
      downloadCvPdf: "Download Curriculum Vitae (PDF)"
    },
    repertoire: {
      sectionTitle: "Repertoire & Works",
      sectionSubtitle: "Spanning Italian Bel Canto, Late-Romantic German drama, French Lyricism, and Contemporary British Opera.",
      filterAll: "All Categories",
      filterRoles: "Major Operatic & Recording Engagements",
      filterArias: "Operatic Arias",
      filterSongs: "Art Songs, Lieder & Duets",
      searchPlaceholder: "Search by aria, role, opera, or composer...",
      traditionAll: "All Traditions",
      traditionBelcanto: "Italian Bel Canto & Verismo",
      traditionGerman: "German Romantic & Lieder",
      traditionFrench: "French Lyric Opera",
      traditionContemporary: "Contemporary British",
      tableHeaderRole: "Role / Excerpt",
      tableHeaderOpera: "Opera / Work",
      tableHeaderComposer: "Composer",
      tableHeaderCompany: "Company / Venue",
      tableHeaderYear: "Year",
      expandArias: "Expand Operatic Arias",
      collapseArias: "Collapse Operatic Arias",
      expandSongs: "Expand Art Songs & Duets",
      collapseSongs: "Collapse Art Songs & Duets",
      downloadRepertoirePdf: "Download Full Repertoire List (PDF)"
    },
    audio: {
      sectionTitle: "Audio Listening Room",
      sectionSubtitle: "Listen to real live performance recordings by Yihui Wang across core repertoire.",
      nowPlaying: "Now Playing",
      playAria: "Play Aria",
      pauseAria: "Pause",
      nextTrack: "Next Aria",
      prevTrack: "Previous Aria",
      liveRecordingNote: "Live audio recordings performed by Yihui Wang. Direct browser audio playback."
    },
    gallery: {
      sectionTitle: "Photo Gallery",
      sectionSubtitle: "A curated visual selection of stage productions, rehearsals, and portraits.",
      filterAll: "All",
      filterStage: "Stage Productions",
      filterRehearsal: "Rehearsals & Process",
      filterPortrait: "Portraits",
      clickToEnlarge: "Click to open view",
      lightboxClose: "Close (Esc)",
      prevImage: "Previous",
      nextImage: "Next"
    },
    contact: {
      sectionTitle: "Contact & Booking",
      sectionSubtitle: "For opera casting, concert bookings, recital invitations, or representation inquiries.",
      directEmail: "Direct Email",
      telephone: "Telephone",
      location: "Location",
      locationValue: "London, United Kingdom",
      materialsTitle: "Official Artist Materials",
      materialsDesc: "Download verified press, casting, and biographical dossiers in PDF format:",
      formTitle: "Send an Inquiry",
      formSubtitle: "Complete the form below to get in direct touch with Yihui Wang.",
      labelName: "Your Full Name",
      labelEmail: "Your Email Address",
      labelOrg: "Company / Opera House / Orchestra",
      labelSubject: "Inquiry Type",
      labelMessage: "Message / Engagement Details",
      subjectOptions: {
        casting: "Operatic Casting / Role Offer",
        concert: "Concert / Oratorio Engagement",
        recital: "Recital / Festival Invitation",
        audition: "Audition Request",
        other: "General Representation & Inquiry"
      },
      submitButton: "Send Inquiry",
      sending: "Transmitting message...",
      successTitle: "Inquiry Sent Successfully",
      successDesc: "Thank you for reaching out. Your message has been recorded and Yihui Wang will reply promptly via your email address."
    },
    footer: {
      copyright: "All rights reserved. London, United Kingdom.",
      disclaimer: "Lyric Tenor · Supported by the Robert W Hendra Award (Royal Academy of Music)"
    }
  },
  de: {
    nav: {
      home: "Startseite",
      schedule: "Spielplan",
      biography: "Biografie",
      repertoire: "Repertoire",
      audio: "Hörproben",
      gallery: "Galerie",
      contact: "Kontakt",
      downloadCv: "Lebenslauf (PDF)"
    },
    performances: {
      sectionTitle: "Aufführungen & Spielplan",
      sectionSubtitle: "Bevorstehende Opernengagements an der Royal Academy of Music und chronologisches Produktionsarchiv.",
      upcomingTitle: "Bevorstehende Vorstellungen",
      upcomingBadge: "Spielzeit 2026 / 2027",
      pastTitle: "Vergangene Produktionen & Engagements",
      allFilter: "Alle Produktionen",
      operaFilter: "Opernbühne",
      recordingsFilter: "Aufnahmen & Konzerte",
      festivalsFilter: "Festspiele",
      searchPlaceholder: "Nach Oper, Rolle, Dirigent oder Orchester suchen...",
      roleLabel: "Partie",
      conductorLabel: "Musikalische Leitung",
      orchestraLabel: "Orchester",
      venueLabel: "Spielstätte",
      datesLabel: "Aufführungstermine",
      listenAriaButton: "Flamands Arie anhören",
      inquireTickets: "Karten & Anfrage",
      totalEngagements: "Dokumentierte Produktionen"
    },
    hero: {
      roleBadge: "Lyrischer Tenor",
      headline: "Yihui Wang",
      tagline: "Verbindung der italienischen Belcanto-Tradition, spätromantischer deutscher Meisterwerke und zeitgenössischer englischer Oper mit feinsinniger Musikalität und dramatischer Klarheit.",
      scholarship: "The Robert W Hendra Award",
      institution: "Royal Academy of Music, London",
      mentor: "Mentorschaft: David Parry",
      tutor: "Unterrichtet von Catherine Wyn-Rogers",
      ctaListen: "Hörproben anhören",
      ctaRepertoire: "Repertoire ansehen",
      ctaContact: "Kontakt aufnehmen",
      stats: {
        productions: "8+ Opernproduktionen",
        roles: "Belcanto bis deutsche Spätromantik",
        pedigree: "The Robert W Hendra Award",
        recordings: "Bergen Philharmonic & Hallé"
      }
    },
    press: {
      sectionTitle: "Presse & Kritiken",
      sectionSubtitle: "Kritikerstimmen zur Produktion von Brittens The Rape of Lucretia an der Royal Academy Opera.",
      readFullReview: "Vollständige Kritik lesen"
    },
    biography: {
      sectionTitle: "Biografie",
      leadParagraph: "Der in London lebende chinesische Tenor Yihui Wang verfügt über ein vielseitiges Repertoire, das von der italienischen Belcanto-Tradition über spätromantische deutsche Werke bis hin zur zeitgenössischen englischen Oper reicht. Gefördert durch den Robert W Hendra Award des Robert W Hendra Charitable Trust absolviert er derzeit sein Advanced Opera Diploma an der Royal Academy of Music (RAM) in London bei Catherine Wyn-Rogers.",
      secondParagraph: "Zuvor schloss er sein Bachelor-Studium mit First Class Honours sowie Master of Music und Postgraduate Diploma am Royal Northern College of Music (RNCM) ab. Bislang wirkte Wang in über acht Opernproduktionen mit.",
      debutHighlight: "Sein Operndebüt gab Wang 2022 als Alfred in Johann Strauss' Die Fledermaus am RNCM unter Dirigent David Parry. Parry übernahm in der Folge seine künstlerische Mentorschaft.",
      concertParagraph: "Ebenso souverän auf dem Konzertpodium, pflegt Wang eine rege Auftrittstätigkeit, unter anderem beim Buxton International Festival, bei CD-Aufnahmeprojekten mit den Bergen Philharmonikern unter Sir Mark Elder sowie dem Hallé-Orchester.",
      artisticCreed: "Ob in komplexen Opernrollen oder im intimen Rahmen des Liedgesangs: Wang widmet sich der präzisen Verschmelzung von Textartikulation und authentischem Ausdruck.",
      educationTitle: "Ausbildung",
      tutorsTitle: "Gesangspädagogen & Mentoren",
      scholarshipsTitle: "Stipendien & Auszeichnungen",
      masterclassesTitle: "Meisterkurse & Tagungen",
      downloadBioPdf: "Biografie herunterladen (PDF)",
      downloadCvPdf: "Lebenslauf herunterladen (PDF)"
    },
    repertoire: {
      sectionTitle: "Repertoire & Werke",
      sectionSubtitle: "Italienischer Belcanto, deutsche Spätromantik, französischer Schmelz und zeitgenössische Oper.",
      filterAll: "Alle Kategorien",
      filterRoles: "Wichtige Opernproduktionen & Aufnahmen",
      filterArias: "Opernarien",
      filterSongs: "Kunstlieder & Duette",
      searchPlaceholder: "Nach Arie, Rolle, Oper oder Komponist suchen...",
      traditionAll: "Alle Traditionen",
      traditionBelcanto: "Italienischer Belcanto & Verismo",
      traditionGerman: "Deutsche Romantik & Lieder",
      traditionFrench: "Französische Oper",
      traditionContemporary: "Zeitgenössisch",
      tableHeaderRole: "Partie / Auszug",
      tableHeaderOpera: "Oper / Werk",
      tableHeaderComposer: "Komponist",
      tableHeaderCompany: "Ensemble / Spielort",
      tableHeaderYear: "Jahr",
      expandArias: "Opernarien aufklappen",
      collapseArias: "Opernarien einklappen",
      expandSongs: "Lieder & Duette aufklappen",
      collapseSongs: "Lieder & Duette einklappen",
      downloadRepertoirePdf: "Vollständige Repertoireliste (PDF)"
    },
    audio: {
      sectionTitle: "Hörproben & Klangraum",
      sectionSubtitle: "Authentische Live-Aufnahmen von Yihui Wang aus seinem Kernrepertoire.",
      nowPlaying: "Aktuelle Aufnahme",
      playAria: "Arie abspielen",
      pauseAria: "Pause",
      nextTrack: "Nächste Arie",
      prevTrack: "Vorherige Arie",
      liveRecordingNote: "Live-Aufnahmen gesungen von Yihui Wang. Direkte Audiowiedergabe."
    },
    gallery: {
      sectionTitle: "Fotogalerie",
      sectionSubtitle: "Ausgewählte Eindrücke von der Opernbühne, Probenräumen und Porträts.",
      filterAll: "Alle",
      filterStage: "Bühnenproduktionen",
      filterRehearsal: "Proben & Arbeitsalltag",
      filterPortrait: "Porträts",
      clickToEnlarge: "Klicken für Großansicht",
      lightboxClose: "Schließen (Esc)",
      prevImage: "Vorheriges",
      nextImage: "Nächstes"
    },
    contact: {
      sectionTitle: "Kontakt & Engagement",
      sectionSubtitle: "Für Opernbesetzungen, Oratorienkonzerte, Liederabende oder Agenturanfragen.",
      directEmail: "Direkte E-Mail",
      telephone: "Telefon",
      location: "Wohnort",
      locationValue: "London, Vereinigtes Königreich",
      materialsTitle: "Offizielle Künstlerunterlagen",
      materialsDesc: "Laden Sie die verifizierten Bewerbungs- und Repertoire-Dossiers im PDF-Format herunter:",
      formTitle: "Anfrage senden",
      formSubtitle: "Nutzen Sie das untenstehende Formular für direkte Anfragen an Yihui Wang.",
      labelName: "Ihr Name",
      labelEmail: "E-Mail-Adresse",
      labelOrg: "Opernhaus / Orchester / Agentur",
      labelSubject: "Anfragetyp",
      labelMessage: "Nachricht & Details",
      subjectOptions: {
        casting: "Opernbesetzung / Rollenangebot",
        concert: "Konzert / Oratorium",
        recital: "Liederabend / Festival",
        audition: "Vorsingen",
        other: "Allgemeine Vertretung"
      },
      submitButton: "Anfrage senden",
      sending: "Wird gesendet...",
      successTitle: "Erfolgreich übermittelt",
      successDesc: "Vielen Dank für Ihre Nachricht. Yihui Wang wird sich in Kürze mit Ihnen in Verbindung setzen."
    },
    footer: {
      copyright: "Alle Rechte vorbehalten. London, Vereinigtes Königreich.",
      disclaimer: "Lyrischer Tenor · Gefördert durch The Robert W Hendra Award (Royal Academy of Music)"
    }
  },
  zh: {
    nav: {
      home: "首页",
      schedule: "演出日程",
      biography: "个人简介",
      repertoire: "演艺作品",
      audio: "音频试听",
      gallery: "照片展示",
      contact: "演出联络",
      downloadCv: "下载简历 (PDF)"
    },
    performances: {
      sectionTitle: "演出日程与制作履历",
      sectionSubtitle: "近期在英国皇家音乐学院歌剧制作的重要演出日程，以及历年主要歌剧制作、交响录音与艺术节精选履历汇总。",
      upcomingTitle: "近期演出 (Upcoming Performances)",
      upcomingBadge: "2026 / 2027 演出季",
      pastTitle: "历年重大制作与交响演出汇总",
      allFilter: "全部履历",
      operaFilter: "歌剧舞台制作",
      recordingsFilter: "唱片录音与交响乐",
      festivalsFilter: "国际艺术节",
      searchPlaceholder: "按歌剧、角色、指挥家或乐团即时检索...",
      roleLabel: "饰演角色",
      conductorLabel: "执棒指挥",
      orchestraLabel: "协作乐团",
      venueLabel: "演出剧场",
      datesLabel: "演出时间",
      listenAriaButton: "试听弗拉芒对应咏叹调",
      inquireTickets: "演出票务与咨询",
      totalEngagements: "项重大演出与唱片记录"
    },
    hero: {
      roleBadge: "抒情男高音 (Lyric Tenor)",
      headline: "王益辉",
      tagline: "深耕意大利美声学派传统、晚期德奥浪漫主义巨作与当代英国歌剧，以精准的文学语感与纯正通透的抒情线条演绎经典。",
      scholarship: "The Robert W Hendra Award",
      institution: "英国皇家音乐学院 (RAM, London)",
      mentor: "世界级指挥大师大卫·帕里 (David Parry) 悉心指导",
      tutor: "师从著名歌唱家凯瑟琳·温-罗杰斯 (Catherine Wyn-Rogers)",
      ctaListen: "试听现场录音",
      ctaRepertoire: "浏览曲目全景",
      ctaContact: "演出业务洽谈",
      stats: {
        productions: "8+ 部正式歌剧制作",
        roles: "横跨美声至德奥浪漫主义",
        pedigree: "The Robert W Hendra Award 全奖",
        recordings: "卑尔根爱乐 & 哈雷乐团录音"
      }
    },
    press: {
      sectionTitle: "业界声誉与剧评摘录",
      sectionSubtitle: "英国权威歌剧评论媒体对王益辉在英国皇家音乐学院歌剧制作《卢克蕾齐娅的受辱》中饰演核心男高音解说角色的高度评价。",
      readFullReview: "阅读原刊乐评"
    },
    biography: {
      sectionTitle: "个人简介",
      leadParagraph: "现居英国伦敦的中国男高音王益辉，演唱曲目广泛而深厚，涵盖意大利美声传统（Bel Canto）、晚期德奥浪漫主义作品以及英国当代歌剧。在 Robert W Hendra 慈善基金会颁发的 The Robert W Hendra Award 全额奖学金支持下，他目前正在英国皇家音乐学院（Royal Academy of Music, RAM）攻读高级歌剧研修文凭（Advanced Opera Diploma），师从著名歌唱家凯瑟琳·温-罗杰斯（Catherine Wyn-Rogers）。",
      secondParagraph: "此前，王益辉在英国皇家北方音乐学院（RNCM）先后以一等荣誉学士（First Class Honours）、音乐硕士（MMus）及表演研究生文凭（PGDip）优异成绩毕业。迄今为止，王益辉已在十部以上的重要歌剧制作与交响录音项目中担纲主演及重要独唱。",
      debutHighlight: "2022年，王益辉在约翰·施特劳斯轻歌剧《蝙蝠》中饰演阿尔弗雷德（Alfred），完成了他在英国歌剧舞台的正式首演。该制作由享誉国际的指挥大师大卫·帕里（David Parry）执棒。帕里大师敏锐发掘了王益辉卓越的声音潜质，并自此担任其声乐艺术导师。",
      concertParagraph: "在音乐会与交响乐平台，王益辉同样保持着高度活跃的国际演出节奏。重要演出包括：英国巴克斯顿国际艺术节《埃尔纳尼》、在挪威卑尔根爱乐乐团与马克·埃尔德爵士（Sir Mark Elder）执棒下录制柏辽兹《罗密欧与朱丽叶》唱片工程，以及与哈雷乐团（The Hallé）合作录制埃尔加《使徒》。",
      artisticCreed: "无论诠释宏大歌剧角色，还是精雕细琢的室内乐艺术歌曲，王益辉始终致力于语言发音的纯正典雅与真挚动人的情感表达。",
      educationTitle: "专业教育背景",
      tutorsTitle: "声乐恩师与艺术导师",
      scholarshipsTitle: "奖学金与荣誉",
      masterclassesTitle: "大师班与学术经历",
      downloadBioPdf: "下载官方传记文件 (PDF)",
      downloadCvPdf: "下载完整履历档案 (PDF)"
    },
    repertoire: {
      sectionTitle: "演出曲目全景",
      sectionSubtitle: "完整收录重大歌剧制作履历、经典歌剧咏叹调、艺术歌曲及重唱作品。",
      filterAll: "全览曲目",
      filterRoles: "重大歌剧制作与交响记录",
      filterArias: "经典歌剧咏叹调",
      filterSongs: "艺术歌曲与重唱",
      searchPlaceholder: "按剧名、角色、指挥或作曲家即时搜索...",
      traditionAll: "全部学派与流派",
      traditionBelcanto: "意大利美声 (Bel Canto) 与真实主义",
      traditionGerman: "德奥浪漫主义与艺术歌曲",
      traditionFrench: "法派抒情歌剧",
      traditionContemporary: "英国现当代歌剧",
      tableHeaderRole: "饰演角色 / 选段",
      tableHeaderOpera: "剧名 / 经典作品",
      tableHeaderComposer: "作曲家",
      tableHeaderCompany: "制作机构 / 剧场",
      tableHeaderYear: "演出年份",
      expandArias: "展开完整经典咏叹调清单",
      collapseArias: "折叠咏叹调清单",
      expandSongs: "展开艺术歌曲与重唱清单",
      collapseSongs: "折叠艺术歌曲与重唱清单",
      downloadRepertoirePdf: "下载完整曲目清单 (PDF)"
    },
    audio: {
      sectionTitle: "声乐音频试听",
      sectionSubtitle: "在线聆听王益辉真实剧目现场演唱录音，涵盖布里顿、雷哈尔、多尼采蒂、理查·施特劳斯与亨德尔经典选段。",
      nowPlaying: "当前试听曲目",
      playAria: "播放选段",
      pauseAria: "暂停播放",
      nextTrack: "下一首",
      prevTrack: "上一首",
      liveRecordingNote: "由王益辉演唱的真实剧目原声录音。原生浏览器高保真播放。"
    },
    gallery: {
      sectionTitle: "照片展示",
      sectionSubtitle: "精选歌剧舞台实景、排练厅日常与同行导师合作瞬间。",
      filterAll: "全部展示",
      filterStage: "舞台制作剧照",
      filterRehearsal: "排练与幕后",
      filterPortrait: "艺术肖像",
      clickToEnlarge: "点击查看原图",
      lightboxClose: "关闭画廊 (Esc)",
      prevImage: "上一张",
      nextImage: "下一张"
    },
    contact: {
      sectionTitle: "演出邀约与联络",
      sectionSubtitle: "欢迎歌剧院选角、音乐季交响演出、独唱音乐会邀请或专业艺术经纪垂询。",
      directEmail: "官方电子邮箱",
      telephone: "联系电话",
      location: "常驻地点",
      locationValue: "英国 伦敦 (London, UK)",
      materialsTitle: "官方艺术资料下载",
      materialsDesc: "可直接查阅与下载官方正式 PDF 档案：",
      formTitle: "发送演出意向留言",
      formSubtitle: "填写下方表格，信息将直接传送至王益辉本人。",
      labelName: "您的姓名",
      labelEmail: "电子邮箱",
      labelOrg: "所属歌剧院 / 乐团 / 机构",
      labelSubject: "事由类别",
      labelMessage: "演出详情或留言内容",
      subjectOptions: {
        casting: "歌剧剧目选角 / 角色邀约",
        concert: "交响音乐会 / 清唱剧演出",
        recital: "独唱音乐会 / 音乐节演出",
        audition: "试音邀请",
        other: "综合经纪合作与交流"
      },
      submitButton: "提交联络信息",
      sending: "正在发送...",
      successTitle: "留言已顺利送达",
      successDesc: "感谢您的来信！王益辉将尽快通过您填写的邮箱与您取得联络。"
    },
    footer: {
      copyright: "版权所有 · 英国 伦敦",
      disclaimer: "抒情男高音 · 荣获英国皇家音乐学院 The Robert W Hendra Award 全额奖学金"
    }
  }
};
