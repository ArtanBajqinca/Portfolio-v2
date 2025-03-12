'use client';

import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from 'react-icons/fa';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [isVisible, setIsVisible] = useState({
    header: false,
    connect: false,
    form: false,
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const headerRef = useRef(null);
  const connectRef = useRef(null);
  const formRef = useRef(null);
  const formElementRef = useRef(null);

  useEffect(() => {
    const observers = [];
    const observerOptions = { threshold: 0.2, rootMargin: '0px' };

    const createObserver = (ref, key) => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [key]: true }));
          observer.disconnect();
        }
      }, observerOptions);

      if (ref.current) {
        observer.observe(ref.current);
        observers.push(observer);
      }
    };

    createObserver(headerRef, 'header');
    createObserver(connectRef, 'connect');
    createObserver(formRef, 'form');

    // Initialize EmailJS with your public key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  // Add the handleInputChange function here
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formState.name.trim() === '' ||
      formState.email.trim() === '' ||
      formState.message.trim() === ''
    ) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: 'Please fill out all required fields.',
      });
      return;
    }

    setFormStatus({
      submitting: true,
      submitted: false,
      error: null,
    });

    const templateParams = {
      from_name: formState.name,
      reply_to: formState.email,
      subject: formState.subject || 'Contact Form Submission',
      message: formState.message,
      to_email: 'artan.bajqinca@gmail.com',
    };

    try {
      // Send email using your service ID and template ID
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      setFormStatus({
        submitting: false,
        submitted: true,
        error: null,
      });

      // Reset form inputs
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Reset the form after 5 seconds
      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send your message. Please try again later.',
      });
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-gray-900 font-avenir-medium">
      <div className="flex flex-row flex-wrap justify-center">
        <div className="flex flex-col mx-12 max-w-screen-xl">
          <div className="lg:mt-10 mt-8">
            <Navbar />
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div
        ref={headerRef}
        className="max-w-screen-xl mx-auto px-6 py-16 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.header ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-avenir-black mb-3 text-white">
            Get in <span className="text-green-400">Touch</span>
          </h1>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new projects and opportunities. Whether you
            want to discuss a potential collaboration, have questions about my
            projects, or just want to say hello, feel free to reach out!
          </p>
        </motion.div>
      </div>

      {/* Connect Section */}
      <motion.section
        ref={connectRef}
        className="max-w-screen-xl mx-auto px-6 pb-16 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.connect ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <SocialLink
            href="https://linkedin.com/in/artanbajqinca"
            icon={<FaLinkedin className="text-green-400" />}
            label="LinkedIn"
            subtitle="@artanbajqinca"
            description="Connect with me professionally"
          />
          <SocialLink
            href="https://github.com/ArtanBajqinca"
            icon={<FaGithub className="text-green-400" />}
            label="GitHub"
            subtitle="@ArtanBajqinca"
            description="Check out my code repositories"
          />
          <SocialLink
            href="mailto:artan.bajqinca@gmail.com"
            icon={<FaEnvelope className="text-green-400" />}
            label="Email"
            subtitle="artan.bajqinca@gmail.com"
            description="Send me an email directly"
          />
        </motion.div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        ref={formRef}
        className="max-w-screen-xl mx-auto px-6 py-16 bg-gray-700/30 rounded-lg mb-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.form ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-avenir-black text-white text-center mb-3">
            Send a <span className="text-green-400">Message</span>
          </h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-10"></div>

          {formStatus.submitted ? (
            <div className="bg-green-900/30 p-8 rounded-lg max-w-3xl mx-auto text-center">
              <FaCheckCircle className="mx-auto text-green-400 text-5xl mb-4" />
              <h3 className="text-white text-2xl font-avenir-black mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-300">
                Thank you for reaching out. I'll get back to you as soon as
                possible.
              </p>
            </div>
          ) : (
            <form
              ref={formElementRef}
              onSubmit={handleSubmit}
              className="max-w-3xl mx-auto"
            >
              {formStatus.error && (
                <div className="bg-red-900/30 text-white p-4 rounded-lg mb-6">
                  {formStatus.error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Subject"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formState.message}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <div className="text-center ">
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className={`bg-green-700 text-white font-avenir-heavy py-3 px-8 rounded-lg transition-all duration-300 ${
                    formStatus.submitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {formStatus.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </motion.section>

      <Footer />
    </main>
  );
}

const SocialLink = ({ href, icon, label, subtitle, description }) => (
  <Link
    href={href}
    target="_blank"
    className="flex flex-col items-center text-white transition group bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 h-full"
  >
    <div className="text-4xl mb-4 group-hover:scale-110 transition-all duration-300">
      {icon}
    </div>
    <span className="font-medium text-xl mb-1">{label}</span>
    <span className="text-gray-400 text-sm mb-3">{subtitle}</span>
    <p className="text-gray-300 text-sm">{description}</p>
  </Link>
);
