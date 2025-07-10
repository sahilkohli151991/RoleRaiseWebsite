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
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Corporate gradient */}
        <defs>
          <linearGradient id="corporateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a"/>
            <stop offset="100%" stopColor="#1e293b"/>
          </linearGradient>
        </defs>
        
        {/* Professional "R" letterform */}
        <path
          d="M12 12 
             H44 
             Q56 12 56 24 
             Q56 36 44 40 
             L56 68 
             H44 
             L32 40 
             H24 
             V68 
             H12 
             V12 Z"
          fill="url(#corporateGrad)"
        />
        
        {/* R counter (bowl opening) */}
        <rect x="24" y="20" width="20" height="12" fill="white"/>
        
        {/* Minimal accent mark */}
        <rect x="60" y="12" width="8" height="2" fill="url(#corporateGrad)"/>
        <rect x="62" y="16" width="6" height="2" fill="url(#corporateGrad)" opacity="0.7"/>
        <rect x="64" y="20" width="4" height="2" fill="url(#corporateGrad)" opacity="0.5"/>
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
      <span 
        className={`${textSizes[size]} font-bold ${isWhite ? 'text-white' : 'text-gray-900'}`} 
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        RoleRaise
      </span>
    </div>
  );
}