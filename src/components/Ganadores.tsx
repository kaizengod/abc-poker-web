import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { RECENT_WINNERS, RANKING_PLAYERS } from '../data/pokerData';
import { WinnerFlyer, RankingPlayer } from '../types';
import { Award, Trophy, Crown, Flame, TrendingUp, Sparkles, Star, ChevronRight } from 'lucide-react';

export const Ganadores: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flyers' | 'ranking'>('flyers');
  const [searchTerm, setSearchTerm] = useState('');

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#ffd700', '#10b981', '#a855f7'],
    });
  };

  const filteredRanking = RANKING_PLAYERS.filter(
    (player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.nickname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="ganadores" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 mb-4">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-black tracking-widest text-amber-300 uppercase">
              HALL DE LA FAMA
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            NUESTROS <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">GANADORES</span> Y RANKING
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Celebrando a los mejores jugadores de póker de Ecuador. Resultados reales y transparencia total en cada torneo.
          </p>

          {/* Sub Tab Switcher */}
          <div className="flex items-center justify-center gap-3 mt-8 bg-slate-900/90 p-1.5 rounded-2xl border border-blue-500/20 max-w-md mx-auto">
            <button
              onClick={() => setActiveTab('flyers')}
              className={`flex-1 py-3 px-5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'flyers'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black shadow-lg shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Flyers de Ganadores</span>
            </button>

            <button
              onClick={() => setActiveTab('ranking')}
              className={`flex-1 py-3 px-5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'ranking'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black shadow-lg shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Crown className="w-4 h-4" />
              <span>RANKING Actualizado</span>
            </button>
          </div>
        </div>

        {/* TAB 1: WINNERS FLYERS GALLERY */}
        {activeTab === 'flyers' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {RECENT_WINNERS.map((winner) => (
                <div
                  key={winner.id}
                  onClick={triggerConfetti}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950 border border-amber-500/30 hover:border-amber-400 shadow-xl hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] transition-all p-5 flex flex-col justify-between"
                >
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40">
                      🏆 {winner.tag}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">{winner.date}</span>
                  </div>

                  {/* Champion Avatar & Name */}
                  <div className="flex items-center gap-3 my-2">
                    <div className="relative">
                      <img
                        src={winner.avatarUrl}
                        alt={winner.championName}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-full object-cover border-2 border-amber-400 shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 p-1 rounded-full text-[10px]">
                        ★
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors">
                        {winner.championName}
                      </h4>
                      <span className="text-xs text-blue-400 font-bold">{winner.tournamentTitle}</span>
                    </div>
                  </div>

                  {/* Prize Details */}
                  <div className="my-4 p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Premio Campeón:</span>
                      <span className="text-amber-300 font-extrabold text-base">{winner.championPrize}</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-400">Pozo Total:</span>
                      <span className="text-slate-200 font-mono font-bold">{winner.prizePool}</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-400">Mano Ganadora:</span>
                      <span className="text-cyan-300 font-mono font-bold">{winner.hand}</span>
                    </div>
                  </div>

                  <button className="w-full py-2.5 rounded-xl text-xs font-bold text-amber-300 bg-amber-500/10 group-hover:bg-amber-500 group-hover:text-slate-950 border border-amber-400/30 transition-all flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>¡Celebrar Victoria!</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: RANKING TABLE */}
        {activeTab === 'ranking' && (
          <div className="max-w-5xl mx-auto">
            {/* Search filter */}
            <div className="mb-6 flex items-center justify-between gap-4">
              <input
                type="text"
                placeholder="Buscar por nombre o nickname..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-80 px-4 py-2.5 rounded-xl bg-slate-900 border border-blue-500/30 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm"
              />
              <span className="text-xs text-slate-400 font-mono hidden sm:block">
                Actualizado semanalmente
              </span>
            </div>

            {/* Ranking Table */}
            <div className="rounded-2xl overflow-hidden bg-slate-900/90 border border-blue-500/30 shadow-2xl overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-950/90 border-b border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider">
                    <th className="py-4 px-6">Posición</th>
                    <th className="py-4 px-6">Jugador</th>
                    <th className="py-4 px-6 text-center">Rango</th>
                    <th className="py-4 px-6 text-right">Puntos</th>
                    <th className="py-4 px-6 text-right">Ganancias Totales</th>
                    <th className="py-4 px-6 text-center">Títulos</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-sm font-semibold">
                  {filteredRanking.map((player) => (
                    <tr
                      key={player.rank}
                      className="hover:bg-blue-950/40 transition-colors group"
                    >
                      {/* Rank Position */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          {player.rank === 1 && (
                            <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-black text-sm shadow-md">
                              1
                            </span>
                          )}
                          {player.rank === 2 && (
                            <span className="w-8 h-8 rounded-full bg-slate-300 text-slate-950 flex items-center justify-center font-black text-sm">
                              2
                            </span>
                          )}
                          {player.rank === 3 && (
                            <span className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center font-black text-sm">
                              3
                            </span>
                          )}
                          {player.rank > 3 && (
                            <span className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center font-bold text-xs font-mono">
                              #{player.rank}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Player Profile */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <img
                            src={player.avatar}
                            alt={player.name}
                            referrerPolicy="no-referrer"
                            className="w-10 h-10 rounded-full object-cover border border-cyan-400/50"
                          />
                          <div className="flex flex-col">
                            <span className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {player.name}
                            </span>
                            <span className="text-xs text-blue-400 font-mono">@{player.nickname}</span>
                          </div>
                        </div>
                      </td>

                      {/* Badge level */}
                      <td className="py-4 px-6 text-center">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-950 text-amber-300 border border-amber-400/30">
                          {player.badge}
                        </span>
                      </td>

                      {/* Points */}
                      <td className="py-4 px-6 text-right font-mono font-bold text-cyan-300">
                        {player.points.toLocaleString()} PTS
                      </td>

                      {/* Total Earnings */}
                      <td className="py-4 px-6 text-right font-mono font-bold text-emerald-400">
                        {player.earnings}
                      </td>

                      {/* Tournaments Won */}
                      <td className="py-4 px-6 text-center">
                        <span className="inline-flex items-center gap-1 font-extrabold text-amber-400">
                          <Trophy className="w-4 h-4" /> {player.tournamentsWon}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
