import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { hash } = useLocation();

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

  return (
    <div className="min-h-screen flex flex-col selection:bg-tawf-gold/30 selection:text-tawf-green bg-tawf-sand">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-tawf-sand/90 backdrop-blur-md border-b border-tawf-green/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl font-medium tracking-wide text-tawf-green">
            Tawf Foundation
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/#mission" className="text-sm font-medium tracking-widest uppercase text-tawf-ink/70 hover:text-tawf-green transition-colors">Mission</Link>
            <Link to="/#framework" className="text-sm font-medium tracking-widest uppercase text-tawf-ink/70 hover:text-tawf-green transition-colors">Framework</Link>
            <Link to="/#governance" className="text-sm font-medium tracking-widest uppercase text-tawf-ink/70 hover:text-tawf-green transition-colors">Governance</Link>
            <Link to="/#ecosystem" className="text-sm font-medium tracking-widest uppercase text-tawf-ink/70 hover:text-tawf-green transition-colors">Ecosystem</Link>
          </div>

          <Link to="/manifesto" className="hidden md:flex items-center gap-2 border border-tawf-green text-tawf-green px-6 py-2.5 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-tawf-green hover:text-tawf-sand transition-all duration-300">
            Read the Manifesto
          </Link>
        </div>
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
              <li><Link to="/#mission" className="hover:text-tawf-gold transition-colors">Our Mission</Link></li>
              <li><Link to="/#framework" className="hover:text-tawf-gold transition-colors">Sharia Framework</Link></li>
              <li><Link to="/#governance" className="hover:text-tawf-gold transition-colors">Governance Structure</Link></li>
              <li><Link to="/#ecosystem" className="hover:text-tawf-gold transition-colors">Tawf ID (TID)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium tracking-widest uppercase text-xs mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/manifesto" className="hover:text-tawf-gold transition-colors">Read the Manifesto</Link></li>
              <li><a href="#" className="hover:text-tawf-gold transition-colors">Certification Portal</a></li>
              <li><a href="https://tawf.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-tawf-gold transition-colors">Tawf Labs</a></li>
              <li><a href="#" className="hover:text-tawf-gold transition-colors">Contact Us</a></li>
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
