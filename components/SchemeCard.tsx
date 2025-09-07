import React, { useState } from 'react';
import { SpinnerIcon } from './Icons';

interface SchemeCardProps {
  title: string;
  url: string;
  icon: React.ReactNode;
  description: string;
  color: 'cyan' | 'blue';
}

const SchemeCard: React.FC<SchemeCardProps> = ({ title, url, icon, description, color }) => {
  const [isLoading, setIsLoading] = useState(false);

  const colorClasses = {
    cyan: {
      hoverBg: 'hover:bg-cyan-500',
      border: 'border-cyan-200',
      hoverBorder: 'hover:border-cyan-500',
      spinnerText: 'text-cyan-500',
    },
    blue: {
      hoverBg: 'hover:bg-blue-600',
      border: 'border-blue-200',
      hoverBorder: 'hover:border-blue-600',
      spinnerText: 'text-blue-600',
    },
  };

  const selectedColor = colorClasses[color];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Show loading spinner for 1s to give user feedback, then navigate.
    setTimeout(() => {
      window.open(url, '_blank', 'noopener, noreferrer');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <a
      href={url}
      onClick={handleClick}
      rel="noopener noreferrer"
      className={`group flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center border-2 ${selectedColor.border} ${selectedColor.hoverBorder} ${selectedColor.hoverBg} h-44`}
    >
      {isLoading ? (
        <SpinnerIcon
          className={`w-12 h-12 ${selectedColor.spinnerText} group-hover:text-white transition-colors duration-300`}
          aria-label="Loading"
        />
      ) : (
        <>
          <div className="mb-3">
            {icon}
          </div>
          <h2 className="text-xl font-bold text-gray-800 group-hover:text-white">
            {title}
          </h2>
           <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-100">{description}</p>
        </>
      )}
    </a>
  );
};

export default SchemeCard;