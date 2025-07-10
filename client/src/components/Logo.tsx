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
        {/* Geometric R - Left vertical stem */}
        <rect x="8" y="6" width="4" height="26" fill="#4A90A4"/>
        
        {/* Top horizontal bar */}
        <rect x="12" y="6" width="14" height="4" fill="#4A90A4"/>
        
        {/* Bowl - horizontal middle */}
        <rect x="12" y="16" width="10" height="4" fill="#4A90A4"/>
        
        {/* Bowl - right vertical */}
        <rect x="22" y="10" width="4" height="10" fill="#4A90A4"/>
        
        {/* Diagonal leg */}
        <polygon points="16,20 22,20 30,32 26,32" fill="#4A90A4"/>
        
        {/* Three-step staircase counter - carved out of the bowl */}
        <rect x="14" y="8" width="2" height="2" fill="white"/>
        <rect x="16" y="10" width="2" height="2" fill="white"/>
        <rect x="18" y="12" width="2" height="2" fill="white"/>
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