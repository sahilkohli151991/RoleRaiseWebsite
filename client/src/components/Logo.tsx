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
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Simple, clean R */}
        <path
          d="M8 6 
             H22 
             Q28 6 28 12 
             Q28 18 22 20 
             L28 32 
             H22 
             L16 20 
             H14 
             V32 
             H8 
             V6 Z"
          fill="#3b82f6"
        />
        
        {/* R bowl */}
        <rect x="14" y="10" width="8" height="6" fill="white"/>
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