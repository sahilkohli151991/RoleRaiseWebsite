import React from 'react';

interface LogoSimpleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function LogoSimple({ className = '', size = 'md' }: LogoSimpleProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizes[size]} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Modern gradient definitions */}
        <defs>
          <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6"/>
            <stop offset="100%" stopColor="#0f172a"/>
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4"/>
            <stop offset="100%" stopColor="#3b82f6"/>
          </linearGradient>
        </defs>
        
        {/* Main R structure - bold and geometric */}
        <path
          d="M10 10 
             H55 
             Q70 10 70 25 
             Q70 37 60 40 
             L70 90 
             H55 
             L45 40 
             H25 
             V90 
             H10 
             V10 Z"
          fill="url(#primaryGradient)"
        />
        
        {/* R bowl opening */}
        <rect x="25" y="20" width="30" height="10" fill="white" rx="2"/>
        
        {/* Integrated upward arrow/staircase - career acceleration symbol */}
        <path
          d="M10 10 
             L25 10 
             L25 25 
             L35 25 
             L35 35 
             L45 35 
             L45 45 
             L25 45 
             L25 90 
             L10 90 
             Z"
          fill="white"
        />
        
        {/* Rocket/arrow accent - vibrant gradient */}
        <path
          d="M75 15 
             L85 5 
             L95 15 
             L85 25 
             Z"
          fill="url(#accentGradient)"
        />
        
        {/* Dynamic accent bars for energy */}
        <rect x="75" y="30" width="20" height="3" fill="url(#accentGradient)" rx="1.5"/>
        <rect x="78" y="36" width="17" height="2" fill="url(#accentGradient)" rx="1"/>
        <rect x="81" y="40" width="14" height="2" fill="url(#accentGradient)" rx="1"/>
      </svg>
    </div>
  );
}