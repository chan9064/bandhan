import React from 'react';

interface IconProps {
  className?: string;
}

export const AppIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className={className}
    aria-label="Bandhan Insurance App Icon"
  >
    <defs>
      <linearGradient id="appIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0891b2" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" rx="22" fill="url(#appIconGradient)" />
    <g transform="translate(25 25) scale(0.5)">
      <path
        fill="#FFFFFF"
        d="M68.2,1.8c-9.3-2.4-19.3-2.4-28.5,0C29.8,4.1,21.1,8.9,14.5,15.5c-6.6,6.6-11.4,15.3-13.7,25.2c-2.4,9.3-2.4,19.3,0,28.5 c2.3,9.9,7.1,18.6,13.7,25.2c6.6,6.6,15.3,11.4,25.2,13.7c9.3,2.4,19.3,2.4,28.5,0c9.9-2.3,18.6-7.1,25.2-13.7 c6.6-6.6,11.4-15.3,13.7-25.2c2.4-9.3,2.4-19.3,0-28.5c-2.3-9.9-7.1-18.6-13.7-25.2C86.8,8.9,78.1,4.1,68.2,1.8z M69.9,58.8 c-1.4,1.4-3.3,2.2-5.3,2.2H42.3c-4.1,0-7.5-3.4-7.5-7.5V46.3c0-4.1,3.4-7.5,7.5-7.5h16.5c3.5,0,6.5,2.4,7.3,5.8 c0.3,1.3,0.4,2.6,0.4,3.9V58.8z M64.6,35.1c-1.4,1.4-3.3,2.2-5.3,2.2H42.3c-4.1,0-7.5-3.4-7.5-7.5V22.6c0-4.1,3.4-7.5,7.5-7.5 h11.1c4.1,0,7.5,3.4,7.5,7.5V35.1z"
      />
    </g>
  </svg>
);

export default AppIcon;
