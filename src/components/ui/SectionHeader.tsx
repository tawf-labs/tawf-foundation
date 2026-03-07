import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
  centered = true,
  className = ''
}: SectionHeaderProps) {
  const containerClass = centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl';

  return (
    <div className={`${containerClass} mb-16 ${className}`.trim()}>
      {badge && (
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-tawf-gold"></div>
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-tawf-gold">{badge}</span>
          <div className="h-px w-12 bg-tawf-gold"></div>
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-light text-tawf-green mb-6">{title}</h2>
      {description && (
        <p className="text-tawf-muted text-xl leading-relaxed">{description}</p>
      )}
    </div>
  );
}
