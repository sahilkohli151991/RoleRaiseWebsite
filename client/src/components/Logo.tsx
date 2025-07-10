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
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Brand gradient background */}
        <defs>
          <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5184D6"/>
            <stop offset="100%" stopColor="#153060"/>
          </linearGradient>
        </defs>
        
        {/* Rounded square background */}
        <rect width="48" height="48" rx="12" fill="url(#brandGradient)"/>
        
        {/* Modern R letterform */}
        <path
          d="M14 12 
             H26 
             Q32 12 32 18 
             Q32 24 26 26 
             L32 36 
             H26 
             L20 26 
             H18 
             V36 
             H14 
             V12 Z"
          fill="white"
        />
        
        {/* R counter */}
        <rect x="18" y="16" width="8" height="6" fill="url(#brandGradient)"/>
        
        {/* Upward progression elements */}
        <rect x="36" y="32" width="2" height="4" fill="#409C8B" rx="1"/>
        <rect x="39" y="28" width="2" height="8" fill="#409C8B" rx="1"/>
        <rect x="42" y="24" width="2" height="12" fill="#409C8B" rx="1"/>
        
        {/* Arrow pointing up */}
        <path d="M43 16 L45 14 L47 16 L46 16 L46 20 L44 20 L44 16 Z" fill="#409C8B"/>
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
    <div className={`flex items-center gap-4 ${className}`}>
      <Logo size={size} />
      <span 
        className={`${textSizes[size]} font-bold ${isWhite ? 'text-white' : 'text-brand-slate-navy'} font-heading`} 
        style={{ letterSpacing: '-0.025em' }}
      >
        RoleRaise
      </span>
    </div>
  );
}