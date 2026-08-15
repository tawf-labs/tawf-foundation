import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Shield, Building2, Network, ScrollText, Handshake, Code2,
  ArrowRight, Mail
} from 'lucide-react';
import PageHero from '../ui/PageHero';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import InfoTooltip from '../ui/InfoTooltip';

const RADIUS_CARD = "rounded-2xl";

const trustPillars = [
  {
    icon: <ScrollText className="w-8 h-8 text-tawf-gold" />,
    title: "Sharia Credibility",
    description: "Respected Indonesian ulama sit on our Sharia Advisory Board. Every smart contract is audited and signed by scholars, with a public fatwa database linked directly to on-chain decisions.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-tawf-gold" />,
    title: "Institution Partnerships",
    description: "We partner with trusted pesantrens and BMTs across Indonesia. Their endorsement is our social proof, and it creates a network effect where other institutions want in.",
  },
  {
    icon: <Code2 className="w-8 h-8 text-tawf-gold" />,
    title: "Open Source",
    description: "All code is public on GitHub from day one. Smart contract addresses are public, governance runs on a real-time dashboard, and we operate on an audit-us-anytime culture.",
  },
];

const governanceBodies = [
  {
    icon: <Shield className="w-10 h-10 text-tawf-green" />,
    title: "Sharia Advisory Board",
    tag: "Foundation Chairmen",
    tooltip: "sharia",
    description: "Islamic scholars whose decisions on Sharia matters are final, binding, and beyond commercial override. Assisted by Tawf-AI, referencing AAOIFI, Muhammadiyah, Malaysia DPSN, Bahrain, and Indonesia MUI frameworks.",
  },
  {
    icon: <Building2 className="w-10 h-10 text-tawf-green" />,
    title: "Board of Trustees",
    tag: "Legal & Financial",
    description: "Handles legal governance, financial oversight, and executive accountability, with absolute separation from Sharia authority.",
  },
  {
    icon: <Network className="w-10 h-10 text-tawf-green" />,
    title: "The TAWF DAO",
    tag: "Community Governance",
    tooltip: "dao",
    description: "The community's voice, gated by Tawf ID (TID), where 1 TID equals 1 vote. No token-weighting.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Tawf Islamic Foundation"
        subtitle="Baitul Maal rebuilt for the digital age."
        description="Rebuilding trust in Islamic charitable giving through radical transparency. Where did my zakat go? Now you can know for certain."
      />

      {/* Mission & Story */}
      <Section background="white">
        <SectionHeader
          badge="Our Story"
          title="Where We Come From"
          description="Before venture capital, before blockchain, there was Baitul Maal wa Tamwil."
        />

        <div className="max-w-3xl mx-auto space-y-8 text-tawf-ink/80 text-lg leading-relaxed">
          <p>
            The Tawf Islamic Foundation is a non-profit organization building blockchain-verified transparency infrastructure for Islamic philanthropy. We serve as the public-trust cornerstone of the Tawf ecosystem, generating legitimacy through verifiable accountability.
          </p>
          <p>
            For generations, Indonesian communities built their own financial institutions from the ground up: cooperatives rooted in trust, not collateral, funded by zakat and waqf. BMTs did not wait for banks to serve them. They built for themselves, governed themselves, trusted themselves. That is what we are rebuilding, for the digital age.
          </p>
          <p>
            Muslims give over $1 trillion in zakat annually. The problem isn't lack of generosity, it's lack of trust: donors rarely know where their money goes or whether it reached the people it was meant for. We're building first for Southeast Asian students, young and tech-savvy, who want their giving to be transparent, Sharia-certified, local, and beautiful.
          </p>
          <p className="font-medium text-tawf-green">
            We are not an organization that treats charity as an add-on. We are a structure where charity is architecturally mandatory.
          </p>
        </div>
      </Section>

      {/* Trust Strategy */}
      <Section background="sand">
        <SectionHeader
          badge="How We Work"
          title="Our Trust Strategy"
          description="We believe blockchain is the implementation detail, not the headline. Trust comes from three things."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`p-8 bg-white border border-tawf-green/10 ${RADIUS_CARD}`}
            >
              <div className="w-14 h-14 bg-tawf-green/10 rounded-full flex items-center justify-center mb-6">
                {pillar.icon}
              </div>
              <h3 className="font-serif text-xl text-tawf-green mb-3">{pillar.title}</h3>
              <p className="text-tawf-muted leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Governance */}
      <Section background="white">
        <SectionHeader
          badge="Organizational Structure"
          title="Governance"
          description="Three distinct bodies, one clear line of accountability."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {governanceBodies.map((body, index) => (
            <motion.div
              key={body.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`p-8 border border-tawf-green/10 ${RADIUS_CARD} bg-tawf-sand/50`}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                {body.icon}
              </div>
              <h3 className="text-xl font-serif font-medium text-tawf-green mb-2 flex items-center gap-1">
                {body.title}
                {body.tooltip && <InfoTooltip term={body.tooltip} />}
              </h3>
              <p className="text-sm font-bold tracking-wider uppercase text-tawf-gold mb-4">{body.tag}</p>
              <p className="text-tawf-muted leading-relaxed">{body.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/#governance" variant="secondary">
            See How Decisions Flow
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Section>

      {/* Roadmap */}
      <Section background="ink">
        <SectionHeader
          badge="Where We're Headed"
          title="Roadmap"
          description="See our real progress, tracked against the code in the tawf-labs repositories."
          className="[&_h2]:text-white [&_p]:text-white/70"
        />

        <div className="text-center">
          <Link
            to="/roadmap"
            className="inline-flex items-center justify-center gap-2 bg-tawf-gold text-tawf-green px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-white transition-colors"
          >
            View the Roadmap
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section background="green">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-gold mb-4">Build This With Us</h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Whether you're an institution, a scholar, or simply someone who believes giving should be transparent, there's a place for you in this ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@tawf.foundation?subject=Partnership Inquiry"
              className="inline-flex items-center justify-center gap-2 bg-tawf-gold text-tawf-green px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
            <Link
              to="/manifesto"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              Read the Manifesto
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
