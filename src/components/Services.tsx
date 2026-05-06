import { motion } from 'framer-motion';
import { Film, Home, Share2, Zap, Music, Sliders } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Real Estate Videos',
    description:
      'Cinematic property walkthroughs and aerial edits that sell the lifestyle, not just the house. We make buyers fall in love before they step inside.',
    highlight: 'Most Popular',
  },
  {
    icon: Film,
    title: 'Brand Films',
    description:
      'Emotionally resonant short films that tell your brand story with intention, style, and narrative precision that audiences actually remember.',
    highlight: null,
  },
  {
    icon: Share2,
    title: 'Social Media Content',
    description:
      'Fast-cut, scroll-stopping edits engineered for Reels, TikTok, and YouTube Shorts. High retention, high engagement — platform-native.',
    highlight: null,
  },
  {
    icon: Zap,
    title: 'Commercial Ads',
    description:
      'Performance-driven video ads built to convert. From product showcases to testimonials — edited with pacing and psychology in mind.',
    highlight: null,
  },
  {
    icon: Music,
    title: 'Music & Event Videos',
    description:
      'Event highlights and music video edits that capture energy, emotion, and atmosphere — delivered with cinematic flair.',
    highlight: null,
  },
  {
    icon: Sliders,
    title: 'Color Grading & Post',
    description:
      'Professional color grading, audio mastering, and motion graphics to elevate raw footage into polished, broadcast-ready content.',
    highlight: null,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#f5f3ef]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16 md:mb-20"
        >
          <span className="text-[#c8a96e] text-xs font-medium tracking-widest uppercase">Services</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1a1714] mt-3 mb-5 leading-tight">
            What we do<br />exceptionally well
          </h2>
          <p className="text-[#9a9189] leading-relaxed">
            Every service is built around one principle — your video should make
            people feel something, and then act on it.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="relative bg-white rounded-2xl p-7 shadow-card hover:shadow-elevated transition-all duration-400 group"
              >
                {service.highlight && (
                  <span className="absolute top-5 right-5 text-[10px] font-semibold tracking-widest uppercase text-[#c8a96e] bg-[#c8a96e]/10 px-2.5 py-1 rounded-full">
                    {service.highlight}
                  </span>
                )}
                <div className="w-11 h-11 rounded-xl bg-[#f5f3ef] flex items-center justify-center mb-5 group-hover:bg-[#c8a96e]/10 transition-colors duration-300">
                  <Icon size={20} className="text-[#1a1714] group-hover:text-[#c8a96e] transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#1a1714] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#6b6560] text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
