import React from 'react';
import { motion } from 'motion/react';
import {
  Shield, HeartHandshake, Landmark, ArrowRight,
  ChevronRight, Fingerprint, Coins, Building2,
  Network, HandHeart, Sparkles, TrendingUp, FileText, Users, ArrowDown, CheckCircle, Handshake
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
              Infrastructure for<br />the <span className="italic text-tawf-gold">Digital Baitul Maal</span>
            </h1>

            <p className="text-xl text-tawf-muted font-light leading-relaxed mb-10 max-w-lg">
              Tawf Islamic Foundation builds shared infrastructure for Islamic charitable institutions in the digital age. We create transparency systems for{' '}
              <span className="inline-flex items-center gap-1">
                zakat
                <InfoTooltip term="zakat" />
              </span>
              distribution and{' '}
              <span className="inline-flex items-center gap-1">
                waqf
                <InfoTooltip term="waqf" />
              </span>
              management with blockchain-verifiable transparency.
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
              We provide digital infrastructure that powers Islamic charitable institutions across Indonesia, enabling transparent{' '}
              <span className="inline-flex items-center gap-1">
                zakat
                <InfoTooltip term="zakat" />
              </span>
              ,{' '}
              <span className="inline-flex items-center gap-1">
                infaq
                <InfoTooltip term="infaq" />
              </span>
              , and{' '}
              <span className="inline-flex items-center gap-1">
                sadaqah
                <InfoTooltip term="sadaqah" />
              </span>
              {' '}operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Coins className="w-8 h-8 text-tawf-gold" />,
                title: "Zakat",
                term: "zakat",
                desc: "Building infrastructure for licensed amil organizations to collect and distribute zakat with full transparency to eligible asnaf.",
                detail: "Blockchain-verified & fully auditable"
              },
              {
                icon: <Landmark className="w-8 h-8 text-tawf-gold" />,
                title: "Waqf",
                term: "waqf",
                desc: "Infrastructure for transparent waqf management, including wakaf produktif that generates perpetual community benefit.",
                detail: "Blockchain-verifiable stewardship"
              },
              {
                icon: <HeartHandshake className="w-8 h-8 text-tawf-gold" />,
                title: "Sadaqah",
                term: "sadaqah",
                desc: "Community grant programs for education, Islamic institution digitization, and scholarly research.",
                detail: "DAO-informed selection"
              },
              {
                icon: <HandHeart className="w-8 h-8 text-tawf-gold" />,
                title: "Qardhul Hasan",
                term: "qardhul-hasan",
                desc: "Interest-free benevolent lending for underserved communities and early-stage Islamic institutions seeking digitization.",
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

      {/* Partners Section */}
      <section id="partners" className={`${SECTION_PADDING} bg-tawf-sand`}>
        <div className={`${MAX_WIDTH} mx-auto ${CONTAINER_PADDING}`}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-tawf-gold"></div>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-tawf-gold">Trusted Institutions</span>
              <div className="h-px w-12 bg-tawf-gold"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-tawf-green mb-6">Our Partners</h2>
            <p className="text-tawf-muted text-xl max-w-3xl mx-auto">
              We provide digital infrastructure that powers Islamic charitable institutions across Indonesia, enabling transparent operations at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Telaga Charity - Featured Partner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 p-10 bg-white border border-tawf-green/10 rounded-2xl"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0 w-32 h-32 bg-tawf-green rounded-2xl flex items-center justify-center p-6">
                  <img
                    src="https://framerusercontent.com/images/9AuswQsD0IeCkETwsF0nDOgyU.png"
                    alt="Telaga Charity Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-serif font-medium text-tawf-green mb-2">Telaga Charity</h3>
                  <p className="text-sm font-semibold tracking-wider uppercase text-tawf-gold mb-4">Blockchain-Powered Nonprofit</p>
                  <p className="text-tawf-muted leading-relaxed mb-6">
                    Crypto-empowered charity focused on food, clean water, and education across Indonesia. Together, we're bringing verifiable transparency to charitable giving through blockchain technology.
                  </p>
                  <a
                    href="https://telagacharity.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-tawf-green hover:text-tawf-gold font-medium transition-colors"
                  >
                    Visit Website
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Ziswaf Platform */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 bg-white border border-tawf-green/10 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-tawf-green/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <Handshake className="w-8 h-8 text-tawf-green" />
              </div>
              <h3 className="text-xl font-serif font-medium text-tawf-green mb-2">Ziswaf Platform</h3>
              <p className="text-sm font-semibold tracking-wider uppercase text-tawf-gold mb-4">Technology Partner</p>
              <p className="text-sm text-tawf-muted leading-relaxed mb-6">
                Powering blockchain-based zakat and waqf management
              </p>
              <a
                href="https://ziswaf.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-tawf-green hover:text-tawf-gold font-medium transition-colors"
              >
                Visit Website
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Become a Partner CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-3 p-10 bg-tawf-green text-white border-2 border-tawf-gold rounded-2xl text-center"
            >
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-10 h-10 text-tawf-gold" />
              </div>
              <h3 className="text-3xl font-serif text-white mb-3">Become Our Partner</h3>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Help us build digital infrastructure for Islamic philanthropy. Join our network of institutions committed to transparency and Sharia compliance.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-tawf-gold text-tawf-green px-8 py-4 rounded-full text-base font-medium tracking-widest uppercase hover:bg-white transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
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
              Tawf Labs is the commercial engine. Tawf Islamic Foundation is the mission that engine serves. The relationship is architectural, moral, and permanent.
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
              <p className="text-tawf-sand/70 text-lg mb-6">The commercial engine that builds Sharia-compliant products.</p>
              <ul className="space-y-3 text-tawf-sand/80">
                <li className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-tawf-gold shrink-0" />
                  <span>Portion of revenue supports Foundation mission (3-8%)</span>
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
                <h3 className="text-2xl font-serif text-white">Tawf Islamic Foundation</h3>
              </div>
              <p className="text-white/80 text-lg mb-6">The infrastructure layer that transforms profit into purpose.</p>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-tawf-gold shrink-0" />
                  <span>
                    Operates zakat infrastructure for distribution to{' '}
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
                  <span>Houses the{' '}<span className="inline-flex items-center gap-1">
                    Sharia
                    <InfoTooltip term="sharia" />
                  </span> Advisory Board and DAO governance</span>
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

      {/* Governance Section */}
      <section id="governance" className={`${SECTION_PADDING} bg-tawf-sand relative`}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-tawf-gold/30 to-transparent"></div>

        <div className={`${MAX_WIDTH} mx-auto ${CONTAINER_PADDING}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-tawf-green mb-6">Governance</h2>
            <p className="text-tawf-muted text-xl">Three distinct bodies, one clear workflow.</p>
          </div>

          {/* PART 1: The Three Governing Bodies */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`p-10 border border-tawf-green/10 ${RADIUS_CARD} bg-white relative overflow-hidden group`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Shield className="w-32 h-32 text-tawf-green" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-tawf-green mb-2">
                Sharia Advisory Board
                <InfoTooltip term="sharia" />
              </h3>
              <p className="text-sm font-bold tracking-wider uppercase text-tawf-gold mb-6">Foundation Chairmen</p>
              <p className="text-tawf-muted text-lg leading-relaxed mb-4">
                Islamic scholars whose decisions on all{' '}
                <span className="inline-flex items-center gap-1">
                  Sharia
                  <InfoTooltip term="sharia" />
                </span> matters are final, binding, and beyond commercial override.
              </p>
              <p className="text-tawf-muted text-sm leading-relaxed">
                Assisted by Tawf-AI referencing established frameworks: AAOIFI, Muhammadiyah, Malaysia DPSN, Bahrain, and Indonesia MUI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className={`p-10 border border-tawf-green/10 ${RADIUS_CARD} bg-white relative overflow-hidden group`}
            >
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
                </span> authority.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`p-10 border border-tawf-green/10 ${RADIUS_CARD} bg-white relative overflow-hidden group`}
            >
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
            </motion.div>
          </div>

          {/* PART 2: The Workflow */}
          <div className={`p-8 md:p-12 border border-tawf-green/10 ${RADIUS_CARD} bg-white`}>
            <h3 className="text-2xl md:text-3xl font-serif text-tawf-green mb-10 text-center">How Decisions Flow</h3>

            {/* Visual Flow */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-tawf-green rounded-full flex items-center justify-center">
                  <FileText className="w-7 h-7 text-tawf-gold" />
                </div>
                <span className="font-medium text-tawf-green">Proposal</span>
              </div>
              <ChevronRight className="w-6 h-6 text-tawf-gold lg:rotate-0 rotate-90" />
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-tawf-green rounded-full flex items-center justify-center">
                  <Users className="w-7 h-7 text-tawf-gold" />
                </div>
                <span className="font-medium text-tawf-green">Community Vote</span>
              </div>
              <ChevronRight className="w-6 h-6 text-tawf-gold lg:rotate-0 rotate-90" />
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-tawf-green rounded-full flex items-center justify-center">
                  <Shield className="w-7 h-7 text-tawf-gold" />
                </div>
                <span className="font-medium text-tawf-green">Sharia Review</span>
              </div>
            </div>

            {/* Three Stage Descriptions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-10 h-10 bg-tawf-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-tawf-green font-semibold">1</span>
                </div>
                <h4 className="font-semibold text-tawf-green mb-2">Community Proposal</h4>
                <p className="text-tawf-muted text-sm leading-relaxed">
                  Any TID holder can submit proposals for ecosystem fund allocation, community programs, partnership priorities, and roadmap direction.
                </p>
              </div>

              <div className="text-center">
                <div className="w-10 h-10 bg-tawf-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-tawf-green font-semibold">2</span>
                </div>
                <h4 className="font-semibold text-tawf-green mb-2">Community Voting</h4>
                <p className="text-tawf-muted text-sm leading-relaxed">
                  Following{' '}
                  <span className="inline-flex items-center gap-1">
                    musyawarah
                    <InfoTooltip term="musyawarah" />
                  </span> principles of collective deliberation. Transparent blockchain voting with defined periods.
                </p>
              </div>

              <div className="text-center">
                <div className="w-10 h-10 bg-tawf-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-tawf-green font-semibold">3</span>
                </div>
                <h4 className="font-semibold text-tawf-green mb-2">Sharia Council Review</h4>
                <p className="text-tawf-muted text-sm leading-relaxed">
                  The{' '}
                  <span className="inline-flex items-center gap-1">
                    Sharia
                    <InfoTooltip term="sharia" />
                  </span> Advisory Board provides final guidance on all Sharia matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tawf ID */}
      <section id="ecosystem" className={`${SECTION_PADDING} bg-white border-t border-tawf-green/10`}>
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
            {' '}NFT built using secure privacy technology. It is permanently bound to one wallet, non-transferable, and carries zero monetary value.
          </p>
          <p className="text-tawf-green font-medium text-2xl">One Tawf ID. One vote. No exceptions.</p>
        </div>
      </section>

      {/* How to Get Started Section */}
      <section className={`${SECTION_PADDING} bg-tawf-ink text-tawf-sand border-t border-tawf-green/10`}>
        <div className={`${MAX_WIDTH} mx-auto ${CONTAINER_PADDING}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">How to Get Started</h2>
            <p className="text-tawf-sand/70 text-xl max-w-3xl mx-auto">
              Join the ecosystem in three simple steps. Your journey to transparent Islamic finance begins here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: '01',
                title: 'Get Your Tawf ID',
                desc: 'Create your Tawf ID (TID) - a soulbound identity credential that grants access to the TAWF DAO. One person, one ID, one vote.',
                icon: <Fingerprint className="w-6 h-6" />
              },
              {
                step: '02',
                title: 'Pay Your Zakat',
                desc: 'Use our Ziswaf-powered platform to pay zakat with full blockchain transparency. Track every dirham from payment to distribution.',
                icon: <HeartHandshake className="w-6 h-6" />
              },
              {
                step: '03',
                title: 'Join the Community',
                desc: 'Participate in governance discussions and vote on ecosystem proposals. Your voice shapes the future of Islamic digital finance.',
                icon: <Users className="w-6 h-6" />
              },
              {
                step: '04',
                title: 'Verify Everything',
                desc: 'All transactions are recorded on-chain. View donation history, fund allocations, and impact reports anytime.',
                icon: <Shield className="w-6 h-6" />
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white/5 p-8 ${RADIUS_BOX} border border-white/10`}
              >
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-tawf-green rounded-full flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold tracking-wider uppercase text-tawf-gold">{item.step}</span>
                    <h3 className="text-xl font-serif text-white mb-2">{item.title}</h3>
                    <p className="text-tawf-sand/70">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${SECTION_PADDING} bg-tawf-green text-center ${CONTAINER_PADDING} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <div className="w-[600px] h-[600px] border border-tawf-gold rounded-full absolute"></div>
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-tawf-sand mb-6">Zakat Transparency, Verified On-Chain</h2>
          <p className="text-tawf-sand/80 mb-10 text-xl font-light leading-relaxed">
            Track every {' '}
            <span className="inline-flex items-center gap-1">
              dirham
              <InfoTooltip term="dirham" />
            </span>
            {' '}as it flows through Foundation infrastructure. Blockchain-verifiable transparency from payment to distribution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://zakat.tawf.foundation" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`bg-tawf-gold text-tawf-green px-10 py-5 ${RADIUS_BUTTON} text-base font-medium tracking-widest uppercase hover:bg-white transition-colors inline-flex items-center gap-2`}
            >
              Pay Your Zakat
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link to="/manifesto" className={`bg-transparent border-2 border-tawf-sand text-tawf-sand px-10 py-5 ${RADIUS_BUTTON} text-base font-medium tracking-widest uppercase hover:bg-tawf-sand/10 transition-colors inline-flex items-center gap-2`}>
              Read Our Manifesto
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-tawf-sand/60 text-sm mt-6 italic">Powered by Ziswaf Platform</p>
        </div>
      </section>
    </>
  );
}
