import React from 'react';

interface BrosLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const BrosLogo: React.FC<BrosLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const sizeMap = {
    sm: { height: 32, fontSize: 'text-xl', subSize: 'text-[9px]' },
    md: { height: 42, fontSize: 'text-2xl', subSize: 'text-[11px]' },
    lg: { height: 56, fontSize: 'text-3xl', subSize: 'text-[13px]' },
    xl: { height: 72, fontSize: 'text-4xl', subSize: 'text-[15px]' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex flex-col items-start select-none font-sans ${className}`}>
      <div className="flex items-baseline tracking-[-0.03em] font-extrabold leading-none">
        <span className="bg-gradient-to-r from-teal-400 via-teal-300 to-slate-200 bg-clip-text text-transparent drop-shadow-sm font-black text-2xl sm:text-3xl tracking-wider">
          BROS
        </span>
      </div>
      <div className="w-full h-[2px] bg-gradient-to-r from-teal-500/80 via-teal-400/40 to-transparent my-[3px]" />
      {showSubtitle && (
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] text-slate-300 uppercase leading-none pl-[1px]">
          FITNESS
        </span>
      )}
    </div>
  );
};

export default BrosLogo;
