import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
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
        {/* Ultra-modern minimalist "R" with ascending elements */}
        <defs>
          <linearGradient id="modernGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6"/>
            <stop offset="100%" stopColor="#1e40af"/>
          </linearGradient>
        </defs>
        
        {/* Main R - sleek and contemporary */}
        <path
          d="M15 15 
             H60 
             Q75 15 75 30 
             Q75 42 65 45 
             L75 85 
             H60 
             L50 45 
             H30 
             V85 
             H15 
             V15 Z"
          fill="url(#modernGradient)"
        />
        
        {/* R bowl - clean opening */}
        <rect x="30" y="25" width="30" height="10" fill="white" rx="3"/>
        
        {/* Modern ascending bars - representing growth/progress */}
        <rect x="15" y="15" width="8" height="8" fill="white" rx="2"/>
        <rect x="23" y="23" width="7" height="7" fill="white" rx="2"/>
        <rect x="30" y="30" width="6" height="6" fill="white" rx="2"/>
        
        {/* Subtle highlight for premium feel */}
        <rect x="15" y="15" width="60" height="2" fill="rgba(255,255,255,0.3)" rx="1"/>
      </svg>
    </div>
  );
}

export function LogoWithText({ className = '', size = 'md' }: LogoProps) {
  const isWhite = className.includes('text-white');
  
  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };
  
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <Logo size={size} />
      <span className={`${textSizes[size]} font-bold ${isWhite ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Montserrat, Poppins, sans-serif' }}>
        RoleRaise
      </span>
    </div>
  );
}