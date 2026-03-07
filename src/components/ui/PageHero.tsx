import React from 'react';
import { motion } from 'motion/react';

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  background?: 'sand' | 'ink' | 'green';
}

const bgStyles = {
  sand: 'bg-tawf-sand',
  ink: 'bg-tawf-ink',
  green: 'bg-tawf-green'
};

const textStyles = {
  sand: { title: 'text-tawf-green', badge: 'text-tawf-gold', subtitle: 'text-tawf-ink' },
  ink: { title: 'text-white', badge: 'text-tawf-gold', subtitle: 'text-tawf-sand' },
  green: { title: 'text-white', badge: 'text-tawf-gold', subtitle: 'text-tawf-sand' }
};

export default function PageHero({
  badge,
  title,
  subtitle,
  description,
  background = 'sand'
}: PageHeroProps) {
  const styles = textStyles[background];
  const isDark = background === 'ink' || background === 'green';

  return (
    <section className={`py-24 md:py-32 px-6 ${bgStyles[background]} relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] border border-current rounded-full absolute transform -translate-y-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {badge && (
            <div className="flex items-center gap-3 mb-8">
              <div className={`h-px w-12 bg-${isDark ? 'white/20' : 'tawf-gold'}`}></div>
              <span className={`text-sm font-semibold tracking-[0.2em] uppercase ${styles.badge}`}>{badge}</span>
            </div>
          )}

          <h1 className={`text-5xl md:text-7xl font-light leading-[1.1] tracking-tight ${styles.title} mb-8`}>
            {title}
          </h1>

          {subtitle && (
            <p className={`text-2xl font-medium ${styles.subtitle} mb-8`}>
              {subtitle}
            </p>
          )}

          {description && (
            <p className={`text-xl ${isDark ? 'text-white/80' : 'text-tawf-muted'} font-light leading-relaxed max-w-3xl`}>
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
