import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  /** @deprecated use `eyebrow` */
  badge?: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
  align?: 'center' | 'left';
}

export default function SectionHeader({
  eyebrow,
  badge,
  title,
  description,
  centered = true,
  className = '',
  align
}: SectionHeaderProps) {
  const isCentered = align ? align === 'center' : centered;
  const label = eyebrow ?? badge;
  const containerClass = isCentered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl';
  const rowClass = isCentered ? 'justify-center' : '';

  return (
    <div className={`${containerClass} mb-14 md:mb-16 ${className}`.trim()}>
      {label && (
        <div className={`flex items-center gap-2.5 mb-5 ${rowClass}`.trim()}>
          <span className="w-1.5 h-1.5 rounded-full bg-tawf-gold" aria-hidden="true" />
          <span className="eyebrow text-tawf-gold">{label}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] text-tawf-green [&>em]:italic [&>em]:text-tawf-gold">
        {title}
      </h2>
      {description && (
        <p className="text-tawf-muted text-lg md:text-xl leading-relaxed mt-5">
          {description}
        </p>
      )}
    </div>
  );
}