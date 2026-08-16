import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  BookOpen, GraduationCap, FileText,
  ArrowRight, ChevronRight, Building2, Award,
  ShieldCheck, Fingerprint, Landmark, GitBranch, ExternalLink,
} from 'lucide-react';
import PageHero from '../ui/PageHero';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';

const researchAreas = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Zero-Knowledge Proofs',
    desc: 'Building privacy-preserving protocols for auditable donations. A donor can prove their zakat was paid without disclosing the amount or the recipient.',
    topics: ['Private zakat proofs', 'Commitment and nullifier patterns', 'Groth16 and UltraHONK circuit design'],
  },
  {
    icon: <Fingerprint className="w-8 h-8" />,
    title: 'Decentralized Identity',
    desc: 'The did:tawf method specification and the Tawf ID (TID) soulbound credential. One person, one ID, one vote, verifiable off-chain.',
    topics: ['did:tawf W3C method spec', 'ERC-5192 soulbound tokens', 'Zero-knowledge credential verification'],
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Cryptographic Notarization',
    desc: 'Merkle-based anchoring of off-chain records to Ethereum. A donor with a receipt can prove a donation existed without trusting the operator.',
    topics: ['Append-only Merkle notary', 'Cross-language byte-for-byte parity', 'Proof of existence without data exposure'],
  },
  {
    icon: <Landmark className="w-8 h-8" />,
    title: 'Zakat & Waqf Transparency',
    desc: 'On-chain distribution of zakat across the eight asnaf and perpetual cash waqf where the corpus is preserved in code.',
    topics: ['Eight asnaf on-chain allocation', 'Waqf perpetuity enforced by contract', 'Institutional zakat governance'],
  },
];

const publications = [
  {
    title: 'Zero-Knowledge Zakat: A Design Science Approach to Auditable Private Donations on Blockchain',
    authors: 'M. Z. Fatonie and A. A. S. Gunawan',
    type: 'Research Paper',
    venue: 'Accepted at ICIMTECH 2026',
    status: 'Accepted',
  },
];

const specifications = [
  {
    title: 'did:tawf Method Specification',
    desc: 'W3C-style DID method specification defining the did:tawf identifier namespace, resolution, and verification methods.',
    file: 'did-tawf-method-spec.md',
  },
  {
    title: 'TID Circuit Specification',
    desc: 'The zero-knowledge circuit underpinning Tawf ID credential verification, including Mustahik eligibility proofs.',
    file: 'circuit-spec.md',
  },
  {
    title: 'TID Compact Contract Specification',
    desc: 'Midnight Network Compact smart contracts for the Tawf DID Protocol, defining the on-chain state and transitions.',
    file: 'compact-contract-spec.md',
  },
  {
    title: 'TID Cross-Chain Bridge Specification',
    desc: 'Message relay protocol for cross-chain attestation of TID credentials between Ethereum, Solana, and Midnight.',
    file: 'bridge-spec.md',
  },
];

const partners = [
  { name: 'Universitas Indonesia', type: 'Academic Partner' },
  { name: 'Institut Pertanian Bogor', type: 'Research Partner' },
  { name: 'Pusat Studi Ekonomi Syariah', type: 'Think Tank' },
  { name: 'Nadzir Waqf Network', type: 'Industry Partner' },
];

export default function Research() {
  return (
    <>
      <PageHero
        badge="Research & Scholarship"
        title="Research at Tawf Islamic Foundation"
        subtitle="From zero-knowledge zakat to decentralized identity"
        description="We publish peer-reviewed research and open technical specifications that bridge Islamic jurisprudence with modern cryptography. Our work is real, public, and cited."
      />

      {/* Research Areas */}
      <Section background="sand">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-green mb-6">Research Areas</h2>
          <p className="text-tawf-muted text-xl max-w-3xl mx-auto">
            Our research focuses on four areas where Islamic finance, cryptography, and blockchain converge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchAreas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 bg-white rounded-2xl border border-tawf-green/10 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-tawf-green rounded-full flex items-center justify-center text-tawf-gold mb-5">
                {area.icon}
              </div>
              <h3 className="text-xl font-serif font-medium text-tawf-green mb-3">{area.title}</h3>
              <p className="text-tawf-muted leading-relaxed mb-6">{area.desc}</p>
              <div className="space-y-2">
                {area.topics.map((topic, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-tawf-muted">
                    <ChevronRight className="w-4 h-4 text-tawf-gold shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Publication */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-green mb-6">Publications</h2>
          <p className="text-tawf-muted text-xl max-w-3xl mx-auto">
            Peer-reviewed research accepted at international conferences.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="p-8 bg-tawf-sand/50 rounded-2xl border border-tawf-green/10 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-tawf-gold" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-tawf-gold">{pub.type}</span>
                </div>
                <h3 className="text-xl font-serif font-medium text-tawf-green mb-2">{pub.title}</h3>
                <p className="text-sm text-tawf-muted mb-1">{pub.authors}</p>
                <p className="text-sm text-tawf-muted">{pub.venue}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-4 py-2 rounded-full text-xs font-semibold bg-tawf-green/10 text-tawf-green">
                  {pub.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Technical Specifications */}
      <Section background="sand">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-green mb-6">Technical Specifications</h2>
          <p className="text-tawf-muted text-xl max-w-3xl mx-auto">
            Open protocol specifications backing the Tawf DID identity stack. Published as living documents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {specifications.map((spec, idx) => (
            <a
              key={idx}
              href={`https://github.com/tawf-labs/tawf-did/blob/main/docs/specifications/${spec.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-2xl border border-tawf-green/10 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <GitBranch className="w-5 h-5 text-tawf-gold" />
                  <h3 className="text-lg font-serif font-medium text-tawf-green group-hover:text-tawf-gold transition-colors">
                    {spec.title}
                  </h3>
                </div>
                <ExternalLink className="w-4 h-4 text-tawf-muted shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-tawf-muted text-sm leading-relaxed mb-3">{spec.desc}</p>
              <span className="text-xs font-semibold tracking-wider uppercase text-tawf-muted">
                Draft, v1.0
              </span>
            </a>
          ))}
        </div>
      </Section>

      {/* Partners */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-green mb-6">Research Partners</h2>
          <p className="text-tawf-muted text-xl max-w-3xl mx-auto">
            We collaborate with universities, research institutions, and industry partners to advance Islamic finance research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="p-6 bg-tawf-sand/50 rounded-2xl border border-tawf-green/10 text-center"
            >
              <Building2 className="w-10 h-10 text-tawf-gold mx-auto mb-4" />
              <h3 className="font-medium text-tawf-green mb-1">{partner.name}</h3>
              <p className="text-sm text-tawf-muted">{partner.type}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Research Collaboration */}
      <Section background="ink">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-tawf-gold">Research Collaboration</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mt-4 mb-6">Partner on research</h2>
            <p className="text-tawf-sand/70 text-lg leading-relaxed mb-6">
              We welcome collaboration from researchers, students, and institutions working on zero-knowledge proofs,
              decentralized identity, Islamic finance, and cryptographic notarization.
            </p>
            <ul className="space-y-4 text-tawf-sand/80">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-tawf-gold shrink-0 mt-0.5" />
                <span>Publish joint papers on ZK and Islamic finance</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-tawf-gold shrink-0 mt-0.5" />
                <span>Contribute to open protocol specifications</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-tawf-gold shrink-0 mt-0.5" />
                <span>Advance Sharia governance in the digital age</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-tawf-gold shrink-0 mt-0.5" />
                <span>Build reference implementations of Tawf protocols</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
            <BookOpen className="w-16 h-16 text-tawf-gold mb-6" />
            <h3 className="text-2xl font-serif text-white mb-4">Get in touch</h3>
            <p className="text-tawf-sand/70 mb-8">
              Reach out to discuss a research collaboration. We are open to co-authoring papers, co-supervising
              students, and contributing code.
            </p>
            <Link
              to="/contact"
              className="block w-full text-center bg-tawf-gold text-tawf-green px-6 py-4 rounded-full text-base font-medium tracking-widest uppercase hover:bg-white transition-colors"
            >
              Contact Research Team
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="green">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-gold mb-6">Contribute to the field</h2>
          <p className="text-tawf-sand/80 text-xl mb-10 max-w-2xl mx-auto">
            Whether you are a researcher, student, or institution, there are many ways to contribute to advancing
            Islamic finance in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/glossary"
              className="inline-flex items-center gap-2 bg-tawf-gold text-tawf-green px-8 py-4 rounded-full text-base font-medium tracking-widest uppercase hover:bg-white transition-colors"
            >
              Learn Islamic Finance Terms
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full text-base font-medium tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              Contact Research Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}