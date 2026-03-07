import React, { useState, useMemo } from 'react';
import { X, Search } from 'lucide-react';
import { glossaryTerms, getAllTerms, type GlossaryTerm } from '../../content/glossary';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTerm?: string;
}

export default function GlossaryModal({ isOpen, onClose, initialTerm }: GlossaryModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTerm, setSelectedTerm] = useState<string | null>(initialTerm || null);

  const filteredTerms = useMemo(() => {
    if (!searchQuery) {
      return Object.entries(glossaryTerms);
    }
    const query = searchQuery.toLowerCase();
    return Object.entries(glossaryTerms).filter(
      ([key, term]) =>
        term.term.toLowerCase().includes(query) ||
        term.definition.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const selectedTermData = selectedTerm ? glossaryTerms[selectedTerm] : null;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-tawf-ink/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-4xl w-full my-8 rounded-2xl shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-10 text-tawf-muted hover:text-tawf-ink md:hidden"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Sidebar - Term List */}
        <div className="w-full md:w-1/3 border-r border-tawf-green/10 flex flex-col bg-tawf-sand/30 md:rounded-l-2xl">
          {/* Search */}
          <div className="p-4 border-b border-tawf-green/10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-tawf-muted" />
              <input
                type="text"
                placeholder="Search terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-tawf-green/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-tawf-gold/50"
              />
            </div>
          </div>

          {/* Term List */}
          <div className="flex-1 overflow-y-auto p-2">
            {filteredTerms.length === 0 ? (
              <p className="text-center text-tawf-muted py-8 text-sm">No terms found</p>
            ) : (
              <div className="space-y-1">
                {filteredTerms.map(([key, term]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedTerm(key)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                      selectedTerm === key
                        ? 'bg-tawf-green text-white'
                        : 'text-tawf-ink/80 hover:bg-white hover:text-tawf-green'
                    }`}
                  >
                    {term.term}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main Content - Term Detail */}
        <div className="w-full md:w-2/3 flex flex-col md:rounded-r-2xl">
          {/* Close button for desktop */}
          <button
            className="absolute top-4 right-4 z-10 hidden md:block text-tawf-muted hover:text-tawf-ink"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {selectedTermData ? (
            <div className="flex-1 overflow-y-auto p-8">
              <h3 className="text-3xl font-serif text-tawf-green mb-2">{selectedTermData.term}</h3>

              {selectedTermData.pronunciation && (
                <p className="text-tawf-gold italic mb-6">/{selectedTermData.pronunciation}/</p>
              )}

              <div className="prose prose-stone max-w-none">
                <p className="text-tawf-ink/80 text-lg leading-relaxed mb-6">
                  {selectedTermData.definition}
                </p>

                {selectedTermData.context && (
                  <div className="bg-tawf-sand/50 rounded-xl p-6 mb-6">
                    <p className="text-sm font-semibold text-tawf-green mb-2">In Context</p>
                    <p className="text-tawf-muted leading-relaxed">{selectedTermData.context}</p>
                  </div>
                )}

                {selectedTermData.related && selectedTermData.related.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-tawf-gold mb-4">
                      Related Terms
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedTermData.related.map((related) => {
                        const relatedData = glossaryTerms[related];
                        return relatedData ? (
                          <button
                            key={related}
                            onClick={() => setSelectedTerm(related)}
                            className="bg-tawf-sand/50 text-tawf-green px-4 py-2 rounded-full text-sm hover:bg-tawf-sand transition-colors"
                          >
                            {relatedData.term}
                          </button>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-tawf-sand/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-tawf-gold" />
                </div>
                <h4 className="text-xl font-serif text-tawf-green mb-2">Glossary</h4>
                <p className="text-tawf-muted max-w-sm">
                  Islamic finance terms explained in plain language. Select a term from the list to learn more.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
