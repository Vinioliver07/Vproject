import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-10 w-10" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="V Project Logo"
    >
      <path 
        d="M20 20 L50 80 L80 20" 
        stroke="url(#paint0_linear)" 
        strokeWidth="15" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M35 20 L50 55" 
        stroke="#1B3B6F" 
        strokeWidth="15" 
        strokeLinecap="round"
        style={{mixBlendMode: 'multiply'}}
      />
      <defs>
        <linearGradient id="paint0_linear" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00AEEF" />
          <stop offset="1" stopColor="#1B3B6F" />
        </linearGradient>
      </defs>
    </svg>
  );
};