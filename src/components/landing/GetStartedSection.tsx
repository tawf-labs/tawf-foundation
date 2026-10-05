import React from 'react';
import { CONTAINER, Kick, ACC, ACC_SOFT, MUTED2, LINE2, LINE_STRONG, Reveal } from './landingCommon';

/* Crosshair "+" di titik temu garis grid */
function Plus({ left, className = '' }: { left: number; className?: string }) {
  return (
    <span aria-hidden="true" style={{ left: `${left}%` }} className={`pointer-events-none absolute z-10 hidden size-[19px] -translate-x-1/2 lg:block ${className}`}>
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2" style={{ background: LINE_STRONG }} />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2" style={{ background: LINE_STRONG }} />
    </span>
  );
}

export default function GetStartedSection() {
  const steps = [
    ['01', 'Get Your Tawf ID', 'Create your Tawf ID (TID), a soulbound identity credential that grants access to the TAWF DAO. One person, one ID, one vote.'],
    ['02', 'Pay Your Zakat', 'Use our Ziswaf powered platform to pay zakat with full blockchain transparency. Track every dirham from payment to distribution.'],
    ['03', 'Join the Community', 'Participate in governance discussions and vote on ecosystem proposals. Your voice shapes the future of Islamic digital finance.'],
    ['04', 'Verify Everything', 'All transactions are recorded on chain. View donation history, fund allocations, and impact reports anytime.'],
  ];

  return (
    <section id="get-started" className="border-t bg-white py-16 md:py-24" style={{ borderColor: LINE2 }}>
      <div className={CONTAINER}>
        <Reveal className="mb-10 md:mb-14">
          <Kick>Get started</Kick>
          <h2 className="max-w-[15em] text-[clamp(30px,4.2vw,46px)] font-medium leading-[1.06] tracking-[-0.03em] text-[#14181c]">Four steps to join the ecosystem</h2>
          <p className="mt-5 max-w-[36em] text-base leading-[1.6]" style={{ color: MUTED2 }}>Your journey to transparent Islamic finance begins here.</p>
        </Reveal>

        <div className="relative border-y border-x" style={{ borderColor: LINE2 }}>
          {/* Crosshair di persimpangan garis atas dan bawah */}
          {[25, 50, 75].map((left) => (
            <React.Fragment key={left}>
              <Plus left={left} className="-top-[10px]" />
              <Plus left={left} className="-bottom-[10px]" />
            </React.Fragment>
          ))}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([n, t, d], i) => (
              <Reveal
                key={n}
                delay={i * 0.08}
                className="group relative border-b px-6 pb-12 pt-9 transition-colors duration-500 last:border-b-0 hover:bg-[#fafafa] sm:px-8 sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
                style={{ borderColor: LINE2 }}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                  style={{ background: ACC }}
                />
                <span className="mb-5 inline-block rounded-full px-2 py-0.5 font-mono text-[11px] font-medium" style={{ color: ACC, background: ACC_SOFT }}>{n}</span>
                <h3 className="text-[18px] font-medium tracking-tight text-[#14181c]">{t}</h3>
                <p className="mt-2.5 max-w-[34ch] text-[15px] leading-[1.6]" style={{ color: MUTED2 }}>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}