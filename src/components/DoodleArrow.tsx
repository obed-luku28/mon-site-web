import React from 'react';

interface DoodleArrowProps {
  className?: string;
}

export const DoodleArrow: React.FC<DoodleArrowProps> = ({ className = '' }) => {
  return (
    <svg
      className={className}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 50C16 42 22 28 32 30C39 31.4 39 42 32 46C24.5 50 18 36 28 20C34 10.5 44 8 50 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44 3L51 7L46 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
