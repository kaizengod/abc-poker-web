import React, { useState, useEffect } from 'react';
import { ClubLogo } from './ClubLogo';
import { CLUB_INFO } from '../data/pokerData';
import { MessageCircle, Menu, X, Calendar, Trophy, Award, ShoppingBag, ExternalLink } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenPokerBrosModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenPokerBrosModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'calendario', label: 'Calendario', icon: Calendar },
    { id: 'torneos', label: 'Torneos', icon: Trophy },
    { id: 'ganadores', label: 'Ganadores', icon: Award },
    { id: 'merch', label: 'Merch', icon: ShoppingBag },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('¡Hola ABC Poker! Deseo unirme al club o solicitar información de fichas.');
    window.open(`https://wa.me/${CLUB_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-blue-500/20 shadow-[0_4px_30px_rgba(0,50,150,0.3)] py-2'
          : 'bg-gradient-to-b from-slate-950/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <ClubLogo size="sm" showSubtitle={false} />
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-wider bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-amber-300 transition-colors">
              ABC POKER
            </span>
            <span className="text-[10px] font-semibold text-blue-400/90 tracking-widest uppercase">
              Full House × LA18
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-blue-500/20 backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(0,180,255,0.5)]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-blue-400'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenPokerBrosModal}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-900/40 transition-all shadow-sm"
          >
            <span>PokerBros ID: {CLUB_INFO.defaultPokerbrosId}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] transform hover:-translate-y-0.5 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Unirse por WhatsApp</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900/80 border border-blue-500/30 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-blue-500/30 px-4 pt-3 pb-6 mt-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-bold transition-all ${
                    isActive
                      ? 'bg-blue-600/30 text-cyan-300 border border-cyan-400/50'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5 text-cyan-400" />
                  {item.label}
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  onOpenPokerBrosModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-500/40"
              >
                <span>ID Club PokerBros: {CLUB_INFO.defaultPokerbrosId}</span>
                <span className="text-[10px] bg-cyan-800/50 px-2 py-0.5 rounded">Ver Datos</span>
              </button>

              <button
                onClick={() => {
                  handleWhatsApp();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-black text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Contactar por WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
