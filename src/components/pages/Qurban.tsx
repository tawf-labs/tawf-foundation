import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  GitBranch, MapPin, Users, CheckCircle, ArrowRight,
  ChevronRight, Heart, Calendar, Scissors
} from 'lucide-react';
import PageHero from '../ui/PageHero';
import Section from '../ui/Section';
import InfoTooltip from '../ui/InfoTooltip';

const faqs = [
  {
    q: 'What is Qurban (Udhiyah)?',
    a: 'Qurban, also known as Udhiyah, is the ritual sacrifice of livestock animals during Eid al-Adha. It commemorates Prophet Ibrahim\'s willingness to sacrifice his son in obedience to Allah, who then provided a ram instead.'
  },
  {
    q: 'When is Qurban performed?',
    a: 'Qurban is performed during Eid al-Adha, specifically after the Eid prayer on the 10th day of Dhu al-Hijjah and through the days of Tashriq (11th, 12th, and 13th of Dhu al-Hijjah).'
  },
  {
    q: 'What animals can be sacrificed?',
    a: 'The acceptable animals for Qurban are sheep, goats, cattle, and camels that meet specific age and health requirements as defined by Islamic law.'
  },
  {
    q: 'How does Tawf Islamic Foundation distribute Qurban meat?',
    a: 'We work with trusted partners in Indonesia and other regions to ensure proper slaughter according to Sharia guidelines. Meat is distributed to eligible asnaf, with one-third for the family, one-third for friends, and one-third for the needy.'
  },
  {
    q: 'Is Qurban different from regular charity?',
    a: 'Yes. Qurban is a specific religious ritual performed during Eid al-Adha with specific rules and timing. It is not the same as sadaqah or other forms of voluntary charity.'
  },
  {
    q: 'Can I pre-register for Qurban?',
    a: 'Yes. Pre-registration opens several months before Eid al-Adha. By registering early, you help us plan better distribution and ensure your sacrifice reaches those most in need.'
  }
];

export default function Qurban() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageHero
        badge="Eid al-Adha Sacrifice"
        title="Qurban at Tawf Islamic Foundation"
        subtitle="Digital qurban with full transparency"
        description="Experience a modern approach to the ancient tradition of Qurban. Register online, track your sacrifice, and verify distribution—all on-chain."
      />

      {/* What Is Qurban */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-tawf-green mb-6">What Is Qurban?</h2>
            <p className="text-tawf-muted text-lg leading-relaxed mb-6">
              Qurban (Udhiyah) is the ritual sacrifice of livestock during{' '}
              <span className="font-semibold text-tawf-green">Eid al-Adha</span>, the Festival of Sacrifice. It commemorates the willingness of Prophet Ibrahim (Abraham) to sacrifice his son in obedience to God's command.
            </p>
            <p className="text-tawf-muted text-lg leading-relaxed mb-6">
              Before the sacrifice could be completed, God provided a ram as a substitute. To honor this story, Muslims around the world sacrifice eligible livestock and distribute the meat to family, friends, and especially the needy.
            </p>
            <p className="text-tawf-muted text-lg leading-relaxed">
              At Tawf Islamic Foundation, we've modernized this tradition. Our digital platform allows you to register your Qurban, track the process, and verify that the meat reaches those who need it most—all with full transparency.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-tawf-green/5 rounded-3xl transform -rotate-3"></div>
            <div className="relative bg-white p-8 rounded-2xl border border-tawf-green/10 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-tawf-green rounded-full flex items-center justify-center">
                  <Scissors className="w-7 h-7 text-tawf-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-tawf-green">Eid al-Adha</h3>
                  <p className="text-tawf-muted text-sm">10th of Dhu al-Hijjah</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-tawf-green shrink-0" />
                  <span className="text-tawf-muted">Sharia-compliant slaughter</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-tawf-green shrink-0" />
                  <span className="text-tawf-muted">Trusted local partners</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-tawf-green shrink-0" />
                  <span className="text-tawf-muted">Fair payment to farmers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-tawf-green shrink-0" />
                  <span className="text-tawf-muted">Transparent distribution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-green mb-6">How It Works</h2>
          <p className="text-tawf-muted text-xl max-w-3xl mx-auto">
            Our digital Qurban platform makes it easy to fulfill this sacred obligation with confidence and transparency.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-tawf-green/20 hidden md:block"></div>

            {[
              {
                step: '01',
                title: 'Register Online',
                desc: 'Create an account and select your Qurban package. Choose from sheep, goats, or cattle shares.',
                icon: <Users className="w-6 h-6" />
              },
              {
                step: '02',
                title: 'Make Payment',
                desc: 'Pay securely through our platform. Funds are held in escrow until sacrifice is complete.',
                icon: <Heart className="w-6 h-6" />
              },
              {
                step: '03',
                title: 'We Source & Sacrifice',
                desc: 'Our trusted partners source healthy animals and perform Sharia-compliant slaughter.',
                icon: <Scissors className="w-6 h-6" />
              },
              {
                step: '04',
                title: 'Meat Distribution',
                desc: 'Meat is distributed according to Sharia guidelines: one-third to you, one-third to friends, one-third to the needy.',
                icon: <GitBranch className="w-6 h-6" />
              },
              {
                step: '05',
                title: 'Receive Confirmation',
                desc: 'Get photos, videos, and blockchain confirmation of your completed Qurban.',
                icon: <CheckCircle className="w-6 h-6" />
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex gap-8 mb-12 last:mb-0"
              >
                <div className="relative z-10 w-16 h-16 bg-tawf-green rounded-full flex items-center justify-center text-white font-semibold shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 pt-3">
                  <span className="text-sm font-semibold tracking-wider uppercase text-tawf-gold">{item.step}</span>
                  <h3 className="text-2xl font-serif text-tawf-green mb-2">{item.title}</h3>
                  <p className="text-tawf-muted text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Distribution */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-green mb-6">Distribution Impact</h2>
          <p className="text-tawf-muted text-xl max-w-3xl mx-auto">
            Your Qurban reaches communities in need across Indonesia and Southeast Asia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-2xl border border-tawf-green/10">
            <MapPin className="w-12 h-12 text-tawf-gold mx-auto mb-4" />
            <h3 className="text-4xl font-serif text-tawf-green mb-2">15+</h3>
            <p className="text-tawf-muted">Provinces reached in Indonesia</p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl border border-tawf-green/10">
            <Users className="w-12 h-12 text-tawf-gold mx-auto mb-4" />
            <h3 className="text-4xl font-serif text-tawf-green mb-2">5,000+</h3>
            <p className="text-tawf-muted">Families fed annually</p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl border border-tawf-green/10">
            <CheckCircle className="w-12 h-12 text-tawf-gold mx-auto mb-4" />
            <h3 className="text-4xl font-serif text-tawf-green mb-2">100%</h3>
            <p className="text-tawf-muted">Sharia-compliant distribution</p>
          </div>
        </div>
      </Section>

      {/* Pre-registration CTA */}
      <Section background="ink">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Calendar className="w-12 h-12 text-tawf-gold" />
            <h2 className="text-3xl md:text-4xl font-serif text-white">Pre-register for Eid al-Adha</h2>
          </div>
          <p className="text-tawf-sand/70 text-xl mb-10">
            Pre-registration opens several months before Eid al-Adha. Sign up to be notified when registration opens for the upcoming season.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-tawf-gold text-tawf-green px-8 py-4 rounded-full text-base font-medium tracking-widest uppercase hover:bg-white transition-colors">
              Notify Me
            </button>
            <Link
              to="/glossary"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full text-base font-medium tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-green mb-6">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-tawf-green/10 rounded-2xl overflow-hidden">
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-tawf-sand/30 transition-colors"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <span className="font-medium text-tawf-green">{faq.q}</span>
                <ChevronRight className={`w-5 h-5 text-tawf-gold transition-transform ${openFaq === idx ? 'rotate-90' : ''}`} />
              </button>
              {openFaq === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="px-6 pb-5 pt-0 bg-tawf-sand/30"
                >
                  <p className="text-tawf-muted leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="green">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-tawf-gold mb-6">Qurban Made Transparent</h2>
          <p className="text-tawf-sand/80 text-xl mb-10 max-w-2xl mx-auto">
            Honor the tradition of Prophet Ibrahim with confidence. Every sacrifice is verified, every distribution is recorded.
          </p>
          <Link
            to="/glossary"
            className="inline-flex items-center gap-2 bg-tawf-gold text-tawf-green px-8 py-4 rounded-full text-base font-medium tracking-widest uppercase hover:bg-white transition-colors"
          >
            Learn Islamic Finance Terms
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Section>
    </>
  );
}
