export interface GlossaryTerm {
  term: string;
  pronunciation?: string;
  definition: string;
  context?: string;
  shortDefinition?: string;
  shortContext?: string;
  related?: string[];
}

export const glossaryTerms: Record<string, GlossaryTerm> = {
  "baitul-maal": {
    term: "Baitul Maal",
    pronunciation: "bah-yool ma-al",
    definition: "A centuries-old Islamic community treasury. Think of it as a foundation, charity, and community bank combined. Historically, it collected, managed, and distributed community wealth for social welfare.",
    context: "The Tawf Islamic Foundation is the Baitul Maal of the ecosystem - the social and charitable soul that transforms profit into purpose.",
    shortDefinition: "An Islamic treasury managing community wealth for social welfare.",
    shortContext: "Tawf Islamic Foundation serves as the ecosystem's Baitul Maal—transforming profit into purpose."
  },
  "zakat": {
    term: "Zakat",
    pronunciation: "zah-kat",
    definition: "One of the Five Pillars of Islam. It's an obligatory charitable contribution (2.5% of qualifying wealth) that eligible Muslims must pay annually to support those in need.",
    context: "The Foundation serves as the official amil (collector and distributor) of zakat from Tawf Labs revenue.",
    related: ["asnaf", "amil", "nisab"]
  },
  "waqf": {
    term: "Waqf",
    pronunciation: "wah-kif",
    definition: "An Islamic endowment or charitable trust. Property or assets are dedicated permanently for religious, charitable, or public benefit, with the principal remaining intact while the returns support community programs.",
    context: "The Foundation acts as trustee for all waqf assets, including wakaf produktif (productive waqf).",
    related: ["wakaf-produktif"]
  },
  "wakaf-produktif": {
    term: "Wakaf Produktif",
    pronunciation: "wah-kaf pro-duk-tif",
    definition: "Productive waqf - where the endowment assets are actively invested or used to generate ongoing returns that fund community programs perpetually, rather than being held statically.",
    context: "Through Tawf Labs, we're building toward tokenized waqf that can be managed digitally."
  },
  "sadaqah": {
    term: "Sadaqah",
    pronunciation: "sah-dah-kah",
    definition: "Voluntary charitable giving in Islam. Unlike zakat, it's not obligatory and can be given at any time in any amount. It's considered a virtuous act that purifies wealth and soul.",
    context: "The Foundation runs sadaqah programs for education, BMT digitization, and research grants."
  },
  "qardhul-hasan": {
    term: "Qardhul Hasan",
    pronunciation: "kar-dool has-sahn",
    definition: "A benevolent, interest-free loan given for the sake of Allah. The lender expects only the return of the principal amount, with no additional profit or interest.",
    context: "The Foundation manages qardhul hasan funds for underserved communities and early-stage BMTs."
  },
  "amil": {
    term: "Amil",
    pronunciation: "ah-meel",
    definition: "An officially appointed collector and administrator of zakat. Amils are authorized to collect zakat from eligible payers and ensure it reaches qualified recipients.",
    context: "Tawf Islamic Foundation serves as the official amil for the Tawf ecosystem."
  },
  "asnaf": {
    term: "Asnaf",
    pronunciation: "as-naf",
    definition: "The eight categories of eligible zakat recipients defined in Islamic law: the poor, the needy, zakat administrators, those whose hearts are to be reconciled, those in bondage, those burdened with debt, those in God's cause, and travelers.",
    context: "Zakat collected by the Foundation is distributed to these eight categories."
  },
  "nisab": {
    term: "Nisab",
    pronunciation: "nee-sab",
    definition: "The minimum threshold of wealth a Muslim must possess before they are obligated to pay zakat. It's equivalent to the value of 87.48 grams of gold or 612.36 grams of silver.",
    context: "Tawf Labs calculates zakat based on profits exceeding this threshold."
  },
  "dirham": {
    term: "Dirham",
    pronunciation: "dir-ham",
    definition: "Historical Islamic currency unit. Today, it's used figuratively to refer to money or wealth, especially in the context of charitable giving.",
    context: "Every dirham of zakat is tracked and distributed transparently on the blockchain."
  },
  "musyawarah": {
    term: "Musyawarah",
    pronunciation: "moo-shah-wah-rah",
    definition: "Deliberative consultation or consensus-building through discussion. An Islamic decision-making practice where stakeholders participate in open dialogue to reach collective agreement.",
    context: "The TAWF DAO uses musyawarah principles for community governance."
  },
  "bmt": {
    term: "BMT",
    pronunciation: "B-M-T",
    definition: "Baitul Maal wa Tamwil - Islamic financial cooperatives common in Indonesia. They combine social funds (Baitul Maal) for charity with commercial financing (Tamwil) for members.",
    context: "Tawf Islamic Foundation works with BMTs across Indonesia for digitization and zakat distribution."
  },
  "soulbound": {
    term: "Soulbound",
    pronunciation: "sowl-bound",
    definition: "A non-transferable digital asset permanently bound to a single wallet/account. Once assigned, it cannot be sold, traded, or moved to another owner.",
    context: "Tawf ID (TID) is a Soulbound NFT ensuring one-person-one-vote governance."
  },
  "dao": {
    term: "DAO",
    pronunciation: "D-A-O",
    definition: "Decentralized Autonomous Organization - a member-governed organization where rules and decisions are encoded in smart contracts on a blockchain.",
    context: "The TAWF DAO enables community governance with one TID equaling one vote."
  },
  "sharia": {
    term: "Sharia",
    pronunciation: "shah-ree-ah",
    definition: "Islamic religious law derived from the Quran and the teachings of Prophet Muhammad (peace be upon him). It governs all aspects of a Muslim's life, including finance, business, and ethics.",
    context: "The Sharia Advisory Board provides guidance on all Sharia matters within the Tawf ecosystem."
  },
  "riba": {
    term: "Riba",
    pronunciation: "ree-bah",
    definition: "Interest or usury - the prohibition of charging or paying interest on loans. It's considered exploitative as it generates wealth from wealth without productive activity.",
    context: "The Tawf ecosystem excludes all forms of riba."
  },
  "gharar": {
    term: "Gharar",
    pronunciation: "gah-rar",
    definition: "Excessive uncertainty, ambiguity, or risk in contracts. Islamic finance prohibits contracts with excessive uncertainty that could lead to disputes or unfair outcomes.",
    context: "The Tawf ecosystem ensures products are free from gharar."
  },
  "maysir": {
    term: "Maysir",
    pronunciation: "may-seer",
    definition: "Gambling or games of chance. Islamic finance prohibits zero-sum speculation where one person's gain is another's loss without productive value creation.",
    context: "The Tawf ecosystem excludes all forms of maysir."
  },
  "maslaha": {
    term: "Maslaha",
    pronunciation: "mas-lah-hah",
    definition: "Public interest or social welfare - a principle in Islamic jurisprudence that permits or encourages actions that benefit the community while aligning with Sharia objectives.",
    context: "All Tawf products must demonstrate genuine maslaha (public benefit)."
  },
  "tamwil": {
    term: "Tamwil",
    pronunciation: "tahm-weel",
    definition: "Financing or funding - the commercial side of BMT operations that provides ethical financing products and services to members.",
    context: "Tawf Labs provides tamwil services, while the Foundation manages the Baitul Maal."
  }
};

export const getAllTerms = (): GlossaryTerm[] => {
  return Object.values(glossaryTerms);
};

export const getTerm = (key: string): GlossaryTerm | undefined => {
  return glossaryTerms[key];
};

export const searchTerms = (query: string): GlossaryTerm[] => {
  const lowerQuery = query.toLowerCase();
  return Object.values(glossaryTerms).filter(
    (term) =>
      term.term.toLowerCase().includes(lowerQuery) ||
      term.definition.toLowerCase().includes(lowerQuery)
  );
};
