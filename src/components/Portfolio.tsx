import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const MAIN_VIDEO = 'https://xhwptvvbfezaoswfuyrb.supabase.co/storage/v1/object/sign/VisualMorp/30%20Bensley%20Lane,%20Hamilton.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84ZDFkMTA1Ny0xYjU3LTQwZGUtYTA0OC1lYzZjNzZkNGVlNDciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaXN1YWxNb3JwLzMwIEJlbnNsZXkgTGFuZSwgSGFtaWx0b24ubXA0IiwiaWF0IjoxNzc4MDY0ODE4LCJleHAiOjE4MDk2MDA4MTh9.KEolpHNbDxv1lklwjxi-4tT7yjdPCqqLxlQcMLXnZJI';

// Placeholder video URLs — replace these with real project videos
const DUMMY_VIDEOS = [
  'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-city-at-sunset-11-large.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-a-woman-walking-in-a-modern-city-4394-large.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-white-sand-beach-and-palm-trees-1564-large.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-man-doing-yoga-on-top-of-a-mountain-4045-large.mp4',
];

const projects = [
  { id: 1, src: MAIN_VIDEO, title: '30 Bensley Lane', tag: 'Real Estate' },
  { id: 2, src: DUMMY_VIDEOS[0], title: 'City Skyline Edit', tag: 'Commercial' },
  { id: 3, src: DUMMY_VIDEOS[1], title: 'Urban Story', tag: 'Brand Film' },
  { id: 4, src: DUMMY_VIDEOS[2], title: 'Coastal Retreat', tag: 'Real Estate' },
  { id: 5, src: DUMMY_VIDEOS[3], title: 'Spring Campaign', tag: 'Social Media' },
  { id: 6, src: DUMMY_VIDEOS[4], title: 'Wellness Journey', tag: 'Brand Film' },
];

function VideoCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (hovered) {
      video.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
      setPlaying(false);
    }
  }, [hovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl overflow-hidden bg-[#e8e4dd] shadow-card hover:shadow-elevated transition-shadow duration-500 cursor-pointer"
      style={{ aspectRatio: index === 0 ? '16/9' : '4/3' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Skeleton */}
      {!loaded && !error && (
        <div className="absolute inset-0 video-skeleton" />
      )}

      {error ? (
        <div className="absolute inset-0 bg-[#e8e4dd] flex items-center justify-center">
          <div className="text-center">
            <Play size={28} className="text-[#9a9189] mx-auto mb-2" />
            <p className="text-[#9a9189] text-xs">Preview unavailable</p>
          </div>
        </div>
      ) : (
        <video
          ref={videoRef}
          src={project.src}
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${hovered ? 'scale-105' : 'scale-100'}`}
        />
      )}

      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-[#1a1714]/70 via-transparent to-transparent transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} />

      {/* Play icon */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <div className="w-12 h-12 rounded-full glass flex items-center justify-center shadow-elevated">
          {playing ? <Pause size={16} className="text-[#1a1714]" /> : <Play size={16} className="text-[#1a1714] ml-0.5" />}
        </div>
      </div>

      {/* Tag */}
      <div className={`absolute top-4 left-4 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
        <span className="glass text-xs font-medium text-[#1a1714] px-3 py-1 rounded-full">
          {project.tag}
        </span>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[#c8a96e] text-xs font-medium tracking-widest uppercase">Our Work</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1a1714] mt-3 mb-5">
            Stories we've shaped
          </h2>
          <p className="text-[#9a9189] max-w-xl mx-auto leading-relaxed">
            From real estate walkthroughs to brand films — every frame crafted
            to captivate, convert, and endure.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {/* Featured (spans 2 cols on lg) */}
          <div className="lg:col-span-2">
            <VideoCard project={projects[0]} index={0} />
          </div>
          <VideoCard project={projects[1]} index={1} />
          <VideoCard project={projects[2]} index={2} />
          <VideoCard project={projects[3]} index={3} />
          <VideoCard project={projects[4]} index={4} />
          <VideoCard project={projects[5]} index={5} />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-[#9a9189] text-sm mb-4">Ready to add your project to this reel?</p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#1a1714] text-white font-medium px-7 py-3 rounded-full text-sm hover:bg-[#2d2925] transition-colors duration-300 cursor-pointer"
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
