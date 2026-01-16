import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import passionImg from '../assets/passion.jpeg';
import openMindedImg from '../assets/open_minded_inset.jpeg';
import networkImg from '../assets/network.jpeg';
import successImg from '../assets/success.jpeg';
import uniqueImg from '../assets/unique.jpeg';

const values = [
  {
    letter: 'P',
    title: 'Passion for Innovation',
    image: passionImg,
    description: "In an era marked by rapid change, a passion for innovation is not just beneficial; it's essential. This drive compels us to continuously seek out new solutions, challenge the status quo, and explore uncharted territories. Embracing innovation means being willing to take risks and learn from failures, ultimately leading to groundbreaking advancements."
  },
  {
    letter: 'O',
    title: 'Open Minded Approach',
    image: openMindedImg,
    description: "An open-minded approach is pivotal in this journey. By cultivating a culture that values diverse opinions and unconventional ideas, we create a fertile ground for creativity. Encouraging team members to share their insights fosters an inclusive environment where everyone feels empowered to contribute."
  },
  {
    letter: 'N',
    title: 'Network for Collaboration',
    image: networkImg,
    description: "Establishing a robust network for collaboration amplifies our impact. Collaborating with like-minded individuals and organizations opens doors to new opportunities and perspectives. These connections not only enhance our resources but also spark innovative ideas that can lead to transformative projects."
  },
  {
    letter: 'T',
    title: 'Teaming for Success',
    image: successImg,
    description: "Teaming for success is at the heart of any thriving initiative. Effective teamwork harnesses the unique skills and experiences of each member, allowing us to tackle challenges more efficiently. By fostering trust and communication within teams, we create a synergy that propels us toward our objectives."
  },
  {
    letter: 'U',
    title: 'Unique Selling Propositions',
    image: uniqueImg,
    description: "Developing compelling unique selling propositions (USPs) is crucial in distinguishing ourselves in a crowded marketplace. USPs articulate what makes our offerings valuable and unique, helping us to resonate with our target audience. By clearly communicating our distinct advantages, we draw interest and loyalty, driving sustained success."
  },
];

function ValueItem({ value, index }: { value: typeof values[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className={`grid lg:grid-cols-5 gap-8 lg:gap-12 items-start ${isEven ? '' : 'lg:grid-flow-dense'}`}>
        {/* Image Section */}
        <div className={`lg:col-span-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="relative overflow-hidden aspect-[4/3]">
            <img
              src={value.image}
              alt={value.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Content Section */}
        <div className={`lg:col-span-3 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="mb-4">
            <span className="inline-block font-serif text-6xl text-[#d4af37] mb-2 leading-none">
              {value.letter}
            </span>
          </div>
          
          <h3 className="font-serif text-3xl md:text-4xl text-black mb-6 leading-tight">
            {value.title}
          </h3>
          
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {value.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-[#ebe9da]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-black mb-8">
            What <span className="text-[#d4af37]">PONTU</span> Stands For
          </h2>
          
          <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-6">
            In today's fast-paced world, our core values drive everything we do. Each letter in PONTU represents a fundamental principle that guides our approach to innovation, collaboration, and success.
          </p>

          <p className="text-gray-800 text-base md:text-lg font-medium">
            We are happy to bring your company into the new future. Together we aspire, together we achieve success, dreams, happiness, and friendship.
          </p>
        </motion.div>

        {/* Values List */}
        <div className="space-y-24 md:space-y-32">
          {values.map((value, index) => (
            <ValueItem key={value.letter} value={value} index={index} />
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-24 pt-16 border-t border-gray-400/30"
        >
          <p className="font-serif text-2xl md:text-3xl text-black mb-4 leading-relaxed">
            Do what you love ❤️
          </p>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            By intertwining innovation, open-mindedness, collaboration, teamwork, and unique selling propositions—we pave the way for sustained growth and success in an increasingly complex world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
