import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Coins, Users, Scale, CheckCircle, ArrowRight,
  ChevronRight, Heart, HandCoins
} from 'lucide-react';
import PageHero from '../ui/PageHero';
import Section from '../ui/Section';
import InfoTooltip from '../ui/InfoTooltip';
import { glossaryTerms } from '../../content/glossary';

const asnafCategories = [
  { key: 'faqir', name: 'Al-Fuqara', desc: 'The poor - those who don\'t have enough to meet basic needs' },
  { key: 'miskin', name: 'Al-Masakin', desc: 'The needy - those who have some means but insufficient' },
  { key: 'amil', name: 'Al-Amilin', desc: 'The collectors/administrators of zakat' },
  { key: 'muallaf', name: 'Al-Mu\'allafah', desc: 'Those whose hearts are to be reconciled' },
  { key: 'riqab', name: 'Ar-Riqab', desc: 'Those in bondage or seeking freedom' },
  { key: 'gharimin', name: 'Al-Gharimin', desc: 'Those burdened with debt' },
  { key: 'fisabilillah', name: 'Fi Sabilillah', desc: 'Those in God\'s cause' },
  { key: 'ibnu-sabil', name: 'Ibnus Sabil', desc: 'Travelers in need' }
];

const faqs = [
  {
    q: 'What is zakat?',
    a: 'Zakat is one of the Five Pillars of Islam. It\'s an obligatory charitable contribution of 2.5% of qualifying wealth that eligible Muslims must pay annually.'
  },
  {
    q: 'Who must pay zakat?',
    a: 'Any Muslim who possesses wealth above the nisab threshold for one lunar year must pay zakat. Nisab is equivalent to the value of 87.48 grams of gold or 612.36 grams of silver.'
  },
  {
    q: 'How does Tawf Foundation collect zakat?',
    a: 'We collect zakat from Tawf Labs revenue (3-8% monthly royalty), from direct community payments, and from ecosystem partners who use our certification services.'
  },
  {
    q: 'How is zakat distributed?',
    a: 'Zakat is distributed to the eight asnaf categories defined by Islamic law. Our distributions are recorded on-chain for full transparency and auditability.'
  },
  {
    q: 'Is my zakat payment tax-deductible?',
    a: 'Tawf Foundation is a registered non-profit organization. Zakat payments may be tax-deductible depending on your local tax jurisdiction. Please consult with a tax professional.'
  },
  {
    q: 'Can I specify which asnaf my zakat goes to?',
    a: 'While you can express preference, our Scholar Chairmen review all distributions to ensure Sharia compliance and fair allocation across all eight categories.'
  }
];

export default function Zakat() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageHero
        badge="Zakat Collection & Distribution"
        title="Zakat at Tawf Foundation"
        subtitle="Transparent, on-chain obligatory charity"
        description="We serve as the official amil, collecting and distributing zakat with full transparency. Every payment is recorded on-chain, every distribution is traceable."
      />

      {/* What Is Zakat */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-tawf-green mb-6">What Is Zakat?</h2>
            <p className="text-tawf-muted text-lg leading-relaxed mb-6">
              Zakat is not charity in the voluntary sense. It is an obligation—one of the Five Pillars of Islam. Eligible Muslims must pay 2.5% of their qualifying wealth annually to support those in need.
            </p>
            <p className="text-tawf-muted text-lg leading-relaxed mb-6">
              At Tawf Foundation, we've modernized this ancient practice. We serve as the official{' '}
              <span className="inline-flex items-center gap-1">
                amil
                <InfoTooltip term="amil" />
              </span>
              , collecting zakat from Tawf Labs revenue and community contributions, then distributing it to the eight categories of eligible recipients known as{' '}
              <span className="inline-flex items-center gap-1">
                asnaf
                <InfoTooltip term="asnaf" />
              </span>
              .
            </p>
            <div className="flex items-center gap-4 p-6 bg-tawf-green/5 rounded-2xl border border-tawf-green/10">
              <CheckCircle className="w-8 h-8 text-tawf-green shrink-0" />
              <p className="text-tawf-green font-medium">Every zakat payment is recorded on-chain. You can verify where your contribution goes.</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-tawf-green/5 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white p-8 rounded-2xl border border-tawf-green/10 shadow-xl">
              <div className="text-center mb-6">
                <Coins className="w-16 h-16 text-tawf-gold mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-tawf-green mb-2">2.5%</h3>
                <p className="text-tawf-muted">Standard zakat rate on qualifying assets</p>
              </div>
              <div className="border-t border-tawf-green/10 pt-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-tawf-muted">From Tawf Labs</span>
                  <span className="font-semibold text-tawf-green">3-8% royalty</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tawf-muted">From Community</span>
                  <span className="font-semibold text-tawf-green">Direct payments</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tawf-muted">Frequency</span>
                  <span className="font-semibold text-tawf-green">Annual calculation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Who Must Pay */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-green mb-6">Who Must Pay Zakat?</h2>
          <p className="text-tawf-muted text-xl max-w-3xl mx-auto">
            Zakat is obligatory for Muslims who meet the{' '}
            <span className="inline-flex items-center gap-1">
              nisab
              <InfoTooltip term="nisab" />
            </span>
            {' '}threshold—the minimum amount of wealth one must possess before being obligated to pay zakat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 bg-tawf-sand/50 rounded-2xl">
            <Scale className="w-12 h-12 text-tawf-gold mx-auto mb-4" />
            <h3 className="text-xl font-serif text-tawf-green mb-3">Calculate Wealth</h3>
            <p className="text-tawf-muted">Sum all qualifying assets: gold, silver, cash, business inventory, investments</p>
          </div>
          <div className="text-center p-8 bg-tawf-sand/50 rounded-2xl">
            <Coins className="w-12 h-12 text-tawf-gold mx-auto mb-4" />
            <h3 className="text-xl font-serif text-tawf-green mb-3">Check Nisab</h3>
            <p className="text-tawf-muted">Verify your wealth exceeds the nisab threshold (approx. 87.48g gold value)</p>
          </div>
          <div className="text-center p-8 bg-tawf-sand/50 rounded-2xl">
            <HandCoins className="w-12 h-12 text-tawf-gold mx-auto mb-4" />
            <h3 className="text-xl font-serif text-tawf-green mb-3">Pay 2.5%</h3>
            <p className="text-tawf-muted">Calculate and distribute zakat to eligible recipients through verified channels</p>
          </div>
        </div>
      </Section>

      {/* The Eight Asnaf */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-green mb-6">The Eight Asnaf</h2>
          <p className="text-tawf-muted text-xl max-w-3xl mx-auto">
            Islamic law specifies eight categories of eligible zakat recipients. The Tawf Foundation distributes to all eight categories under the guidance of our Scholar Chairmen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {asnafCategories.map((category, idx) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-6 bg-white rounded-2xl border border-tawf-green/10 hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 bg-tawf-green rounded-full flex items-center justify-center text-white font-semibold mb-4">
                {idx + 1}
              </div>
              <h3 className="text-lg font-serif font-medium text-tawf-green mb-2">{category.name}</h3>
              <p className="text-tawf-muted text-sm leading-relaxed">{category.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How Tawf Collects */}
      <Section background="ink">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-tawf-gold">Transparent Collection</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white mt-4 mb-6">How Tawf Collects Zakat</h2>
          <p className="text-tawf-sand/70 text-xl max-w-3xl mx-auto">
            We've designed our zakat collection system to be Sharia-compliant, transparent, and fully auditable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Labs Revenue', desc: '3-8% of Tawf Labs certification revenue flows to Foundation monthly', icon: <TrendingUp className="w-6 h-6" /> },
            { title: 'Direct Payments', desc: 'Community members can pay zakat directly through our platform', icon: <Heart className="w-6 h-6" /> },
            { title: 'Partners', desc: 'Certified partners contribute a portion as part of their obligation', icon: <Users className="w-6 h-6" /> },
            { title: 'Annual Audit', desc: 'Scholar Chairmen verify all calculations and distributions annually', icon: <CheckCircle className="w-6 h-6" /> }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="text-tawf-gold mb-4">{item.icon}</div>
              <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
              <p className="text-tawf-sand/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-green mb-6">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-tawf-green/10 rounded-2xl overflow-hidden">
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-tawf-sand/30 transition-colors"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <span className="font-medium text-tawf-green">{faq.q}</span>
                <ChevronRight className={`w-5 h-5 text-tawf-gold transition-transform ${openFaq === idx ? 'rotate-90' : ''}`} />
              </button>
              {openFaq === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="px-6 pb-5 pt-0 bg-tawf-sand/30"
                >
                  <p className="text-tawf-muted leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="green">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-gold mb-6">Pay Your Zakat With Confidence</h2>
          <p className="text-tawf-sand/80 text-xl mb-10 max-w-2xl mx-auto">
            Every payment is recorded on-chain. Every distribution is traceable. This is zakat as it was meant to be—transparent, accountable, and trustworthy.
          </p>
          <Link
            to="/glossary"
            className="inline-flex items-center gap-2 bg-tawf-gold text-tawf-green px-8 py-4 rounded-full text-base font-medium tracking-widest uppercase hover:bg-white transition-colors"
          >
            Learn Islamic Finance Terms
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Section>
    </>
  );
}

function TrendingUp({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}
