import React from 'react';
import logoImage from '@assets/logo_1752131433617.jpeg';

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
      <img 
        src={logoImage} 
        alt="RoleRaise Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export function LogoWithText({ className = '', size = 'md' }: LogoProps) {
  const isWhite = className.includes('text-white');
  
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <Logo size={size} />
      <span className={`text-2xl font-bold ${isWhite ? 'text-white' : 'text-gray-900'}`}>
        Role<span className="text-primary">Raise</span>
      </span>
    </div>
  );
}