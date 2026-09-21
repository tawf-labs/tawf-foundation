import React from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';
import { CONTAINER, Kick, ACC, ACC_DEEP, ACC_SOFT, MUTED2, LINE2, LINE_STRONG, TILE } from './landingCommon';

export default function FlowSection() {
  return (
    <section className="border-t" style={{ borderColor: LINE2 }}>
      <div className={CONTAINER}>
        <div className="py-16 md:py-20">
          <Kick>The flow of obligation</Kick>
          <h2 className="max-w-[15em] text-[clamp(32px,4.4vw,54px)] font-medium leading-[1.04] tracking-[-0.03em] text-[#14181c]">From Labs, to the community</h2>
          <p className="mt-5 max-w-[36em] text-[clamp(16px,1.4vw,18px)] leading-[1.6]" style={{ color: MUTED2 }}>Tawf Labs is the commercial engine. Tawf Islamic Foundation is the mission that engine serves. The relationship is architectural, moral, and permanent.</p>
        </div>

        <div className="grid grid-cols-1 border-t lg:grid-cols-[1fr_250px_1fr]" style={{ borderColor: LINE2 }}>
          <div className="p-8 md:p-9" style={{ background: TILE }}>
            <div className="h-full rounded-2xl border bg-white p-7" style={{ borderColor: LINE2, boxShadow: '0 1px 2px rgba(20,24,32,.05),0 8px 24px rgba(20,24,32,.06)' }}>
              <h3 className="mb-2 text-2xl font-semibold tracking-tight">Tawf Labs</h3>
              <p className="text-[15.5px] leading-[1.55]" style={{ color: MUTED2 }}>The commercial engine that builds Sharia-aligned products, including tawf.finance staking and yield platform.</p>
              <div className="mt-5 rounded-xl border border-dashed p-4 text-sm leading-[1.5]" style={{ borderColor: LINE_STRONG, color: MUTED2 }}>
                <b className="mb-1 block font-mono text-[13px] font-medium" style={{ color: '#14181c' }}>tawf.finance</b>
                Sharia-aligned staking and real-world yield platform
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-11 p-6 md:p-8 max-lg:flex-row max-lg:gap-4 max-md:flex-col max-md:gap-7" aria-label="From Labs to Foundation">
            {[
              ['Portion of revenue', 'supports Foundation mission (3-8%)'],
              ['Zakat', 'calculated and transferred annually'],
              ['Waqf', 'assets held in Foundation trusteeship'],
            ].map(([b, s]) => (
              <div key={b} className="text-center text-[13px] leading-[1.4]" style={{ color: MUTED2 }}>
                <b className="mb-0.5 block text-[13.5px] font-semibold" style={{ color: '#14181c' }}>{b}</b>
                {s}
                <span className="relative mx-auto mt-2.5 block h-0.5 w-full max-w-[120px] overflow-hidden" style={{ background: `repeating-linear-gradient(90deg, ${ACC} 0 6px, transparent 6px 12px)` }} />
              </div>
            ))}
          </div>

          <div className="p-8 md:p-9">
            <div className="relative h-full overflow-hidden rounded-2xl p-7 text-white" style={{ background: ACC_DEEP }}>
              <span className="pointer-events-none absolute -right-14 -top-14 size-[220px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(52,201,143,.35), transparent 70%)' }} />
              <h3 className="relative z-10 mb-2 text-2xl font-semibold tracking-tight">Tawf Islamic Foundation</h3>
              <p className="relative z-10 text-[15.5px] leading-[1.55]" style={{ color: 'rgba(255,255,255,.75)' }}>The infrastructure layer that transforms profit into purpose.</p>
              <ul className="relative z-10 mt-5 grid list-none gap-3 p-0">
                {['Operates zakat infrastructure for distribution to asnaf', 'Manages waqf for perpetual benefit', 'Houses the AI Sharia Review and DAO governance'].map((li) => (
                  <li key={li} className="flex gap-3 text-[15px] leading-[1.5]" style={{ color: 'rgba(255,255,255,.92)' }}>
                    <CheckCircle2 className="mt-0.5 size-[18px] shrink-0" style={{ color: '#4ee0a6' }} />{li}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 border-t px-6 py-14 md:grid-cols-[1.2fr_1fr] md:px-10 md:py-16" style={{ borderColor: LINE2 }}>
          <h2 className="text-[clamp(30px,3.8vw,46px)] font-medium leading-[1.04] tracking-[-0.03em]">Labs is powerful. But the Foundation is sovereign.</h2>
          <div className="flex items-center gap-5">
            <span className="grid size-16 shrink-0 place-items-center rounded-[18px]" style={{ background: ACC_SOFT }}>
              <Shield className="size-[30px]" style={{ color: ACC }} />
            </span>
            <p className="max-w-[40ch] text-[16.5px] leading-[1.65]" style={{ color: MUTED2 }}>This structure guarantees the community's share cannot be diluted, sold, or set aside. Locked into the Foundation by design.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
