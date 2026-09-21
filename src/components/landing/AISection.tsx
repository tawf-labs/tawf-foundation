import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CONTAINER, Kick, ACC, ACC_DARK, ACC_SOFT, MUTED2, LINE2, LINE_STRONG, TILE, TILE_LINE, usePrefersReducedMotion } from './landingCommon';

export default function AISection() {
  const reduce = usePrefersReducedMotion();
  const [assets, setAssets] = useState(250000000);
  const [gold, setGold] = useState(1500000);
  const fmt = new Intl.NumberFormat('id-ID');
  const nisab = 85 * gold;
  const ok = assets >= nisab && nisab > 0;
  const due = ok ? Math.round(assets * 0.025) : 0;

  const chatRef = useRef<HTMLDivElement>(null);
  const [answer, setAnswer] = useState('');
  const full = "Savings that reach the nisab and are held for a full haul are zakatable at 2.5%. I explain, I never issue fatwas.";
  const typed = useRef(false);

  useEffect(() => {
    const el = chatRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !typed.current) {
        typed.current = true;
        if (reduce) { setAnswer(full); return; }
        let i = 0;
        const iv = setInterval(() => { setAnswer(full.slice(0, ++i)); if (i >= full.length) clearInterval(iv); }, 22);
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <section className="border-t" style={{ borderColor: LINE2 }}>
      <div className={CONTAINER}>
        <div className="py-16 md:py-20">
          <Kick>Tawf AI</Kick>
          <h2 className="max-w-[15em] text-[clamp(32px,4.4vw,54px)] font-medium leading-[1.04] tracking-[-0.03em] text-[#14181c]">Intelligence built into the ecosystem</h2>
          <p className="mt-5 max-w-[36em] text-[clamp(16px,1.4vw,18px)] leading-[1.6]" style={{ color: MUTED2 }}>A model-agnostic AI layer that powers zakat calculation, Sharia Q&A, and impact analytics across every product.</p>
        </div>

        <div className="grid grid-cols-1 border-t md:grid-cols-3" style={{ borderColor: LINE2 }}>
          <article className="flex flex-col border-r p-8 max-lg:border-b" style={{ borderColor: LINE2 }}>
            <h3 className="text-lg font-semibold tracking-tight">AI Zakat Calculator</h3>
            <p className="mt-3 max-w-[38ch] text-[15px] leading-[1.6]" style={{ color: MUTED2 }}>Enter your assets and Tawf AI estimates your zakat using the Shafi'i approach and the nisab of 85 grams of gold.</p>
            <div className="mt-6 grid gap-3">
              <div>
                <label htmlFor="ai-assets" className="mb-1 block text-[12.5px]" style={{ color: MUTED2 }}>Zakatable assets</label>
                <div className="flex items-center rounded-[10px] border bg-white px-3 transition-colors focus-within:ring-[3px]" style={{ borderColor: LINE_STRONG, boxShadow: 'none' }} onFocus={(e) => (e.currentTarget.style.boxShadow = `0 0 0 3px ${ACC_SOFT}`)} onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}>
                  <span className="mr-2 text-[13px]" style={{ color: MUTED2 }}>Rp</span>
                  <input id="ai-assets" inputMode="numeric" value={fmt.format(assets)} onChange={(e) => setAssets(parseInt(e.target.value.replace(/\D/g, ''), 10) || 0)} autoComplete="off" className="h-10 min-w-0 flex-1 border-0 bg-transparent text-[15px] font-medium text-[#14181c] outline-none" />
                </div>
              </div>
              <div>
                <label htmlFor="ai-gold" className="mb-1 block text-[12.5px]" style={{ color: MUTED2 }}>Gold price per gram</label>
                <div className="flex items-center rounded-[10px] border bg-white px-3 transition-colors focus-within:ring-[3px]" style={{ borderColor: LINE_STRONG, boxShadow: 'none' }} onFocus={(e) => (e.currentTarget.style.boxShadow = `0 0 0 3px ${ACC_SOFT}`)} onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}>
                  <span className="mr-2 text-[13px]" style={{ color: MUTED2 }}>Rp</span>
                  <input id="ai-gold" inputMode="numeric" value={fmt.format(gold)} onChange={(e) => setGold(parseInt(e.target.value.replace(/\D/g, ''), 10) || 0)} autoComplete="off" className="h-10 min-w-0 flex-1 border-0 bg-transparent text-[15px] font-medium text-[#14181c] outline-none" />
                </div>
              </div>
              <div className="rounded-xl border p-4" style={{ background: TILE, borderColor: TILE_LINE }} aria-live="polite">
                <div className="flex justify-between text-[13px]" style={{ color: MUTED2 }}><span>Nisab (85 g gold)</span><span>Rp {fmt.format(nisab)}</span></div>
                <div className="mt-2 text-[26px] font-semibold tracking-tight text-[#14181c] tabular-nums">Rp {fmt.format(due)}</div>
                <div className="mt-0.5 text-[12.5px] font-medium" style={{ color: ok ? ACC : MUTED2 }}>{ok ? 'Above nisab: 2.5% of assets' : 'Below nisab: no zakat due'}</div>
              </div>
            </div>
          </article>

          <article className="flex flex-col border-r p-8 max-lg:border-b" style={{ borderColor: LINE2 }}>
            <h3 className="text-lg font-semibold tracking-tight">Sharia Q&A</h3>
            <p className="mt-3 max-w-[38ch] text-[15px] leading-[1.6]" style={{ color: MUTED2 }}>Ask about zakat, waqf, sadaqah, or qurban in plain language. Tawf AI explains, and never issues fatwas.</p>
            <div ref={chatRef} className="mt-6 flex min-h-[250px] flex-col gap-3">
              <div className="max-w-[88%] self-end rounded-2xl rounded-br-sm bg-[#14181c] px-3.5 py-2.5 text-sm leading-[1.55] text-white">How is zakat on my savings calculated?</div>
              <div className="max-w-[88%] self-start rounded-2xl rounded-bl-sm border px-3.5 py-2.5 text-sm leading-[1.55]" style={{ background: TILE, borderColor: TILE_LINE }}>
                {answer}
                {answer.length < full.length && <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse align-[-2px]" style={{ background: ACC }} />}
              </div>
            </div>
          </article>

          <article className="flex flex-col p-8">
            <h3 className="text-lg font-semibold tracking-tight">AI Analytics</h3>
            <p className="mt-3 max-w-[38ch] text-[15px] leading-[1.6]" style={{ color: MUTED2 }}>Donor impact dashboards and institution metrics, built on the same records that tawf-verify notarizes.</p>
            <div className="mt-6 h-[250px] rounded-xl border bg-white p-3.5" style={{ borderColor: LINE2, boxShadow: '0 1px 2px rgba(20,24,32,.05),0 8px 24px rgba(20,24,32,.06)' }}>
              <div className="mb-1.5 flex gap-4 text-[12.5px]" style={{ color: MUTED2 }}>
                <span><i className="mr-1.5 inline-block h-[3px] w-3.5 rounded-sm align-[3px]" style={{ background: LINE_STRONG }} />Collected</span>
                <span><i className="mr-1.5 inline-block h-[3px] w-3.5 rounded-sm align-[3px]" style={{ background: ACC }} />Distributed</span>
              </div>
              <svg viewBox="0 0 260 190" className="h-[calc(100%-28px)] w-full" preserveAspectRatio="none">
                <g stroke={LINE2} strokeWidth="1"><path d="M0 40H260M0 90H260M0 140H260M0 188H260" /></g>
                <path d="M0 150C30 140 50 120 80 112S130 84 160 70 220 40 260 22" fill="none" stroke={LINE_STRONG} strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                <path d="M0 168C30 160 55 146 85 136S135 108 165 96 222 68 260 52" fill="none" stroke={ACC} strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
          </article>
        </div>

        <div className="flex justify-center border-t py-8" style={{ borderColor: LINE2 }}>
          <Link to="/ai" className="inline-flex h-11 items-center rounded-[9px] px-5 text-[15px] font-medium text-white transition-colors" style={{ background: ACC }} onMouseEnter={(e) => (e.currentTarget.style.background = ACC_DARK)} onMouseLeave={(e) => (e.currentTarget.style.background = ACC)}>Explore Tawf AI</Link>
        </div>
      </div>
    </section>
  );
}
