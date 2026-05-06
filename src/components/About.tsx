import { motion } from 'framer-motion';
import { Award, Globe, Clock } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Quality Without Compromise',
    description: "We never ship work we wouldn't proudly put our name on. Every frame matters, every second counts.",
  },
  {
    icon: Globe,
    title: 'Global Creative Perspective',
    description: 'Our team brings together visual sensibilities from across the world — giving your content a universal appeal.',
  },
  {
    icon: Clock,
    title: 'Delivery You Can Rely On',
    description: "Deadlines are not suggestions. We have built systems that ensure on-time delivery without sacrificing craft.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#1a1714] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#c8a96e] text-xs font-medium tracking-widest uppercase">About Us</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mt-3 mb-6 leading-tight">
              We're obsessed with<br />
              <em className="text-[#c8a96e] not-italic">great video</em>
            </h2>
            <p className="text-white/60 leading-relaxed mb-6 text-[15px]">
              Visual Morp was founded by a team of editors and cinematographers
              who believed that premium video shouldn't be reserved for big
              budgets. We exist to bring cinematic quality to every project —
              whether it's a luxury real estate listing or a creator's first
              brand film.
            </p>
            <p className="text-white/60 leading-relaxed mb-10 text-[15px]">
              We work remotely with clients across the world, combining
              cutting-edge editing software with a genuine passion for
              storytelling. Fast turnarounds, honest communication, and
              relentless attention to detail — that's the Visual Morp promise.
            </p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#c8a96e] hover:bg-[#d4b87a] text-[#1a1714] font-semibold px-7 py-3 rounded-full text-sm transition-colors duration-300 cursor-pointer"
            >
              Work With Us
            </motion.button>
          </motion.div>

          {/* Right — values */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#2d2925] rounded-2xl p-6 flex gap-5 group hover:bg-[#332f2b] transition-colors duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#c8a96e]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c8a96e]/20 transition-colors duration-300">
                    <Icon size={20} className="text-[#c8a96e]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-white mb-2">{v.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{v.description}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Decorative quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border border-[#c8a96e]/20 rounded-2xl p-6"
            >
              <p className="font-serif text-xl italic text-white/80 leading-snug mb-3">
                "Every frame is a decision. We make them all with intention."
              </p>
              <span className="text-[#c8a96e] text-xs tracking-widest uppercase font-medium">— Visual Morp Team</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
