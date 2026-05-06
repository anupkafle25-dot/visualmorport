import { motion } from 'framer-motion';

const currentYear = new Date().getFullYear();

const footerLinks = {
  Services: [
    'Real Estate Videos',
    'Brand Films',
    'Social Media Content',
    'Commercial Ads',
    'Music Videos',
    'Color Grading',
  ],
  Company: [
    { label: 'Our Work', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Packages', href: '#packages' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  Connect: [
    { label: 'visualmorp@gmail.com', href: 'mailto:visualmorp@gmail.com' },
    { label: '@visualmorp.co', href: 'https://instagram.com/visualmorp.co' },
    { label: 'WhatsApp', href: 'https://wa.me/15550000000' },
  ],
};

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1714] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-14 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#c8a96e] flex items-center justify-center">
                  <span className="text-[#1a1714] font-serif font-bold text-sm leading-none">V</span>
                </div>
                <span className="font-serif font-semibold text-white text-lg tracking-tight">Visual Morp</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-[200px]">
                Premium video editing for brands and creators worldwide.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="mailto:visualmorp@gmail.com"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
                  aria-label="Email"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <polyline points="22,4 12,13 2,4"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/visualmorp.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
                  aria-label="Instagram"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/15550000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
                  aria-label="WhatsApp"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.Services.map((s) => (
                <li key={s}>
                  <span className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200 cursor-default">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.Company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Connect</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.Connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {currentYear} Visual Morp. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Crafted with precision · Delivered with purpose
          </p>
        </div>
      </div>
    </footer>
  );
}
