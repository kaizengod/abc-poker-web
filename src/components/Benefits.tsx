import React from 'react';
import { motion } from 'motion/react';
import { BENEFITS } from '../data/pokerData';
import { ShieldCheck, Award, Crown, Zap } from 'lucide-react';

export const Benefits: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-cyan-400" />;
      case 'Award':
        return <Award className="w-8 h-8 text-amber-400" />;
      case 'Crown':
        return <Crown className="w-8 h-8 text-blue-400" />;
      case 'Zap':
        return <Zap className="w-8 h-8 text-emerald-400" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden border-t border-b border-blue-500/10">
      {/* Glow background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-4 py-1.5 rounded-full border border-cyan-500/30">
            NUESTROS PILARES DE EXCELENCIA
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            ¿POR QUÉ ELEGIR <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">ABC POKER</span>?
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Garantizamos la mejor experiencia de póker online en Ecuador con respaldo y seriedad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-blue-500/20 hover:border-cyan-400/60 shadow-xl hover:shadow-[0_0_30px_rgba(0,180,255,0.25)] transition-all group relative overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-amber-400 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between mb-5">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-blue-500/30 group-hover:bg-blue-950/60 transition-colors">
                  {getIcon(benefit.iconName)}
                </div>
                <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-400/30 uppercase">
                  {benefit.highlight}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                {benefit.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
