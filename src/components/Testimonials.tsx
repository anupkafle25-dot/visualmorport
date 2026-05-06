import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'James Harrington',
    role: 'Property Developer',
    location: 'Auckland, New Zealand',
    avatar: 'JH',
    rating: 5,
    text: "Visual Morp transformed our listing videos completely. The 30 Bensley Lane edit sold the property in under a week — buyers were saying they fell in love before even visiting. Truly elite work.",
  },
  {
    name: 'Amara Osei',
    role: 'Founder, LUMA Brand Studio',
    location: 'London, United Kingdom',
    avatar: 'AO',
    rating: 5,
    text: "I've worked with editing teams across three continents. Visual Morp is operating at a different level. The storytelling, pacing, and color work in our brand film exceeded every expectation.",
  },
  {
    name: 'Priya Nair',
    role: 'Content Creator',
    location: 'Dubai, UAE',
    avatar: 'PN',
    rating: 5,
    text: "My engagement literally doubled after switching to Visual Morp. They understand what makes people stop scrolling — and they deliver it consistently, edit after edit. Worth every dollar.",
  },
  {
    name: 'Marcus Bello',
    role: 'Creative Director',
    location: 'Toronto, Canada',
    avatar: 'MB',
    rating: 5,
    text: "The team is fast, communicative, and incredibly talented. I handed them raw footage with no direction and got back something that made our client cry happy tears. That's the benchmark.",
  },
  {
    name: 'Sofia Andersson',
    role: 'Real Estate Agent',
    location: 'Sydney, Australia',
    avatar: 'SA',
    rating: 5,
    text: "My listings now have a signature look that my competitors envy. Visual Morp has become an indispensable part of my business. Clients comment on the videos before they even call me.",
  },
  {
    name: 'Kenji Watanabe',
    role: 'Musician & Artist',
    location: 'Tokyo, Japan',
    avatar: 'KW',
    rating: 5,
    text: "They edited my debut music video and made it feel like a proper cinematic release. The color grade, the cuts — it was everything I heard in my head but couldn't describe. Absolute magic.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="fill-[#c8a96e] text-[#c8a96e]" />
      ))}
    </div>
  );
}

function AvatarInitials({ initials, dark }: { initials: string; dark?: boolean }) {
  return (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-medium text-sm ${
        dark ? 'bg-[#2d2925] text-[#c8a96e]' : 'bg-[#e8e4dd] text-[#4a4540]'
      }`}
    >
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 md:py-32 bg-[#faf9f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="text-[#c8a96e] text-xs font-medium tracking-widest uppercase">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1a1714] mt-3 mb-5">
            What our clients say
          </h2>
          <p className="text-[#9a9189] max-w-md mx-auto leading-relaxed">
            Trusted by creators, agents, and brands across six continents.
          </p>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" ref={scrollRef}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl p-7 shadow-card hover:shadow-elevated transition-shadow duration-400 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <StarRating count={t.rating} />
                <span className="text-[10px] text-[#9a9189] font-medium tracking-wide">{t.location}</span>
              </div>
              <blockquote className="text-[#4a4540] text-sm leading-relaxed flex-1 mb-6">
                "{t.text}"
              </blockquote>
              <div className="flex items-center gap-3 pt-5 border-t border-[#f0ece6]">
                <AvatarInitials initials={t.avatar} />
                <div>
                  <div className="text-sm font-semibold text-[#1a1714]">{t.name}</div>
                  <div className="text-xs text-[#9a9189]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { value: '200+', label: 'Videos Delivered' },
            { value: '50+', label: 'Happy Clients' },
            { value: '6', label: 'Countries Served' },
            { value: '4.9/5', label: 'Average Rating' },
          ].map((b) => (
            <div key={b.label} className="text-center">
              <div className="font-serif text-2xl font-semibold text-[#1a1714]">{b.value}</div>
              <div className="text-xs text-[#9a9189] mt-0.5">{b.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
