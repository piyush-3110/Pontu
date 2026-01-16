import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-[#f5f3e8]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto space-y-8 text-gray-800 leading-relaxed text-lg"
      >
        <p>
          Innovation is not optional. It is the necessary response to a world in constant transformation. We invest in ideas that solve real problems and create lasting value.
        </p>

        <p>
          An open-minded culture allows us to see opportunities where others see obstacles. We welcome diverse perspectives and remain curious about emerging models and unconventional approaches.
        </p>

        <p>
          Collaboration extends our reach. By building strong networks across industries and geographies, we create leverage that benefits all participants. Strategic partnerships multiply impact.
        </p>

        <p>
          Teaming is about sustained commitment. We build for the long term, investing in relationships and infrastructure that compound over time. Success is measured in years, not quarters.
        </p>

        <p>
          Differentiation comes from clarity. Our unique selling propositions are rooted in deep expertise, selective focus, and a refusal to compete on conventional terms. We create value by being distinctly ourselves.
        </p>
      </motion.div>
    </section>
  );
}
