import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle, ArrowRight, ChevronRight, Coins, FileText, Github,
  Infinity as InfinityIcon, Landmark, Lock, Shield, Sparkles, Users
} from 'lucide-react';
import PageHero from '../ui/PageHero';
import Section from '../ui/Section';
import InfoTooltip from '../ui/InfoTooltip';

// Sepolia testnet deployment. Verified source is the point of linking it: anyone can read what
// the contract actually does rather than take this page's word for it.
const VAULT_ADDRESS = '0x2341a8b30c93b2624453dE9eD732cd875528eb4a';
const EXPLORER_URL = `https://sepolia.etherscan.io/address/${VAULT_ADDRESS}`;
const SOURCE_URL = 'https://github.com/tawf-labs/tawf-wakaf';
const APP_URL = 'https://waqf.tawf.foundation';

const faqs = [
  {
    q: 'What is cash waqf?',
    a: 'Waqf is an Islamic endowment: capital is dedicated to charitable purpose, the capital itself is preserved, and only the benefit it produces is given away. Cash waqf applies that structure to money rather than to land or buildings, which is what makes it accessible at retail sizes.'
  },
  {
    q: 'What is the difference between the two akad?',
    a: "Waqf mu'abbad is perpetual: the capital is given permanently and never returned. Waqf mu'aqqat is temporary: the capital is dedicated for a fixed term and then returned to you in full. Both are recognised forms of waqf, and the platform offers both so the giver chooses which one they are actually making."
  },
  {
    q: 'Can a perpetual endowment ever be withdrawn?',
    a: 'No. This is enforced in the contract rather than in the interface. A perpetual position has no withdrawal path at all. The withdrawal function rejects it outright, and there is no administrative override for the Foundation, the nazir, or the contract owner. Hiding a button would not have been the same thing.'
  },
  {
    q: 'Where does the yield come from?',
    a: 'Deposits are routed across a diversified basket: liquid staking positions in Ethereum via wstETH and weETH, plus a stable reserve held in the deposit currency. The staking rewards from those positions are the yield. The stable reserve dampens drawdowns and stands in for a Sharia-compliant real-asset sleeve.'
  },
  {
    q: 'How does the yield reach the nazir?',
    a: 'Through a function that anyone can call, which pays a small bounty to whoever calls it. There is no privileged keeper and no admin key on the path between the yield and the nazir wallet. If nobody calls it, the yield simply accumulates in the vault, and it is never lost.'
  },
  {
    q: 'Is the capital guaranteed?',
    a: 'No, and we will not claim otherwise. Capital is recorded in rupiah but is backed by assets that move with the Ethereum price. If ETH weakens against the rupiah, the backing can fall below the recorded amount, and no amount of code can create the difference. The platform makes that risk visible rather than hiding it, through a solvency ratio, a buffer held above the capital, and a top-up function open to anyone.'
  },
  {
    q: 'Is this live?',
    a: 'The app is live at waqf.tawf.foundation, but on the Sepolia test network only. The contracts are deployed and source-verified there, and every token involved is a valueless test asset. The code is public and has not yet been through a third-party security audit. Mainnet deployment is gated on that audit.'
  }
];

export default function Waqf() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageHero
        badge="Cash Waqf"
        title="Waqf at Tawf Islamic Foundation"
        subtitle="Give once. Keep giving forever."
        description="Retail cash waqf, on-chain. Endow permanently and the capital is preserved while its staking yield reaches the nazir indefinitely, or dedicate it for a fixed term and take it back in full. Which akad you signed is enforced by the contract, not by us."
      />

      {/* What it is */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-tawf-green mb-6">
              Waqf, at Retail Scale
            </h2>
            <p className="text-tawf-muted text-lg leading-relaxed mb-6">
              A{' '}
              <span className="font-semibold text-tawf-green">waqf</span>
              <InfoTooltip term="waqf" /> is an endowment: the capital is held, and only the benefit
              it produces is given away. Historically that meant land or buildings, which put it out
              of reach for almost everyone.
            </p>
            <p className="text-tawf-muted text-lg leading-relaxed mb-6">
              Cash waqf applies the same structure to money. Tawf Cash Waqf takes it further:
              the endowed capital is put to work across a diversified staking portfolio, and the
              return it earns is separated from the capital and sent directly to the{' '}
              <span className="font-semibold text-tawf-green">nazir</span>
              <InfoTooltip term="nazir" />.
            </p>
            <p className="text-tawf-muted text-lg leading-relaxed">
              The capital is never spent. That is what makes a waqf a waqf, and here it is a
              property of the contract rather than a promise in a brochure.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-tawf-green/5 rounded-3xl transform -rotate-3"></div>
            <div className="relative bg-white p-8 rounded-2xl border border-tawf-green/10 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-tawf-green rounded-full flex items-center justify-center">
                  <Landmark className="w-7 h-7 text-tawf-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-tawf-green">The Portfolio</h3>
                  <p className="text-tawf-muted text-sm">Diversified, not concentrated</p>
                </div>
              </div>
              <div className="space-y-5">
                {[
                  { pct: '40%', label: 'Lido wstETH', note: 'Ethereum liquid staking' },
                  { pct: '30%', label: 'ether.fi weETH', note: 'a second, independent staking venue' },
                  { pct: '30%', label: 'Stable reserve', note: 'cushions drawdowns, and stands in for the RWA sleeve' }
                ].map((row) => (
                  <div key={row.label} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-tawf-green font-medium">{row.label}</p>
                      <p className="text-tawf-muted text-sm">{row.note}</p>
                    </div>
                    <span className="text-2xl font-serif text-tawf-green shrink-0">{row.pct}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 pt-5 border-t border-tawf-green/10 text-sm text-tawf-muted">
                Two independent staking providers rather than one, so a failure at either does not
                take the whole endowment with it.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* The two akad */}
      <Section background="white" id="akad">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-green mb-6">Two Akad</h2>
          <p className="text-tawf-muted text-xl max-w-3xl mx-auto">
            One of these cannot be undone. It is presented as a real choice, with the consequence
            stated before anything is signed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl border-2 border-tawf-green/30 bg-tawf-sand/40 flex flex-col"
          >
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="w-14 h-14 bg-tawf-green rounded-full flex items-center justify-center">
                <InfinityIcon className="w-7 h-7 text-tawf-gold" />
              </div>
              <span className="rounded-full bg-tawf-green px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-tawf-sand">
                Default
              </span>
            </div>
            <p className="text-sm font-semibold tracking-wider uppercase text-tawf-gold mb-2 flex items-center gap-1">
              Waqf Mu'abbad
              <InfoTooltip term="waqf-muabbad" />
            </p>
            <h3 className="text-2xl font-serif text-tawf-green mb-3">Perpetual endowment</h3>
            <p className="text-tawf-muted leading-relaxed flex-1">
              The capital is given permanently and is never returned. Not to you, not to the
              nazir, not to the Foundation. It stays invested, and a share of every harvest is
              retained to grow it, so the income it produces rises over time.
            </p>
            <dl className="mt-6 pt-5 border-t border-tawf-green/10 space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-tawf-muted">Withdrawal</dt>
                <dd className="text-tawf-green font-medium">No function exists</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-tawf-muted">Corpus growth</dt>
                <dd className="text-tawf-green font-medium">30% of each harvest</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-tawf-muted">Certificate reads</dt>
                <dd className="text-tawf-green font-medium">Perpetual</dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl border border-tawf-green/10 bg-white flex flex-col"
          >
            <div className="w-14 h-14 bg-tawf-sand rounded-full flex items-center justify-center mb-6">
              <Lock className="w-7 h-7 text-tawf-gold" />
            </div>
            <p className="text-sm font-semibold tracking-wider uppercase text-tawf-gold mb-2 flex items-center gap-1">
              Waqf Mu'aqqat
              <InfoTooltip term="waqf-muaqqat" />
            </p>
            <h3 className="text-2xl font-serif text-tawf-green mb-3">Fixed tenor</h3>
            <p className="text-tawf-muted leading-relaxed flex-1">
              The capital is locked for the term you choose and earns for the nazir throughout. Once
              the term and a short unbonding period have elapsed, it is returned to you in full.
            </p>
            <dl className="mt-6 pt-5 border-t border-tawf-green/10 space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-tawf-muted">Withdrawal</dt>
                <dd className="text-tawf-green font-medium">100% of capital</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-tawf-muted">Lock</dt>
                <dd className="text-tawf-green font-medium">Enforced by contract</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-tawf-muted">Certificate reads</dt>
                <dd className="text-tawf-green font-medium">The actual tenor</dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-green mb-6">How It Works</h2>
          <p className="text-tawf-muted text-xl max-w-3xl mx-auto">
            Every step happens on-chain and can be read by anyone, without trusting this page.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-tawf-green/20 hidden md:block"></div>

            {[
              {
                step: '01',
                title: 'Choose your akad',
                desc: 'Endow permanently, or dedicate the capital for a fixed term. The choice is recorded on the position itself and cannot be changed afterwards.',
                icon: <Users className="w-6 h-6" />
              },
              {
                step: '02',
                title: 'Deposit and receive your certificate',
                desc: 'The vault mints a non-transferable receipt plus an Akad certificate NFT drawn entirely on-chain. A perpetual certificate never claims your capital comes back, because the two akad carry different deeds.',
                icon: <FileText className="w-6 h-6" />
              },
              {
                step: '03',
                title: 'Capital is put to work',
                desc: 'Your deposit is routed across the staking basket and the stable reserve, in fixed proportions that are published on-chain rather than decided case by case.',
                icon: <Coins className="w-6 h-6" />
              },
              {
                step: '04',
                title: 'Only the surplus is stripped',
                desc: 'Anyone may call the harvest function for a small bounty. It can only move value above the capital plus a protective buffer, and it is rejected outright if it would dip below that line.',
                icon: <Sparkles className="w-6 h-6" />
              },
              {
                step: '05',
                title: 'The nazir is paid, the corpus compounds',
                desc: 'The stripped yield goes straight to the nazir wallet. For perpetual endowments a share is retained instead and added to the corpus, so next year’s benefit is larger than this year’s.',
                icon: <Landmark className="w-6 h-6" />
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex gap-8 mb-12 last:mb-0"
              >
                <div className="relative z-10 w-16 h-16 bg-tawf-green rounded-full flex items-center justify-center text-white font-semibold shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 pt-3">
                  <span className="text-sm font-semibold tracking-wider uppercase text-tawf-gold">{item.step}</span>
                  <h3 className="text-2xl font-serif text-tawf-green mb-2">{item.title}</h3>
                  <p className="text-tawf-muted text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Guarantees */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-green mb-6">
            What the Contract Guarantees
          </h2>
          <p className="text-tawf-muted text-xl max-w-3xl mx-auto">
            Not policies we could quietly change. Properties of the deployed code, which you can
            verify yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="w-8 h-8 text-tawf-gold" />,
              title: 'The corpus is preserved',
              desc: 'Only value above the capital plus a protective buffer can ever leave. A harvest that would erode the capital is rejected, not merely discouraged.'
            },
            {
              icon: <InfinityIcon className="w-8 h-8 text-tawf-gold" />,
              title: 'Perpetual means perpetual',
              desc: 'There is no withdrawal path for a perpetual position and no administrative override. Nobody holds a key that can return it.'
            },
            {
              icon: <Landmark className="w-8 h-8 text-tawf-gold" />,
              title: 'No intermediary on the path',
              desc: "Yield moves from the vault to the nazir's wallet in a single call that anyone can make. There is no privileged keeper to wait on and no admin able to intercept it."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 bg-tawf-sand/40 rounded-2xl border border-tawf-green/10"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-5 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif text-tawf-green mb-3">{item.title}</h3>
              <p className="text-tawf-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Honest status + risk. The Foundation's own voice is "not as promises, as on-chain
          reality", so the limitations belong on the page rather than in a footnote. */}
      <Section background="ink">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-tawf-gold shrink-0" />
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-tawf-gold">
              Status &amp; Risk
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">
            What we are not claiming
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-white/70">
            <p>
              <span className="text-white font-medium">This is a testnet pilot.</span> The contracts
              are deployed and source-verified on the Sepolia test network. Every token involved is
              a valueless test asset. There is no mainnet deployment, and there will not be one
              before an independent security audit.
            </p>
            <p>
              <span className="text-white font-medium">The capital is not guaranteed.</span> It is
              recorded in rupiah but backed by assets that move with the Ethereum price. If ETH
              weakens against the rupiah, the backing can fall below the recorded amount and no
              amount of code can create the difference. A buffer above the capital, a stable
              reserve, a published solvency ratio and a top-up function open to anyone are there to
              make that risk survivable and visible, not to eliminate it.
            </p>
            <p>
              <span className="text-white font-medium">A perpetual endowment has no exit from that
              risk.</span> That is the nature of the akad rather than a defect: the capital has been
              given away. The fixed-tenor akad exists for anyone who may want it back.
            </p>
            <p className="text-white/50">
              Every deposit amount and wallet address is public on-chain, and the address is drawn
              into the certificate image itself. Waqf here is transparent by construction, which
              also means it is not private.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-tawf-gold text-tawf-green px-8 py-4 rounded-full text-base font-medium tracking-widest uppercase hover:bg-white transition-colors"
            >
              Open the Testnet App
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={EXPLORER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full text-base font-medium tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              Verified Contract
            </a>
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full text-base font-medium tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              <Github className="w-5 h-5" />
              Source Code
            </a>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-green mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-tawf-green/10 rounded-2xl overflow-hidden">
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-tawf-sand/30 transition-colors gap-4"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                aria-expanded={openFaq === idx}
              >
                <span className="font-medium text-tawf-green">{faq.q}</span>
                <ChevronRight className={`w-5 h-5 text-tawf-gold shrink-0 transition-transform ${openFaq === idx ? 'rotate-90' : ''}`} />
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
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-gold mb-6">
            An Endowment That Outlives Us
          </h2>
          <p className="text-tawf-sand/80 text-xl mb-10 max-w-2xl mx-auto">
            The oldest instrument in Islamic philanthropy, rebuilt so the capital cannot quietly be
            spent and the benefit cannot quietly be diverted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-tawf-gold text-tawf-green px-8 py-4 rounded-full text-base font-medium tracking-widest uppercase hover:bg-white transition-colors"
            >
              Open the Testnet App
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/glossary"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-tawf-sand text-tawf-sand px-8 py-4 rounded-full text-base font-medium tracking-widest uppercase hover:bg-tawf-sand/10 transition-colors"
            >
              Learn Islamic Finance Terms
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
