import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, MessageSquare, MapPin, ArrowRight } from 'lucide-react';

const SECTION_PADDING = "py-24 md:py-24";
const CONTAINER_PADDING = "px-6";
const RADIUS_CARD = "rounded-2xl";
const RADIUS_BUTTON = "rounded-full";

export default function Contact() {
  return (
    <div className={`bg-tawf-sand ${SECTION_PADDING} ${CONTAINER_PADDING}`}>
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-tawf-gold"></div>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-tawf-gold">Get In Touch</span>
            <div className="h-px w-12 bg-tawf-gold"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-tawf-green mb-8 leading-tight">
            Contact Us
          </h1>
          <p className="text-xl text-tawf-muted max-w-2xl mx-auto">
            Have questions about Tawf Islamic Foundation? Interested in partnership opportunities? We'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <a
            href="mailto:hello@tawf.foundation"
            className={`p-8 bg-white border border-tawf-green/10 ${RADIUS_CARD} text-center hover:border-tawf-green/30 transition-colors group`}
          >
            <div className="w-14 h-14 bg-tawf-green/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-tawf-green/20 transition-colors">
              <Mail className="w-6 h-6 text-tawf-green" />
            </div>
            <h3 className="font-serif text-lg text-tawf-green mb-2">Email Us</h3>
            <p className="text-sm text-tawf-muted">hello@tawf.foundation</p>
          </a>

          <a
            href="https://t.me/dedanzi"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-8 bg-white border border-tawf-green/10 ${RADIUS_CARD} text-center hover:border-tawf-green/30 transition-colors group`}
          >
            <div className="w-14 h-14 bg-tawf-green/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-tawf-green/20 transition-colors">
              <MessageSquare className="w-6 h-6 text-tawf-green" />
            </div>
            <h3 className="font-serif text-lg text-tawf-green mb-2">Telegram</h3>
            <p className="text-sm text-tawf-muted">@dedanzi</p>
          </a>

          <div className={`p-8 bg-white border border-tawf-green/10 ${RADIUS_CARD} text-center`}>
            <div className="w-14 h-14 bg-tawf-green/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <MapPin className="w-6 h-6 text-tawf-green" />
            </div>
            <h3 className="font-serif text-lg text-tawf-green mb-2">Based In</h3>
            <p className="text-sm text-tawf-muted">Jakarta, Indonesia</p>
          </div>
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`p-10 md:p-12 bg-tawf-green text-white ${RADIUS_CARD} text-center`}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-gold mb-4">Become Our Partner</h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Help us build digital infrastructure for Islamic philanthropy. Join our network of institutions committed to transparency and Sharia compliance.
          </p>
          <a
            href="mailto:hello@tawf.foundation?subject=Partnership Inquiry"
            className={`inline-flex items-center gap-2 bg-tawf-gold text-tawf-green px-8 py-4 ${RADIUS_BUTTON} text-base font-medium tracking-widest uppercase hover:bg-white transition-colors`}
          >
            Inquire About Partnership
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Back button */}
        <div className="mt-20 text-center">
          <Link to="/" className={`inline-flex items-center gap-2 border border-tawf-green text-tawf-green px-8 py-4 ${RADIUS_BUTTON} text-sm font-medium tracking-widest uppercase hover:bg-tawf-green hover:text-tawf-sand transition-all duration-300`}>
            Back to Foundation
          </Link>
        </div>
      </div>
    </div>
  );
}
