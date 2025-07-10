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
        {/* Main R shape - clean and professional */}
        <path
          d="M35 10 
             H75 
             Q90 10 90 25 
             Q90 40 75 45 
             L90 90 
             H70 
             L55 45 
             H35 
             V90 
             H15 
             V10 
             Z"
          fill="#2563eb"
        />
        
        {/* R bowl - inner space */}
        <rect x="35" y="20" width="35" height="15" fill="white"/>
        
        {/* Staircase pattern - three distinct steps */}
        <rect x="15" y="10" width="20" height="20" fill="white"/>
        <rect x="25" y="30" width="15" height="15" fill="white"/>
        <rect x="30" y="45" width="12" height="12" fill="white"/>
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