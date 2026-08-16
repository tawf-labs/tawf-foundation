import { Users, TrendingUp, ShieldCheck } from 'lucide-react';

const ASNAF = [
  { name: 'Fakir', bps: 18 },
  { name: 'Miskin', bps: 22 },
  { name: 'Amil', bps: 12 },
  { name: 'Muallaf', bps: 6 },
  { name: 'Riqab', bps: 4 },
  { name: 'Gharimin', bps: 14 },
  { name: 'Fisabilillah', bps: 16 },
  { name: 'Ibn Sabil', bps: 8 },
];

export default function Analytics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Donor impact */}
      <div className="p-8 bg-white rounded-2xl border border-tawf-green/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-tawf-green rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-tawf-gold" />
          </div>
          <div>
            <h3 className="font-serif text-xl text-tawf-green">Donor impact</h3>
            <p className="text-sm text-tawf-muted">See where your zakat went</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            ['7', 'people helped this year'],
            ['12', 'families fed this month'],
            ['3', 'students funded'],
          ].map(([n, label]) => (
            <div key={label} className="text-center p-4 bg-tawf-sand/50 rounded-xl">
              <p className="text-3xl font-serif text-tawf-green">{n}</p>
              <p className="text-xs text-tawf-muted leading-tight">{label}</p>
            </div>
          ))}
        </div>

        <h4 className="text-xs font-semibold tracking-widest uppercase text-tawf-gold mb-4">
          Distribution across the eight asnaf
        </h4>
        <div className="space-y-2">
          {ASNAF.map((a) => (
            <div key={a.name} className="flex items-center gap-3">
              <span className="w-24 text-xs text-tawf-ink/70 shrink-0">{a.name}</span>
              <div className="flex-1 h-2 bg-tawf-green/10 rounded-full overflow-hidden">
                <div className="h-full bg-tawf-green rounded-full" style={{ width: `${a.bps * 4}%` }} />
              </div>
              <span className="w-10 text-xs text-tawf-muted text-right">{a.bps}%</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-tawf-muted mt-6 italic">Illustrative data. Live on-chain analytics ship with mainnet.</p>
      </div>

      {/* Institution analytics */}
      <div className="p-8 bg-white rounded-2xl border border-tawf-green/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-tawf-green rounded-full flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-tawf-gold" />
          </div>
          <div>
            <h3 className="font-serif text-xl text-tawf-green">Institution analytics</h3>
            <p className="text-sm text-tawf-muted">For amil and operators</p>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {[
            ['Total collected', 'Rp 1.2B'],
            ['Total distributed', 'Rp 980M'],
            ['Verified recipients', '3,400'],
            ['Active donors', '8,200'],
            ['On-chain records', '41,000'],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between py-3 border-b border-tawf-green/5">
              <span className="text-sm text-tawf-muted">{label}</span>
              <span className="text-sm font-semibold text-tawf-green">{value}</span>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-3 p-4 bg-tawf-sand/50 rounded-xl">
          <ShieldCheck className="w-5 h-5 text-tawf-green shrink-0 mt-0.5" />
          <p className="text-xs text-tawf-muted leading-relaxed">
            Every number above is backed by a notarized record on Ethereum. Donors can verify each
            figure independently through tawf-verify.
          </p>
        </div>
      </div>
    </div>
  );
}