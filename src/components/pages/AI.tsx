import React from 'react';
import PageHero from '../ui/PageHero';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import ZakatCalculator from '../ai/ZakatCalculator';
import ShariaChat from '../ai/ShariaChat';
import Analytics from '../ai/Analytics';
import EcosystemAI from '../ai/EcosystemAI';

export default function AI() {
  return (
    <>
      <PageHero
        badge="Tawf AI"
        title="Intelligence for the Baitul Maal"
        subtitle="AI analytics and integration across the Tawf ecosystem"
        description="A model-agnostic intelligence layer that powers zakat calculation, Sharia Q&A, impact analytics, and every product in the ecosystem. Built on the same transparency infrastructure as everything else."
        background="green"
      />

      {/* Calculator */}
      <Section background="white">
        <SectionHeader
          badge="Zakat Calculator"
          title="Know what is due"
          description="Tawf AI estimates your zakat using the Shafi'i approach and the nisab of 85 grams of gold. The final ruling rests with the AI Sharia Review."
        />
        <ZakatCalculator />
      </Section>

      {/* Sharia Q&A */}
      <Section background="sand">
        <SectionHeader
          badge="Sharia Q&A"
          title="Ask Tawf AI"
          description="Ask about zakat, waqf, sadaqah, qurban, or any Islamic finance term. Tawf AI explains in plain language. It does not issue fatwas."
        />
        <div className="max-w-3xl mx-auto">
          <ShariaChat />
        </div>
      </Section>

      {/* Analytics */}
      <Section background="white">
        <SectionHeader
          badge="AI Analytics"
          title="See your impact"
          description="Donor dashboards and institution metrics powered by Tawf AI across the same on-chain records that tawf-verify notarizes."
        />
        <Analytics />
      </Section>

      {/* Ecosystem */}
      <Section background="sand">
        <SectionHeader
          badge="AI Across the Ecosystem"
          title="Every product, augmented"
          description="Tawf AI is embedded across all seven products. Each one uses intelligence where it adds value."
        />
        <EcosystemAI />
      </Section>
    </>
  );
}