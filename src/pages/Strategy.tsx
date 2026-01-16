import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function StrategyIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="pt-32 pb-24 px-6 lg:px-12 bg-[#f5f3e8]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-black mb-6">
          Pontu GmbH – Strategy Plan
        </h1>
        <p className="text-gray-600 text-sm tracking-wide">
          Updated: 16 January 2026
        </p>
      </motion.div>
    </section>
  );
}

function CoreObjectives() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-[#ebe9da]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="font-serif text-4xl md:text-5xl text-black mb-16">
          Core Objectives
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-[#d4af37] text-sm font-medium tracking-wider mb-4">
              01.
            </p>
            <h3 className="font-serif text-3xl text-black mb-4">
              Startup Investment
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Investing in high-potential startups with long-term vision.
            </p>
          </div>

          <div>
            <p className="text-[#d4af37] text-sm font-medium tracking-wider mb-4">
              02.
            </p>
            <h3 className="font-serif text-3xl text-black mb-4">
              Talent Basket Model
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Building a curated network of academically strong, multi-skilled professionals affected by layoffs and offering their expertise to global companies.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function FocusAreas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-[#f5f3e8]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="font-serif text-4xl md:text-5xl text-black mb-16">
          Focus Areas
        </h2>

        <div className="space-y-16">
          <div>
            <h3 className="font-serif text-2xl text-[#d4af37] mb-6">
              A. High-End Personal Services
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Premium personal services
            </p>
            <p className="text-gray-600 leading-relaxed">
              Equity-based or non-equity participation
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-[#d4af37] mb-6">
              B. Startup Establishments
            </h3>
            <ul className="space-y-6 text-gray-700 text-lg">
              <li>
                <span className="text-black font-medium">Shop4Seniors</span> — in collaboration with Intersport
              </li>
              <li>
                <span className="text-black font-medium">Longevity</span> — with Relais & Châteaux / Soho Group
              </li>
              <li>
                <span className="text-black font-medium">Luaz Yoga</span> — in partnership with Rituals
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function InvestorStrategy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-[#ebe9da]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="font-serif text-4xl md:text-5xl text-black mb-16">
          Investor & Execution Strategy
        </h2>

        <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
          <p>
            Professional business planning forms the foundation of our investment approach. We build comprehensive models that account for market dynamics, competitive positioning, and realistic growth trajectories.
          </p>

          <p>
            New digital infrastructure enables efficient operations and scalable growth. We invest in systems that support long-term value creation rather than short-term optimization.
          </p>

          <p>
            Strategic investor negotiations are conducted with transparency and mutual respect. We seek partners who share our commitment to sustainable growth and ethical business practices.
          </p>

          <p className="text-gray-600 text-base">
            Investment facilitation through NPEX platform
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default function StrategyPage() {
  return (
    <div className="min-h-screen bg-[#f5f3e8]">
      <StrategyIntro />
      <CoreObjectives />
      <FocusAreas />
      <InvestorStrategy />
    </div>
  );
}
