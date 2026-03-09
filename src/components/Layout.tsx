import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, X, Menu } from 'lucide-react';
import { useSubdomain } from '../hooks/useSubdomain';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { hash } = useLocation();
  const { subdomain } = useSubdomain();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [useLocation().pathname]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-tawf-gold/30 selection:text-tawf-green bg-tawf-sand">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-tawf-sand/90 backdrop-blur-md border-b border-tawf-green/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {subdomain ? (
            <a href="https://tawf.foundation" className="font-serif text-2xl font-medium tracking-wide text-tawf-green">
              Tawf Foundation
            </a>
          ) : (
            <Link to="/" className="font-serif text-2xl font-medium tracking-wide text-tawf-green">
              Tawf Foundation
            </Link>
          )}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {!subdomain && (
              <>
                <Link to="/#mission" className="text-sm font-medium tracking-widest uppercase text-tawf-ink/70 hover:text-tawf-green transition-colors">Mission</Link>
                <Link to="/#governance" className="text-sm font-medium tracking-widest uppercase text-tawf-ink/70 hover:text-tawf-green transition-colors">Governance</Link>
              </>
            )}

            {/* Programs Dropdown */}
            <div className="relative">
              <button
                className="text-sm font-medium tracking-widest uppercase text-tawf-ink/70 hover:text-tawf-green transition-colors flex items-center gap-1"
                onClick={() => setProgramsOpen(!programsOpen)}
              >
                Programs
                <ChevronDown className="w-4 h-4" />
              </button>
              {programsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-tawf-green/10 py-2">
                  <Link
                    to="/zakat"
                    className="block px-4 py-2 text-sm text-tawf-ink/70 hover:text-tawf-green hover:bg-tawf-sand/50"
                    onClick={() => setProgramsOpen(false)}
                  >
                    Zakat
                  </Link>
                  <Link
                    to="/qurban"
                    className="block px-4 py-2 text-sm text-tawf-ink/70 hover:text-tawf-green hover:bg-tawf-sand/50"
                    onClick={() => setProgramsOpen(false)}
                  >
                    Qurban
                  </Link>
                  <Link
                    to="/research"
                    className="block px-4 py-2 text-sm text-tawf-ink/70 hover:text-tawf-green hover:bg-tawf-sand/50"
                    onClick={() => setProgramsOpen(false)}
                  >
                    Research
                  </Link>
                </div>
              )}
            </div>

            <Link to="/glossary" className="text-sm font-medium tracking-widest uppercase text-tawf-ink/70 hover:text-tawf-green transition-colors">Glossary</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/manifesto" className="flex items-center gap-2 border border-tawf-green text-tawf-green px-6 py-2.5 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-tawf-green hover:text-tawf-sand transition-all duration-300">
              Read the Manifesto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 text-tawf-green min-h-[48px] min-w-[48px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-tawf-green/10 bg-white">
            <div className="px-6 py-4 space-y-4">
              {!subdomain && (
                <>
                  <Link to="/#mission" className="block text-sm font-medium tracking-widest uppercase text-tawf-ink/70 hover:text-tawf-green">Mission</Link>
                  <Link to="/#governance" className="block text-sm font-medium tracking-widest uppercase text-tawf-ink/70 hover:text-tawf-green">Governance</Link>
                </>
              )}
              <div className="pt-4 border-t border-tawf-green/10">
                <p className="text-xs font-semibold tracking-widest uppercase text-tawf-gold mb-3">Programs</p>
                <div className="space-y-3 pl-2">
                  <Link to="/zakat" className="block text-sm text-tawf-ink/70 hover:text-tawf-green">Zakat</Link>
                  <Link to="/qurban" className="block text-sm text-tawf-ink/70 hover:text-tawf-green">Qurban</Link>
                  <Link to="/research" className="block text-sm text-tawf-ink/70 hover:text-tawf-green">Research</Link>
                </div>
              </div>
              <Link to="/glossary" className="block text-sm font-medium tracking-widest uppercase text-tawf-ink/70 hover:text-tawf-green">Glossary</Link>
              <Link to="/manifesto" className="block text-sm font-medium tracking-widest uppercase text-tawf-green border border-tawf-green px-6 py-2.5 rounded-full text-center">Read the Manifesto</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-tawf-ink text-white/60 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-xl font-medium tracking-wide text-white mb-6">
              Tawf Foundation
            </h3>
            <p className="text-sm max-w-sm leading-relaxed">
              The non-profit, public-trust cornerstone of the Tawf ecosystem. Generating legitimacy, trust, and genuine community ownership over ethical Web3 finance.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium tracking-widest uppercase text-xs mb-6">Foundation</h4>
            <ul className="space-y-4 text-sm">
              {!subdomain && (
                <>
                  <li><Link to="/#mission" className="hover:text-tawf-gold transition-colors">Our Mission</Link></li>
                  <li><Link to="/#governance" className="hover:text-tawf-gold transition-colors">How Governance Works</Link></li>
                  <li><Link to="/#organization" className="hover:text-tawf-gold transition-colors">Organizational Structure</Link></li>
                  <li><Link to="/#ecosystem" className="hover:text-tawf-gold transition-colors">Tawf ID (TID)</Link></li>
                </>
              )}
              {subdomain && (
                <li><a href="https://tawf.foundation/#mission" className="hover:text-tawf-gold transition-colors">Our Mission</a></li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium tracking-widest uppercase text-xs mb-6">Programs & Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/zakat" className="hover:text-tawf-gold transition-colors">Zakat Program</Link></li>
              <li><Link to="/qurban" className="hover:text-tawf-gold transition-colors">Qurban</Link></li>
              <li><Link to="/research" className="hover:text-tawf-gold transition-colors">Research</Link></li>
              <li><Link to="/glossary" className="hover:text-tawf-gold transition-colors">Glossary</Link></li>
              <li><Link to="/manifesto" className="hover:text-tawf-gold transition-colors">Read the Manifesto</Link></li>
              <li><a href="https://tawf.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-tawf-gold transition-colors">Tawf Labs</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs">
          <p>&copy; {new Date().getFullYear()} Tawf Foundation. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
