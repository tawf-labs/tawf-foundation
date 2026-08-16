import React from 'react';
import { motion } from 'motion/react';
import {
  Compass, Target, ScrollText, Landmark, Fingerprint, Vote,
  CircleCheck, CircleDot, CircleDashed, ArrowRight, Sparkles,
  BookOpen, FlaskConical, IdCard, GitBranch, AlertTriangle, ExternalLink,
} from 'lucide-react';
import PageHero from '../ui/PageHero';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

type Status = 'done' | 'progress' | 'planned';

interface NorthStar {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Milestone {
  label: string;
  status: Status;
  headliner?: boolean;
}

interface Layer {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: {
    dot: string;   // colored dot / left border accent
    chip: string;  // label chip background
    text: string;  // label chip text
  };
  phases: (Milestone | null)[]; // one entry per phase column
}

interface Pillar {
  icon: React.ReactNode;
  name: string;
  status: Status;
  statusLabel: string;
  summary: string;
  evidence: string[];
  link?: string;
}

/* ------------------------------------------------------------------ */
/* Status styling helpers                                              */
/* ------------------------------------------------------------------ */

const STATUS = {
  done: {
    label: 'Done',
    icon: <CircleCheck className="w-4 h-4" />,
    cell: 'bg-tawf-green text-tawf-sand border-tawf-green',
    badge: 'bg-tawf-green text-tawf-sand',
  },
  progress: {
    label: 'In Progress',
    icon: <CircleDot className="w-4 h-4" />,
    cell: 'bg-tawf-gold/15 text-tawf-ink border-tawf-gold/70',
    badge: 'bg-tawf-gold/20 text-tawf-ink border border-tawf-gold/60',
  },
  planned: {
    label: 'Planned',
    icon: <CircleDashed className="w-4 h-4" />,
    cell: 'bg-transparent text-tawf-muted border-tawf-muted/40 border-dashed',
    badge: 'bg-tawf-muted/10 text-tawf-muted',
  },
} as const;

const PHASES = [
  { key: 'p0', name: 'Foundation', range: '2024-2025' },
  { key: 'p1', name: 'Testnet', range: '2025-2026' },
  { key: 'p2', name: 'Devnet', range: '2026' },
  { key: 'p3', name: 'Mainnet', range: '2026+' },
];

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const NORTH_STARS: NorthStar[] = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Transparent Zakat',
    description:
      'Private, auditable donations. Every rupiah traceable from donor to recipient without exposing the giver.',
  },
  {
    icon: <Landmark className="w-6 h-6" />,
    title: 'Sharia-Compliant DeFi',
    description:
      'Halal on-chain finance: perpetual cash waqf, sukuk, and yield whose akad is enforced by code, not promises.',
  },
  {
    icon: <Fingerprint className="w-6 h-6" />,
    title: 'Soulbound Identity',
    description:
      'A privacy-preserving Tawf ID (TID). One person, one credential, with zero-knowledge proofs for sensitive claims.',
  },
  {
    icon: <Vote className="w-6 h-6" />,
    title: 'Community Governance',
    description:
      'On-chain, tier-weighted DAO where 1 TID = 1 vote. The roadmap itself is decided by its holders.',
  },
];

/* Color-coded horizontal layers (strawmap-style). Each layer maps to one
   row, with a milestone per phase column. null = nothing in that phase. */
const LAYERS: Layer[] = [
  {
    id: 'research',
    name: 'Research',
    icon: <BookOpen className="w-4 h-4" />,
    color: { dot: 'bg-emerald-600', chip: 'bg-emerald-600/10 text-emerald-700', text: 'text-emerald-700' },
    phases: [
      {
        label: 'ZK Zakat paper, accepted @ ICIMTECH 2026',
        status: 'done',
        headliner: true,
      },
      {
        label: 'TID protocol specs (did:tawf, circuit, bridge)',
        status: 'done',
      },
      { label: 'Tawf AI research', status: 'progress' },
      null,
    ],
  },
  {
    id: 'protocol',
    name: 'Protocol',
    icon: <FlaskConical className="w-4 h-4" />,
    color: { dot: 'bg-sky-600', chip: 'bg-sky-600/10 text-sky-700', text: 'text-sky-700' },
    phases: [
      null,
      {
        label: 'Waqf, DAO, and Verify on Sepolia',
        status: 'done',
        headliner: true,
      },
      { label: 'Multichain app expansion', status: 'progress' },
      { label: 'Security audit, then Arbitrum mainnet', status: 'planned' },
    ],
  },
  {
    id: 'identity',
    name: 'Identity',
    icon: <IdCard className="w-4 h-4" />,
    color: { dot: 'bg-violet-600', chip: 'bg-violet-600/10 text-violet-700', text: 'text-violet-700' },
    phases: [
      null,
      {
        label: 'Tawf ID app + multichain contracts',
        status: 'done',
        headliner: true,
      },
      { label: 'Multichain bridge hardening', status: 'planned' },
      null,
    ],
  },
  {
    id: 'application',
    name: 'Application',
    icon: <Compass className="w-4 h-4" />,
    color: { dot: 'bg-amber-600', chip: 'bg-amber-600/10 text-amber-700', text: 'text-amber-700' },
    phases: [
      { label: 'Foundation site live', status: 'done', headliner: true },
      { label: 'Wallet-connected dApps (Waqf, Gov)', status: 'progress' },
      { label: 'zkt & qrbn public apps', status: 'planned' },
      { label: 'Mainnet launch', status: 'planned' },
    ],
  },
  {
    id: 'ai',
    name: 'AI',
    icon: <Sparkles className="w-4 h-4" />,
    color: { dot: 'bg-rose-600', chip: 'bg-rose-600/10 text-rose-700', text: 'text-rose-700' },
    phases: [
      null,
      { label: 'Tawf AI zakat calculator & Sharia Q&A', status: 'progress' },
      { label: 'AI analytics dashboards', status: 'planned' },
      { label: 'On-chain AI analytics', status: 'planned' },
    ],
  },
];

const PILLARS: Pillar[] = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    name: 'Research',
    status: 'done',
    statusLabel: 'Published & accepted',
    summary:
      'Peer-reviewed research grounding every product decision. Our zero-knowledge zakat paper is accepted at ICIMTECH 2026.',
    evidence: [
      '“Zero-Knowledge Zakat: A Design Science Approach to Auditable Private Donations on Blockchain” by M. Z. Fatonie and A. A. S. Gunawan, accepted @ ICIMTECH 2026',
      'Four TID protocol specs published in tawf-did: did:tawf method, circuit, compact contract, and bridge',
      'Tawf AI zakat calculator and Sharia Q&A grounded in AAOIFI and MUI frameworks',
    ],
    link: '/research',
  },
  {
    icon: <Landmark className="w-6 h-6" />,
    name: 'Cash Waqf Protocol',
    status: 'done',
    statusLabel: 'Live on Sepolia',
    summary:
      'The most complete dApp in the ecosystem: a real vault enforcing perpetual and fixed-tenor akad in code, deployed to Sepolia testnet.',
    evidence: [
      'SWRVault.sol (792 lines), perpetual + fixed-tenor deposits, yield adapters, solvency & buffer tracking',
      'Soulbound Akad Certificate NFT with on-chain SVG',
      '1,681 lines of tests incl. fuzz + invariant',
      'Deployed @ 0x2341a8b30c93b2624453dE9eD732cd875528eb4a, live at waqf.tawf.foundation',
    ],
    link: '/waqf',
  },
  {
    icon: <ScrollText className="w-6 h-6" />,
    name: 'Verify / Notarization',
    status: 'done',
    statusLabel: 'Live on Sepolia',
    summary:
      'Append-only Merkle-root notary proving a claim existed and was signed, without exposing the underlying data.',
    evidence: [
      'TawfVerifyRegistry.sol, org registration, scoped signers, gap-detecting sequential anchoring',
      '4 packages: verify-core (Merkle/hash/PII-lint), verify-server, verify-react, verify-cli',
      'Foundry test suite (258 lines), cross-language parity with TypeScript core',
    ],
  },
  {
    icon: <Fingerprint className="w-6 h-6" />,
    name: 'Tawf ID (TID)',
    status: 'done',
    statusLabel: 'Functional app',
    summary:
      'Soulbound zero-knowledge identity, a working web app backed by multichain contracts built on Ethereum standards.',
    evidence: [
      '8-page web app (create, verify, proofs, DID resolution, settings)',
      'Solidity ERC-5192 TIDAttestation + TIDAnchor and a multichain attestation program',
      'did:tawf method spec + DID resolver (726 lines)',
    ],
  },
  {
    icon: <Vote className="w-6 h-6" />,
    name: 'Tawf DAO',
    status: 'done',
    statusLabel: 'Live on Sepolia',
    summary:
      'The Sharia-compliant DAO is live on Sepolia, wired to ZKTCore with zero-knowledge voting and tier-weighted governance.',
    evidence: [
      '11 contracts deployed on Sepolia, ProposalManager, VotingManager, MilestoneManager, TawfPassport, VotingNFT, PoolManager, ZakatEscrowManager, and more',
      'Soulbound tiered voting, KYC-gated proposals, and sequential fund release',
      'A multichain app-layer expansion is in progress on a dedicated feature branch',
    ],
  },
];

const GAPS = [
  'No mainnet deployment anywhere. The entire ecosystem runs on testnet or localnet.',
  'Security audits are a hard prerequisite before any mainnet deployment.',
  'The multichain expansion frontend is not yet wired to the on-chain programs.',
  'tawf-contracts (sukuk / staking / swap) is a Foundry bootstrap with empty stubs.',
  'Participation-tracker program is a 16-line scaffold pending real logic.',
];

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

function StatusCell({ milestone }: { milestone: Milestone }) {
  const s = STATUS[milestone.status];
  return (
    <div
      className={`px-3 py-2.5 rounded-lg border text-sm leading-snug transition-colors ${s.cell} ${
        milestone.headliner ? 'ring-2 ring-tawf-gold/60' : ''
      }`}
    >
      <div className="flex items-start gap-2">
        <span className="mt-0.5 shrink-0">{s.icon}</span>
        <span className="font-medium">{milestone.label}</span>
      </div>
    </div>
  );
}

export default function Roadmap() {
  return (
    <>
      <PageHero
        badge="Roadmap"
        title="The Tawf Strawmap"
        subtitle="A strawman roadmap of our real progress, not our ambitions."
        description="What is actually shipped, what is being built, and what remains. Maintained as a living document, updated alongside the code in the tawf-labs repositories."
        background="ink"
      />

      {/* North Stars */}
      <Section background="sand">
        <SectionHeader
          badge="North Stars"
          title="Where everything points"
          description="Four end-goals every repo in the ecosystem is working toward. They are the destination, and the roadmap below is the honest path."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NORTH_STARS.map((star, i) => (
            <motion.div
              key={star.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-7 bg-tawf-ink text-white rounded-2xl flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-tawf-gold/20 text-tawf-gold flex items-center justify-center mb-5">
                {star.icon}
              </div>
              <h3 className="font-serif text-xl mb-3">{star.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{star.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline map */}
      <Section background="white">
        <SectionHeader
          badge="Timeline"
          title="The map"
          description="Layers run top-to-bottom. Phases run left-to-right. Green is done, gold is in progress, dashed grey is planned."
        />

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-5 mb-8 text-xs font-medium tracking-wider uppercase text-tawf-muted">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-tawf-green" /> Done
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-tawf-gold/60" /> In Progress
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm border border-dashed border-tawf-muted/50" /> Planned
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm ring-2 ring-tawf-gold/70" /> Headliner
          </span>
        </div>

        {/* Phase column headers */}
        <div className="hidden md:grid grid-cols-[140px_repeat(4,1fr)] gap-3 mb-4 text-xs font-semibold tracking-widest uppercase text-tawf-muted">
          <div />
          {PHASES.map((p) => (
            <div key={p.key} className="text-center">
              <div>{p.name}</div>
              <div className="font-normal text-[10px] text-tawf-muted/70">{p.range}</div>
            </div>
          ))}
        </div>

        {/* Layers */}
        <div className="space-y-3">
          {LAYERS.map((layer) => (
            <div
              key={layer.id}
              className="grid grid-cols-1 md:grid-cols-[140px_repeat(4,1fr)] gap-3 md:items-stretch"
            >
              {/* Layer label */}
              <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-1 py-1">
                <span className={`w-2.5 h-2.5 rounded-full ${layer.color.dot}`} />
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase ${layer.color.chip}">
                  {layer.icon}
                  {layer.name}
                </span>
              </div>

              {/* Phase cells */}
              {layer.phases.map((m, idx) => (
                <div key={idx} className="md:self-stretch">
                  {/* Mobile phase label */}
                  <div className="md:hidden text-[10px] font-semibold uppercase tracking-widest text-tawf-muted mb-1">
                    {PHASES[idx].name}
                  </div>
                  {m ? <StatusCell milestone={m} /> : (
                    <div className="hidden md:block h-full rounded-lg border border-tawf-muted/10" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Section>

      {/* Detail cards */}
      <Section background="sand">
        <SectionHeader
          badge="The Evidence"
          title="What 'done' actually means"
          description="Every green mark below is backed by code in the tawf-labs GitHub organization, linked where it lives."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="p-7 bg-white rounded-2xl border border-tawf-green/10 flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-full bg-tawf-green/10 text-tawf-green flex items-center justify-center">
                  {pillar.icon}
                </div>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${STATUS[pillar.status].badge}`}>
                  {STATUS[pillar.status].icon}
                  {pillar.statusLabel}
                </span>
              </div>
              <h3 className="font-serif text-xl text-tawf-green mb-2">{pillar.name}</h3>
              <p className="text-tawf-muted text-sm leading-relaxed mb-5">{pillar.summary}</p>
              <ul className="space-y-2 mb-6">
                {pillar.evidence.map((e, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-tawf-ink/70">
                    <ArrowRight className="w-4 h-4 text-tawf-gold shrink-0 mt-0.5" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
              {pillar.link && (
                <a
                  href={pillar.link}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-tawf-green hover:text-tawf-gold transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Known gaps */}
      <Section background="ink">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-tawf-gold"></div>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-tawf-gold">Honesty Note</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">What we have not done yet</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            A roadmap that only shows wins is a marketing page. These are the gaps that stand between today&apos;s
            testnets and a trustworthy mainnet, stated plainly so the community can hold us to them.
          </p>
          <ul className="space-y-4">
            {GAPS.map((gap, i) => (
              <li key={i} className="flex items-start gap-3 text-white/80">
                <AlertTriangle className="w-5 h-5 text-tawf-gold shrink-0 mt-0.5" />
                <span>{gap}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex items-center gap-2 text-xs text-white/40 font-medium tracking-wider uppercase">
            <GitBranch className="w-4 h-4" />
            Living document, last updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="green">
        <div className="max-w-2xl mx-auto text-center">
          <Sparkles className="w-10 h-10 text-tawf-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-gold mb-4">Help us move a box</h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Every grey and gold box is an open invitation. The code is public, the roadmap is transparent,
            and the DAO decides where we go next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/tawf-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-tawf-gold text-tawf-green px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-white transition-colors"
            >
              <GitBranch className="w-4 h-4" />
              Contribute on GitHub
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
