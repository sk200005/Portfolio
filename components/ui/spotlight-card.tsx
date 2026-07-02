import React, { ReactNode } from 'react';

type GlowColor = 'blue' | 'purple' | 'green' | 'red' | 'orange';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: GlowColor;
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

const sizeMap = {
  sm: 'h-64 w-48',
  md: 'h-80 w-64',
  lg: 'h-96 w-80',
};

export function GlowCard({
  children,
  className = '',
  glowColor = 'blue',
  size = 'md',
  width,
  height,
  customSize = false,
}: GlowCardProps) {
  const style: React.CSSProperties = {
    backgroundColor: 'hsl(0 0% 8% / 0.92)',
    border: '1px solid hsl(0 0% 22% / 0.85)',
    borderRadius: '16px',
    touchAction: 'pan-y',
  };

  if (width !== undefined) {
    style.width = typeof width === 'number' ? `${width}px` : width;
  }
  if (height !== undefined) {
    style.height = typeof height === 'number' ? `${height}px` : height;
  }

  return (
    <div
      style={style}
      className={`relative ${customSize ? '' : sizeMap[size]} ${className}`}
    >
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </div>
  );
}
