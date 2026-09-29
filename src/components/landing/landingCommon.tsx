import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CONTAINER = 'max-w-7xl mx-auto px-6';

/* ---------- Reference palette ---------- */
export const ACC = '#0e8a5f';
export const ACC_DARK = '#0b7551';
export const ACC_DEEP = '#0a3f2f';
export const ACC_SOFT = 'rgba(14,138,95,.11)';
export const MUTED2 = '#5d646d';
export const LINE2 = '#e6e8ec';
export const LINE_STRONG = '#d3d7dd';
export const TILE = '#f5f6f8';
export const TILE_LINE = '#e9ebee';

export function Reveal({
  children,
  delay = 0,
  className = '',
  style,
  y = 20,
  blur = true
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  key?: React.Key;
  y?: number;
  blur?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: blur ? 'blur(6px)' : 'none' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-40px', amount: 0.12 }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`transform-gpu ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <span className="w-1.5 h-1.5 rounded-full bg-tawf-gold" aria-hidden="true" />
      <span className="eyebrow text-tawf-gold">{label}</span>
    </div>
  );
}

export function Kick({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`mb-[18px] inline-flex items-center gap-2.5 text-sm font-medium ${className}`} style={{ color: ACC }}>
      <span className="size-[7px] rounded-full" style={{ background: ACC }} />
      {children}
    </p>
  );
}

export function Lnk({ href, children }: { href: string; children: React.ReactNode }) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="inline-block border-b pb-[3px] text-[14.5px] font-medium no-underline transition-colors"
      style={{ borderColor: LINE_STRONG, color: '#14181c' }}
      onMouseEnter={(e) => (e.currentTarget.style.color = ACC)}
      onMouseLeave={(e) => (e.currentTarget.style.color = '#14181c')}
    >
      {children}
    </a>
  );
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return reduced;
}
