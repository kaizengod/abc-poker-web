import React from 'react';
import { ClubLogo } from './ClubLogo';
import { CLUB_INFO } from '../data/pokerData';
import { MessageCircle, Send, Instagram, Facebook, Video, Mail, ShieldCheck, MapPin, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPokerBrosModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPokerBrosModal }) => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${CLUB_INFO.whatsappNumber}`, '_blank');
  };

  return (
    <footer className="bg-slate-950 border-t border-blue-500/20 text-slate-300 relative overflow-hidden pt-16 pb-12">
      {/* Top glowing ambient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <ClubLogo size="sm" showSubtitle={false} />
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-wider">ABC POKER</span>
                <span className="text-xs text-blue-400 font-bold uppercase tracking-widest">
                  Full House × LA18
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-md">
              {CLUB_INFO.tagline}. Diseñamos el espacio perfecto para que demuestres tu nivel y compartas con los mejores jugadores de póker de Ecuador.
            </p>

            {/* Social Media Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={`https://wa.me/${CLUB_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-slate-950 transition-all"
                title="WhatsApp Support"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>

              <a
                href={`https://t.me/${CLUB_INFO.telegramUser.replace('@', '')}`}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-950 transition-all"
                title="Telegram Channel"
              >
                <Send className="w-5 h-5" />
              </a>

              <a
                href={`https://instagram.com/${CLUB_INFO.instagramUser.replace('@', '')}`}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900 text-pink-400 border border-pink-500/30 hover:bg-pink-500 hover:text-slate-950 transition-all"
                title="Instagram Official"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={`https://facebook.com/${CLUB_INFO.facebookUser}`}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900 text-blue-400 border border-blue-500/30 hover:bg-blue-600 hover:text-white transition-all"
                title="Facebook Community"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-l-2 border-cyan-400 pl-3">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <button
                  onClick={() => onNavigate('calendario')}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <span>• Calendario Privado</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('torneos')}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <span>• Torneos Semanales</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ganadores')}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <span>• Ganadores y Ranking</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('merch')}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <span>• Tienda Oficial Merch</span>
                </button>
              </li>
            </ul>
          </div>

          {/* PokerBros IDs & Contact */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-3">
              Datos PokerBros
            </h4>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-blue-500/30 space-y-2 mb-4 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-slate-400">Torneos Generales ID:</span>
                <strong className="text-cyan-300">1758073</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Torneos Privados ID:</span>
                <strong className="text-amber-300">1743809</strong>
              </div>
              <div className="flex justify-between pt-1 border-t border-slate-800">
                <span className="text-slate-400">ID Referente:</span>
                <strong className="text-emerald-400">3384751</strong>
              </div>
            </div>

            <button
              onClick={onOpenPokerBrosModal}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-500/40 hover:bg-cyan-900/60 transition-all flex items-center justify-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Ver Instrucciones de Ingreso</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} ABC POKER ECUADOR. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Fusión Oficial: Full House & LA18</span>
            <span>•</span>
            <span className="text-emerald-400 font-bold">Plataforma 100% Segura</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
