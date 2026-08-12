import React from 'react';
import { motion } from 'motion/react';
import { Tournament } from '../types';
import { Copy, Clock, DollarSign, ExternalLink, Zap, ShieldAlert, Award } from 'lucide-react';

interface TournamentFlyerCardProps {
  tournament: Tournament;
  onSelect: (tournament: Tournament) => void;
}

export const TournamentFlyerCard: React.FC<TournamentFlyerCardProps> = ({ tournament, onSelect }) => {
  const themeStyles = {
    bounty: {
      border: 'border-amber-500/40 hover:border-amber-400',
      badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-400/50',
      gtdText: 'text-amber-400',
      headerBg: 'from-amber-950/90 via-slate-900 to-amber-900/40',
      iconColor: 'text-amber-400',
      accentGlow: 'hover:shadow-[0_0_35px_rgba(245,158,11,0.35)]',
      themeGraphic: '🤠 💀 🔫',
    },
    gold: {
      border: 'border-yellow-500/40 hover:border-yellow-300',
      badgeBg: 'bg-yellow-500/20 text-yellow-300 border-yellow-400/50',
      gtdText: 'text-yellow-300',
      headerBg: 'from-yellow-950/90 via-slate-900 to-amber-950/60',
      iconColor: 'text-yellow-400',
      accentGlow: 'hover:shadow-[0_0_35px_rgba(234,179,8,0.35)]',
      themeGraphic: '🏛️ ⚡ 🪙',
    },
    ice: {
      border: 'border-cyan-500/40 hover:border-cyan-300',
      badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50',
      gtdText: 'text-cyan-300',
      headerBg: 'from-cyan-950/90 via-slate-900 to-blue-950/80',
      iconColor: 'text-cyan-400',
      accentGlow: 'hover:shadow-[0_0_35px_rgba(6,182,212,0.35)]',
      themeGraphic: '🧊 🏔️ ♠️',
    },
    sunday: {
      border: 'border-red-500/40 hover:border-red-400',
      badgeBg: 'bg-red-500/20 text-red-300 border-red-400/50',
      gtdText: 'text-red-400',
      headerBg: 'from-red-950/90 via-slate-900 to-blue-950/90',
      iconColor: 'text-red-400',
      accentGlow: 'hover:shadow-[0_0_35px_rgba(239,68,68,0.35)]',
      themeGraphic: '🏟️ 🏈 🃏',
    },
    lasvegas: {
      border: 'border-emerald-500/40 hover:border-emerald-300',
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50',
      gtdText: 'text-emerald-300',
      headerBg: 'from-emerald-950/90 via-slate-900 to-teal-950/80',
      iconColor: 'text-emerald-400',
      accentGlow: 'hover:shadow-[0_0_35px_rgba(16,185,129,0.35)]',
      themeGraphic: '🎰 7️⃣7️⃣7️⃣ 🌴',
    },
    cyber: {
      border: 'border-purple-500/40 hover:border-purple-300',
      badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-400/50',
      gtdText: 'text-purple-300',
      headerBg: 'from-purple-950/90 via-slate-900 to-indigo-950/80',
      iconColor: 'text-purple-400',
      accentGlow: 'hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]',
      themeGraphic: '🌆 🔮 ♠️',
    },
  }[tournament.theme];

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={() => onSelect(tournament)}
      className={`relative cursor-pointer rounded-2xl overflow-hidden bg-slate-950 border ${themeStyles.border} ${themeStyles.accentGlow} shadow-xl transition-all group flex flex-col justify-between`}
    >
      {/* Top Banner & Header */}
      <div className={`p-6 bg-gradient-to-br ${themeStyles.headerBg} relative overflow-hidden`}>
        {/* Decorative Theme Graphics */}
        <div className="absolute top-2 right-3 text-3xl opacity-20 group-hover:opacity-40 transition-opacity select-none">
          {themeStyles.themeGraphic}
        </div>

        <div className="flex items-center justify-between mb-3 relative z-10">
          <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-950/80 text-blue-300 border border-blue-500/30">
            {tournament.day} {tournament.time !== '' && `• ${tournament.time}`}
          </span>
          <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${themeStyles.badgeBg}`}>
            {tournament.badge}
          </span>
        </div>

        {/* Tournament GTD Large Title */}
        <div className="my-2 relative z-10">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-widest block">GARANTIZADO</span>
          <h3 className={`text-3xl sm:text-4xl font-black ${themeStyles.gtdText} tracking-tight drop-shadow-md`}>
            {tournament.gtd}
          </h3>
          <p className="text-white font-extrabold text-lg mt-1 tracking-wide uppercase">
            {tournament.title}
          </p>
        </div>
      </div>

      {/* Details Specs Table */}
      <div className="p-5 space-y-3 bg-slate-900/90 backdrop-blur-sm border-t border-slate-800">
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col">
            <span className="text-[10px] text-slate-400 uppercase font-semibold">Buy-In / Puntos</span>
            <span className="text-white font-bold">{tournament.buyIn}</span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col">
            <span className="text-[10px] text-slate-400 uppercase font-semibold">Rebuy</span>
            <span className="text-amber-300 font-bold">{tournament.rebuy}</span>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs">
          <span className="text-[10px] text-slate-400 uppercase font-semibold">Add-On</span>
          <span className="text-cyan-300 font-bold">{tournament.addOn}</span>
        </div>

        {/* PokerBros Credentials Box */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-300">
          <div className="flex flex-col">
            <span className="text-[9px] text-blue-400 uppercase font-sans font-bold">PokerBros ID / Ref</span>
            <span>ID: <strong className="text-white">{tournament.pokerbrosId}</strong> | Ref: <strong className="text-amber-300">{tournament.idReferente}</strong></span>
          </div>
          <span className="text-xs text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-sans font-bold">
            Ver Flyer <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};
