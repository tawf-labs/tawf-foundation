import React from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';


const FINANCE = '#7c3aed';    // violet  → tawf.finance
const FOUNDATION = '#d97706'; // amber   → tawf.foundation
const TRUNK = '#e11d48';      // rose    → trunk yang masuk ke stack
const INK = '#14181c';

/* Emblem masjid (huruf "A" logo Tawf) — di-trace jadi vektor dari logo asli, jadi tidak butuh file gambar.
 * Digambar rata di top-face disc, lalu diputar 45° di frame isometrik supaya berdiri tegak di layar. */
const MARK_D = 'M255.8 350.2L253.0 349.9L252.8 312.2C252.5 220.3 252.3 211.9 250.5 205.0C248.2 196.0 243.5 187.6 238.1 182.9C235.1 180.2 233.5 178.0 233.4 176.2C233.3 174.7 233.2 153.8 233.1 129.7L233.0 86.0L159.2 86.2L85.5 86.5L85.2 135.3L84.9 184.1L81.5 189.1C79.7 191.8 77.1 196.6 75.8 199.8L73.5 205.5L73.2 277.8L72.9 350.0L40.5 350.0L8.0 350.0L7.8 221.8C7.4 53.4 7.3 62.7 9.4 55.5C11.3 49.0 17.9 35.4 21.6 30.4C26.4 23.9 42.4 14.7 55.0 11.3C61.1 9.6 68.1 9.5 159.5 9.8C263.7 10.1 263.7 10.1 274.8 15.1C289.3 21.6 297.8 30.0 304.7 44.5C311.2 58.4 311.0 50.9 311.0 207.4C311.0 285.4 310.8 349.6 310.4 349.9C309.8 350.5 260.8 350.8 255.8 350.2ZM84.7 349.4C84.3 349.0 84.0 329.3 84.0 305.6L84.0 262.5L90.9 255.9L97.9 249.3L93.8 244.4C80.7 228.7 80.9 212.9 94.3 192.8L100.5 183.6L119.1 171.0C139.2 157.5 150.0 149.5 158.0 142.3L163.1 137.7L172.3 146.7C178.8 153.0 184.8 157.6 192.5 162.3C209.0 172.2 222.6 182.4 228.9 189.7C234.3 196.0 239.8 207.1 241.0 214.2C242.5 224.0 238.5 237.2 231.4 245.5C230.1 247.0 229.0 248.5 229.0 248.7C229.0 248.9 232.0 252.0 235.6 255.4L242.3 261.8L241.6 305.1C241.3 329.0 241.0 348.8 241.0 349.3C241.0 349.7 232.8 349.9 222.8 349.8L204.5 349.5L204.0 317.5L203.5 285.5L200.9 280.5C197.8 274.8 189.8 266.8 181.9 261.7C175.0 257.2 166.3 248.3 165.5 244.8C164.6 241.3 163.6 241.3 161.3 244.6C157.1 250.7 149.4 258.1 145.1 260.1C139.5 262.8 126.6 276.4 123.6 282.9C121.7 287.2 121.5 289.8 121.0 318.5L120.5 349.5L102.9 349.8C93.3 349.9 85.1 349.7 84.7 349.4ZM158.0 132.9C152.4 130.7 146.7 123.3 145.1 116.1C143.4 108.4 147.7 101.8 157.7 96.6C162.4 94.2 162.8 94.6 159.3 98.2C153.6 104.2 152.1 107.6 153.1 112.2C154.9 120.1 158.6 124.5 165.9 127.6C170.8 129.7 173.2 129.3 177.8 126.0C183.5 121.9 183.3 124.5 177.5 129.9C173.2 133.8 172.8 134.0 166.8 133.9C163.3 133.9 159.4 133.4 158.0 132.9Z';
const MARK_T = `translate(27.819 27.819) rotate(45) scale(${32 / 341}) translate(-159.0 -179.5)`;

const PLANE = 'matrix(.86604 -.49997 .86604 .49997 -544.675 288.843)';

const T = { paths: 0.25, discs: 1.7, pills: 1.95, stack: 2.5 };

const GRID = [
  ...Array.from({ length: 25 }, (_, k) => `M0 ${200 + 44 * k} L620 ${-158 + 44 * k}`),
  ...Array.from({ length: 30 }, (_, k) => `M0 ${-400 + 44 * k} L620 ${-42 + 44 * k}`)
].join(' ');

/* ---------- geometri (semua turunan dari sini, jadi path & block selalu nyambung) ----------
 * Stack = box lurus seperti referensi: sisi kanan (label) panjang A, sisi kiri (sempit) panjang B.
 * Frame path: origin O di tepi kiri stack. x = arah path (kanan-atas), c = offset tegak lurus (kanan-bawah).
 * Path di c berakhir tepat di tepi kiri stack (X = O.x) pada Y = O.y + c. */
const SPAN = 355;                                   // A + B dibuat tetap: lebar total & sisi kiri stack tidak bergeser saat B diubah
const B = 165;                                      // panjang sisi kiri (sempit). Makin besar = makin kotak (kotak sempurna = 177.5)
const A = SPAN - B;                                 // panjang sisi kanan (yang ada label)
const AX = 0.866 * A, AY = 0.5 * A, BX = 0.866 * B, BY = 0.5 * B;
// BACK = seberapa "mundur" stack digeser sepanjang sumbu path (kanan-atas). 0 = posisi versi sebelumnya.
// Path otomatis diperpanjang, tinggi sambungan di sisi kiri stack tetap sama.
const BACK = 30;
const O = { x: 276.75, y: 385 };                    // origin path (tetap di layar); y = tinggi trunk masuk di sisi kiri (layer Zakat)
const F0 = { x: O.x + BX, y: 457.5 + BY };          // sudut depan-bawah stack sebelum digeser BACK
const F = { x: F0.x + 0.866 * BACK, y: F0.y - 0.5 * BACK };
const ISO_T = `matrix(.86604 -.49997 .86604 .49997 ${O.x} ${O.y})`;
const iso = (x: number, c: number) => ({ X: O.x + 0.866 * (x + c), Y: O.y - 0.5 * x + 0.5 * c });
const bigAt = (x: number, c: number) => { const p = iso(x, c); return { x: p.X - 288.3, y: p.Y - 315.1 }; };
const smallAt = (x: number, c: number) => { const p = iso(x, c); return { x: p.X - 153.9, y: p.Y - 300.7 }; };

// trunk merah lurus ke stack; biru & oranye belok (sudut isometrik membulat) lalu menyatu di node; hitam keluar dari stack
const LINES = [
  { d: `M-350 0 H${3 + BACK}`, color: TRUNK, delay: T.paths },
  { d: 'M-350 39 H-143 Q-125 39 -125 21 V0', color: FINANCE, delay: T.paths + 0.2 },
  { d: 'M-350 116 H-88 Q-70 116 -70 98 V0', color: FOUNDATION, delay: T.paths + 0.35 },
  { d: `M-215 0 V-19 Q-215 -37 -197 -37 H${40 + BACK}`, color: INK, delay: T.paths + 0.55 }
];
const PILLS = [
  { c: 39, x: -285, w: 106, label: 'tawf.finance', color: FINANCE, ink: FINANCE, delay: T.pills },
  { c: 116, x: -230, w: 126, label: 'tawf.foundation', color: FOUNDATION, ink: '#b45309', delay: T.pills + 0.15 }
];

/* ---------- variants ---------- */
const fade = (delay = 0, duration = 0.8): Variants => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration, delay } }
});

const draw = (delay: number, duration = 1.2): Variants => ({
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration, delay, ease: 'easeInOut' },
      opacity: { duration: 0.01, delay }
    }
  }
});

const pop = (delay: number): Variants => ({
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] } }
});

const drop = (i: number): Variants => ({
  hidden: { opacity: 0, y: -56 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 0.25, delay: T.stack + i * 0.16 },
      y: { type: 'spring', stiffness: 150, damping: 17, delay: T.stack + i * 0.16 }
    }
  }
});

/* ---------- disc primitives (dedupe dari versi lama) ---------- */
// Ring (alas) digambar PERTAMA supaya tidak menutupi badan disc.
function BigDisc({ color, x = 0, y = 0, k = 1, badge = false, delay }: {
  color: string; x?: number; y?: number; k?: number; badge?: boolean; delay: number;
}) {
  const s = { stroke: color, strokeLinejoin: 'round' as const, strokeWidth: 1.722 };
  return (
    <motion.g variants={pop(delay)}>
      <g transform={`translate(${x + 288.3 * (1 - k)} ${y + 315.1 * (1 - k)}) scale(${k})`}>
        <g transform="matrix(.86604 -.49997 .86604 .49997 240.129 315.089)">
          <circle cx="27.819" cy="27.819" r="26.959" fill="#fff" {...s} />
        </g>
        <path fill="#fff" d="M311.867 310.191c6.498 3.751 9.747 8.667 9.748 13.584s-3.249 9.835-9.748 13.587c-12.997 7.504-34.069 7.504-47.066 0-6.497-3.751-9.746-8.667-9.747-13.584s3.248-9.835 9.747-13.587c12.997-7.503 34.069-7.503 47.066 0" />
        <path fill="#fff" {...s} d="M311.867 301.583c-12.997-7.503-34.069-7.503-47.066 0v8.608c12.997-7.503 34.069-7.503 47.066 0z" />
        <path fill="#fff" {...s} d="M321.615 315.167c-.001-4.917-3.25-9.833-9.748-13.584v8.608c6.498 3.751 9.747 8.667 9.748 13.583z" />
        <path fill="#fff" d="M264.801 301.583c-6.499 3.752-9.748 8.67-9.747 13.588v8.603c.001-4.916 3.25-9.832 9.747-13.583z" />
        <path fill="none" {...s} d="M255.054 315.171c-.001-4.918 3.248-9.836 9.747-13.588v8.608c-6.499 3.752-9.748 8.669-9.747 13.587z" />
        <path fill={color} d="M311.867 328.755c6.498-3.752 9.747-8.668 9.748-13.584v8.604c.001 4.917-3.249 9.835-9.748 13.587z" />
        <path fill="none" {...s} d="M321.615 315.167c.001 4.918-3.249 9.835-9.748 13.588v8.607c6.499-3.752 9.749-8.67 9.748-13.587z" />
        <path fill={color} {...s} d="M255.054 315.171c.001 4.916 3.25 9.833 9.747 13.584v8.607c-6.497-3.751-9.746-8.667-9.747-13.584z" />
        <path fill={color} {...s} d="M264.801 328.755c12.997 7.503 34.069 7.503 47.066 0v8.607c-12.997 7.504-34.069 7.504-47.066 0z" />
        {badge && (
          <g transform="matrix(.86604 -.49997 .86604 .49997 240.129 315.089)">
            <circle cx="27.819" cy="27.819" r="24" fill={color} />
            <path d={MARK_D} fill="#fff" fillRule="evenodd" transform={MARK_T} />
          </g>
        )}
      </g>
    </motion.g>
  );
}

function SmallDisc({ color, x = 0, y = 0, k = 1, delay }: { color: string; x?: number; y?: number; k?: number; delay: number }) {
  const s = { stroke: color, strokeLinejoin: 'round' as const, strokeWidth: 1.148 * k };
  return (
    <motion.g variants={pop(delay)}>
      <g transform={`translate(${x} ${y}) translate(146.9 305) scale(${k}) translate(-146.9 -305)`}>
        <circle cx="9.442" cy="9.442" r="8.868" fill="#fff" {...s} transform="matrix(.87107 -.49116 .87107 .49116 137.44 300.688)" />
        <path fill="#fff" d="M161.93 299.053c2.218 1.251 3.328 2.89 3.328 4.529 0 1.64-1.109 3.28-3.328 4.531-4.437 2.502-11.63 2.502-16.067 0-2.218-1.251-3.328-2.89-3.328-4.529 0-1.64 1.109-3.28 3.328-4.531 4.437-2.502 11.63-2.502 16.067 0" />
        <path fill="#fff" {...s} d="M161.93 296.184c-4.437-2.502-11.63-2.502-16.067 0v2.87c4.437-2.502 11.63-2.502 16.067 0zM165.258 300.714c0-1.639-1.11-3.279-3.328-4.529v2.87c2.218 1.25 3.328 2.89 3.328 4.529z" />
        <path fill="#fff" d="M145.863 296.185c-2.219 1.251-3.328 2.89-3.328 4.53v2.869c0-1.639 1.11-3.279 3.328-4.529z" />
        <path fill="none" {...s} d="M142.535 300.715c0-1.64 1.109-3.279 3.328-4.53v2.87c-2.219 1.251-3.328 2.89-3.328 4.53z" />
        <path fill={color} d="M161.93 305.244c2.218-1.25 3.328-2.89 3.328-4.529v2.869c0 1.64-1.109 3.279-3.328 4.53z" />
        <path fill="none" {...s} d="M165.258 300.714c0 1.64-1.109 3.279-3.328 4.53v2.87c2.219-1.251 3.328-2.89 3.328-4.53z" />
        <path fill={color} d="M142.535 300.714c.001 1.639 1.11 3.278 3.328 4.529v2.87c-2.218-1.251-3.328-2.89-3.328-4.529z" />
        <path fill="none" {...s} d="M145.863 305.243c-2.218-1.251-3.328-2.89-3.328-4.529v2.87c0 1.639 1.11 3.278 3.328 4.529z" />
        <path fill={color} {...s} d="M145.863 305.243c4.437 2.502 11.63 2.502 16.067 0v2.87c-4.437 2.502-11.63 2.502-16.067 0z" />
      </g>
    </motion.g>
  );
}

/* ---------- stack ---------- */
const LAYERS = [
  { label: 'On-chain ledger', z0: 0, z1: 26, fills: ['#262c31', '#161a1e', '#4a525a'], ink: '#d5dbe0', size: 12 },
  { label: 'Zakat', z0: 30, z1: 126, fills: ['#12a373', '#0c8560', '#3ccb99'], ink: '#fff', size: 44, side: true },
  { label: 'Waqf', z0: 130, z1: 170, fills: ['#d8eee5', '#c1e3d4', '#f0f9f5'], ink: '#0a5a3f', size: 15 },
  { label: 'Sadaqah', z0: 174, z1: 214, fills: ['#eaedf1', '#dadee4', '#f8f9fb'], ink: '#2a3138', size: 15 },
  { label: 'Qardhul Hasan', z0: 218, z1: 258, fills: ['#cfeee0', '#b3e2cf', '#e9f8f1'], ink: '#0a5a3f', size: 13 }
].map((l) => {
  const { x, y } = F;
  const F0 = [x, y - l.z0], F1 = [x, y - l.z1];
  const L0 = [x - BX, y - BY - l.z0], L1 = [x - BX, y - BY - l.z1];
  const R0 = [x + AX, y - AY - l.z0], R1 = [x + AX, y - AY - l.z1];
  const T1 = [x + AX - BX, y - AY - BY - l.z1];
  return { ...l, h: l.z1 - l.z0, F1, L1, polys: [[F0, L0, L1, F1], [F0, R0, R1, F1], [F1, L1, T1, R1]], edge: [L1, F1, R1] };
});
const pts = (p: number[][]) => p.map((q) => q.join(',')).join(' ');
const SHADOW = pts([[F.x - 12, F.y + 22], [F.x - BX - 12, F.y - BY + 22], [F.x + AX - BX - 12, F.y - AY - BY + 22], [F.x + AX - 12, F.y - AY + 22]]);

/* ---------- component ---------- */
export default function HeroStackArt() {
  const reduce = useReducedMotion();

  return (
    <motion.svg
      className="w-full overflow-visible"
      viewBox="0 0 620 600"
      role="img"
      aria-label="Illustration: donation paths flow into a stack of layers: on-chain ledger, Zakat, Waqf, Sadaqah and Qardhul Hasan."
      initial={reduce ? false : 'hidden'}
      animate="show"
    >
      <defs>
        <radialGradient id="hero-fade" cx="340" cy="470" r="330" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" />
          <stop offset=".55" stopColor="#fff" stopOpacity=".7" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hero-wash" cx="420" cy="300" r="320" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0e8a5f" stopOpacity=".14" />
          <stop offset=".6" stopColor="#0e8a5f" stopOpacity=".05" />
          <stop offset="1" stopColor="#0e8a5f" stopOpacity="0" />
        </radialGradient>
        <mask id="hero-floor"><rect width="620" height="600" fill="url(#hero-fade)" /></mask>
        <pattern id="hero-plane-b" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M0 0h32v32H0z" fill="none" stroke="#e5e5e5" strokeWidth="0.696" />
        </pattern>
        <linearGradient id="hero-lead-g" gradientUnits="userSpaceOnUse" x1="-350" x2="-290" y1="0" y2="0">
          <stop offset="0" stopColor="#000" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
        <mask id="hero-lead" maskUnits="userSpaceOnUse" x="-500" y="-300" width="1000" height="800">
          <rect x="-500" y="-300" width="1000" height="800" fill="url(#hero-lead-g)" />
        </mask>
      </defs>

      {/* 1 — grid + wash */}
     <motion.g variants={fade(0, 0.9)}>
      <g mask="url(#hero-floor)">
        <path d={GRID} stroke="#e6e8ec" strokeWidth="1" fill="none" />
        <path fill="url(#hero-wash)" d="M0 0h1395.3v1453.54H0z" transform={PLANE} />
        <path fill="url(#hero-plane-b)" opacity=".9" d="M0 0h1395.3v1453.54H0z" transform={PLANE} />
      </g>
    </motion.g>

      {/* 2 — path digambar dulu, semuanya berakhir di tepi kiri stack */}
      <g transform={ISO_T} mask="url(#hero-lead)">
        {LINES.map((l) => (
          <motion.path key={l.d} variants={draw(l.delay)} stroke={l.color} strokeWidth="2.8" fill="none" d={l.d} />
        ))}
      </g>

      {/* 3 — disc + pill; urutan dari yang paling atas di layar ke bawah */}
      <SmallDisc color={TRUNK} k={1.25} delay={T.discs + 0.05} {...smallAt(-215, 0)} />
      <SmallDisc color={TRUNK} k={1.25} delay={T.discs + 0.1} {...smallAt(-125, 0)} />
      <SmallDisc color={TRUNK} k={1.25} delay={T.discs + 0.15} {...smallAt(-70, 0)} />
      <BigDisc color={FINANCE} badge k={1.4} delay={T.discs + 0.1} {...bigAt(-330, 39)} />
      <BigDisc color={FOUNDATION} badge k={1.4} delay={T.discs + 0.2} {...bigAt(-275, 116)} />
      {PILLS.map((p) => (
        <motion.g key={p.label} variants={pop(p.delay)}>
          <g transform={ISO_T}>
            <rect x={p.x} y={p.c - 11} width={p.w} height={22} rx={11} fill="#fff" stroke={p.color} strokeWidth="1.3" />
            <text x={p.x + p.w / 2} y={p.c + 5} textAnchor="middle" fontSize="13.5" fontWeight="500" fill={p.ink}>{p.label}</text>
          </g>
        </motion.g>
      ))}

      {/* 4 — stack terakhir: bayangan lalu layer jatuh bawah → atas */}
      <motion.polygon variants={fade(T.stack, 0.6)} points={SHADOW} fill="rgba(20,24,32,.07)" />
      {LAYERS.map((l, i) => (
        <motion.g key={l.label} variants={drop(i)}>
          {l.polys.map((poly, j) => <polygon key={j} points={pts(poly)} fill={l.fills[j]} />)}
          <polyline points={pts(l.edge)} fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="1" />
          <g transform={`matrix(.866 -.5 0 1 ${l.F1[0]} ${l.F1[1]})`}>
            <text x={16} y={l.h / 2 + l.size * 0.35} fontSize={l.size} fontWeight="600" fill={l.ink} letterSpacing="-.01em">{l.label}</text>
          </g>
          {l.side && (
            <g transform={`matrix(.866 .5 0 1 ${l.L1[0]} ${l.L1[1]})`}>
              <text x={10} y={l.h / 2 + 4} fontSize="11" fontWeight="500" fill="#fff" fillOpacity=".85">Blockchain-verified</text>
            </g>
          )}
        </motion.g>
      ))}
    </motion.svg>
  );
}
