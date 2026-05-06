import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Basic',
    tagline: 'Perfect for getting started',
    features: [
      'Up to 2 min edited video',
      '1 round of revisions',
      'Basic color grading',
      'Licensed background music',
      'HD export (1080p)',
      '5-day delivery',
    ],
    cta: 'Get Started',
    accent: false,
  },
  {
    name: 'Standard',
    tagline: 'Our most popular package',
    features: [
      'Up to 5 min edited video',
      '3 rounds of revisions',
      'Professional color grading',
      'Custom music & sound design',
      '4K export + social crops',
      'Motion graphics & titles',
      '3-day delivery',
    ],
    cta: 'Get Started',
    accent: true,
  },
  {
    name: 'Premium',
    tagline: 'Full creative partnership',
    features: [
      'Unlimited video length',
      'Unlimited revisions',
      'Cinematic color pipeline',
      'Full audio post-production',
      '4K + all format exports',
      'Advanced VFX & animation',
      'Dedicated editor assigned',
      '48-hour priority delivery',
    ],
    cta: 'Get Started',
    accent: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 md:py-32 bg-[#f5f3ef]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 md:mb-18"
        >
          <span className="text-[#c8a96e] text-xs font-medium tracking-widest uppercase">Packages</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1a1714] mt-3 mb-5">
            Simple, transparent options
          </h2>
          <p className="text-[#9a9189] max-w-lg mx-auto leading-relaxed">
            Every package is crafted with the same attention to quality.
            Choose based on your scope and timeline.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                pkg.accent
                  ? 'bg-[#1a1714] shadow-elevated'
                  : 'bg-white shadow-card hover:shadow-elevated transition-shadow duration-400'
              }`}
            >
              {pkg.accent && (
                <div className="absolute top-6 right-6">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1a1714] bg-[#c8a96e] px-2.5 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3
                  className={`font-serif text-2xl font-semibold mb-1.5 ${
                    pkg.accent ? 'text-white' : 'text-[#1a1714]'
                  }`}
                >
                  {pkg.name}
                </h3>
                <p className={`text-sm ${pkg.accent ? 'text-white/50' : 'text-[#9a9189]'}`}>
                  {pkg.tagline}
                </p>
              </div>

              <ul className="flex flex-col gap-3.5 flex-1 mb-10">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`w-4.5 h-4.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        pkg.accent ? 'bg-[#c8a96e]/20' : 'bg-[#f5f3ef]'
                      }`}
                    >
                      <Check
                        size={10}
                        className={pkg.accent ? 'text-[#c8a96e]' : 'text-[#c8a96e]'}
                        strokeWidth={2.5}
                      />
                    </div>
                    <span
                      className={`text-sm leading-snug ${
                        pkg.accent ? 'text-white/75' : 'text-[#4a4540]'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3.5 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer ${
                  pkg.accent
                    ? 'bg-[#c8a96e] text-[#1a1714] hover:bg-[#d4b87a]'
                    : 'bg-[#1a1714] text-white hover:bg-[#2d2925]'
                }`}
              >
                {pkg.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-[#9a9189] text-sm mt-8"
        >
          Need something custom?{' '}
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-[#c8a96e] underline underline-offset-4 hover:text-[#b8994e] transition-colors duration-200 cursor-pointer"
          >
            Let's talk
          </button>
        </motion.p>
      </div>
    </section>
  );
}
