import React, { useState } from 'react';
import { TOURNAMENTS, CLUB_INFO } from '../data/pokerData';
import { Tournament } from '../types';
import { TournamentFlyerCard } from './TournamentFlyerCard';
import { ShieldCheck, Copy, Check, MessageCircle, Sparkles, ExternalLink } from 'lucide-react';

interface TorneosProps {
  onSelectTournament: (t: Tournament) => void;
  onOpenPokerBrosModal: () => void;
}

export const Torneos: React.FC<TorneosProps> = ({ onSelectTournament, onOpenPokerBrosModal }) => {
  const [copiedId, setCopiedId] = useState(false);
  const [copiedRef, setCopiedRef] = useState(false);

  const handleCopy = (text: string, isRef = false) => {
    navigator.clipboard.writeText(text);
    if (isRef) {
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    } else {
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  const handleWhatsAppAllTournaments = () => {
    const message = encodeURIComponent(`Hola ABC Poker! Deseo participar en los torneos semanales. ID PokerBros: ${CLUB_INFO.defaultPokerbrosId}, ID Referente: ${CLUB_INFO.idReferente}`);
    window.open(`https://wa.me/${CLUB_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="torneos" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background radial highlights */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-black tracking-widest text-cyan-300 uppercase">
              SIEMPRE ACTIVOS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            TORNEOS <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">DESTACADOS</span>
          </h2>

          <p className="text-base sm:text-xl font-bold text-cyan-300 tracking-wide mb-2">
            Satelites se llevan a cabo diariamente
          </p>

          <p className="text-sm sm:text-base text-slate-300">
            Únete a las mesas más competitivas de la comunidad con estructura profesional y pozos garantizados.
          </p>
        </div>

        {/* Credentials Callout Card */}
        <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950/80 to-slate-900 border border-cyan-500/40 shadow-2xl mb-14 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-blue-600/20 border border-blue-400/40 text-cyan-300">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">DATOS DE INGRESO A CLUB</span>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                  <span className="text-sm font-bold text-slate-200">
                    pokerbros-id: <span className="text-white font-mono font-black text-lg bg-slate-950 px-2 py-0.5 rounded border border-blue-500/30">1758073</span>
                  </span>
                  <span className="text-sm font-bold text-slate-200">
                    id-referente: <span className="text-amber-300 font-mono font-black text-lg bg-slate-950 px-2 py-0.5 rounded border border-amber-500/30">3384751</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                onClick={() => handleCopy('1758073')}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-cyan-300 bg-slate-950 hover:bg-slate-900 border border-cyan-500/30 transition-all"
              >
                {copiedId ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedId ? '¡Copiado!' : 'Copiar ID'}</span>
              </button>

              <button
                onClick={onOpenPokerBrosModal}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-md transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Instrucciones</span>
              </button>
            </div>
          </div>
        </div>

        {/* 6 Tournaments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURNAMENTS.map((tournament) => (
            <TournamentFlyerCard
              key={tournament.id}
              tournament={tournament}
              onSelect={onSelectTournament}
            />
          ))}
        </div>

        {/* Bottom Satellites & Registration Banner */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-950/60 via-slate-900 to-cyan-950/60 p-8 rounded-3xl border border-blue-500/30 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-xl font-extrabold text-white">¿Buscas clasificar por menos dinero?</h3>
            <p className="text-sm text-cyan-200/90 mt-1">
              Satélites diarios activos desde $2 USD para conseguir tus entradas a los torneos semanales.
            </p>
          </div>

          <button
            onClick={handleWhatsAppAllTournaments}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-black uppercase text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-lg shadow-emerald-500/20 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consultar Satélites en WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
