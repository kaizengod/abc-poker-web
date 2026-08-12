/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Torneos } from './components/Torneos';
import { Calendario } from './components/Calendario';
import { Ganadores } from './components/Ganadores';
import { Merch } from './components/Merch';
import { Footer } from './components/Footer';
import { PokerBrosModal } from './components/PokerBrosModal';
import { FlyerModal } from './components/FlyerModal';
import { Tournament } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isPokerBrosModalOpen, setIsPokerBrosModalOpen] = useState<boolean>(false);
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      {/* Navbar Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenPokerBrosModal={() => setIsPokerBrosModalOpen(true)}
      />

      {/* Hero Section */}
      <main>
        <Hero
          onNavigate={handleNavigate}
          onOpenPokerBrosModal={() => setIsPokerBrosModalOpen(true)}
        />

        {/* Benefits Section */}
        <Benefits />

        {/* Torneos Section */}
        <Torneos
          onSelectTournament={(t) => setSelectedTournament(t)}
          onOpenPokerBrosModal={() => setIsPokerBrosModalOpen(true)}
        />

        {/* Calendario Section */}
        <Calendario
          onOpenPokerBrosModal={() => setIsPokerBrosModalOpen(true)}
        />

        {/* Ganadores Section */}
        <Ganadores />

        {/* Merch Section */}
        <Merch />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPokerBrosModal={() => setIsPokerBrosModalOpen(true)}
      />

      {/* Modals */}
      <PokerBrosModal
        isOpen={isPokerBrosModalOpen}
        onClose={() => setIsPokerBrosModalOpen(false)}
      />

      <FlyerModal
        tournament={selectedTournament}
        onClose={() => setSelectedTournament(null)}
        onOpenPokerBrosModal={() => setIsPokerBrosModalOpen(true)}
      />
    </div>
  );
}
