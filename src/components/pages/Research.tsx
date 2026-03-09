import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  BookOpen, GraduationCap, Globe, FileText,
  ArrowRight, ChevronRight, Building2, Award
} from 'lucide-react';
import PageHero from '../ui/PageHero';
import Section from '../ui/Section';
import InfoTooltip from '../ui/InfoTooltip';

const researchAreas = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Sharia & Web3',
    desc: 'Exploring how Islamic jurisprudence applies to blockchain technology, smart contracts, and decentralized finance.',
    topics: ['Smart contract validity', 'Digital asset classification', 'Blockchain governance from fiqh perspective']
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'Tokenized Waqf',
    desc: 'Researching how blockchain can enable waqf digitization while preserving perpetual trust requirements.',
    topics: ['Waqf tokenization models', 'Perpetual custody on-chain', 'Cross-border waqf management']
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Digital Zakat',
    desc: 'Studying cryptocurrency zakat calculation, nisab thresholds for digital assets, and transparent distribution systems.',
    topics: ['Crypto zakat calculation', 'Digital asset nisab', 'On-chain distribution verification']
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Islamic DeFi',
    desc: 'Analyzing DeFi protocols through a Sharia lens to identify compliant and non-compliant mechanisms.',
    topics: ['Riba detection in protocols', 'Gharar in smart contracts', 'Compliant lending models']
  }
];

const publications = [
  {
    title: 'Tokenized Waqf: Preserving Perpetuity in a Digital Age',
    type: 'Research Paper',
    date: '2025',
    status: 'Published'
  },
  {
    title: 'Calculating Zakat on Cryptocurrency Holdings',
    type: 'Practical Guide',
    date: '2025',
    status: 'In Review'
  },
  {
    title: 'Riba in DeFi: A Systematic Analysis of Lending Protocols',
    type: 'Technical Paper',
    date: '2025',
    status: 'In Progress'
  }
];

const partners = [
  { name: 'Universitas Indonesia', type: 'Academic Partner' },
  { name: 'Institut Pertanian Bogor', type: 'Research Partner' },
  { name: 'Pusat Studi Ekonomi Syariah', type: 'Think Tank' },
  { name: 'Nadzir Waqf Network', type: 'Industry Partner' }
];

export default function Research() {
  return (
    <>
      <PageHero
        badge="Research & Scholarship"
        title="Research at Tawf Islamic Foundation"
        subtitle="Advancing Islamic finance in the digital age"
        description="We fund and publish research that bridges traditional Islamic jurisprudence with modern Web3 technology. Our work advances Sharia governance and the field of digital Islamic finance."
      />

      {/* Research Areas */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-green mb-6">Research Areas</h2>
          <p className="text-tawf-muted text-xl max-w-3xl mx-auto">
            Our research focuses on four key areas where Islamic finance intersects with Web3 technology.
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

      {/* Publications */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-green mb-6">Publications</h2>
          <p className="text-tawf-muted text-xl max-w-3xl mx-auto">
            Our research outputs include framework papers, technical guides, and scholarly articles.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {publications.map((pub, idx) => (
              <div
                key={idx}
                className="p-6 bg-tawf-sand/50 rounded-2xl border border-tawf-green/10 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-5 h-5 text-tawf-green" />
                    <span className="text-xs font-semibold tracking-wider uppercase text-tawf-gold">{pub.type}</span>
                  </div>
                  <h3 className="text-lg font-medium text-tawf-green">{pub.title}</h3>
                  <p className="text-sm text-tawf-muted mt-1">{pub.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    pub.status === 'Published'
                      ? 'bg-tawf-green/10 text-tawf-green'
                      : 'bg-tawf-gold/10 text-tawf-gold'
                  }`}>
                    {pub.status}
                  </span>
                  <button className="text-tawf-green hover:text-tawf-gold transition-colors">
                    <FileText className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Partners */}
      <Section>
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
              className="p-6 bg-white rounded-2xl border border-tawf-green/10 text-center"
            >
              <Building2 className="w-10 h-10 text-tawf-gold mx-auto mb-4" />
              <h3 className="font-medium text-tawf-green mb-1">{partner.name}</h3>
              <p className="text-sm text-tawf-muted">{partner.type}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Grants */}
      <Section background="ink">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-tawf-gold">Funding Research</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mt-4 mb-6">Research Grants Available</h2>
            <p className="text-tawf-sand/70 text-lg leading-relaxed mb-6">
              Tawf Islamic Foundation offers research grants for scholars and students researching Islamic finance and Web3 technology. We prioritize research that:
            </p>
            <ul className="space-y-4 text-tawf-sand/80">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-tawf-gold shrink-0 mt-0.5" />
                <span>Advances understanding of Sharia-compliant digital finance</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-tawf-gold shrink-0 mt-0.5" />
                <span>Develops practical frameworks for the industry</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-tawf-gold shrink-0 mt-0.5" />
                <span>Benefits the Muslim community, especially in Southeast Asia</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-tawf-gold shrink-0 mt-0.5" />
                <span>Contributes to Sharia governance in the digital age</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
            <GraduationCap className="w-16 h-16 text-tawf-gold mb-6" />
            <h3 className="text-2xl font-serif text-white mb-4">Apply for a Grant</h3>
            <p className="text-tawf-sand/70 mb-8">
              We accept grant proposals on a rolling basis. Submit your research proposal including methodology, timeline, and budget.
            </p>
            <button className="w-full bg-tawf-gold text-tawf-green px-6 py-4 rounded-full text-base font-medium tracking-widest uppercase hover:bg-white transition-colors">
              Submit Proposal
            </button>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="green">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-gold mb-6">Contribute to the Field</h2>
          <p className="text-tawf-sand/80 text-xl mb-10 max-w-2xl mx-auto">
            Whether you're a researcher, student, or institution, there are many ways to contribute to advancing Islamic finance in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/glossary"
              className="inline-flex items-center gap-2 bg-tawf-gold text-tawf-green px-8 py-4 rounded-full text-base font-medium tracking-widest uppercase hover:bg-white transition-colors"
            >
              Learn Islamic Finance Terms
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full text-base font-medium tracking-widest uppercase hover:bg-white/10 transition-colors">
              Contact Research Team
              <ArrowRight className="w-5 h-5" />
            </button>
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
