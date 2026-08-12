import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CALENDAR_EVENTS, CLUB_INFO } from '../data/pokerData';
import { CalendarEvent } from '../types';
import { Calendar, ChevronLeft, ChevronRight, Lock, Copy, Check, MessageCircle, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

interface CalendarioProps {
  onOpenPokerBrosModal: () => void;
}

export const Calendario: React.FC<CalendarioProps> = ({ onOpenPokerBrosModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copiedId, setCopiedId] = useState(false);
  const [copiedRef, setCopiedRef] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % CALENDAR_EVENTS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + CALENDAR_EVENTS.length) % CALENDAR_EVENTS.length);
  };

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

  const activeEvent: CalendarEvent = CALENDAR_EVENTS[currentIndex];

  const handleReserveSpot = (event: CalendarEvent) => {
    const msg = encodeURIComponent(`Hola ABC Poker! Deseo registrarme al torneo privado: "${event.title}" (${event.date}). ID PokerBros: ${CLUB_INFO.calendarPokerbrosId}`);
    window.open(`https://wa.me/${CLUB_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="calendario" className="py-24 bg-slate-950 relative overflow-hidden border-t border-blue-500/10">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 mb-4">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-black tracking-widest text-cyan-300 uppercase">
              AGENDA MENSUAL
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            CALENDARIO DE <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">TORNEOS PRIVADOS</span>
          </h2>

          <p className="text-base sm:text-lg font-bold text-amber-300/90 leading-relaxed max-w-2xl mx-auto bg-slate-900/80 p-4 rounded-2xl border border-amber-400/30">
            "Cada MES se actualiza el calendario con los torneos de póker PRIVADOS confirmados hasta la fecha."
          </p>
        </div>

        {/* Private Calendar PokerBros Credentials Box */}
        <div className="max-w-2xl mx-auto p-5 rounded-2xl bg-slate-900/90 border border-amber-400/40 shadow-xl mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/40">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wide block">CLUB DE TORNEOS PRIVADOS</span>
                <p className="text-xs text-slate-300 font-mono">
                  pokerbros-id: <strong className="text-white bg-slate-950 px-2 py-0.5 rounded border border-blue-500/30">1743809</strong> | id-referente: <strong className="text-amber-300 bg-slate-950 px-2 py-0.5 rounded border border-amber-500/30">3384751</strong>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopy('1743809')}
                className="px-3 py-1.5 rounded-lg text-xs font-bold text-cyan-300 bg-slate-950 hover:bg-slate-900 border border-cyan-500/30 flex items-center gap-1"
              >
                {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>Copiar ID</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Interactive Carousel Showcase */}
        <div className="max-w-4xl mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEvent.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 border border-blue-500/40 shadow-[0_0_50px_rgba(0,100,255,0.2)] p-6 sm:p-10 relative"
            >
              {/* Background watermark icon */}
              <div className="absolute right-6 top-6 text-9xl text-blue-500/5 pointer-events-none select-none font-black">
                {activeEvent.date.split(' ')[0]}
              </div>

              {/* Event Badge Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-blue-600/30 text-cyan-300 border border-cyan-400/40 text-xs font-bold uppercase tracking-wider">
                  📅 {activeEvent.month} • {activeEvent.dayName} {activeEvent.date}
                </span>

                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-bold uppercase flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" /> Torneo Privado
                </span>
              </div>

              {/* Tournament Title & GTD */}
              <div className="mb-8">
                <span className="text-3xl sm:text-5xl font-black text-amber-400 block tracking-tight">
                  {activeEvent.gtd}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1 uppercase">
                  {activeEvent.title}
                </h3>
                <p className="text-cyan-200/80 text-sm mt-2">
                  Formato: {activeEvent.format} • Hora: {activeEvent.time}
                </p>
              </div>

              {/* Tournament Specs Summary Box */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Buy-In Entrada</span>
                  <span className="text-lg font-black text-white">{activeEvent.buyIn}</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Puntos Iniciales</span>
                  <span className="text-lg font-black text-amber-300">{activeEvent.pts || '40.000 PTS'}</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">PokerBros ID</span>
                  <span className="text-lg font-mono font-black text-cyan-300">{activeEvent.pokerbrosId}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => handleReserveSpot(activeEvent)}
                  className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-black text-slate-950 uppercase bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-lg shadow-emerald-500/20 transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Reservar Cupo por WhatsApp</span>
                </button>

                <button
                  onClick={onOpenPokerBrosModal}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl text-xs font-bold text-cyan-300 bg-slate-900 border border-blue-500/30 hover:border-cyan-400 transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Ingresar ID 1743809</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Nav Arrow Controls */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-xl z-20"
            aria-label="Anterior Torneo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-xl z-20"
            aria-label="Siguiente Torneo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Dots Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {CALENDAR_EVENTS.map((evt, idx) => (
              <button
                key={evt.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  idx === currentIndex ? 'w-8 bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]' : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                }`}
                aria-label={`Ir al torneo ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
