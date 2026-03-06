import React from 'react';
import { motion } from 'motion/react';

export default function Manifesto() {
  return (
    <div className="bg-tawf-sand py-20 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-tawf-gold"></div>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-tawf-gold">Our Covenant</span>
            <div className="h-[1px] w-12 bg-tawf-gold"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-tawf-green mb-8 leading-tight">
            The Tawf Foundation Manifesto
          </h1>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="prose prose-lg md:prose-xl prose-stone max-w-none text-tawf-ink/80"
        >
          <div className="space-y-16">
            
            <section>
              <h2 className="text-3xl font-serif text-tawf-green mb-6 font-medium">We Believe Finance Can Be Just.</h2>
              <p className="leading-relaxed">
                Not as an ideal. Not as a tagline. As a structural fact - encoded into governance, enforced by scholars, owned by the community.
              </p>
              <p className="leading-relaxed mt-4">
                For too long, the financial system has operated on a single premise: that profit is the only principle worth building around. That interest is inevitable. That opacity is acceptable. That the community is a market, not a stakeholder. That ethics are a feature you add at the end, not a foundation you build from the beginning.
              </p>
              <p className="leading-relaxed mt-4 font-medium text-tawf-green">
                We reject that premise entirely.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-tawf-green mb-6 font-medium">We Come From Something Real.</h2>
              <p className="leading-relaxed">
                Before venture capital. Before blockchain. Before DeFi and DAOs and tokenomics - there was Baitul Maal wa Tamwil.
              </p>
              <p className="leading-relaxed mt-4">
                For generations, Indonesian communities built their own financial institutions from the ground up. Cooperatives rooted in trust, not collateral. Governed by deliberation, not domination. Funded by zakat and waqf - the belief that wealth held by the few carries an obligation to the many. BMTs did not wait for banks to serve them. They built for themselves. They governed themselves. They trusted themselves.
              </p>
              <p className="leading-relaxed mt-4">
                That is where we come from. That is what we are rebuilding.
              </p>
              <p className="leading-relaxed mt-4">
                Tawf Foundation is not a Silicon Valley idea wearing Islamic clothing. It is a deeply Indonesian, deeply Islamic institution - born from centuries of cooperative wisdom, rewritten in the language of the digital age.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-tawf-green mb-6 font-medium">We Are Not Here to Disrupt. We Are Here to Restore.</h2>
              <p className="leading-relaxed">
                The promise of Web3 was radical: money without gatekeepers, governance without hierarchy, access without permission. A financial system that nobody owns and everybody can use.
              </p>
              <p className="leading-relaxed mt-4">
                That promise has largely gone unfulfilled. Instead, we got speculation dressed as innovation. Token-weighted governance captured by whales. Complexity weaponized against the ordinary user. A new financial system that reproduced the sins of the old one - faster, more opaquely, with better branding.
              </p>
              <p className="leading-relaxed mt-4">
                We are here to hold Web3 accountable to its own promise.
              </p>
              <p className="leading-relaxed mt-4">
                Not through criticism from the outside. Through construction from the inside. By building the standards, the governance structures, and the certification infrastructure that make ethical Web3 not just possible - but verifiable, credible, and permanent.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-tawf-green mb-6 font-medium">We Believe in Seven Principles. Non-Negotiable. Always.</h2>
              <ul className="space-y-6 list-none pl-0">
                <li className="leading-relaxed">
                  <strong className="text-tawf-green">No Riba.</strong> Interest is not a neutral instrument. It is a mechanism that transfers wealth from the borrower to the lender regardless of outcome - rewarding capital while punishing labor, entrenching inequality with mathematical precision. We build without it.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-tawf-green">No Gharar.</strong> Uncertainty that harms is prohibited. Smart contracts must be auditable. Terms must be disclosed. Users must know what they are entering into. Opacity in finance is not sophistication - it is predation.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-tawf-green">No Maysir.</strong> Gambling is not a financial product. Zero-sum speculation that enriches participants at each other's expense is not innovation. The financial system must create real value - not merely redistribute it from the unlucky to the lucky.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-tawf-green">Real Asset Backing.</strong> Tokens must represent something real. Finance that is entirely detached from productive human activity - from goods, services, labor, and land - is not finance. It is a fiction that eventually collapses on the people least able to survive the fall.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-tawf-green">Transparent Governance.</strong> Power must be visible. Decisions must be traceable. Those who govern must be accountable to those they govern. On-chain auditability is not a technical feature - it is a moral requirement.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-tawf-green">Social Impact & Maslaha.</strong> Every financial product must answer a simple question: who benefits, and how? If the honest answer is "a small group of early participants, at the eventual expense of everyone else," it does not pass. Finance must serve the many. That is what it is for.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-tawf-green">Halal Sector Compliance.</strong> Capital has direction. Where money flows, power and harm follow. Certified products must not direct capital toward industries that cause demonstrable harm to individuals, families, or communities. The prohibition is not arbitrary - it is an acknowledgment that finance is never neutral.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-tawf-green mb-6 font-medium">We Believe Governance Belongs to the Community.</h2>
              <p className="leading-relaxed">
                Not to investors. Not to founders. Not to whoever holds the most tokens.
              </p>
              <p className="leading-relaxed mt-4">
                The TAWF DAO gives every verified member of this ecosystem one voice - equal, irrevocable, and inalienable. One Tawf ID. One vote. Because Musyawarah - collective deliberation, consultative consensus, shared responsibility - is not a governance experiment. It is an Islamic inheritance that predates every DAO by fourteen centuries.
              </p>
              <p className="leading-relaxed mt-4">
                Community governance lives inside the Foundation - not inside the company. That placement is not administrative. It is a statement of values: the community is not a user base. It is not a growth metric. It is the owner.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-tawf-green mb-6 font-medium">We Believe Scholars Must Lead.</h2>
              <p className="leading-relaxed">
                At the apex of the Foundation sit the Scholar Chairmen - Islamic scholars whose authority over Sharia matters is absolute, unconditional, and structurally protected from every commercial override imaginable.
              </p>
              <p className="leading-relaxed mt-4">
                This is not tokenism. This is not a compliance checkbox to satisfy regulators or reassure investors. It is a genuine conviction: that in matters of what is just and what is prohibited, religious scholarship carries an authority that no algorithm, no market signal, and no majority vote can replace.
              </p>
              <p className="leading-relaxed mt-4">
                The scholars do not advise. They chair. Their rulings are final. And no version of Tawf - no product, no partnership, no funding round - will ever change that.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-tawf-green mb-6 font-medium">We Believe Tawf ID is Dignity, Not a Token.</h2>
              <p className="leading-relaxed">
                We will not create a governance token. We will not design a system where your voice is proportional to your wealth. We will not build the same whale-capture dynamics that have corrupted so many DAOs before us - and then call it decentralization.
              </p>
              <p className="leading-relaxed mt-4">
                Tawf ID is a soulbound credential. It cannot be bought, sold, transferred, or speculated upon. It is proof of membership, not proof of capital. It carries zero monetary value and infinite governance value - because in this ecosystem, those two things are deliberately, permanently decoupled.
              </p>
              <p className="leading-relaxed mt-4 font-medium text-tawf-green">
                Your voice here is yours. Not for sale. Not transferable. Yours.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-tawf-green mb-6 font-medium">We Are Building for the 2 Billion.</h2>
              <p className="leading-relaxed">
                Two billion Muslims live on this earth. The majority are in Southeast Asia - in Indonesia, Malaysia, Bangladesh, Pakistan, in cities and villages where Islamic values are not a niche identity but a living framework for how people work, borrow, give, and build together.
              </p>
              <p className="leading-relaxed mt-4">
                These communities have been underserved by conventional finance for a century. They have been patronized, excluded, and in many cases actively exploited by systems that had no interest in their values and no accountability to their needs.
              </p>
              <p className="leading-relaxed mt-4">
                Web3 has the technical capability to reach them. What it has lacked - until now - is the ethical infrastructure to deserve their trust.
              </p>
              <p className="leading-relaxed mt-4">
                That is what we are building. Not for a market. For a community. For the 20 million BMT members across Indonesia who already understand cooperative finance and simply need digital tools equal to their existing wisdom. For the young Muslim developer building her first DeFi protocol who wants to know it can be done right. For the scholar who has watched cryptocurrency from a distance, hoping something would emerge that he could honestly endorse.
              </p>
              <p className="leading-relaxed mt-4 font-medium text-tawf-green">
                We are building for all of them.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-tawf-green mb-6 font-medium">We Are Not the Last Word. We Are the First Standard.</h2>
              <p className="leading-relaxed">
                Tawf Foundation does not claim to be the final authority on Islamic finance. We do not issue fatwas. We do not compete with DSN-MUI, AAOIFI, or any established Sharia institution. We are not a religious body.
              </p>
              <p className="leading-relaxed mt-4">
                We are a standard-setting institution. We define a transparent, auditable, publicly published methodology. We certify products that meet it. We revoke certification from products that fall short. And we publish everything - so that any scholar, any regulator, any community member can scrutinize our reasoning, challenge our conclusions, and hold us accountable.
              </p>
              <p className="leading-relaxed mt-4">
                The TAWF Sharia Framework is a living document. It will evolve as technology evolves, as scholars deliberate, as the community grows. But it will always be open. Always auditable. Always owned by the Foundation - never by the market.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-tawf-green mb-6 font-medium">We Are Funded by Principle.</h2>
              <p className="leading-relaxed">
                Zakat. Waqf. Grants. Donations. And a royalty from the commercial engine we license - because the mission must be financially sustainable to be structurally independent.
              </p>
              <p className="leading-relaxed mt-4">
                We do not take equity from anyone whose interests might one day conflict with ours. We do not serve advertisers. We do not monetize community data. We do not compromise certification decisions for partnership revenue. Our independence is the product. Without it, nothing else we build has meaning.
              </p>
            </section>

            <section className="bg-tawf-green text-tawf-sand p-10 md:p-16 rounded-3xl mt-16">
              <h2 className="text-4xl font-serif text-tawf-gold mb-8">This Is Our Covenant.</h2>
              <ul className="space-y-6 list-none pl-0">
                <li className="leading-relaxed text-lg">
                  <strong className="text-white">To the communities we serve:</strong> we will never trade your trust for growth.
                </li>
                <li className="leading-relaxed text-lg">
                  <strong className="text-white">To the scholars who chair our board:</strong> we will protect your authority from every commercial pressure, forever.
                </li>
                <li className="leading-relaxed text-lg">
                  <strong className="text-white">To the builders who seek certification:</strong> we will judge your work against the same standard we apply to ourselves - transparently, consistently, and without exception.
                </li>
                <li className="leading-relaxed text-lg">
                  <strong className="text-white">To the community members who hold a Tawf ID:</strong> your voice will always be equal to every other voice in this ecosystem, regardless of how much capital you hold.
                </li>
                <li className="leading-relaxed text-lg">
                  <strong className="text-white">To the tradition we inherit:</strong> we will honor it - not by freezing it in the past, but by carrying it, faithfully and boldly, into the future it always deserved.
                </li>
              </ul>
              
              <div className="mt-16 pt-12 border-t border-white/20 text-center">
                <p className="text-2xl font-serif text-tawf-gold mb-4">Tawf Foundation.</p>
                <p className="text-xl font-light text-white mb-8">Baitul Maal, rebuilt for the digital age.</p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm tracking-widest uppercase text-tawf-sand/70">
                  <span>Ethical by principle.</span>
                  <span className="hidden md:inline">•</span>
                  <span>Sharia by design.</span>
                  <span className="hidden md:inline">•</span>
                  <span>Community by covenant.</span>
                </div>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
