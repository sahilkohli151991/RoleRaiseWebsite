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
        {/* Modern professional gradient */}
        <defs>
          <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e40af"/>
            <stop offset="100%" stopColor="#3b82f6"/>
          </linearGradient>
        </defs>
        
        {/* Clean, geometric "R" */}
        <path
          d="M15 10 
             H55 
             Q70 10 70 25 
             Q70 40 55 45 
             L70 90 
             H55 
             L45 45 
             H30 
             V90 
             H15 
             V10 Z"
          fill="url(#primaryGrad)"
        />
        
        {/* R bowl opening */}
        <rect x="30" y="20" width="25" height="15" fill="white" rx="2"/>
        
        {/* Modern upward arrow - career acceleration */}
        <path
          d="M80 60 
             L85 50 
             L90 60 
             L87 60 
             L87 75 
             L83 75 
             L83 60 
             Z"
          fill="url(#primaryGrad)"
        />
        
        {/* Progress dots */}
        <circle cx="85" cy="80" r="2" fill="url(#primaryGrad)"/>
        <circle cx="85" cy="85" r="1.5" fill="url(#primaryGrad)" opacity="0.7"/>
        <circle cx="85" cy="89" r="1" fill="url(#primaryGrad)" opacity="0.5"/>
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