import React from 'react';

interface ClubLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const ClubLogo: React.FC<ClubLogoProps> = ({ className = '', size = 'md', showSubtitle = true }) => {
  const sizeClasses = {
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-20',
    xl: 'h-28 lg:h-36',
  };

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <div className={`relative ${sizeClasses[size]} aspect-[3/4] flex flex-col items-center`}>
        {/* Glowing aura background */}
        <div className="absolute inset-0 bg-blue-600/20 blur-xl rounded-full transform scale-125 -z-10 animate-pulse" />

        <svg
          viewBox="0 0 300 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,180,255,0.3)]"
        >
          <defs>
            {/* Gold Gradient */}
            <linearGradient id="emblemGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2A1" />
              <stop offset="30%" stopColor="#FFD700" />
              <stop offset="70%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#996515" />
            </linearGradient>

            {/* Blue ABC Text Gradient */}
            <linearGradient id="abcBlue" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="50%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            {/* Electric Blue Outline */}
            <linearGradient id="neonGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>

            <filter id="shadow3d" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="3" dy="5" stdDeviation="2" floodColor="#000" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* Majestic Golden Crown Emblem at Top */}
          <g filter="url(#shadow3d)">
            {/* Crown Base */}
            <path
              d="M80,100 L220,100 L200,120 L100,120 Z"
              fill="url(#emblemGold)"
            />
            {/* Crown Spikes */}
            <path
              d="M80,100 L70,40 L110,75 L150,20 L190,75 L230,40 L220,100 Z"
              fill="url(#emblemGold)"
              stroke="#FFF2A1"
              strokeWidth="2"
            />
            {/* Crown Jewels */}
            <circle cx="150" cy="20" r="8" fill="#38BDF8" />
            <circle cx="70" cy="40" r="6" fill="#F59E0B" />
            <circle cx="230" cy="40" r="6" fill="#F59E0B" />
          </g>

          {/* ABC Big 3D Letters */}
          <g filter="url(#shadow3d)">
            {/* Outline 3D Effect for ABC */}
            <text
              x="150"
              y="240"
              textAnchor="middle"
              fill="url(#abcBlue)"
              stroke="#60A5FA"
              strokeWidth="6"
              fontSize="120"
              fontWeight="900"
              fontFamily="system-ui, sans-serif"
              letterSpacing="2"
            >
              ABC
            </text>
            <text
              x="148"
              y="238"
              textAnchor="middle"
              fill="url(#abcBlue)"
              stroke="#FFFFFF"
              strokeWidth="2"
              fontSize="120"
              fontWeight="900"
              fontFamily="system-ui, sans-serif"
              letterSpacing="2"
            >
              ABC
            </text>
          </g>

          {/* POKER Box & Spade Logo */}
          <g filter="url(#shadow3d)">
            <rect x="20" y="260" width="260" height="90" rx="20" fill="#1E3A8A" stroke="url(#neonGlow)" strokeWidth="5" />
            <rect x="25" y="265" width="250" height="80" rx="16" fill="#0B132B" opacity="0.9" />

            {/* P O [Spade] K E R */}
            <text
              x="55"
              y="325"
              fill="#FFFFFF"
              fontSize="52"
              fontWeight="900"
              fontFamily="system-ui, sans-serif"
            >
              P
            </text>

            {/* O with Spade inside */}
            <g transform="translate(112, 305)">
              <circle cx="0" cy="0" r="22" stroke="#FFFFFF" strokeWidth="5" fill="none" />
              {/* Spade symbol */}
              <path
                d="M0,-14 C-7,-4 -15,0 -15,8 C-15,14 -8,16 0,10 C8,16 15,14 15,8 C15,0 7,-4 0,-14 Z M-3,10 L3,10 L4,17 L-4,17 Z"
                fill="#FFFFFF"
              />
            </g>

            <text
              x="150"
              y="325"
              fill="#FFFFFF"
              fontSize="52"
              fontWeight="900"
              fontFamily="system-ui, sans-serif"
            >
              KER
            </text>
          </g>
        </svg>
      </div>

      {showSubtitle && (
        <span className="text-[10px] tracking-[0.25em] text-blue-400/90 font-bold uppercase mt-1">
          Full House × LA18
        </span>
      )}
    </div>
  );
};
