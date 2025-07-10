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
        {/* Main R shape - solid blue background */}
        <path
          d="M0 0 
             H75 
             Q95 0 95 25 
             Q95 45 80 50 
             L95 100 
             H70 
             L55 50 
             H25 
             V100 
             H0 
             Z"
          fill="#4A90A4"
        />
        
        {/* R bowl - inner part */}
        <rect x="25" y="20" width="50" height="15" fill="#4A90A4"/>
        
        {/* Staircase cutout pattern - three steps */}
        <rect x="0" y="0" width="25" height="25" fill="white"/>
        <rect x="25" y="25" width="15" height="15" fill="white"/>
        <rect x="40" y="40" width="15" height="10" fill="white"/>
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