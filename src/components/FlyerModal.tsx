import React, { useState } from 'react';
import { Tournament } from '../types';
import { CLUB_INFO } from '../data/pokerData';
import { X, MessageCircle, Copy, Check, ExternalLink, ShieldAlert, Sparkles } from 'lucide-react';

interface FlyerModalProps {
  tournament: Tournament | null;
  onClose: () => void;
  onOpenPokerBrosModal: () => void;
}

export const FlyerModal: React.FC<FlyerModalProps> = ({ tournament, onClose, onOpenPokerBrosModal }) => {
  const [copiedId, setCopiedId] = useState(false);
  const [copiedRef, setCopiedRef] = useState(false);

  if (!tournament) return null;

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

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(`Hola ABC Poker! Deseo inscribirme al torneo: "${tournament.title}" (${tournament.day} ${tournament.time}). Mi ID PokerBros: ${tournament.pokerbrosId}`);
    window.open(`https://wa.me/${CLUB_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-slate-900 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative my-8">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white bg-slate-800"
          aria-label="Cerrar flyer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/40 uppercase">
            {tournament.badge}
          </span>
          <span className="text-xs text-blue-400 font-bold uppercase">
            {tournament.day} • {tournament.time}
          </span>
        </div>

        {/* Title & GTD */}
        <div className="mb-6">
          <span className="text-4xl sm:text-5xl font-black text-amber-400 block tracking-tight">
            {tournament.gtd}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1 uppercase">
            {tournament.title}
          </h2>
          <p className="text-slate-300 text-sm mt-1">{tournament.subtitle}</p>
        </div>

        {/* Specs Box */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">Buy-In Entrada</span>
            <span className="text-base font-bold text-white">{tournament.buyIn}</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">Rebuy</span>
            <span className="text-base font-bold text-amber-300">{tournament.rebuy}</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 col-span-2 sm:col-span-1">
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">Add-On</span>
            <span className="text-base font-bold text-cyan-300">{tournament.addOn}</span>
          </div>
        </div>

        {/* ID Box */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-cyan-500/30 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left w-full sm:w-auto">
            <span className="text-[10px] text-blue-400 font-bold uppercase block">Ingreso a Mesa PokerBros</span>
            <div className="text-sm font-mono font-bold text-white mt-0.5">
              pokerbros-id: <strong className="text-cyan-300">{tournament.pokerbrosId}</strong> | id-referente: <strong className="text-amber-300">{tournament.idReferente}</strong>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => handleCopy(tournament.pokerbrosId)}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-cyan-300 bg-blue-900/40 border border-cyan-500/30 flex items-center gap-1"
            >
              {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>ID</span>
            </button>
            <button
              onClick={() => handleCopy(tournament.idReferente, true)}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-amber-300 bg-amber-900/40 border border-amber-500/30 flex items-center gap-1"
            >
              {copiedRef ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>Referente</span>
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleWhatsApp}
            className="flex-1 py-4 rounded-xl text-xs font-black uppercase text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 shadow-lg flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Inscribirme por WhatsApp</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenPokerBrosModal();
            }}
            className="px-5 py-4 rounded-xl text-xs font-bold text-cyan-300 bg-slate-950 border border-blue-500/30 hover:border-cyan-400 transition-colors flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Guía de Ingreso</span>
          </button>
        </div>

      </div>
    </div>
  );
};
