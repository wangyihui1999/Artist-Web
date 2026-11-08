/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Press } from './components/Press';
import { Performances } from './components/Performances';
import { Biography } from './components/Biography';
import { Repertoire } from './components/Repertoire';
import { AudioPlayer } from './components/AudioPlayer';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');

  const handleQuickPlay = () => {
    const audioSection = document.getElementById('audio');
    if (audioSection) {
      audioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0C192E] flex flex-col font-sans">
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />
      
      <main className="flex-1">
        <Hero
          currentLang={currentLang}
          onQuickPlay={handleQuickPlay}
        />

        <Press
          currentLang={currentLang}
        />

        <Performances
          currentLang={currentLang}
        />

        <Biography
          currentLang={currentLang}
        />

        <Repertoire
          currentLang={currentLang}
        />

        <AudioPlayer
          currentLang={currentLang}
        />

        <Gallery
          currentLang={currentLang}
        />

        <Contact
          currentLang={currentLang}
        />
      </main>

      <Footer
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />
    </div>
  );
}
