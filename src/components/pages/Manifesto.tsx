import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

// Consistent spacing values
const SECTION_PADDING = "py-24 md:py-24";
const CONTAINER_PADDING = "px-6";

// Consistent border radius
const RADIUS_CARD = "rounded-2xl";
const RADIUS_BOX = "rounded-2xl";
const RADIUS_BUTTON = "rounded-full";

export default function Manifesto() {
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
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-tawf-gold">Our Covenant</span>
            <div className="h-px w-12 bg-tawf-gold"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-tawf-green mb-8 leading-tight">
            The Tawf Islamic Foundation Manifesto
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
                Not as an ideal. Not as a tagline. As a structural fact, encoded into governance, enforced by scholars, owned by the community, and proven every single time we collect a dirham of zakat and place it in the hands of someone who needs it.
              </p>
              <p className="leading-relaxed mt-4">
                For too long, the financial system has operated on a single premise: that profit is the only principle worth building around. That interest is inevitable. That opacity is acceptable. That the community is a market, not a stakeholder. That ethics are a feature you add at the end, not a foundation you build from the beginning.
              </p>
              <p className="leading-relaxed mt-4">
                We reject that premise. And we don't just say so. We run the alternative, live on the blockchain, every day.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-tawf-green mb-6 font-medium">We Come From Something Real.</h2>
              <p className="leading-relaxed">
                Before venture capital. Before blockchain. Before DeFi and DAOs and tokenomics, there was Baitul Maal wa Tamwil.
              </p>
              <p className="leading-relaxed mt-4">
                For generations, Indonesian communities built their own financial institutions from the ground up. Cooperatives rooted in trust, not collateral. Governed by deliberation, not domination. Funded by zakat and waqf, the living belief that wealth held by the few carries an obligation to the many. BMTs did not wait for banks to serve them. They built for themselves. They governed themselves. They trusted themselves.
              </p>
              <p className="leading-relaxed mt-4">
                That is where we come from. That is what we are rebuilding.
              </p>
              <p className="leading-relaxed mt-4">
                The Tawf Islamic Foundation is the Baitul Maal, the social and charitable soul of this ecosystem. Everything commercial that Tawf Labs builds, earns, and grows flows back here. Into the community. Into the hands that need it. Into endowments that will outlast every market cycle. This is not a feature of Tawf. This is the reason Tawf exists.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-tawf-green mb-6 font-medium">We Are the Baitul Maal. This Is What That Means.</h2>
              <p className="leading-relaxed">
                In the original BMT model, Baitul Maal is not a charity department. It is not a PR initiative. It is not a percentage rounded up at checkout. It is the institutional heart of the entire cooperative, the body that holds the community's trust, manages its collective obligations, and ensures that commercial activity never becomes an end in itself.
              </p>
              <p className="leading-relaxed mt-4">
                Tawf Islamic Foundation is that body for the digital age.
              </p>
              <p className="leading-relaxed mt-4">
                Every royalty. Every revenue stream that the commercial engine generates, a portion flows here, to the Foundation, where it is transformed from profit into purpose.
              </p>
              <p className="leading-relaxed mt-4 font-medium text-tawf-green">
                We are not an organization that treats charity as an add-on. We are a structure where charity is architecturally mandatory.
              </p>
            </section>

            <section className={`bg-white/50 p-8 md:p-12 ${RADIUS_BOX}`}>
              <h2 className="text-3xl font-serif text-tawf-green mb-8 font-medium">What We Actively Manage and Operate</h2>

              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-serif text-tawf-green mb-4">Zakat</h3>
                  <p className="leading-relaxed">
                    Zakat is not optional. It is one of the Five Pillars of Islam, an obligation, not a choice. The Tawf Islamic Foundation serves as the official amil, the legitimate collector and distributor of zakat for the entire Tawf ecosystem. A portion of Tawf Labs' commercial revenue is calculated, declared, and disbursed as zakat through the Foundation to the eight categories of eligible recipients (asnaf) defined by Islamic law. This is not symbolic. It is a real, recurring, blockchain operation, fully transparent, auditable by any community member, and governed by the Scholar Chairmen who ensure every distribution is Sharia-compliant.
                  </p>
                  <p className="leading-relaxed mt-4 font-medium text-tawf-green">
                    We are building the infrastructure to make this the most transparent zakat operation in Southeast Asia.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-tawf-green mb-4">Waqf and Wakaf Produktif</h3>
                  <p className="leading-relaxed">
                    Waqf is Islam's most powerful instrument for intergenerational wealth, an endowment given once that generates benefit forever. The Foundation acts as the legal and governance trustee for all waqf assets within the Tawf ecosystem, including wakaf produktif, productive waqf structures where the endowment is invested to generate ongoing returns that fund community programs perpetually.
                  </p>
                  <p className="leading-relaxed mt-4">
                    Through Tawf Labs' infrastructure, we are building toward tokenized waqf, digital endowments that can be created, managed, and distributed on the blockchain, with the Foundation serving as the permanent trustee. This means a Muslim anywhere in the world can create a waqf with a smartphone, have it governed by the Foundation, and see its impact distributed to communities in Indonesia, transparently, permanently, without intermediaries taking a cut.
                  </p>
                  <p className="leading-relaxed mt-4 font-medium text-tawf-green">
                    Waqf assets managed by the Foundation cannot be liquidated, redistributed commercially, or claimed by any investor. They are held in perpetual trust for the community. Always.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-tawf-green mb-4">Sadaqah and Community Grant Programs</h3>
                  <p className="leading-relaxed">
                    The Foundation runs active sadaqah programs, voluntary charitable giving channeled into targeted community impact initiatives. These include education grants for Islamic finance students, support for early-stage BMT digitization, and direct community relief programs. Recipients are selected through a transparent, DAO-informed process with final approval from the Board of Trustees.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif text-tawf-green mb-4">Qardhul Hasan and Interest-Free Benevolent Lending</h3>
                  <p className="leading-relaxed">
                    One of the most important and most neglected instruments in Islamic finance is qardhul hasan, a loan given purely for the sake of Allah, with no interest, no profit, and no expectation beyond repayment of the principal. The Foundation manages a qardhul hasan fund for underserved community members and early-stage BMTs who need access to capital but cannot, or will not, engage with interest-bearing debt. This is ethical microfinance at its most fundamental: money as a tool of human dignity, not a mechanism of extraction.
                  </p>
                </div>
              </div>
            </section>

            <section className={`bg-tawf-ink text-tawf-sand p-8 md:p-12 ${RADIUS_BOX}`}>
              <h2 className="text-3xl font-serif text-tawf-gold mb-6 font-medium">Our Relationship With Tawf Labs: The Flow of Obligation</h2>
              <p className="leading-relaxed text-white/80">
                Tawf Labs is the commercial engine. Tawf Islamic Foundation is the mission that engine serves. The relationship between them is not just legal. It is architectural, moral, and designed to be permanent.
              </p>
              <p className="leading-relaxed mt-4 text-white/80">
                Labs pays a monthly royalty of 3 to 8% of gross revenue to the Foundation. But beyond the royalty, Labs operates under a broader obligation: a portion of its annual profit is calculated as zakat and transferred to the Foundation for distribution. Waqf assets created through Labs products are held in Foundation trusteeship. Community governance, the TAWF DAO, lives in the Foundation, not in Labs.
              </p>
              <p className="leading-relaxed mt-4 text-white/80">
                Labs is powerful. But the Foundation is sovereign.
              </p>
              <p className="leading-relaxed mt-6 text-tawf-gold font-medium">
                This is the structure that guarantees that as Tawf grows, as Labs raises capital, signs enterprise deals, and scales across Southeast Asia, the community's share of the outcome cannot be diluted, sold, or quietly set aside. It is locked into the Foundation by design. Forever.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-tawf-green mb-6 font-medium">We Believe in Seven Principles. Non-Negotiable. Always.</h2>
              <ul className="space-y-6 list-none pl-0">
                <li className="leading-relaxed">
                  <strong className="text-tawf-green">No Riba.</strong> Interest is not a neutral instrument. It is a mechanism that transfers wealth from the borrower to the lender regardless of outcome, rewarding capital while punishing labor, entrenching inequality with mathematical precision. We build without it. We operate without it.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-tawf-green">No Gharar.</strong> Uncertainty that harms is prohibited. Smart contracts must be auditable. Terms must be disclosed. Users must know what they are entering into. Opacity in finance is not sophistication. It is predation.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-tawf-green">No Maysir.</strong> Gambling is not a financial product. Zero-sum speculation that enriches participants at each other's expense is not innovation. The financial system must create real value, not merely redistribute it from the unlucky to the lucky.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-tawf-green">Real Asset Backing.</strong> Tokens must represent something real. Finance entirely detached from productive human activity, from goods, services, labor, and land, is not finance. It is a fiction that eventually collapses on the people least able to survive the fall.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-tawf-green">Transparent Governance.</strong> Power must be visible. Decisions must be traceable. Those who govern must be accountable to those they govern. On-chain auditability is not a technical feature. It is a moral requirement.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-tawf-green">Social Impact and Maslaha.</strong> Every financial product must answer a simple question: who benefits, and how? Finance must serve the many. That is what it is for. Maslaha is not a soft aspiration. It is a screening criterion, and it is the reason we run zakat and waqf operations ourselves.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-tawf-green">Halal Sector Compliance.</strong> Capital has direction. Where money flows, power and harm follow. Financial products must not direct capital toward industries that cause demonstrable harm to individuals, families, or communities.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-tawf-green mb-6 font-medium">We Believe Governance Belongs to the Community.</h2>
              <p className="leading-relaxed">
                Not to investors. Not to founders. Not to whoever holds the most tokens.
              </p>
              <p className="leading-relaxed mt-4">
                The TAWF DAO gives every verified member of this ecosystem one voice, equal, irrevocable, and inalienable. One Tawf ID. One vote. The DAO governs ecosystem fund allocation, community programs, partnership priorities, and roadmap direction, including how zakat and sadaqah funds are targeted. Because Musyawarah, collective deliberation, consultative consensus, shared responsibility, is not a governance experiment. It is an Islamic inheritance that predates every DAO by fourteen centuries.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-tawf-green mb-6 font-medium">We Believe Scholars Must Lead.</h2>
              <p className="leading-relaxed">
                At the apex of the Foundation sit the Scholar Chairmen, Islamic scholars whose authority over Sharia matters is absolute, unconditional, and structurally protected from every commercial pressure imaginable.
              </p>
              <p className="leading-relaxed mt-4">
                They do not advise. They chair. Their rulings on Sharia compliance and on the legitimacy of our zakat and waqf operations are final. No DAO vote, no board resolution, no investor term sheet will ever change that. This is not a promise. It is a structural fact.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-tawf-green mb-6 font-medium">We Are Funded by Obligation, Not Generosity.</h2>
              <p className="leading-relaxed">
                Zakat from Labs revenue. Waqf endowments from ecosystem participants. Sadaqah from individuals who believe in this mission. Grants from Islamic development institutions. And royalties from commercial products.
              </p>
              <p className="leading-relaxed mt-4">
                The key word is obligation. The zakat that flows through this Foundation is not optional. It is not a goodwill gesture that Labs makes when times are good and quietly skips when margins are tight. It is a calculated, Sharia-mandated, scholar-verified obligation, enforced by the same governance structure that governs everything else here. You cannot run an Islamic institution and treat zakat as a discretionary line item. We will not.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-tawf-green mb-6 font-medium">We Are Building for the 2 Billion.</h2>
              <p className="leading-relaxed">
                Two billion Muslims live on this earth. The majority are in Southeast Asia, in Indonesia, Malaysia, Bangladesh, Pakistan, in cities and villages where Islamic values are not a niche identity but a living framework for how people work, borrow, give, and build together.
              </p>
              <p className="leading-relaxed mt-4">
                These communities have been underserved by conventional finance for a century. Web3 has the technical capability to reach them. What it has lacked, until now, is the ethical infrastructure to deserve their trust.
              </p>
              <p className="leading-relaxed mt-4">
                The 4,500+ BMTs across Indonesia already understand cooperative finance. They already practice zakat. They already manage waqf for their communities. They do not need to be taught what ethical finance means. They need digital tools equal to the wisdom they already carry. That is what the Tawf Islamic Foundation is here to provide.
              </p>
              <p className="leading-relaxed mt-4 font-medium text-tawf-green">
                We are not building for a market. We are building for a community that has always known how to build for itself.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-tawf-green mb-6 font-medium">We Are Not the Last Word. We Are the First Standard.</h2>
              <p className="leading-relaxed">
                Tawf Islamic Foundation does not claim to be the final authority on Islamic finance. We do not issue fatwas. We are not a religious body. We are a public trust institution that operates transparently, with zakat disbursements on the blockchain and visible, waqf holdings publicly declared, and governance decisions logged and auditable.
              </p>
              <p className="leading-relaxed mt-4">
                We hold ourselves to the same standard we apply to everyone else. If we ever fall short, the community will see it. And the scholars will act.
              </p>
            </section>

            <section className={`bg-tawf-green text-tawf-sand p-10 md:p-16 ${RADIUS_BOX} mt-16`}>
              <h2 className="text-4xl font-serif text-tawf-gold mb-8">This Is Our Covenant.</h2>
              <ul className="space-y-6 list-none pl-0">
                <li className="leading-relaxed text-lg">
                  <strong className="text-white">To the communities we serve:</strong> we will never trade your trust for growth.
                </li>
                <li className="leading-relaxed text-lg">
                  <strong className="text-white">To the scholars who chair our board:</strong> we will protect your authority from every commercial pressure, forever.
                </li>
                <li className="leading-relaxed text-lg">
                  <strong className="text-white">To the builders and partners in our ecosystem:</strong> we will work with you transparently, consistently, and with integrity.
                </li>
                <li className="leading-relaxed text-lg">
                  <strong className="text-white">To the asnaf who receive our zakat:</strong> your share is not charity from us. It is a right. We are only the vessel.
                </li>
                <li className="leading-relaxed text-lg">
                  <strong className="text-white">To the waqf beneficiaries across generations:</strong> what is entrusted to us will be held in perpetuity. We do not own it. We guard it.
                </li>
                <li className="leading-relaxed text-lg">
                  <strong className="text-white">To the community members who hold a Tawf ID:</strong> your voice will always be equal to every other voice in this ecosystem, regardless of how much capital you hold.
                </li>
                <li className="leading-relaxed text-lg">
                  <strong className="text-white">To the tradition we inherit:</strong> we will honor it. Not by freezing it in the past, but by carrying it, faithfully and boldly, into the future it always deserved.
                </li>
              </ul>

              <div className="mt-16 pt-12 border-t border-white/20 text-center">
                <p className="text-2xl font-serif text-tawf-gold mb-4">Tawf Islamic Foundation. Baitul Maal, rebuilt for the digital age.</p>
                <p className="text-xl font-light text-white mb-8">Ethical by principle. Sharia by design. Community by covenant.</p>
                <p className="text-lg text-white/70 italic">And our zakat is on the blockchain. You can verify.</p>
              </div>
            </section>

          </div>
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
