import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Landmark, HandCoins, Building2, HeartHandshake, GraduationCap,
  Store, Code2, Split, ShieldCheck, Fingerprint, ArrowRight, Mail, Globe,
} from 'lucide-react';
import PageHero from '../ui/PageHero';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import InfoTooltip from '../ui/InfoTooltip';

const INSTITUTIONS = [
  {
    icon: <HandCoins className="w-8 h-8 text-tawf-gold" />,
    name: 'BAZNAS / LAZ',
    tag: 'Amil Zakat Organization',
    desc: 'Collect and notarize zakat with a transparent audit trail. Every disbursement is verifiable, and donors can trace their dirham from payment to recipient.',
    products: ['zkt', 'tawf-verify', 'tawf-pay'],
  },
  {
    icon: <Landmark className="w-8 h-8 text-tawf-gold" />,
    name: 'Nazir',
    tag: 'Waqf Manager',
    desc: 'Manage perpetual and fixed-tenor cash waqf on-chain. The corpus is preserved in code, and its yield reaches the designated beneficiary, not a middleman.',
    products: ['wqf', 'tawf-verify'],
  },
  {
    icon: <Building2 className="w-8 h-8 text-tawf-gold" />,
    name: 'BMT / Cooperative',
    tag: 'Islamic Microfinance',
    desc: 'Route member payments through tawf-pay so a share of every transaction funds the community pool, and issue TIDs for fair, one-person-one-vote governance.',
    products: ['tawf-pay', 'tawf-id'],
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-tawf-gold" />,
    name: 'Masjid / Yayasan',
    tag: 'Community Foundation',
    desc: 'Publish notarized donation records and accept payments where the fee itself flows back into your programs.',
    products: ['tawf-verify', 'tawf-pay'],
  },
  {
    icon: <Globe className="w-8 h-8 text-tawf-gold" />,
    name: 'NGO / Nonprofit',
    tag: 'Any Transparent Organization',
    desc: 'Prove where every donation went. Anchor your records to Ethereum and let donors verify a receipt without trusting you.',
    products: ['tawf-verify', 'tawf-pay'],
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-tawf-gold" />,
    name: 'Pesantren',
    tag: 'Islamic Education',
    desc: 'Fund student scholarships through transparent education waqf, with every contribution tracked and disbursed on-chain.',
    products: ['zkt', 'tawf-verify'],
  },
  {
    icon: <Store className="w-8 h-8 text-tawf-gold" />,
    name: 'Merchant / Business',
    tag: 'Give Back on Every Sale',
    desc: 'Accept payments that endow the community. A 1% fee is routed to waqf, zakat, and sadaqah, so every transaction is also a donation.',
    products: ['tawf-pay'],
  },
  {
    icon: <Code2 className="w-8 h-8 text-tawf-gold" />,
    name: 'Developer',
    tag: 'Build on Tawf',
    desc: 'Compose identity and notarization into your own product with the @tawf SDK packages, published on Ethereum.',
    products: ['tawf-sdk'],
  },
];

const PRODUCT_LINKS: Record<string, string> = {
  zkt: 'https://zakat.tawf.foundation',
  wqf: 'https://waqf.tawf.foundation',
  'tawf-verify': 'https://github.com/tawf-labs/tawf-verify',
  'tawf-pay': 'https://github.com/tawf-labs/tawf-pay',
  'tawf-id': '/#ecosystem',
  'tawf-sdk': 'https://github.com/tawf-labs/tawf-sdk',
};

export default function Institutions() {
  return (
    <>
      <PageHero
        badge="For Institutions"
        title="Infrastructure for the organizations that serve"
        subtitle="Born from Islamic finance, built for everyone"
        description="We do not replace the organizations that already serve their communities. From amil zakat bodies to secular nonprofits, we give every institution the same tools: transparent collection, verifiable notarization, and proof of delivery."
      />

      {/* Who we serve */}
      <Section background="sand">
        <SectionHeader
          badge="Who We Serve"
          title="Built for every part of the ecosystem"
          description="From national zakat collectors to secular nonprofits, every organization plugs into the products that fit its mission."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTITUTIONS.map((inst, i) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="p-8 bg-white border border-tawf-green/10 rounded-2xl flex flex-col"
            >
              <div className="w-16 h-16 bg-tawf-green rounded-full flex items-center justify-center mb-6">
                {inst.icon}
              </div>
              <h3 className="text-2xl font-serif text-tawf-green mb-1">{inst.name}</h3>
              <p className="text-sm font-semibold tracking-wider uppercase text-tawf-gold mb-4">{inst.tag}</p>
              <p className="text-tawf-muted text-base leading-relaxed mb-6">{inst.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {inst.products.map((p) => {
                  const href = PRODUCT_LINKS[p];
                  const chip = (
                    <span className="text-xs font-semibold tracking-wider uppercase bg-tawf-sand/50 text-tawf-green px-3 py-1 rounded-full">
                      {p}
                    </span>
                  );
                  return href.startsWith('/') ? (
                    <Link key={p} to={href}>{chip}</Link>
                  ) : (
                    <a key={p} href={href} target="_blank" rel="noopener noreferrer">{chip}</a>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How the pieces fit */}
      <Section background="white">
        <SectionHeader
          badge="How It Fits"
          title="The infrastructure underneath"
          description="Three layers of infrastructure power everything above. Institutions plug in at the layer that matches their needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: <Split className="w-8 h-8 text-tawf-gold" />,
              name: 'tawf-pay',
              role: 'Payment layer',
              desc: 'Charitable payment routing. A 1% fee on every transaction flows to waqf, zakat, and sadaqah.',
              href: 'https://github.com/tawf-labs/tawf-pay',
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-tawf-gold" />,
              name: 'tawf-verify',
              role: 'Notarization layer',
              desc: 'A notary, not a custodian. Anchor off-chain records to Ethereum and verify them without trusting the operator.',
              href: 'https://github.com/tawf-labs/tawf-verify',
            },
            {
              icon: <Fingerprint className="w-8 h-8 text-tawf-gold" />,
              name: 'tawf-sdk',
              role: 'Identity layer',
              desc: 'Soulbound Tawf ID and composable @tawf packages. One person, one ID, one vote.',
              href: 'https://github.com/tawf-labs/tawf-sdk',
            },
          ].map((layer, i) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 bg-tawf-sand/50 border border-tawf-green/10 rounded-2xl"
            >
              <div className="w-16 h-16 bg-tawf-green rounded-full flex items-center justify-center mb-6">
                {layer.icon}
              </div>
              <h3 className="text-2xl font-serif text-tawf-green mb-1">{layer.name}</h3>
              <p className="text-sm font-semibold tracking-wider uppercase text-tawf-gold mb-4">{layer.role}</p>
              <p className="text-tawf-muted text-base leading-relaxed mb-6">{layer.desc}</p>
              <a
                href={layer.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-tawf-green hover:text-tawf-gold transition-colors"
              >
                View source
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center text-tawf-muted leading-relaxed">
          <p>
            Every layer is governed by the{' '}
            <span className="inline-flex items-center gap-1">
              <span className="text-tawf-green font-medium">TAWF DAO</span>
              <InfoTooltip term="dao" />
            </span>
            , and every{' '}
            <span className="inline-flex items-center gap-1">
              Sharia
              <InfoTooltip term="sharia" />
            </span>
            {' '}decision is reviewed by the AI Sharia Review, aligned to AAOIFI and DSN-MUI.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section background="green">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-gold mb-4">Become a partner</h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Whether you are a national zakat collector or a single masjid, there is a place for you
            in the ecosystem. We work with institutions that already carry the trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-tawf-gold text-tawf-green px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              Inquire About Partnership
            </Link>
            <Link
              to="/roadmap"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              See the Roadmap
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
