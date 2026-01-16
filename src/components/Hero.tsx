import { motion } from 'framer-motion';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f3e8]/60 via-[#f5f3e8]/40 to-[#f5f3e8] z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 max-w-5xl mx-auto px-6 lg:px-12 text-center"
      >
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-black leading-tight mt-40 md:mt-0 mb-8">
          What <span className="text-[#d4af37]">PONTU</span> Stands For
        </h1>

        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-6 leading-relaxed">
          In today's fast-paced world, our core values drive everything we do. Each letter in PONTU represents a fundamental principle that guides our approach to innovation, collaboration, and success.
        </p>

        <p className="text-base md:text-lg text-gray-800 font-medium max-w-3xl mx-auto mb-12">
          We are happy to bring your company into the new future. Together we aspire, together we achieve success, dreams, happiness, and friendship.
        </p>

        <button
          onClick={() => onNavigate('Pontu')}
          className="inline-block px-8 py-4 bg-[#d4af37] text-black font-medium tracking-wide hover:bg-[#c09d2f] transition-colors duration-300"
        >
          Explore Pontu
        </button>
      </motion.div>
    </section>
  );
}
