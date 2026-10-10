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
  style?: React.CSSProperties;
}

const StarIcon: React.FC<{ size?: number }> = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
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
  style,
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
        className={className}
        style={{
          width: '100%',
          backgroundColor: '#bc1313',
          color: '#ffffff',
          fontFamily: "'rawline', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontSize: '0.875rem',
          fontWeight: 500,
          textAlign: 'center',
          padding: '0.625rem 1rem',
          userSelect: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
          zIndex: 40,
          position: isTop ? 'sticky' : 'fixed',
          top: isTop ? 0 : undefined,
          bottom: isTop ? undefined : 0,
          left: isTop ? undefined : 0,
          right: isTop ? undefined : 0,
          borderBottom: isTop ? '1px solid rgba(255,255,255,0.2)' : undefined,
          borderTop: isTop ? undefined : '1px solid rgba(255,255,255,0.2)',
          ...style,
        }}
        aria-label="Campanha #devscomlula"
      >
        <style>{`@media (max-width: 640px) { .devscomlula-dash { display: none !important; } }`}</style>
        <Tag
          {...tagProps}
          style={{
            margin: '0 auto',
            width: '100%',
            maxWidth: '1152px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            color: 'inherit',
            textDecoration: 'none',
            cursor: link || onClick ? 'pointer' : 'default',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <StarIcon size={20} />
            <span style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>#devscomlula</span>
          </div>

          <span className="devscomlula-dash hidden sm:inline" style={{ opacity: 0.75 }}>
            —
          </span>

          <span style={{ opacity: 0.95, textWrap: 'balance' }}>
            Tecnologia a serviço da classe trabalhadora e da democracia.
          </span>
        </Tag>
      </aside>
    );
  }

  const cornerPositions = {
    'top-left': {
      container: { top: 0, left: 0 },
      ribbon: { left: '-100px', top: '60px', transform: 'rotate(-45deg)' },
    },
    'top-right': {
      container: { top: 0, right: 0 },
      ribbon: { right: '-100px', top: '60px', transform: 'rotate(45deg)' },
    },
    'bottom-left': {
      container: { bottom: 0, left: 0 },
      ribbon: { left: '-100px', bottom: '60px', transform: 'rotate(45deg)' },
    },
    'bottom-right': {
      container: { bottom: 0, right: 0 },
      ribbon: { right: '-100px', bottom: '60px', transform: 'rotate(-45deg)' },
    },
  }[position];

  return (
    <div
      key={position}
      className={className}
      style={{
        position: 'fixed',
        zIndex: 50,
        width: '16rem',
        height: '16rem',
        overflow: 'hidden',
        pointerEvents: 'none',
        ...cornerPositions.container,
        ...style,
      }}
      aria-label="Fita diagonal #devscomlula"
    >
      <Tag
        {...tagProps}
        style={{
          pointerEvents: 'auto',
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '380px',
          height: '62px',
          transformOrigin: 'center',
          backgroundColor: '#bc1313',
          color: '#ffffff',
          fontFamily: "'rawline', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          textAlign: 'center',
          userSelect: 'none',
          boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
          borderTop: '2px solid rgba(255,255,255,0.25)',
          borderBottom: '2px solid rgba(255,255,255,0.25)',
          textDecoration: 'none',
          cursor: link || onClick ? 'pointer' : 'default',
          ...cornerPositions.ribbon,
        }}
        title="#devscomlula — tecnologia & democracia"
      >
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.375rem',
            fontSize: '1rem',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          <StarIcon size={16} />
          <span>#devscomlula</span>
        </span>
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 400,
            opacity: 0.95,
            lineHeight: 1.1,
          }}
        >
          tecnologia & democracia
        </span>
      </Tag>
    </div>
  );
};

export default DevsComLula;
