import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-[#f5f3e8]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto"
      >
        <div className="space-y-8 text-gray-800 leading-loose text-lg">
          <p>
            We like to introduce our company Pontu GmbH, based in Berlin.
          </p>

          <p>
            We are happy to bring your company into the new future.
          </p>

          <p>
            Together we aspire. Together we achieve success, dreams, happiness, and friendship.
          </p>

          <p className="text-xl">
            Do what you love ❤️
          </p>
        </div>
      </motion.div>
    </section>
  );
}
