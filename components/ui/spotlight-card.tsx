'use client';

import React, { CSSProperties, ReactNode, useEffect, useRef } from 'react';

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

const glowColorMap: Record<GlowColor, { base: number; spread: number }> = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
};

const sizeMap = {
  sm: 'h-64 w-48',
  md: 'h-80 w-64',
  lg: 'h-96 w-80',
};

type GlowCardStyle = CSSProperties & {
  '--base': number;
  '--spread': number;
  '--radius': string;
  '--border': string;
  '--backdrop': string;
  '--backup-border': string;
  '--size': string;
  '--outer': string;
  '--border-size': string;
  '--spotlight-size': string;
  '--hue': string;
  '--saturation': string;
  '--lightness': string;
  '--bg-spot-opacity': string;
  '--border-spot-opacity': string;
  '--border-light-opacity': string;
};

const glowStyles = `
  [data-glow-card] {
    isolation: isolate;
  }

  [data-glow-card]::before {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: -26px;
    border-radius: calc(var(--radius) * 1px);
    z-index: 0;
    background-attachment: fixed;
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 1.1) calc(var(--spotlight-size) * 1.1) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 58) * 1%) / 0.1), transparent 62%
    );
    filter: blur(22px);
  }

  [data-glow-card]::after {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    padding: var(--border-size);
    border-radius: calc(var(--radius) * 1px);
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.86) calc(var(--spotlight-size) * 0.86) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 58) * 1%) / var(--border-spot-opacity, 1)) 0%,
      hsl(0 0% 100% / var(--border-light-opacity, 0.8)) 18%,
      transparent 62%
    );
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    mask-composite: exclude;
  }

  [data-glow-card] [data-glow-card-inner] {
    position: absolute;
    inset: 0;
    border-radius: calc(var(--radius) * 1px);
    z-index: 1;
    background-attachment: fixed;
    background-image: radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.05)), transparent 58%
    );
    opacity: var(--outer, 1);
    pointer-events: none;
  }
`;

export function GlowCard({
  children,
  className = '',
  glowColor = 'blue',
  size = 'md',
  width,
  height,
  customSize = false,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { base, spread } = glowColorMap[glowColor];

  useEffect(() => {
    // Skip the pointer-tracking effect entirely on touch-primary devices.
    // On mobile, pointermove fires on every scroll touch which (a) is
    // expensive and (b) was competing with native scroll gestures.
    const isTouchPrimary =
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: none) and (pointer: coarse)').matches;

    if (isTouchPrimary) return;

    const syncPointer = (event: PointerEvent) => {
      if (!cardRef.current) return;

      const { clientX, clientY } = event;
      cardRef.current.style.setProperty('--x', clientX.toFixed(2));
      cardRef.current.style.setProperty('--xp', (clientX / window.innerWidth).toFixed(2));
      cardRef.current.style.setProperty('--y', clientY.toFixed(2));
      cardRef.current.style.setProperty('--yp', (clientY / window.innerHeight).toFixed(2));
    };

    document.addEventListener('pointermove', syncPointer, { passive: true });
    return () => document.removeEventListener('pointermove', syncPointer);
  }, []);

  const style: GlowCardStyle = {
    '--base': base,
    '--spread': spread,
    '--radius': '16',
    '--border': '3',
    '--backdrop': 'hsl(0 0% 8% / 0.92)',
    '--backup-border': 'var(--backdrop)',
    '--size': '280',
    '--outer': '1',
    '--border-size': 'calc(var(--border, 2) * 1px)',
    '--spotlight-size': 'calc(var(--size, 150) * 1px)',
    '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
    '--saturation': '100',
    '--lightness': '58',
    '--bg-spot-opacity': '0.045',
    '--border-spot-opacity': '0.72',
    '--border-light-opacity': '0.5',
    backgroundAttachment: 'fixed',
    backgroundColor: 'var(--backdrop, transparent)',
    backgroundImage: `radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.045)), transparent 58%
    )`,
    backgroundPosition: '50% 50%',
    backgroundSize: 'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
    border: 'var(--border-size) solid hsl(0 0% 22% / 0.85)',
    // Allow vertical scroll on mobile — never block touch gestures
    touchAction: 'pan-y',
  };

  if (width !== undefined) {
    style.width = typeof width === 'number' ? `${width}px` : width;
  }

  if (height !== undefined) {
    style.height = typeof height === 'number' ? `${height}px` : height;
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: glowStyles }} />
      <div
        ref={cardRef}
        data-glow-card
        style={style}
        className={`relative backdrop-blur-[5px] ${customSize ? '' : sizeMap[size]} ${className}`}
      >
        <div data-glow-card-inner />
        <div className="relative z-10 flex h-full flex-col">{children}</div>
      </div>
    </>
  );
}
