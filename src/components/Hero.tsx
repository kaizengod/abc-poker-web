import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CLUB_INFO } from '../data/pokerData';
import { MessageCircle, Copy, Check, ExternalLink, ChevronRight, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenPokerBrosModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenPokerBrosModal }) => {
  const [copiedId, setCopiedId] = useState(false);
  const [copiedRef, setCopiedRef] = useState(false);

  const copyToClipboard = (text: string, isRef = false) => {
    navigator.clipboard.writeText(text);
    if (isRef) {
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    } else {
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  const handleWhatsAppJoin = () => {
    const msg = encodeURIComponent(`Hola ABC Poker! Quiero unirme al club. ID: ${CLUB_INFO.defaultPokerbrosId}, Referente: ${CLUB_INFO.idReferente}`);
    window.open(`https://wa.me/${CLUB_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="hero" className="relative pt-28 lg:pt-36 pb-20 overflow-hidden bg-slate-950">
      {/* Background ambient lighting and particle effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-600/15 via-cyan-500/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Main Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Club Fusion Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/60 via-slate-900 to-cyan-950/80 border border-cyan-500/40 shadow-[0_0_20px_rgba(0,180,255,0.2)] mb-6 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span className="text-xs font-black tracking-widest text-cyan-300 uppercase">
                FUSIÓN EXCLUSIVA: FULL HOUSE × LA18
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>

            {/* Main Title: BIENVENIDO AL CLUB */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none mb-4">
              BIENVENIDO <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]">
                AL CLUB
              </span>
            </h1>

            {/* Subtitle: LA CASA DE POKER DONDE NACEN LOS CAMPEONES */}
            <h2 className="text-xl sm:text-2xl font-bold text-amber-400/90 tracking-wide mb-6 uppercase flex items-center gap-2">
              <span className="w-8 h-1 bg-amber-400 rounded-full inline-block" />
              LA CASA DE POKER DONDE NACEN LOS CAMPEONES
            </h2>

            {/* Description Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {CLUB_INFO.description}
            </p>

            {/* Quick Credentials Copy Box */}
            <div className="w-full max-w-xl p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-blue-500/30 backdrop-blur-md shadow-xl mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-blue-400 tracking-wider uppercase flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  ID OFICIAL POKERBROS
                </span>
                <span className="text-[11px] text-slate-400 font-mono">App PokerBros</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* PokerBros ID */}
                <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-950 border border-blue-500/20">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">PokerBros ID</span>
                    <span className="text-base font-mono font-black text-white">{CLUB_INFO.defaultPokerbrosId}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(CLUB_INFO.defaultPokerbrosId)}
                    className="p-2 rounded-lg bg-blue-600/20 text-cyan-300 hover:bg-blue-600/40 hover:text-white transition-all"
                    title="Copiar ID"
                  >
                    {copiedId ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* ID Referente */}
                <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-950 border border-blue-500/20">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">ID Referente</span>
                    <span className="text-base font-mono font-black text-amber-300">{CLUB_INFO.idReferente}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(CLUB_INFO.idReferente, true)}
                    className="p-2 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/40 hover:text-white transition-all"
                    title="Copiar Referente"
                  >
                    {copiedRef ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full">
              <button
                onClick={handleWhatsAppJoin}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-black text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] transform hover:-translate-y-1 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span className="tracking-wide uppercase text-sm">Unirse por WhatsApp</span>
              </button>

              <button
                onClick={() => onNavigate('torneos')}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 border border-blue-500/40 hover:border-cyan-400 shadow-lg transition-all group"
              >
                <span>Ver Torneos</span>
                <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenPokerBrosModal}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-xs font-bold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:border-cyan-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>¿Cómo Unirse en PokerBros?</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column left empty as requested */}
          <div className="hidden lg:block lg:col-span-5" />

        </div>
      </div>
    </section>
  );
};
