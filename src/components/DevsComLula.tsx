import React from 'react';

export type DevsPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface DevsComLulaProps {
  position?: DevsPosition;
  link?: string;
  onClick?: () => void;
  className?: string;
}

const StarIcon: React.FC<{ size?: number }> = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0 drop-shadow-sm"
    aria-hidden="true"
  >
    <path
      d="M9.85484 9.84393H0L8.03763 16.0058L4.96237 26L12.8602 19.8382L20.9677 26L17.7527 16.0058L26 9.84393H15.9355L12.8602 0L9.85484 9.84393Z"
      fill="white"
    />
  </svg>
);

export const DevsComLula: React.FC<DevsComLulaProps> = ({
  position = 'top-center',
  link,
  onClick,
  className = '',
}) => {
  const isCorner =
    position === 'top-left' ||
    position === 'top-right' ||
    position === 'bottom-left' ||
    position === 'bottom-right';

  const Tag = link ? 'a' : onClick ? 'button' : 'div';
  const tagProps = link
    ? {
        href: link,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : onClick
    ? {
        type: 'button' as const,
        onClick,
      }
    : {};

  if (!isCorner) {
    const isTop = position === 'top-center';

    return (
      <aside
        key={position}
        className={`z-40 w-full bg-[#bc1313] px-4 py-2.5 text-center text-sm font-medium text-white shadow-lg select-none font-['rawline',sans-serif] ${
          isTop
            ? 'sticky top-0 border-b border-white/20'
            : 'fixed bottom-0 left-0 right-0 border-t border-white/20'
        } ${className}`}
        aria-label="Campanha #devscomlula"
      >
        <Tag
          {...tagProps}
          className={`mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-2 sm:flex-row sm:text-base ${
            link || onClick ? 'cursor-pointer' : ''
          }`}
        >
          <div className="flex items-center gap-2">
            <StarIcon size={20} />
            <span className="font-extrabold tracking-tight">#devscomlula</span>
          </div>

          <span className="hidden opacity-75 sm:inline">—</span>

          <span className="opacity-95 text-balance text-xs sm:text-sm md:text-base">
            Tecnologia a serviço da classe trabalhadora e da democracia.
          </span>
        </Tag>
      </aside>
    );
  }

  const cornerStyles = {
    'top-left': {
      container: 'top-0 left-0',
      ribbon: '-left-[100px] top-[60px] -rotate-45',
    },
    'top-right': {
      container: 'top-0 right-0',
      ribbon: '-right-[100px] top-[60px] rotate-45',
    },
    'bottom-left': {
      container: 'bottom-0 left-0',
      ribbon: '-left-[100px] bottom-[60px] rotate-45',
    },
    'bottom-right': {
      container: 'bottom-0 right-0',
      ribbon: '-right-[100px] bottom-[60px] -rotate-45',
    },
  }[position];

  return (
    <div
      key={position}
      className={`pointer-events-none fixed z-50 h-64 w-64 overflow-hidden ${cornerStyles.container} ${className}`}
      aria-label="Fita diagonal #devscomlula"
    >
      <Tag
        {...tagProps}
        className={`pointer-events-auto absolute flex h-[62px] w-[380px] origin-center flex-col items-center justify-center border-y-2 border-white/25 bg-[#bc1313] text-center text-white shadow-2xl select-none hover:bg-[#a51010] focus-visible:outline-2 focus-visible:outline-white font-['rawline',sans-serif] ${
          cornerStyles.ribbon
        } ${link || onClick ? 'cursor-pointer' : ''}`}
        title="#devscomlula — tecnologia & democracia"
      >
        <span className="flex items-center justify-center gap-1.5 text-base font-extrabold leading-tight tracking-tight">
          <StarIcon size={16} />
          <span>#devscomlula</span>
        </span>
        <span className="text-xs font-normal text-white/95 leading-tight">
          tecnologia & democracia
        </span>
      </Tag>
    </div>
  );
};

export default DevsComLula;
