import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface PlatformCardProps {
  icon: React.ReactNode;
  name: string;
  tagline: string;
  description: string;
  tags?: string[];
  href?: string;
  cta?: string;
  index?: number;
  dark?: boolean;
}

export default function PlatformCard({
  icon,
  name,
  tagline,
  description,
  tags = [],
  href,
  cta = 'Visit Platform',
  index = 0,
  dark = false
}: PlatformCardProps) {
  const isExternal = !!href && /^https?:\/\//.test(href);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group flex flex-col h-full p-7 rounded-2xl border card-hover ${
        dark
          ? 'bg-white/5 border-white/10 hover:bg-white/10'
          : 'bg-white/50 border-tawf-green/10'
      }`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
        dark ? 'bg-white/10 text-tawf-gold' : 'bg-tawf-green/5 text-tawf-green'
      }`}>
        {icon}
      </div>

      <h3 className={`text-xl font-serif mb-1 ${dark ? 'text-white' : 'text-tawf-green'}`}>
        {name}
      </h3>
      <p className="eyebrow text-tawf-gold mb-4">{tagline}</p>

      <p className={`text-sm leading-relaxed mb-5 ${dark ? 'text-tawf-sand/70' : 'text-tawf-muted'}`}>
        {description}
      </p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full ${
                dark ? 'bg-white/10 text-tawf-sand/80' : 'bg-tawf-green/5 text-tawf-green/80'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {href && (
        <a
          href={href}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className={`mt-auto inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
            dark ? 'text-tawf-gold hover:text-white' : 'text-tawf-green hover:text-tawf-gold'
          }`}
        >
          {cta}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      )}
    </motion.div>
  );
}