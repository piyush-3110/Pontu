import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin } from 'lucide-react';

function WhyPontuIntro() {
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
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-black mb-12">
          Why Pontu
        </h1>

        <div className="space-y-8 text-gray-700 text-lg leading-relaxed max-w-4xl">
          <p>
            Pontu GmbH brings a proven track record in strategic investment and operational excellence. As a registered Berlin-based GmbH, we operate with full transparency and regulatory compliance.
          </p>

          <p>
            Our approach prioritizes long-term partnerships over transactional relationships. We invest in businesses and people with patience and commitment, understanding that meaningful value creation requires time.
          </p>

          <p>
            A people-first investment philosophy guides every decision. We believe exceptional talent drives exceptional outcomes, and we structure our investments to align incentives across all stakeholders.
          </p>

          <p className="text-gray-600 text-base">
            Registered and verified on Northdata
          </p>
        </div>
      </motion.div>
    </section>
  );
}

interface TeamMember {
  name: string;
  role?: string;
  mobile?: string;
  email?: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Hwie kwee',
    role: 'Geschäftsführer und Gesellschafter',
    mobile: '00491709005415',
    email: 'hwiekwee@yahoo.com',
    linkedin: 'https://www.linkedin.com/in/hwiekwee',
  },
  {
    name: 'Ankit Karn',
    role: 'Website, AI, IT and Social Media Strategy',
    linkedin: 'https://www.linkedin.com/in/ankit-karn-158a19162',
  },
  {
    name: 'Nitin Bhagat',
    role: 'Website, AI, IT and Social Media Strategy',
    linkedin: 'https://www.linkedin.com/in/nitinbhagat1',
  },
  {
    name: 'Mark Meißener',
    role: 'Company advisor',
    linkedin: 'https://www.linkedin.com/in/mark-meissner-50692212',
  },
];

function Team() {
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
          Team
        </h2>

        <div className="space-y-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-gray-700"
            >
              <div className="flex items-baseline gap-4">
                <p className="text-xl">
                  <span className="text-black">{member.name}</span>
                  {member.role && (
                    <span className="text-gray-600 ml-3">— {member.role}</span>
                  )}
                </p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#d4af37] transition-colors"
                    aria-label={`${member.name} LinkedIn profile`}
                  >
                    <Linkedin size={16} />
                  </a>
                )}
              </div>
              {(member.mobile || member.email) && (
                <div className="mt-2 text-sm text-gray-600 ml-0">
                  {member.mobile && <div>Mobile: {member.mobile}</div>}
                  {member.email && (
                    <div>
                      Email: <a href={`mailto:${member.email}`} className="hover:text-[#d4af37] transition-colors">{member.email}</a>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function FinalStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 bg-[#f5f3e8]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="font-serif text-3xl md:text-4xl text-black mb-12 leading-relaxed">
          Together we aspire. Together we achieve.
        </p>

        <a
          href="mailto:contact@pontu.de"
          className="inline-block px-8 py-4 bg-[#d4af37] text-black font-medium tracking-wide hover:bg-[#c09d2f] transition-colors duration-300"
        >
          Connect with Pontu
        </a>
      </motion.div>
    </section>
  );
}

export default function WhyPontuPage() {
  return (
    <div className="min-h-screen bg-[#f5f3e8]">
      <WhyPontuIntro />
      <Team />
      <FinalStatement />
    </div>
  );
}
