import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroStackArt from '../ui/HeroStackArt';
import { CONTAINER } from './landingCommon';

export default function HeroSection() {
  return (
    <section className="w-full -mt-16 pb-12">
      <div className={CONTAINER}>
        <div className="grid min-h-[85svh] items-center gap-8 py-8 pt-24 md:py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="pr-2 text-center md:text-left"
          >
            <h1 className="m-0 max-w-[10em] text-[clamp(40px,5.2vw,68px)] font-medium leading-[1.04] tracking-[-0.035em] text-[#14181c] max-md:mx-auto">
              See where your <span className="relative inline-block text-[#0e8a5f]">giving goes<span className="absolute bottom-1.5 left-0 -z-10 h-3 w-full rounded-xs bg-[#0e8a5f]/12" /></span>
            </h1>
            <p className="mt-5 max-w-[32em] text-[clamp(16px,1.4vw,18.5px)] leading-[1.6] text-[#5d646d] max-md:mx-auto">
              <strong className="font-semibold text-[#14181c]">Blockchain verified zakat.</strong> Know exactly where your money goes and infrastructure that doesn't stop at zakat.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 md:justify-start">
              <a
                href="https://zakat.tawf.foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center gap-2.5 rounded-xl bg-[#0e8a5f] px-6 text-[15px] font-medium text-white shadow-sm shadow-[#0e8a5f]/25 transition-all hover:bg-[#0b7551] hover:shadow-md hover:shadow-[#0e8a5f]/35 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e8a5f]"
              >
                <span>Pay Your Zakat</span>
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <Link
                to="/manifesto"
                className="group inline-flex h-12 items-center gap-2.5 rounded-xl border border-[#d3d7dd] bg-white/90 px-6 text-[15px] font-medium text-[#14181c] backdrop-blur-xs transition-all hover:border-[#14181c] hover:bg-white hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e8a5f]"
              >
                <FileText className="size-4 text-[#5d646d] transition-colors group-hover:text-[#14181c]" />
                <span>Read the Manifesto</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-[620px] lg:-mt-12"
          >
            <HeroStackArt />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
