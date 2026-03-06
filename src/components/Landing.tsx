import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, Scale, HeartHandshake, Landmark, BookOpen, ArrowRight, 
  Globe, ChevronRight, Users, Fingerprint, Coins, Building2, 
  FileCheck, Network, Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
          <div className="w-[800px] h-[800px] border-[1px] border-tawf-green rounded-full absolute transform -translate-y-1/4"></div>
          <div className="w-[1200px] h-[1200px] border-[1px] border-tawf-green rounded-full absolute transform -translate-y-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[1px] w-12 bg-tawf-gold"></div>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-tawf-gold">The Public Trust Cornerstone</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light leading-[1.1] tracking-tight text-tawf-green mb-8">
              The Digital Reincarnation of <span className="italic text-tawf-gold">Baitul Maal.</span>
            </h1>
            
            <p className="text-xl text-tawf-muted font-light leading-relaxed mb-10 max-w-lg">
              The non-profit cornerstone of the Tawf ecosystem. We build legitimacy, trust, and community ownership for the future of ethical Web3 finance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/manifesto" className="bg-tawf-green text-tawf-sand px-8 py-4 rounded-full text-base font-medium tracking-widest uppercase hover:bg-tawf-green-light transition-colors flex items-center justify-center gap-2">
                Read the Manifesto
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block h-[600px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-tawf-green/5 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1000&auto=format&fit=crop" 
              alt="Islamic Architecture" 
              className="oval-mask w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-12 -left-12 bg-white p-6 rounded-2xl shadow-xl border border-black/5 flex items-center gap-4 max-w-xs">
              <div className="w-14 h-14 bg-tawf-sand rounded-full flex items-center justify-center shrink-0">
                <Shield className="w-7 h-7 text-tawf-gold" />
              </div>
              <div>
                <p className="text-sm font-bold tracking-wider uppercase text-tawf-green mb-1">Structurally Enforced</p>
                <p className="text-base text-tawf-muted leading-tight">Ethical finance protected by unconditional scholarly authority.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="bg-white py-24 border-y border-tawf-green/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-tawf-green mb-6">Our Mission</h2>
            <p className="text-tawf-muted text-xl leading-relaxed">
              Ethical finance must be structurally enforced, not just promised. We protect the framework, ensure independent governance, and empower our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8 text-tawf-gold" />,
                title: "Protect the Framework",
                desc: "Owning and protecting the TAWF Sharia Framework as a transparent, public standard."
              },
              {
                icon: <Scale className="w-8 h-8 text-tawf-gold" />,
                title: "Independent Governance",
                desc: "Providing Sharia governance that no commercial interest can compromise."
              },
              {
                icon: <Users className="w-8 h-8 text-tawf-gold" />,
                title: "Empower the Community",
                desc: "Empowering the Tawf community through transparent, identity-based democratic participation."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-10 border border-tawf-green/10 rounded-2xl bg-tawf-sand/30"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif font-medium text-tawf-green mb-3">{item.title}</h3>
                <p className="text-tawf-muted leading-relaxed text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Framework Section */}
      <section id="framework" className="py-24 bg-tawf-green text-tawf-sand relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-tawf-gold/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
                  The TAWF Sharia Framework
                </h2>
                <p className="text-tawf-sand/80 text-xl font-light leading-relaxed mb-8">
                  A rigorous, transparent, and publicly auditable methodology for screening Web3 products against the principles of Islamic finance.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-serif text-tawf-gold mb-8">The Seven Foundational Pillars</h3>
              <div className="space-y-4">
                {[
                  { title: "No Riba", desc: "Entirely free of interest-based mechanics." },
                  { title: "No Gharar", desc: "No excessive uncertainty or ambiguity." },
                  { title: "No Maysir", desc: "No gambling or zero-sum speculation." },
                  { title: "Real Asset Backing", desc: "Tokens must represent underlying real-world value." },
                  { title: "Transparent Governance", desc: "On-chain auditability is non-negotiable." },
                  { title: "Social Impact & Maslaha", desc: "Must demonstrate genuine public benefit." },
                  { title: "Halal Sector Compliance", desc: "No exposure to prohibited industries." }
                ].map((pillar, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-center gap-6 p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors"
                  >
                    <div className="text-4xl font-serif text-tawf-gold font-light opacity-50">0{idx + 1}</div>
                    <div>
                      <h4 className="text-xl font-medium text-white mb-1">{pillar.title}</h4>
                      <p className="text-tawf-sand/70 text-lg">{pillar.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section id="governance" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-tawf-green mb-6">Organizational Structure</h2>
            <p className="text-tawf-muted text-xl max-w-2xl mx-auto">
              Three distinct governing bodies with defined authority and deliberate checks against unchecked power.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 border border-tawf-green/10 rounded-2xl bg-tawf-sand/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Shield className="w-32 h-32 text-tawf-green" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-tawf-green mb-2">Sharia Advisory Board</h3>
              <p className="text-sm font-bold tracking-wider uppercase text-tawf-gold mb-6">Foundation Chairmen</p>
              <p className="text-tawf-muted text-lg leading-relaxed">
                Islamic scholars whose decisions on all Sharia matters are final, binding, and beyond commercial override.
              </p>
            </div>

            <div className="p-10 border border-tawf-green/10 rounded-2xl bg-tawf-sand/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Building2 className="w-32 h-32 text-tawf-green" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-tawf-green mb-2">Board of Trustees</h3>
              <p className="text-sm font-bold tracking-wider uppercase text-tawf-gold mb-6">Legal & Financial</p>
              <p className="text-tawf-muted text-lg leading-relaxed">
                Handles legal governance, financial oversight, and executive accountability. Absolute separation from Sharia authority.
              </p>
            </div>

            <div className="p-10 border border-tawf-green/10 rounded-2xl bg-tawf-sand/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Network className="w-32 h-32 text-tawf-green" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-tawf-green mb-2">The TAWF DAO</h3>
              <p className="text-sm font-bold tracking-wider uppercase text-tawf-gold mb-6">Community Governance</p>
              <p className="text-tawf-muted text-lg leading-relaxed">
                The community's voice. Gated by Tawf ID (TID), where 1 TID equals 1 Vote. No token-weighting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tawf ID & Ecosystem */}
      <section id="ecosystem" className="py-24 bg-tawf-sand border-t border-tawf-green/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-tawf-green rounded-full flex items-center justify-center">
                  <Fingerprint className="w-7 h-7 text-tawf-gold" />
                </div>
                <h2 className="text-4xl font-serif text-tawf-green">The Tawf ID (TID)</h2>
              </div>
              <h3 className="text-2xl font-medium text-tawf-ink mb-4">Identity, Not a Token</h3>
              <p className="text-tawf-muted text-lg leading-relaxed mb-6">
                The credential that grants access to the TAWF DAO. TID is a Soulbound NFT built on Zero-Knowledge Decentralized Identity infrastructure. It is permanently bound to one wallet, non-transferable, and carries zero monetary value.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl border border-tawf-green/10 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-tawf-green rounded-full flex items-center justify-center">
                  <Lock className="w-7 h-7 text-tawf-gold" />
                </div>
                <h2 className="text-3xl font-serif text-tawf-green">Tawf Labs</h2>
              </div>
              <p className="text-tawf-muted text-lg leading-relaxed mb-6">
                The Foundation and Tawf Labs are separate legal entities. <strong className="text-tawf-ink font-medium">The Foundation is the mission. Labs is the engine.</strong>
              </p>
              <ul className="space-y-4 text-lg text-tawf-muted">
                <li className="flex items-start gap-3">
                  <FileCheck className="w-6 h-6 text-tawf-gold shrink-0 mt-1" />
                  <span>Labs is licensed to build commercial products.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-tawf-gold shrink-0 mt-1" />
                  <span>Labs cannot modify the Framework or override Foundation governance.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-tawf-green text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <div className="w-[600px] h-[600px] border-[1px] border-tawf-gold rounded-full absolute"></div>
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-tawf-sand mb-6">A Living Institution</h2>
          <p className="text-tawf-sand/80 mb-10 text-xl font-light leading-relaxed">
            Rooted in centuries of Islamic cooperative tradition, rebuilt for the digital age, and designed to outlast any single product, market cycle, or technology wave.
          </p>
          <Link to="/manifesto" className="bg-tawf-gold text-tawf-green px-10 py-5 rounded-full text-base font-medium tracking-widest uppercase hover:bg-white transition-colors inline-flex items-center gap-2">
            Read Our Manifesto
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
