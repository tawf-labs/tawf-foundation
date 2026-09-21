import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Landmark, Network } from 'lucide-react';
import InfoTooltip from '../ui/InfoTooltip';
import { CONTAINER, Kick, ACC, ACC_SOFT, MUTED2, LINE2, LINE_STRONG, usePrefersReducedMotion } from './landingCommon';

export default function GovernanceSection() {
  const reduce = usePrefersReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  const onTilt = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || !cardRef.current) return;
    const el = cardRef.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.transition = 'transform .08s linear';
    el.style.transform = `rotateX(${(0.5 - y) * 14}deg) rotateY(${(x - 0.5) * 18}deg)`;
  };

  const resetTilt = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = 'transform .5s cubic-bezier(.2,.75,.2,1)';
    cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  const bodies = [
    { icon: <Sparkles className="size-6" />, title: 'AI Sharia Review', sub: 'Framework Alignment', desc: 'An AI-assisted review layer that checks all Sharia matters against strict standards.', note: 'Aligned to the AAOIFI and DSN-MUI frameworks.', term: 'sharia' },
    { icon: <Landmark className="size-6" />, title: 'Board of Trustees', sub: 'Legal & Financial', desc: 'Handles legal governance, financial oversight, and executive accountability. Clear separation from Sharia authority.', term: 'sharia' },
    { icon: <Network className="size-6" />, title: 'The TAWF DAO', sub: 'Community Governance', desc: "The community's voice. Gated by Tawf ID (TID), where 1 TID equals 1 Vote. No token-weighting.", term: 'dao' },
  ];

  return (
    <section id="governance" className="border-t" style={{ borderColor: LINE2 }}>
      <div className={CONTAINER}>
        <div className="py-16 md:py-20">
          <Kick>Governance</Kick>
          <h2 className="max-w-[15em] text-[clamp(32px,4.4vw,54px)] font-medium leading-[1.04] tracking-[-0.03em] text-[#14181c]">Three bodies, one clear workflow</h2>
          <p className="mt-5 max-w-[36em] text-[clamp(16px,1.4vw,18px)] leading-[1.6]" style={{ color: MUTED2 }}>Three distinct governing bodies with a defined decision flow.</p>
        </div>

        <div className="grid grid-cols-1 border-t md:grid-cols-3" style={{ borderColor: LINE2 }}>
          {bodies.map((b, i) => (
            <article key={b.title} className="group p-8" style={i < 2 ? { borderRight: `1px solid ${LINE2}` } : undefined}>
              <div className="mb-5 grid size-11 place-items-center rounded-xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:-rotate-3" style={{ background: ACC_SOFT, color: ACC }}>{b.icon}</div>
              <h3 className="text-lg font-semibold tracking-tight">{b.title} <InfoTooltip term={b.term} /></h3>
              <p className="mt-1 text-sm font-medium" style={{ color: ACC }}>{b.sub}</p>
              <p className="mt-3 max-w-[38ch] text-[15px] leading-[1.6]" style={{ color: MUTED2 }}>{b.desc}</p>
              {b.note && <p className="mt-4 border-t border-dashed pt-3.5 text-[13.5px] leading-[1.5]" style={{ borderColor: LINE_STRONG }}>{b.note}</p>}
            </article>
          ))}
        </div>

        <div className="border-t px-6 pb-4 pt-14 md:px-10" style={{ borderColor: LINE2 }}>
          <h3 className="text-2xl font-semibold tracking-tight">How decisions flow</h3>
          <div className="relative mt-7 grid h-[90px] grid-cols-3" aria-hidden="true">
            <span className="absolute left-[16.6%] right-[16.6%] top-[22px] h-0.5" style={{ background: LINE2 }}>
              <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 2.2, ease: 'linear', delay: 0.3 }} className="absolute inset-0 origin-left" style={{ background: ACC }} />
            </span>
            {['Proposal', 'Community Vote', 'Sharia Review'].map((n) => (
              <div key={n} className="relative pt-[42px] text-center text-sm font-medium" style={{ color: MUTED2 }}>
                <span className="absolute left-1/2 top-[14px] -ml-[9px] size-[18px] rounded-full border-2 bg-white" style={{ borderColor: LINE_STRONG }} />
                {n}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 border-t md:grid-cols-3" style={{ borderColor: LINE2 }}>
          {[
            ['1', 'Community Proposal', 'Any TID holder can submit proposals for ecosystem fund allocation, community programs, partnership priorities, and roadmap direction.'],
            ['2', 'Community Voting', 'Following musyawarah principles of collective deliberation. Transparent blockchain voting with defined periods.', 'musyawarah'],
            ['3', 'AI Sharia Review', 'An AI-assisted review layer checks every proposal against the Sharia-aligned AAOIFI and DSN-MUI frameworks.', 'sharia'],
          ].map(([n, t, d, term], i) => (
            <article key={n} className="p-8" style={i < 2 ? { borderRight: `1px solid ${LINE2}` } : undefined}>
              <div className="mb-5 grid size-[30px] place-items-center rounded-lg font-mono text-[13px] font-medium" style={{ color: ACC, background: ACC_SOFT }}>{n}</div>
              <h3 className="text-lg font-semibold tracking-tight">{t}</h3>
              <p className="mt-3 max-w-[38ch] text-[15px] leading-[1.6]" style={{ color: MUTED2 }}>
                {term ? <>Following <span className="inline-flex items-center gap-1">musyawarah<InfoTooltip term={term as string} /></span> principles of collective deliberation. Transparent blockchain voting with defined periods.</> : d}
              </p>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 items-center gap-10 border-t px-6 py-14 md:grid-cols-[1.1fr_1fr] md:px-10 md:py-16" style={{ borderColor: LINE2 }}>
          <div>
            <Kick>Identity, not a token</Kick>
            <h2 className="max-w-[15em] text-[clamp(30px,3.6vw,44px)] font-medium leading-[1.04] tracking-[-0.03em]">The Tawf ID (TID)</h2>
            <p className="mt-5 max-w-[36em] text-[clamp(16px,1.4vw,18px)] leading-[1.6]" style={{ color: MUTED2 }}>
              The credential that grants access to the TAWF <span className="inline-flex items-center gap-1">DAO<InfoTooltip term="dao" /></span>. TID is a <span className="inline-flex items-center gap-1">Soulbound<InfoTooltip term="soulbound" /></span> NFT built using secure privacy technology. It is permanently bound to one wallet, non-transferable, and carries zero monetary value.
            </p>
            <p className="mt-6 text-xl font-semibold tracking-tight">One Tawf ID. One vote. No exceptions.</p>
          </div>
          <div className="mx-auto w-full max-w-[420px]" style={{ perspective: '900px' }}>
            <div
              ref={cardRef}
              onPointerMove={onTilt}
              onPointerLeave={resetTilt}
              className="relative flex aspect-[1.586] flex-col justify-between overflow-hidden rounded-[22px] p-6 text-white"
              style={{ background: `linear-gradient(140deg, #0f9f70, #0a4f3a 70%)`, boxShadow: '0 30px 60px -20px rgba(10,63,47,.55), 0 2px 4px rgba(0,0,0,.1)', transformStyle: 'preserve-3d' }}
            >
              <span className="pointer-events-none absolute inset-0" style={{ background: 'repeating-linear-gradient(60deg, rgba(255,255,255,.05) 0 1px, transparent 1px 22px)' }} />
              <div className="relative z-10 flex items-center justify-between">
                <b className="text-[22px] font-semibold tracking-tight">Tawf ID</b>
                <span className="rounded-full border px-2.5 py-1 font-mono text-[11px] font-medium" style={{ background: 'rgba(255,255,255,.16)', borderColor: 'rgba(255,255,255,.25)' }}>SOULBOUND</span>
              </div>
              <div className="relative z-10 font-mono text-[13px] font-medium opacity-85">0x7a3f…e91c</div>
              <div className="relative z-10 flex items-end justify-between text-[12.5px]">
                <div><span className="mb-0.5 block text-[11.5px] opacity-70">Votes</span><b className="font-medium">1</b></div>
                <div><span className="mb-0.5 block text-[11.5px] opacity-70">Transferable</span><b className="font-medium">No</b></div>
                <div><span className="mb-0.5 block text-[11.5px] opacity-70">Value</span><b className="font-medium">0</b></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
