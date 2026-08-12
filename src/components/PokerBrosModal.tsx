import React, { useState } from 'react';
import { CLUB_INFO } from '../data/pokerData';
import { ShieldCheck, Copy, Check, MessageCircle, ExternalLink, Download, X } from 'lucide-react';

interface PokerBrosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PokerBrosModal: React.FC<PokerBrosModalProps> = ({ isOpen, onClose }) => {
  const [copiedDefault, setCopiedDefault] = useState(false);
  const [copiedCalendar, setCopiedCalendar] = useState(false);
  const [copiedRef, setCopiedRef] = useState(false);

  if (!isOpen) return null;

  const copyText = (text: string, type: 'default' | 'calendar' | 'ref') => {
    navigator.clipboard.writeText(text);
    if (type === 'default') {
      setCopiedDefault(true);
      setTimeout(() => setCopiedDefault(false), 2000);
    } else if (type === 'calendar') {
      setCopiedCalendar(true);
      setTimeout(() => setCopiedCalendar(false), 2000);
    } else {
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(`Hola ABC Poker! Necesito soporte para ingresar a PokerBros. Mis datos: ID Default: ${CLUB_INFO.defaultPokerbrosId}, ID Calendario: ${CLUB_INFO.calendarPokerbrosId}, Referente: ${CLUB_INFO.idReferente}`);
    window.open(`https://wa.me/${CLUB_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl relative my-8">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white bg-slate-800/80"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-2xl bg-blue-600/20 text-cyan-300 border border-cyan-400/30">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-white">GUÍA DE ACCESO POKERBROS</h3>
            <p className="text-xs text-cyan-300 font-semibold">ABC POKER (Full House × LA18)</p>
          </div>
        </div>

        {/* Credentials Cards */}
        <div className="space-y-3 mb-6">
          {/* Main ID */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-blue-500/30 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">TORNEOS GENERALES (SEMANALES)</span>
              <span className="text-sm font-bold text-white">pokerbros-id: <strong className="text-cyan-300 font-mono text-base">{CLUB_INFO.defaultPokerbrosId}</strong></span>
            </div>
            <button
              onClick={() => copyText(CLUB_INFO.defaultPokerbrosId, 'default')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-cyan-300 bg-blue-900/40 hover:bg-blue-800/60 border border-cyan-500/30 flex items-center gap-1"
            >
              {copiedDefault ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedDefault ? '¡Copiado!' : 'Copiar'}</span>
            </button>
          </div>

          {/* Calendar ID */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-amber-500/30 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase block">TORNEOS PRIVADOS (CALENDARIO)</span>
              <span className="text-sm font-bold text-white">pokerbros-id: <strong className="text-amber-300 font-mono text-base">{CLUB_INFO.calendarPokerbrosId}</strong></span>
            </div>
            <button
              onClick={() => copyText(CLUB_INFO.calendarPokerbrosId, 'calendar')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-amber-300 bg-amber-900/40 hover:bg-amber-800/60 border border-amber-500/30 flex items-center gap-1"
            >
              {copiedCalendar ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCalendar ? '¡Copiado!' : 'Copiar'}</span>
            </button>
          </div>

          {/* ID Referente */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block">ID REFERENTE OBLIGATORIO</span>
              <span className="text-sm font-bold text-white">id-referente: <strong className="text-amber-300 font-mono text-base">{CLUB_INFO.idReferente}</strong></span>
            </div>
            <button
              onClick={() => copyText(CLUB_INFO.idReferente, 'ref')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-amber-300 bg-amber-900/40 hover:bg-amber-800/60 border border-amber-500/30 flex items-center gap-1"
            >
              {copiedRef ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedRef ? '¡Copiado!' : 'Copiar'}</span>
            </button>
          </div>
        </div>

        {/* Steps to join */}
        <div className="mb-6 space-y-2 text-xs text-slate-300">
          <h4 className="font-bold text-white text-sm uppercase mb-2">Pasos para ingresar al club:</h4>
          <ol className="list-decimal list-inside space-y-1.5 pl-1">
            <li>Abre la aplicación <strong>PokerBros</strong> en tu dispositivo celular.</li>
            <li>Haz clic en el ícono de la lupa 🔍 (Buscar Club).</li>
            <li>Ingresa el <strong>PokerBros ID</strong> correspondiente y el <strong>ID Referente: 3384751</strong>.</li>
            <li>Envía la solicitud y escríbenos por <strong>WhatsApp</strong> para aprobación instantánea.</li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleWhatsApp}
            className="flex-1 py-3.5 rounded-xl text-xs font-black uppercase text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-md flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Solicitar Aprobación en WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
