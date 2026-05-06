import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'We start by understanding your brand, goals, and audience. A focused 30-minute call that shapes everything that follows.',
  },
  {
    number: '02',
    title: 'Creative Brief',
    description:
      'We craft a tailored edit strategy — style references, pacing, music direction, and narrative structure. All before a single cut.',
  },
  {
    number: '03',
    title: 'Editing & Post',
    description:
      'Our editors work frame-by-frame to build a cohesive, emotionally resonant cut. Color, sound, motion — all dialled in.',
  },
  {
    number: '04',
    title: 'Review & Revise',
    description:
      'You receive a private preview link. We incorporate your feedback until the edit is exactly right — no arguments, no ego.',
  },
  {
    number: '05',
    title: 'Final Delivery',
    description:
      'Export in every format you need — 4K, web-optimised, vertical crops for social. Delivered on time, every time.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left sticky text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28"
          >
            <span className="text-[#c8a96e] text-xs font-medium tracking-widest uppercase">Our Process</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1a1714] mt-3 mb-6 leading-tight">
              From raw footage<br />to refined film
            </h2>
            <p className="text-[#9a9189] leading-relaxed mb-8 max-w-md">
              Our process is built for clarity, speed, and creative precision. You'll always know
              what's happening and why — with zero surprises.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#c8a96e] hover:bg-[#b8994e] text-[#1a1714] font-semibold px-7 py-3 rounded-full text-sm transition-colors duration-300 cursor-pointer"
            >
              Begin the Process
            </motion.button>
          </motion.div>

          {/* Steps */}
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-6 pb-10 last:pb-0 relative group"
              >
                {/* Line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-px bg-[#e8e4dd]" />
                )}

                {/* Number circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#e8e4dd] bg-white flex items-center justify-center z-10 group-hover:border-[#c8a96e] group-hover:bg-[#c8a96e]/5 transition-all duration-300">
                  <span className="font-serif text-sm font-semibold text-[#c8a96e]">{step.number}</span>
                </div>

                <div className="pt-2.5">
                  <h3 className="font-serif text-xl font-semibold text-[#1a1714] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#6b6560] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
