import React from 'react';
import { motion } from 'motion/react';
import {
  Shield, HeartHandshake, Landmark, ArrowRight,
  ChevronRight, Fingerprint, Coins, Building2,
  Network, HandHeart, Sparkles, TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import InfoTooltip from '../ui/InfoTooltip';

// Consistent spacing values
const SECTION_PADDING = "py-16 md:py-24";
const CONTAINER_PADDING = "px-6";
const MAX_WIDTH = "max-w-7xl";

// Consistent border radius
const RADIUS_CARD = "rounded-2xl";
const RADIUS_BUTTON = "rounded-full";
const RADIUS_BOX = "rounded-2xl";

export default function Landing() {
  return (
    <>
      {/* Hero Section */}
      <section className={`${SECTION_PADDING} ${CONTAINER_PADDING} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
          <div className="w-[90vw] max-w-[600px] h-[90vw] max-h-[600px] md:w-[800px] md:h-[800px] border border-tawf-green rounded-full absolute transform -translate-y-1/4"></div>
          <div className="w-[120vw] max-w-[900px] h-[120vw] max-h-[900px] md:w-[1200px] md:h-[1200px] border border-tawf-green rounded-full absolute transform -translate-y-1/4"></div>
        </div>

        <div className={`${MAX_WIDTH} mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-tawf-gold"></div>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-tawf-gold">The Public Trust Cornerstone</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-tawf-green mb-8">
              <span className="inline-flex items-center gap-2">
                Baitul Maal
                <InfoTooltip term="baitul-maal" className="mt-2" />
              </span>
              , <span className="italic text-tawf-gold">rebuilt for the digital age.</span>
            </h1>

            <p className="text-xl text-tawf-muted font-light leading-relaxed mb-10 max-w-lg">
              The Tawf Foundation is the Baitul Maal - the social and charitable soul of the ecosystem. We collect{' '}
              <span className="inline-flex items-center gap-1">
                zakat
                <InfoTooltip term="zakat" />
              </span>
              , manage{' '}
              <span className="inline-flex items-center gap-1">
                waqf
                <InfoTooltip term="waqf" />
              </span>
              , and operate{' '}
              <span className="inline-flex items-center gap-1">
                sadaqah
                <InfoTooltip term="sadaqah" />
              </span>
              {' '}programs. Not as promises. As on-chain reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/manifesto" className={`bg-tawf-green text-tawf-sand px-8 py-4 ${RADIUS_BUTTON} text-base font-medium tracking-widest uppercase hover:bg-tawf-green-light transition-colors flex items-center justify-center gap-2`}>
                Read the Manifesto
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-[300px] md:h-[450px] lg:h-[600px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-tawf-green/5 rounded-full blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1000&auto=format&fit=crop"
              alt="Islamic Architecture"
              className="oval-mask w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className={`bg-white ${SECTION_PADDING} border-y border-tawf-green/10`}>
        <div className={`${MAX_WIDTH} mx-auto ${CONTAINER_PADDING}`}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-tawf-green mb-6">What We Actually Do</h2>
            <p className="text-tawf-muted text-xl leading-relaxed">
              We don't just certify ethical finance. We operate it.{' '}
              <span className="inline-flex items-center gap-1">
                Zakat
                <InfoTooltip term="zakat" />
              </span>
              {' '}collection,{' '}
              <span className="inline-flex items-center gap-1">
                waqf
                <InfoTooltip term="waqf" />
              </span>
              {' '}trusteeship,{' '}
              <span className="inline-flex items-center gap-1">
                sadaqah
                <InfoTooltip term="sadaqah" />
              </span>
              {' '}programs, and{' '}
              <span className="inline-flex items-center gap-1">
                qardhul hasan
                <InfoTooltip term="qardhul-hasan" />
              </span>
              {' '}lending - live on-chain, every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Coins className="w-8 h-8 text-tawf-gold" />,
                title: "Zakat",
                term: "zakat",
                desc: "We serve as the official amil, collecting and distributing zakat from Labs revenue to eligible asnaf.",
                detail: "On-chain & fully auditable"
              },
              {
                icon: <Landmark className="w-8 h-8 text-tawf-gold" />,
                title: "Waqf",
                term: "waqf",
                desc: "Trustee for all waqf assets, including wakaf produktif that generates perpetual community benefit.",
                detail: "Held in perpetual trust"
              },
              {
                icon: <HeartHandshake className="w-8 h-8 text-tawf-gold" />,
                title: "Sadaqah",
                term: "sadaqah",
                desc: "Community grant programs for education, BMT digitization, and scholarly research.",
                detail: "DAO-informed selection"
              },
              {
                icon: <HandHeart className="w-8 h-8 text-tawf-gold" />,
                title: "Qardhul Hasan",
                term: "qardhul-hasan",
                desc: "Interest-free benevolent lending for underserved communities and early-stage BMTs.",
                detail: "Ethical microfinance"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`p-8 border border-tawf-green/10 ${RADIUS_CARD} bg-tawf-sand/30`}
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-5 shadow-sm">
                  {item.icon}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-serif font-medium text-tawf-green">{item.title}</h3>
                  <InfoTooltip term={item.term} />
                </div>
                <p className="text-tawf-muted leading-relaxed mb-4">{item.desc}</p>
                <p className="text-sm font-semibold tracking-wider uppercase text-tawf-gold">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation & Labs Relationship */}
      <section className={`${SECTION_PADDING} bg-tawf-ink text-tawf-sand relative overflow-hidden`}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-tawf-gold/30 to-transparent"></div>

        <div className={`${MAX_WIDTH} mx-auto ${CONTAINER_PADDING}`}>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-tawf-gold">The Flow of Obligation</span>
            <h2 className="text-4xl md:text-5xl font-light text-white mt-4 mb-6">From Labs, To the Community</h2>
            <p className="text-tawf-sand/70 text-xl max-w-3xl mx-auto">
              Tawf Labs is the commercial engine. Tawf Foundation is the mission that engine serves. The relationship is architectural, moral, and permanent.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Labs Side */}
            <div className={`bg-white/5 p-10 ${RADIUS_BOX} border border-white/10`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-tawf-green rounded-full flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-tawf-gold" />
                </div>
                <h3 className="text-2xl font-serif text-white">Tawf Labs</h3>
              </div>
              <p className="text-tawf-sand/70 text-lg mb-6">The commercial engine that builds and licenses certified products.</p>
              <ul className="space-y-3 text-tawf-sand/80">
                <li className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-tawf-gold shrink-0" />
                  <span>Certification revenue flows to Foundation</span>
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-tawf-gold shrink-0" />
                  <span>3-8% monthly royalty to Foundation</span>
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-tawf-gold shrink-0" />
                  <span>
                    <span className="inline-flex items-center gap-1">
                      Zakat
                      <InfoTooltip term="zakat" />
                    </span>
                    {' '}calculated and transferred annually
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-tawf-gold shrink-0" />
                  <span>
                    <span className="inline-flex items-center gap-1">
                      Waqf
                      <InfoTooltip term="waqf" />
                    </span>
                    {' '}assets held in Foundation trusteeship
                  </span>
                </li>
              </ul>
            </div>

            {/* Foundation Side */}
            <div className={`bg-tawf-green p-10 ${RADIUS_BOX}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <Landmark className="w-7 h-7 text-tawf-gold" />
                </div>
                <h3 className="text-2xl font-serif text-white">Tawf Foundation</h3>
              </div>
              <p className="text-white/80 text-lg mb-6">The Baitul Maal that transforms profit into purpose.</p>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-tawf-gold shrink-0" />
                  <span>
                    Collects and distributes{' '}
                    <span className="inline-flex items-center gap-1">
                      zakat
                      <InfoTooltip term="zakat" />
                    </span>
                    {' '}to{' '}
                    <span className="inline-flex items-center gap-1">
                      asnaf
                      <InfoTooltip term="asnaf" />
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-tawf-gold shrink-0" />
                  <span>
                    Manages{' '}
                    <span className="inline-flex items-center gap-1">
                      waqf
                      <InfoTooltip term="waqf" />
                    </span>
                    {' '}for perpetual benefit
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-tawf-gold shrink-0" />
                  <span>Owns the TAWF{' '}<span className="inline-flex items-center gap-1">
                    Sharia
                    <InfoTooltip term="sharia" />
                  </span> Framework</span>
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-tawf-gold shrink-0" />
                  <span>
                    Houses the TAWF{' '}
                    <span className="inline-flex items-center gap-1">
                      DAO
                      <InfoTooltip term="dao" />
                    </span>
                    {' '}governance
                  </span>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-tawf-gold font-medium text-lg">Labs is powerful. But the Foundation is sovereign.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-tawf-sand/60 text-lg italic">
              This structure guarantees the community's share cannot be diluted, sold, or set aside.
              <br />Locked into the Foundation by design. Forever.
            </p>
          </div>
        </div>
      </section>

      {/* The Framework Section */}
      <section id="framework" className={`${SECTION_PADDING} bg-tawf-sand relative`}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-tawf-gold/30 to-transparent"></div>

        <div className={`${MAX_WIDTH} mx-auto ${CONTAINER_PADDING}`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight text-tawf-green">
                  The TAWF{' '}
                  <span className="inline-flex items-center gap-1">
                    Sharia
                    <InfoTooltip term="sharia" />
                  </span>
                  {' '}Framework
                </h2>
                <p className="text-tawf-muted text-xl font-light leading-relaxed mb-8">
                  A rigorous, transparent, and publicly auditable methodology for screening Web3 products against Islamic finance principles.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-3xl font-serif text-tawf-green mb-8">The Seven Foundational Pillars</h3>
              <div className="space-y-4">
                {[
                  { title: "No Riba", term: "riba", desc: "Entirely free of interest-based mechanics." },
                  { title: "No Gharar", term: "gharar", desc: "No excessive uncertainty or ambiguity." },
                  { title: "No Maysir", term: "maysir", desc: "No gambling or zero-sum speculation." },
                  { title: "Real Asset Backing", desc: "Tokens must represent underlying real-world value." },
                  { title: "Transparent Governance", desc: "On-chain auditability is non-negotiable." },
                  { title: "Social Impact & Maslaha", term: "maslaha", desc: "Must demonstrate genuine public benefit." },
                  { title: "Halal Sector Compliance", desc: "No exposure to prohibited industries." }
                ].map((pillar, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`flex items-center gap-6 p-6 border border-tawf-green/10 ${RADIUS_CARD} bg-white hover:shadow-lg transition-shadow`}
                  >
                    <div className="text-4xl font-serif text-tawf-gold font-light opacity-50">0{idx + 1}</div>
                    <div>
                      <h4 className="text-xl font-medium text-tawf-green mb-1">
                        {pillar.title}
                        {pillar.term && <InfoTooltip term={pillar.term} />}
                      </h4>
                      <p className="text-tawf-muted text-lg">{pillar.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section id="governance" className={`${SECTION_PADDING} bg-white`}>
        <div className={`${MAX_WIDTH} mx-auto ${CONTAINER_PADDING}`}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-tawf-green mb-6">Organizational Structure</h2>
            <p className="text-tawf-muted text-xl max-w-2xl mx-auto">
              Three distinct governing bodies with defined authority and deliberate checks against unchecked power.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-10 border border-tawf-green/10 ${RADIUS_CARD} bg-tawf-sand/30 relative overflow-hidden group`}>
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Shield className="w-32 h-32 text-tawf-green" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-tawf-green mb-2">
                Sharia Advisory Board
                <InfoTooltip term="sharia" />
              </h3>
              <p className="text-sm font-bold tracking-wider uppercase text-tawf-gold mb-6">Foundation Chairmen</p>
              <p className="text-tawf-muted text-lg leading-relaxed">
                Islamic scholars whose decisions on all Sharia matters are final, binding, and beyond commercial override.
              </p>
            </div>

            <div className={`p-10 border border-tawf-green/10 ${RADIUS_CARD} bg-tawf-sand/30 relative overflow-hidden group`}>
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Building2 className="w-32 h-32 text-tawf-green" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-tawf-green mb-2">Board of Trustees</h3>
              <p className="text-sm font-bold tracking-wider uppercase text-tawf-gold mb-6">Legal & Financial</p>
              <p className="text-tawf-muted text-lg leading-relaxed">
                Handles legal governance, financial oversight, and executive accountability. Absolute separation from{' '}
                <span className="inline-flex items-center gap-1">
                  Sharia
                  <InfoTooltip term="sharia" />
                </span>
                {' '}authority.
              </p>
            </div>

            <div className={`p-10 border border-tawf-green/10 ${RADIUS_CARD} bg-tawf-sand/30 relative overflow-hidden group`}>
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Network className="w-32 h-32 text-tawf-green" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-tawf-green mb-2">
                The TAWF{' '}
                <span className="inline-flex items-center gap-1">
                  DAO
                  <InfoTooltip term="dao" />
                </span>
              </h3>
              <p className="text-sm font-bold tracking-wider uppercase text-tawf-gold mb-6">Community Governance</p>
              <p className="text-tawf-muted text-lg leading-relaxed">
                The community's voice. Gated by Tawf ID (TID), where 1 TID equals 1 Vote. No token-weighting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tawf ID */}
      <section id="ecosystem" className={`${SECTION_PADDING} bg-tawf-sand border-t border-tawf-green/10`}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-16 bg-tawf-green rounded-full flex items-center justify-center">
              <Fingerprint className="w-8 h-8 text-tawf-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-tawf-green">The Tawf ID (TID)</h2>
          </div>
          <p className="text-2xl font-medium text-tawf-ink mb-8">Identity, Not a Token</p>
          <p className="text-tawf-muted text-xl leading-relaxed mb-6">
            The credential that grants access to the TAWF{' '}
            <span className="inline-flex items-center gap-1">
              DAO
              <InfoTooltip term="dao" />
            </span>
            . TID is a{' '}
            <span className="inline-flex items-center gap-1">
              Soulbound
              <InfoTooltip term="soulbound" />
            </span>
            {' '}NFT built on Zero-Knowledge Decentralized Identity infrastructure. It is permanently bound to one wallet, non-transferable, and carries zero monetary value.
          </p>
          <p className="text-tawf-green font-medium text-2xl">One Tawf ID. One vote. No exceptions.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${SECTION_PADDING} bg-tawf-green text-center ${CONTAINER_PADDING} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <div className="w-[600px] h-[600px] border border-tawf-gold rounded-full absolute"></div>
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-tawf-sand mb-6">Our Zakat Is On-Chain.</h2>
          <p className="text-tawf-sand/80 mb-10 text-xl font-light leading-relaxed">
            You can check. This is not a promise of ethical finance. This is ethical finance, proven every single time we collect a{' '}
            <span className="inline-flex items-center gap-1">
              dirham
              <InfoTooltip term="dirham" />
            </span>
            {' '}of zakat and place it in the hands of someone who needs it.
          </p>
          <Link to="/manifesto" className={`bg-tawf-gold text-tawf-green px-10 py-5 ${RADIUS_BUTTON} text-base font-medium tracking-widest uppercase hover:bg-white transition-colors inline-flex items-center gap-2`}>
            Read Our Manifesto
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
