'use client';

import React, { useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitting: false, submitted: false, error: null });
  const formElementRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setFormStatus({ submitting: false, submitted: false, error: 'Please fill in all fields.' });
      return;
    }
    setFormStatus({ submitting: true, submitted: false, error: null });
    try {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        { from_name: formState.name, reply_to: formState.email, message: formState.message, to_email: 'artan.bajqinca@gmail.com' }
      );
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus((p) => ({ ...p, submitted: false })), 5000);
    } catch {
      setFormStatus({ submitting: false, submitted: false, error: 'Something went wrong. Try emailing me directly.' });
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-ui-section">
      <div className="flex flex-row flex-wrap justify-center">
        <div className="flex flex-col mx-12">
          <div className="lg:mt-10 mt-8"><Navbar /></div>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto w-full px-6 lg:px-16 pt-16 pb-16">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <p className="text-green-800 font-sfpro-medium text-[12px] tracking-[0.2em] uppercase mb-5">
            Contact
          </p>
          <h1 className="text-[58px] lg:text-[88px] font-sfpro-bold text-ui-ink leading-[0.95] tracking-tight mb-6">
            Let's talk.
          </h1>
          <p className="text-ui-ink-2 font-sfpro text-[17px] leading-[1.75] max-w-lg">
            Got a project in mind, a question, or just want to say hello? I'm always open to new conversations.
          </p>
        </motion.div>
      </section>

      {/* ── Main content ─────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto w-full px-6 lg:px-16 pb-24 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16 lg:gap-24 items-start">

        {/* Left — contact info */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-10">

          {/* Links */}
          <div>
            <p className="text-[12px] font-sfpro-medium text-ui-ink-3 uppercase tracking-[0.18em] mb-5">Find me</p>
            <div className="space-y-4">
              {[
                { href: 'mailto:artan.bajqinca@gmail.com', icon: <FaEnvelope size={15} />, label: 'artan.bajqinca@gmail.com' },
                { href: 'https://linkedin.com/in/artanbajqinca', icon: <FaLinkedin size={15} />, label: 'linkedin.com/in/artanbajqinca' },
                { href: 'https://github.com/ArtanBajqinca', icon: <FaGithub size={15} />, label: 'github.com/ArtanBajqinca' },
              ].map((item, i) => (
                <Link key={i} href={item.href} target="_blank"
                  className="flex items-center gap-3 text-ui-ink-2 hover:text-ui-ink transition-colors duration-200 group font-sfpro text-[15px]">
                  <span className="text-ui-ink-3 group-hover:text-green-800 transition-colors">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <p className="text-[12px] font-sfpro-medium text-ui-ink-3 uppercase tracking-[0.18em] mb-4">Availability</p>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-800 animate-pulse" />
              <p className="text-ui-ink font-sfpro-medium text-[15px]">Open to opportunities</p>
            </div>
            <p className="text-ui-ink-2 font-sfpro text-[14px] leading-[1.7]">
              Available for freelance projects and collaborations.
            </p>
          </div>

          {/* Location */}
          <div>
            <p className="text-[12px] font-sfpro-medium text-ui-ink-3 uppercase tracking-[0.18em] mb-3">Based in</p>
            <div className="flex items-center gap-2 text-ui-ink font-sfpro text-[15px]">
              <Icon icon="ph:map-pin-bold" className="text-green-800 text-[18px]" />
              Jönköping, Sweden
            </div>
          </div>

        </motion.div>

        {/* Right — form */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>

          {formStatus.submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-start gap-4 py-16"
            >
              <Icon icon="ph:check-circle-bold" className="text-green-800 text-[48px]" />
              <h3 className="text-ui-ink font-sfpro-bold text-[24px]">Message sent.</h3>
              <p className="text-ui-ink-2 font-sfpro text-[16px]">I'll get back to you as soon as possible.</p>
            </motion.div>
          ) : (
            <form ref={formElementRef} onSubmit={handleSubmit} className="space-y-6">
              {formStatus.error && (
                <div className="text-[14px] font-sfpro text-red-400 bg-red-900/10 border border-red-900/20 rounded-xl px-4 py-3">
                  {formStatus.error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[12px] font-sfpro-medium text-ui-ink-3 uppercase tracking-widest">Name</label>
                  <input
                    id="name" name="name" type="text"
                    value={formState.name} onChange={handleInputChange}
                    placeholder="Your name" required
                    className="bg-ui-card text-ui-ink font-sfpro text-[15px] border border-ui-elevated rounded-xl px-4 py-3 focus:outline-none focus:border-green-800 transition-colors placeholder:text-ui-ink-3"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[12px] font-sfpro-medium text-ui-ink-3 uppercase tracking-widest">Email</label>
                  <input
                    id="email" name="email" type="email"
                    value={formState.email} onChange={handleInputChange}
                    placeholder="your@email.com" required
                    className="bg-ui-card text-ui-ink font-sfpro text-[15px] border border-ui-elevated rounded-xl px-4 py-3 focus:outline-none focus:border-green-800 transition-colors placeholder:text-ui-ink-3"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[12px] font-sfpro-medium text-ui-ink-3 uppercase tracking-widest">Message</label>
                <textarea
                  id="message" name="message" rows={6}
                  value={formState.message} onChange={handleInputChange}
                  placeholder="What's on your mind?" required
                  className="bg-ui-card text-ui-ink font-sfpro text-[15px] border border-ui-elevated rounded-xl px-4 py-3 focus:outline-none focus:border-green-800 transition-colors placeholder:text-ui-ink-3 resize-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white font-sfpro-bold text-[14px] tracking-wide px-7 py-3 rounded-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formStatus.submitting ? 'Sending…' : 'Send message'}
                  {!formStatus.submitting && <FaArrowRight size={13} />}
                </button>
              </div>
            </form>
          )}
        </motion.div>

      </section>

      <Footer />
    </main>
  );
}
