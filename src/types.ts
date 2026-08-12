export interface Tournament {
  id: string;
  title: string;
  subtitle?: string;
  day: string;
  time: string;
  gtd: string;
  buyIn: string;
  pts: string;
  rebuy: string;
  addOn: string;
  pokerbrosId: string;
  idReferente: string;
  theme: 'bounty' | 'gold' | 'ice' | 'sunday' | 'lasvegas' | 'cyber';
  badge: string;
  bgGradient: string;
  accentColor: string;
}

export interface CalendarEvent {
  id: string;
  date: string;
  month: string;
  dayName: string;
  title: string;
  gtd: string;
  buyIn: string;
  pts?: string;
  format: string;
  time: string;
  status: 'confirmado' | 'proximamente';
  isPrivate?: boolean;
  pokerbrosId: string;
  idReferente: string;
}

export interface WinnerFlyer {
  id: string;
  championName: string;
  avatarUrl: string;
  tournamentTitle: string;
  prizePool: string;
  championPrize: string;
  date: string;
  hand: string;
  tag: string;
}

export interface RankingPlayer {
  rank: number;
  name: string;
  nickname: string;
  avatar: string;
  points: number;
  earnings: string;
  tournamentsWon: number;
  tablesFinals: number;
  badge: 'Leyenda' | 'Diamante' | 'Platino' | 'Oro';
  trend: 'up' | 'down' | 'stable';
}

export interface MerchItem {
  id: string;
  name: string;
  price: number;
  category: 'ropa' | 'chips' | 'naipes' | 'accesorios';
  description: string;
  tag?: string;
  isPopular?: boolean;
  sizes?: string[];
  colorOptions?: string[];
  stock: string;
}

export interface ClubBenefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}
