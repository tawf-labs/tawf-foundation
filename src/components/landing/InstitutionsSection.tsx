import React from 'react';
import { Link } from 'react-router-dom';
import { CONTAINER, Kick, ACC, ACC_DARK, ACC_SOFT, MUTED2, LINE2, LINE_STRONG, TILE } from './landingCommon';

export default function InstitutionsSection() {
  return (
    <section id="partners" className="border-t" style={{ borderColor: LINE2 }}>
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="border-r p-10 max-md:border-r-0 max-md:border-b md:p-16" style={{ borderColor: LINE2 }}>
            <Kick>Trusted institutions</Kick>
            <h2 className="max-w-[15em] text-[clamp(32px,4.4vw,54px)] font-medium leading-[1.04] tracking-[-0.03em] text-[#14181c]">Prove it, don't claim it</h2>
            <p className="mt-5 max-w-[36em] text-[clamp(16px,1.4vw,18px)] leading-[1.6]" style={{ color: MUTED2 }}>We provide digital infrastructure that powers Islamic charitable institutions across Indonesia, enabling transparent operations at scale.</p>
          </div>
          <div className="flex flex-col items-start justify-center p-10 md:p-12" style={{ background: TILE }}>
            <div className="w-full max-w-[460px] rounded-2xl border bg-white p-7 transition-transform duration-500 hover:-translate-y-1" style={{ borderColor: LINE2, boxShadow: '0 1px 2px rgba(20,24,32,.05),0 8px 24px rgba(20,24,32,.06)' }}>
              <div className="mb-4 flex items-center gap-3.5">
                <div className="flex size-[52px] items-center justify-center rounded-full" style={{ background: ACC_SOFT }}>
                  <svg viewBox="0 0 52 52" className="size-8"><path d="M26 10c6 8 10 12.5 10 18a10 10 0 0 1-20 0c0-5.5 4-10 10-18Z" fill={ACC} /><path d="M21 30a5 5 0 0 0 5 5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity=".85" /></svg>
                </div>
                <div>
                  <b className="block text-lg font-semibold tracking-tight">Telaga Charity</b>
                  <span className="text-[13px] font-medium" style={{ color: ACC }}>Blockchain-Powered Nonprofit</span>
                </div>
              </div>
              <p className="mb-5 text-[15px] leading-[1.6]" style={{ color: MUTED2 }}>Crypto-empowered charity focused on food, clean water, and education. We're bringing verifiable transparency to charitable giving.</p>
              <a className="inline-flex h-[38px] items-center rounded-[9px] border px-4 text-sm font-medium transition-colors" style={{ background: '#fff', borderColor: LINE_STRONG, color: '#14181c' }} href="https://telagacharity.com/" target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-8 border-t p-10" style={{ borderColor: LINE2 }}>
          <div>
            <h3 className="mb-2 text-[22px] font-semibold tracking-tight">Become Our Partner</h3>
            <p className="max-w-[46ch] text-[15.5px] leading-[1.55]" style={{ color: MUTED2 }}>Help us build digital infrastructure for Islamic philanthropy. Join our network of institutions committed to transparency and Sharia alignment.</p>
          </div>
          <Link to="/contact" className="inline-flex h-11 items-center rounded-[9px] px-5 text-[15px] font-medium text-white transition-colors" style={{ background: ACC }} onMouseEnter={(e) => (e.currentTarget.style.background = ACC_DARK)} onMouseLeave={(e) => (e.currentTarget.style.background = ACC)}>Get in Touch</Link>
        </div>
      </div>
    </section>
  );
}
