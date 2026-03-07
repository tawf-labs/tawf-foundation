import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { getTerm } from '../../content/glossary';

interface InfoTooltipProps {
  term: string;
  className?: string;
  showPronunciation?: boolean;
}

export default function InfoTooltip({ term, className = '', showPronunciation = false }: InfoTooltipProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const termData = getTerm(term);

  if (!termData) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        className={`inline-flex items-center gap-1 text-tawf-gold hover:text-tawf-green transition-colors ${className}`}
        onClick={() => setIsModalOpen(true)}
        aria-label={`Learn more about ${termData.term}`}
      >
        <Info className="w-4 h-4" />
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-tawf-ink/80 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white max-w-md w-full rounded-2xl p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-tawf-muted hover:text-tawf-ink"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-2xl font-serif text-tawf-green mb-2">{termData.term}</h3>

            {showPronunciation && termData.pronunciation && (
              <p className="text-sm text-tawf-gold italic mb-4">/{termData.pronunciation}/</p>
            )}

            <p className="text-tawf-ink/80 leading-relaxed mb-6">{termData.definition}</p>

            {termData.context && (
              <div className="bg-tawf-sand/50 rounded-xl p-4">
                <p className="text-sm text-tawf-muted">
                  <span className="font-semibold text-tawf-green">In context:</span> {termData.context}
                </p>
              </div>
            )}

            {termData.related && termData.related.length > 0 && (
              <div className="mt-6 pt-6 border-t border-tawf-green/10">
                <p className="text-xs font-semibold tracking-wider uppercase text-tawf-gold mb-3">Related Terms</p>
                <div className="flex flex-wrap gap-2">
                  {termData.related.map((related) => {
                    const relatedData = getTerm(related);
                    return relatedData ? (
                      <span
                        key={related}
                        className="text-sm bg-tawf-sand/50 text-tawf-green px-3 py-1 rounded-full"
                      >
                        {relatedData.term}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
