import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, ArrowRight, X } from 'lucide-react';
import PageHero from '../ui/PageHero';
import Section from '../ui/Section';
import { glossaryTerms, type GlossaryTerm } from '../../content/glossary';

export default function Glossary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);

  const filteredTerms = useMemo(() => {
    if (!searchQuery) {
      return Object.entries(glossaryTerms);
    }
    const query = searchQuery.toLowerCase();
    return Object.entries(glossaryTerms).filter(
      ([key, term]) =>
        term.term.toLowerCase().includes(query) ||
        term.definition.toLowerCase().includes(query) ||
        (term.context && term.context.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const selectedTermData = selectedTerm ? glossaryTerms[selectedTerm] : null;

  return (
    <>
      <PageHero
        badge="Islamic Finance Terms"
        title="Glossary"
        subtitle="Plain language explanations"
        description="Islamic finance terms explained in simple, accessible language. Click on any term to see its definition, pronunciation, and context."
      />

      {/* Search Section */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-tawf-muted" />
            <input
              type="text"
              placeholder="Search Islamic finance terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-white border border-tawf-green/10 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-tawf-gold/50 focus:border-tawf-gold"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-tawf-muted hover:text-tawf-ink"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </Section>

      {/* All Terms */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-green mb-6">
            {searchQuery ? `Search Results` : `All Terms`}
          </h2>
          <p className="text-tawf-muted text-xl max-w-3xl mx-auto">
            {searchQuery
              ? `Found ${filteredTerms.length} term${filteredTerms.length !== 1 ? 's' : ''} matching "${searchQuery}"`
              : `Browse all Islamic finance and Web3 terms in our glossary.`
            }
          </p>
        </div>

        {filteredTerms.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-tawf-muted text-xl mb-4">No terms found matching "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-tawf-green hover:text-tawf-gold font-medium underline"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTerms.map(([key, term], idx) => (
              <motion.button
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
                onClick={() => setSelectedTerm(key)}
                className={`p-6 rounded-2xl border text-left transition-all hover:shadow-lg ${
                  selectedTerm === key
                    ? 'bg-tawf-green border-tawf-green'
                    : 'bg-tawf-sand/30 border-tawf-green/10 hover:border-tawf-green/30'
                }`}
              >
                <h3 className={`font-serif text-lg mb-2 ${
                  selectedTerm === key
                    ? 'text-white'
                    : 'text-tawf-green'
                }`}>
                  {term.term}
                </h3>
                <p className={`text-sm line-clamp-2 ${
                  selectedTerm === key
                    ? 'text-white/80'
                    : 'text-tawf-muted'
                }`}>
                  {term.definition}
                </p>
              </motion.button>
            ))}
          </div>
        )}
      </Section>

      {/* Featured Categories */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-green mb-6">Browse by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Obligations', terms: ['Zakat', 'Qurban', 'Nisab', 'Asnaf'] },
            { title: 'Endowments', terms: ['Waqf', 'Wakaf Produktif'] },
            { title: 'Finance', terms: ['Riba', 'Gharar', 'Maysir', 'Qardhul Hasan'] },
            { title: 'Governance', terms: ['Sharia', 'DAO', 'Amil', 'Musyawarah'] }
          ].map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-white rounded-2xl border border-tawf-green/10"
            >
              <h3 className="font-serif text-xl text-tawf-green mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.terms.map((termName) => {
                  const termKey = Object.keys(glossaryTerms).find(k => glossaryTerms[k].term === termName);
                  return termKey ? (
                    <button
                      key={termKey}
                      onClick={() => setSelectedTerm(termKey)}
                      className="block w-full text-left text-sm text-tawf-muted hover:text-tawf-green transition-colors"
                    >
                      • {termName}
                    </button>
                  ) : null;
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Term Detail Modal */}
      {selectedTerm && selectedTermData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-tawf-ink/80 backdrop-blur-sm"
          onClick={() => setSelectedTerm(null)}
        >
          <div
            className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-8 md:p-12 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-tawf-muted hover:text-tawf-ink"
              onClick={() => setSelectedTerm(null)}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-3xl md:text-4xl font-serif text-tawf-green mb-2">{selectedTermData.term}</h2>

            {selectedTermData.pronunciation && (
              <p className="text-tawf-gold italic mb-6">/{selectedTermData.pronunciation}/</p>
            )}

            <p className="text-tawf-ink/80 text-lg leading-relaxed mb-8">{selectedTermData.definition}</p>

            {selectedTermData.context && (
              <div className="bg-tawf-sand/50 rounded-xl p-6 mb-8">
                <p className="text-sm font-semibold text-tawf-green mb-2">In Context</p>
                <p className="text-tawf-muted leading-relaxed">{selectedTermData.context}</p>
              </div>
            )}

            {selectedTermData.related && selectedTermData.related.length > 0 && (
              <div className="pt-6 border-t border-tawf-green/10">
                <p className="text-xs font-semibold tracking-wider uppercase text-tawf-gold mb-4">Related Terms</p>
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
      )}

      {/* CTA */}
      <Section background="green">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-tawf-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-gold mb-6">Learn More About Tawf</h2>
          <p className="text-tawf-sand/80 text-xl mb-10 max-w-2xl mx-auto">
            Explore our zakat programs or read our manifesto to learn more about Tawf Islamic Foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-tawf-gold text-tawf-green px-8 py-4 rounded-full text-base font-medium tracking-widest uppercase hover:bg-white transition-colors"
            >
              Back to Home
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/zakat"
              className="inline-flex text-white items-center gap-2 border border-white/30 px-8 py-4 rounded-full text-base font-medium tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              Learn About Zakat
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
