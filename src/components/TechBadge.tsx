import React from 'react';

interface TechItem {
  id: string;
  name: string;
  category: string;
  bg: string;
  icon: React.ReactNode;
}

interface TechBadgeProps {
  tech: TechItem;
  onClick?: () => void;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ tech, onClick }) => {
  return (
    <button
      id={`tech-badge-${tech.id}`}
      onClick={onClick}
      type="button"
      className="group relative flex items-center justify-center w-11 h-11 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-600 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 active:scale-95 shadow-md shadow-black/40 cursor-pointer"
      title={tech.name}
    >
      {tech.icon}
      
      {/* Tooltip */}
      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[11px] font-medium text-slate-200 bg-slate-800/95 border border-slate-700/60 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30">
        {tech.name}
      </span>
    </button>
  );
};
