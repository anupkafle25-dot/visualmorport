import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';

// Social icon components
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'visualmorp@gmail.com',
    href: 'mailto:visualmorp@gmail.com',
    description: 'Drop us a message anytime',
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    value: '@visualmorp.co',
    href: 'https://instagram.com/visualmorp.co',
    description: 'See our latest work',
  },
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: '+1 (555) 000-0000',
    href: 'https://wa.me/15550000000',
    description: 'Fast response guaranteed',
  },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 md:mb-18"
        >
          <span className="text-[#c8a96e] text-xs font-medium tracking-widest uppercase">Contact</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1a1714] mt-3 mb-5">
            Let's create something<br />
            <em className="text-[#c8a96e] not-italic">extraordinary</em>
          </h2>
          <p className="text-[#9a9189] max-w-md mx-auto leading-relaxed">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-card hover:shadow-elevated transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#f5f3ef] flex items-center justify-center flex-shrink-0 group-hover:bg-[#c8a96e]/10 transition-colors duration-300 text-[#4a4540] group-hover:text-[#c8a96e]">
                    <Icon />
                  </div>
                  <div>
                    <div className="text-xs text-[#9a9189] mb-0.5">{link.description}</div>
                    <div className="text-sm font-semibold text-[#1a1714]">{link.value}</div>
                  </div>
                </motion.a>
              );
            })}

            {/* Quick note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-[#1a1714] rounded-2xl p-6 mt-2"
            >
              <p className="font-serif text-xl font-medium text-white leading-snug mb-2">
                "Prefer to chat? We're just a message away."
              </p>
              <p className="text-white/50 text-sm">Average response time: under 4 hours</p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 shadow-card"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#c8a96e]/10 flex items-center justify-center mb-5">
                  <CheckCircle size={32} className="text-[#c8a96e]" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#1a1714] mb-3">
                  Message received!
                </h3>
                <p className="text-[#9a9189] text-sm leading-relaxed max-w-sm">
                  Thank you for reaching out. We'll review your project brief
                  and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setName(''); setEmail(''); setProject(''); setMessage(''); }}
                  className="mt-8 text-sm text-[#c8a96e] underline underline-offset-4 hover:text-[#b8994e] transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-[#9a9189] mb-2 tracking-wide">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="James Harrington"
                      className="w-full border border-[#e8e4dd] rounded-xl px-4 py-3 text-sm text-[#1a1714] placeholder-[#c5bfb8] outline-none focus:border-[#c8a96e] focus:ring-2 focus:ring-[#c8a96e]/10 transition-all duration-200 bg-[#faf9f7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#9a9189] mb-2 tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="james@example.com"
                      className="w-full border border-[#e8e4dd] rounded-xl px-4 py-3 text-sm text-[#1a1714] placeholder-[#c5bfb8] outline-none focus:border-[#c8a96e] focus:ring-2 focus:ring-[#c8a96e]/10 transition-all duration-200 bg-[#faf9f7]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#9a9189] mb-2 tracking-wide">
                    Project Type
                  </label>
                  <select
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    className="w-full border border-[#e8e4dd] rounded-xl px-4 py-3 text-sm text-[#1a1714] outline-none focus:border-[#c8a96e] focus:ring-2 focus:ring-[#c8a96e]/10 transition-all duration-200 bg-[#faf9f7] appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a service...</option>
                    <option>Real Estate Video</option>
                    <option>Brand Film</option>
                    <option>Social Media Content</option>
                    <option>Commercial Ad</option>
                    <option>Music / Event Video</option>
                    <option>Color Grading Only</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#9a9189] mb-2 tracking-wide">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project, timeline, and any references or inspiration you have..."
                    rows={5}
                    className="w-full border border-[#e8e4dd] rounded-xl px-4 py-3 text-sm text-[#1a1714] placeholder-[#c5bfb8] outline-none focus:border-[#c8a96e] focus:ring-2 focus:ring-[#c8a96e]/10 transition-all duration-200 bg-[#faf9f7] resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={loading}
                  className="flex items-center justify-center gap-2.5 bg-[#1a1714] hover:bg-[#2d2925] text-white font-medium px-7 py-3.5 rounded-full text-sm transition-all duration-300 cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
