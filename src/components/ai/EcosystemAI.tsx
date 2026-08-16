import { motion } from 'motion/react';
import { Coins, Landmark, ShieldCheck, Split, Fingerprint, Vote, ScrollText } from 'lucide-react';

const USE_CASES = [
  {
    icon: <Coins className="w-8 h-8 text-tawf-gold" />,
    product: 'zkt',
    use: 'AI zakat calculation',
    desc: 'Tawf AI estimates your zakat mal from your assets and checks the nisab before you give.',
  },
  {
    icon: <Landmark className="w-8 h-8 text-tawf-gold" />,
    product: 'wqf',
    use: 'AI yield and risk insight',
    desc: 'Tawf AI explains the staking basket and risk profile behind every cash waqf position.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-tawf-gold" />,
    product: 'tawf-verify',
    use: 'AI anomaly detection',
    desc: 'Tawf AI scans notarized records for anomalies and flags them for human review.',
  },
  {
    icon: <Split className="w-8 h-8 text-tawf-gold" />,
    product: 'tawf-pay',
    use: 'AI charitable routing',
    desc: 'Tawf AI optimizes the 1% fee split so it reaches where the need is greatest.',
  },
  {
    icon: <Fingerprint className="w-8 h-8 text-tawf-gold" />,
    product: 'tawf-id',
    use: 'AI-assisted verification',
    desc: 'Zero-knowledge identity with Tawf AI supporting eligibility checks without exposing data.',
  },
  {
    icon: <Vote className="w-8 h-8 text-tawf-gold" />,
    product: 'tawf-gov',
    use: 'AI proposal summaries',
    desc: 'Tawf AI summarizes DAO proposals so every TID holder votes from a clear brief.',
  },
  {
    icon: <ScrollText className="w-8 h-8 text-tawf-gold" />,
    product: 'Sharia board',
    use: 'AI framework reference',
    desc: 'Tawf AI surfaces AAOIFI, Muhammadiyah, DPSN, Bahrain, and MUI references for the scholars.',
  },
];

export default function EcosystemAI() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {USE_CASES.map((u, i) => (
        <motion.div
          key={u.product}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
          className="p-7 bg-white rounded-2xl border border-tawf-green/10"
        >
          <div className="w-14 h-14 bg-tawf-green rounded-full flex items-center justify-center mb-5">
            {u.icon}
          </div>
          <h3 className="font-serif text-xl text-tawf-green mb-1">{u.product}</h3>
          <p className="text-sm font-semibold tracking-wider uppercase text-tawf-gold mb-3">{u.use}</p>
          <p className="text-tawf-muted text-sm leading-relaxed">{u.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}