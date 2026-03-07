import React, { useState, useRef, useEffect } from 'react';
import { Info } from 'lucide-react';

interface TooltipProps {
  content: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Tooltip({ content, children, className = '' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const [position, setPosition] = useState<'top' | 'bottom' | 'left' | 'right'>('top');

  useEffect(() => {
    if (isVisible && tooltipRef.current && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      // Check if there's enough space above
      if (rect.top < tooltipRect.height + 10) {
        setPosition('bottom');
      } else {
        setPosition('top');
      }
    }
  }, [isVisible]);

  return (
    <span
      ref={triggerRef}
      className={`inline-flex items-center ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children || (
        <button
          type="button"
          className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-tawf-gold/50 text-tawf-gold hover:bg-tawf-gold hover:text-tawf-green transition-colors"
          onClick={(e) => {
            e.preventDefault();
            setIsVisible(!isVisible);
          }}
          aria-label="Show more information"
        >
          <Info className="w-3 h-3" />
        </button>
      )}

      {isVisible && (
        <div
          ref={tooltipRef}
          className={`absolute z-50 w-72 p-4 bg-tawf-ink text-tawf-sand text-sm rounded-xl shadow-xl ${
            position === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
          }`}
          role="tooltip"
        >
          <div className="relative">
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-8 h-8" />
            {content}
          </div>
        </div>
      )}
    </span>
  );
}
