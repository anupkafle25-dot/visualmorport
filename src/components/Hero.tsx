import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronDown } from 'lucide-react';

const MAIN_VIDEO = 'https://xhwptvvbfezaoswfuyrb.supabase.co/storage/v1/object/sign/VisualMorp/715%20Fair%20Oaks%20Dr%20(1).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZDFkMTA1Ny0xYjU3LTQwZGUtYTA0OC1lYzZjNzZkNGVlNDciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaXN1YWxNb3JwLzcxNSBGYWlyIE9ha3MgRHIgKDEpLm1wNCIsImlhdCI6MTc3ODA3NDM1OSwiZXhwIjoxODA5NjEwMzU5fQ.SpsACQXbv3RTeAPhZ9yJ2V3S37S-oLTzgLSXBjac1nw';
export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  const handleScroll = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1714]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {!videoLoaded && !videoError && (
          <div className="absolute inset-0 bg-[#1a1714] flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
              className="w-10 h-10 rounded-full border-2 border-[#c8a96e] border-t-transparent"
            />
          </div>
        )}

        {videoError ? (
          <div className="absolute inset-0 bg-[#1a1714] flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#c8a96e]/10 flex items-center justify-center mx-auto mb-4">
                <Play size={28} className="text-[#c8a96e] ml-1" />
              </div>
              <p className="text-white/50 text-sm font-sans">Video unavailable</p>
            </div>
          </div>
        ) : (
          <video
            ref={videoRef}
            src={MAIN_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onCanPlay={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1714]/70 via-[#1a1714]/30 to-[#1a1714]/80" />
        <div className="absolute inset-0 bg-[#1a1714]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/10 backdrop-blur-sm mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e] animate-pulse" />
          <span className="text-[#c8a96e] text-xs font-medium tracking-widest uppercase">
            Premium Video Editing
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.05] tracking-tight mb-6"
        >
          We edit{' '}
          <em className="text-[#c8a96e] not-italic">stories</em>
          <br />
          that move people
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Cinematic, high-converting video production for brands and creators
          who refuse to blend in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#c8a96e] hover:bg-[#b8994e] text-[#1a1714] font-semibold px-8 py-3.5 rounded-full text-sm tracking-wide transition-colors duration-300 cursor-pointer"
          >
            Start Your Project
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2.5 text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer group"
          >
            <span className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 transition-colors duration-200">
              <Play size={13} className="ml-0.5" />
            </span>
            View Our Work
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex items-center justify-center gap-8 md:gap-14"
        >
          {[
            { value: '200+', label: 'Projects Delivered' },
            { value: '50+', label: 'Global Clients' },
            { value: '4.9★', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-serif font-semibold text-white mb-0.5">
                {stat.value}
              </div>
              <div className="text-white/40 text-xs tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-300 cursor-pointer group"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
