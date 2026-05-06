import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Packages', href: '#packages' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass shadow-premium py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#1a1714] flex items-center justify-center transition-transform duration-300 group-hover:scale-95">
              <span className="text-[#c8a96e] font-serif font-bold text-sm leading-none">V</span>
            </div>
            <span
              className="font-serif font-semibold text-[#1a1714] text-lg tracking-tight"
            >
              Visual Morp
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium text-[#4a4540] hover:text-[#1a1714] transition-colors duration-200 relative group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#c8a96e] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNav('#contact')}
              className="bg-[#1a1714] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-[#2d2925] cursor-pointer"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl text-[#1a1714] hover:bg-[#e8e4dd] transition-colors duration-200 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 glass-warm pt-20 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-2 mt-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-2xl font-serif font-medium text-[#1a1714] py-3 border-b border-[#e8e4dd] hover:text-[#c8a96e] transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                onClick={() => handleNav('#contact')}
                className="mt-6 bg-[#1a1714] text-white text-base font-medium px-6 py-3.5 rounded-full text-center cursor-pointer"
              >
                Get Started
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
