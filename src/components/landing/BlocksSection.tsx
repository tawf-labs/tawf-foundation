import React from 'react';
import { CONTAINER, Kick, Lnk, ACC, ACC_DARK, ACC_SOFT, MUTED2, LINE2, LINE_STRONG, TILE, TILE_LINE } from './landingCommon';

function PayFlowArt() {
  return (
    <svg viewBox="0 0 300 200" className="h-full w-full">
      <rect x="4" y="82" width="66" height="34" rx="9" fill="#fff" stroke={LINE_STRONG} /><text x="37" y="103" textAnchor="middle" style={{ fill: '#14181c', fontWeight: 500, fontSize: 11 }}>Payment</text>
      <rect x="206" y="14" width="90" height="28" rx="8" fill={TILE} stroke={TILE_LINE} /><text x="251" y="32" textAnchor="middle" style={{ fill: MUTED2, fontSize: 11 }}>Merchant 99%</text>
      <path id="tpm" d="M70 99H108C140 99 150 28 206 28" fill="none" stroke={LINE_STRONG} strokeWidth="1.5" />
      <path id="tpa" d="M108 99C130 99 132 132 150 132" fill="none" stroke={ACC} strokeWidth="1.5" />
      <circle cx="150" cy="132" r="13" fill={ACC} /><text x="150" y="136" textAnchor="middle" style={{ fill: '#fff', fontWeight: 600, fontSize: 10.5 }}>1%</text>
      <path id="tp1" d="M163 132C185 132 186 108 206 108" fill="none" stroke={ACC} strokeWidth="1.5" />
      <path id="tp2" d="M163 132H206" fill="none" stroke={ACC} strokeWidth="1.5" />
      <path id="tp3" d="M163 132C185 132 186 158 206 158" fill="none" stroke={ACC} strokeWidth="1.5" />
      <g fill={ACC_SOFT} stroke={ACC}>
        <rect x="206" y="96" width="90" height="24" rx="7" /><rect x="206" y="120" width="90" height="24" rx="7" /><rect x="206" y="146" width="90" height="24" rx="7" />
      </g>
      <text x="251" y="112" textAnchor="middle" style={{ fill: ACC_DARK, fontWeight: 500, fontSize: 11 }}>Waqf</text>
      <text x="251" y="136" textAnchor="middle" style={{ fill: ACC_DARK, fontWeight: 500, fontSize: 11 }}>Zakat</text>
      <text x="251" y="162" textAnchor="middle" style={{ fill: ACC_DARK, fontWeight: 500, fontSize: 11 }}>Sadaqah</text>
      <g fill={ACC}>
        <circle r="3.5"><animateMotion dur="3.2s" repeatCount="indefinite"><mpath href="#tpm" /></animateMotion></circle>
        <circle r="3"><animateMotion dur="3.2s" repeatCount="indefinite" begin="1.1s"><mpath href="#tpa" /></animateMotion></circle>
        <circle r="3"><animateMotion dur="1.6s" repeatCount="indefinite" begin="1.8s"><mpath href="#tp1" /></animateMotion></circle>
        <circle r="3"><animateMotion dur="1.6s" repeatCount="indefinite" begin="2.2s"><mpath href="#tp2" /></animateMotion></circle>
        <circle r="3"><animateMotion dur="1.6s" repeatCount="indefinite" begin="2.6s"><mpath href="#tp3" /></animateMotion></circle>
      </g>
    </svg>
  );
}

function MerkleArt() {
  return (
    <svg viewBox="0 0 300 200" className="h-full w-full">
      <g fill="none" strokeWidth="1.6" strokeLinecap="round">
        <path d="M45 158V128M45 128H88" stroke={LINE_STRONG} /><path d="M115 158V128M115 128H88" stroke={LINE_STRONG} />
        <path d="M185 158V128M185 128H222" stroke={LINE_STRONG} /><path d="M255 158V128M255 128H222" stroke={LINE_STRONG} />
        <path d="M88 128V96M88 96H150" stroke={LINE_STRONG} /><path d="M222 128V96M222 96H150" stroke={LINE_STRONG} />
        <path d="M150 96V60" stroke={LINE_STRONG} />
      </g>
      <g strokeWidth="1.6">
        <rect x="26" y="158" width="38" height="22" rx="6" fill={ACC_SOFT} stroke={ACC} /><rect x="96" y="158" width="38" height="22" rx="6" fill={ACC_SOFT} stroke={ACC} />
        <rect x="166" y="158" width="38" height="22" rx="6" fill={ACC_SOFT} stroke={ACC} /><rect x="236" y="158" width="38" height="22" rx="6" fill={ACC_SOFT} stroke={ACC} />
        <circle cx="88" cy="128" r="6" fill={ACC_SOFT} stroke={ACC} /><circle cx="222" cy="128" r="6" fill={ACC_SOFT} stroke={ACC} />
        <circle cx="150" cy="96" r="7" fill={ACC_SOFT} stroke={ACC} />
      </g>
      <text x="45" y="194" textAnchor="middle" style={{ fill: MUTED2, fontSize: 11 }}>record</text>
      <text x="115" y="194" textAnchor="middle" style={{ fill: MUTED2, fontSize: 11 }}>record</text>
      <text x="185" y="194" textAnchor="middle" style={{ fill: MUTED2, fontSize: 11 }}>record</text>
      <text x="255" y="194" textAnchor="middle" style={{ fill: MUTED2, fontSize: 11 }}>record</text>
      <rect x="92" y="22" width="116" height="30" rx="15" fill={ACC_SOFT} stroke={ACC} strokeWidth="1.6" />
      <text x="150" y="41" textAnchor="middle" style={{ fill: '#14181c', fontWeight: 500, fontSize: 11 }}>Anchored on Ethereum</text>
    </svg>
  );
}

function TerminalArt() {
  const lines: [string, string, string][] = [
    ['import', '{ mintTid } from "@tawf/identity";', ''],
    ['import', '{ anchor } from "@tawf/verify";', ''],
    ['', '', ''],
    ['', '// one soulbound ID per person', 'comment'],
    ['const', 'tid = await mintTid(wallet);', ''],
    ['', 'await anchor(records);', ''],
  ];
  return (
    <div className="absolute inset-0 rounded-t-xl border border-b-0 p-4 font-mono text-xs leading-[1.85]" style={{ background: '#fff', borderColor: LINE2, boxShadow: '0 1px 2px rgba(20,24,32,.05),0 8px 24px rgba(20,24,32,.06)' }}>
      <div className="mb-2.5 flex gap-1.5">{[0, 1, 2].map((i) => <b key={i} className="size-2 rounded-full" style={{ background: LINE2 }} />)}</div>
      {lines.map(([k, rest, type], i) => (
        <div key={i} className="whitespace-pre">
          {k && <span style={{ color: ACC }}>{k} </span>}
          <span style={{ color: type === 'comment' ? '#9aa3ad' : '#5b6b78' }}>{rest}</span>
        </div>
      ))}
    </div>
  );
}

export default function BlocksSection() {
  return (
    <section className="border-t" style={{ borderColor: LINE2 }}>
      <div className={CONTAINER}>
        <div className="py-16 md:py-20">
          <Kick>Infrastructure</Kick>
          <h2 className="max-w-[15em] text-[clamp(32px,4.4vw,54px)] font-medium leading-[1.04] tracking-[-0.03em] text-[#14181c]">Building blocks</h2>
          <p className="mt-5 max-w-[36em] text-[clamp(16px,1.4vw,18px)] leading-[1.6]" style={{ color: MUTED2 }}>Developer tools and infrastructure that power the platforms above.</p>
        </div>

        <div className="grid grid-cols-1 border-t md:grid-cols-3" style={{ borderColor: LINE2 }}>
          <article className="flex flex-col border-r p-8 max-lg:border-b" style={{ borderColor: LINE2 }}>
            <h3 className="font-mono text-[17px] font-medium tracking-tight text-[#14181c]">tawf-pay</h3>
            <p className="mt-1 text-sm font-medium" style={{ color: ACC }}>Charitable Payment Routing</p>
            <p className="mt-3 max-w-[38ch] text-[15px] leading-[1.6]" style={{ color: MUTED2 }}>Payment infrastructure where the 1% fee flows to waqf, zakat, and sadaqah instead of a payment processor.</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              <span className="rounded-full px-2.5 py-1 text-xs" style={{ color: ACC, background: ACC_SOFT }}>1% Charitable Fee</span>
              <span className="rounded-full border px-2.5 py-1 text-xs" style={{ background: TILE, borderColor: TILE_LINE, color: MUTED2 }}>DAO-Governed Split</span>
            </div>
            <div className="relative mt-7 h-[210px]" aria-hidden="true"><PayFlowArt /></div>
            <div className="mt-auto pt-6"><Lnk href="https://github.com/tawf-labs/tawf-pay">View Source</Lnk></div>
          </article>

          <article className="flex flex-col border-r p-8 max-lg:border-b" style={{ borderColor: LINE2 }}>
            <h3 className="font-mono text-[17px] font-medium tracking-tight text-[#14181c]">tawf-verify</h3>
            <p className="mt-1 text-sm font-medium" style={{ color: ACC }}>Cryptographic Notarization</p>
            <p className="mt-3 max-w-[38ch] text-[15px] leading-[1.6]" style={{ color: MUTED2 }}>A notary, not a custodian. Anchor any organization's records to Ethereum so donors can verify a receipt without trusting the operator.</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              <span className="rounded-full px-2.5 py-1 text-xs" style={{ color: ACC, background: ACC_SOFT }}>Merkle Anchoring</span>
              <span className="rounded-full border px-2.5 py-1 text-xs" style={{ background: TILE, borderColor: TILE_LINE, color: MUTED2 }}>No Custody</span>
            </div>
            <div className="relative mt-7 h-[210px]" aria-hidden="true"><MerkleArt /></div>
            <div className="mt-auto pt-6"><Lnk href="https://github.com/tawf-labs/tawf-verify">View Source</Lnk></div>
          </article>

          <article className="flex flex-col p-8" style={{ borderColor: LINE2 }}>
            <h3 className="font-mono text-[17px] font-medium tracking-tight text-[#14181c]">tawf-sdk</h3>
            <p className="mt-1 text-sm font-medium" style={{ color: ACC }}>Developer SDK</p>
            <p className="mt-3 max-w-[38ch] text-[15px] leading-[1.6]" style={{ color: MUTED2 }}>Composable @tawf packages for soulbound identity and notarization. Build on Ethereum with the same tools we use.</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              <span className="rounded-full px-2.5 py-1 text-xs" style={{ color: ACC, background: ACC_SOFT }}>Identity</span>
              <span className="rounded-full border px-2.5 py-1 text-xs" style={{ background: TILE, borderColor: TILE_LINE, color: MUTED2 }}>Notarization</span>
            </div>
            <div className="relative mt-7 h-[210px]" aria-hidden="true"><TerminalArt /></div>
            <div className="mt-auto pt-6"><Lnk href="https://github.com/tawf-labs/tawf-sdk">View Source</Lnk></div>
          </article>
        </div>
      </div>
    </section>
  );
}
