// Bilingual dictionary FR (source) / EN. Used by I18nProvider.
export const dict = {
  fr: {
    brand: { name: 'VERTEX Congo', tagline: 'Vertex Développement' },
    nav: {
      about: 'À propos',
      expertise: 'Expertise',
      solutions: 'Solutions',
      projects: 'Projets',
      team: 'Équipe',
      insights: 'Insights',
      contact: 'Contact',
      cta: 'Nous écrire',
    },
    home: {
      hero: {
        eyebrow: "Société congolaise d'ingénierie logicielle",
        h1: "Construire l'infrastructure numérique de la santé en Afrique.",
        subtitle: "VERTEX Congo conçoit et déploie des systèmes d'information de santé pour les hôpitaux, laboratoires et programmes de santé publique en RDC et en Afrique centrale.",
        cta1: 'Découvrir nos solutions',
        cta2: 'Nous écrire',
        partners: 'Aux côtés de',
      },
      stats: [
        { value: '30+', label: 'pays utilisant SENAITE' },
        { value: '4', label: 'sites de déploiement en RDC' },
        { value: '20 ans', label: "d'expérience du fondateur" },
        { value: '100%', label: 'logiciel libre' },
      ],
      commitments: {
        eyebrow: 'Nos engagements',
        title: 'Trois principes non négociables.',
        items: [
          { title: 'Ingénierie de qualité, ancrage local', desc: "Standards internationaux d'ingénierie logicielle appliqués par des équipes basées à Kinshasa. Code revu, tests, documentation FR." },
          { title: 'Logiciel libre raisonné', desc: "SENAITE, PostgreSQL, FHIR, Keycloak. Le code source et la propriété intellectuelle sont transférés au client à la livraison." },
          { title: 'Transfert de compétences', desc: "Formation des utilisateurs, des administrateurs et des formateurs internes. Documentation française complète. Pas de dépendance fournisseur." },
        ]
      },
      domains: {
        eyebrow: 'Domaines',
        title: "Trois domaines, une exigence d'ingénierie.",
        items: [
          {
            kicker: '01 — Santé numérique',
            title: "Systèmes d'information hospitaliers et de laboratoire.",
            desc: "LIMS pour laboratoires de référence et de routine, dossier patient, banque de sang, pharmacie, facturation. Architecture hors-ligne pour les contextes à connectivité intermittente. Interopérabilité native avec DHIS2, HL7 FHIR, LOINC.",
            bullets: ['SENAITE LIMS', 'Dossier patient & banque de sang', 'Interopérabilité DHIS2 / FHIR'],
            link: 'Voir Vertex Health Suite',
          },
          {
            kicker: '02 — Ingénierie logicielle',
            title: 'Applications métier sur mesure.',
            desc: "Conception et développement d'applications backend et web pour institutions publiques et organisations internationales. Stack PostgreSQL, Python/Django, Node.js, React. Architecture documentée, code livré.",
            bullets: ['API & backend critiques', 'Plateformes web & dashboards', 'Audit et reprise de systèmes existants'],
            link: 'Voir notre approche',
          },
          {
            kicker: '03 — Transformation numérique',
            title: "Stratégie, gouvernance, mise en œuvre.",
            desc: "Cadrage des feuilles de route digitales, gouvernance de la donnée, choix d'architectures, conduite du changement. Accompagnement d'institutions de santé et d'agences publiques de la décision à la mise en production.",
            bullets: ['Feuilles de route SI santé', 'Gouvernance et qualité des données', 'Conduite du changement'],
            link: "Voir nos projets",
          },
        ]
      },
      solution: {
        eyebrow: 'Solution phare',
        title: "VERTEX Health Suite — Système d'information de santé conçu pour les contraintes africaines.",
        desc: "Une suite intégrée pour la gestion des laboratoires, des banques de sang, de la pharmacie, des patients, de la facturation et du reporting sanitaire. Architecture hors-ligne, synchronisation différée, interopérabilité native DHIS2. Standards HL7 FHIR, LOINC, ICD-10. Bâtie sur SENAITE, déployée dans plus de 30 pays.",
        modules: ['LIMS', 'Banque de sang', 'Pharmacie', 'Gestion patients', 'Facturation', 'Reporting & DHIS2'],
        cta: 'Découvrir la Health Suite',
      },
      quote: {
        text: "Nous ne livrons pas un logiciel. Nous transférons une capacité opérationnelle à des institutions qui doivent pouvoir s'en servir, l'administrer et la faire évoluer sans nous.",
        author: 'Dr. Barclay Kadiebwe',
        role: 'Fondateur · Senior Program Manager, PATH',
      },
      insights: {
        eyebrow: 'Insights',
        title: "Notes d'ingénierie et de politique publique de santé.",
        link: 'Lire tous les articles',
        items: [
          { tag: 'Santé numérique', date: 'Mai 2025', title: "Pourquoi SENAITE est devenu le standard de fait des LIMS en santé publique africaine.", excerpt: "Architecture, communauté, gouvernance des données : ce qui distingue un LIMS open source d'un outil propriétaire dans un programme national." },
          { tag: 'Ingénierie', date: 'Avril 2025', title: "Architecture hors-ligne : comment opérer un SIH dans 4 sites avec une connectivité instable.", excerpt: "Synchronisation différée, conflits de fusion, résolution déterministe. Retour d'expérience d'un déploiement en RDC." },
          { tag: 'Politique publique', date: 'Mars 2025', title: "Transfert de propriété intellectuelle : la condition d'une informatique de santé souveraine.", excerpt: "Le code, la documentation, les comptes administrateurs. Pourquoi le transfert ne se décrète pas, il se contractualise." },
        ]
      },
      finalCta: {
        title: 'Discutons de votre projet.',
        desc: "Décrivez votre contexte. Nous revenons vers vous sous 48 heures avec une première lecture technique.",
        cta: 'Nous écrire',
      }
    },
    footer: {
      tagline: "Ingénierie de qualité internationale, ancrage congolais.",
      addr: '4, avenue de la Justice, Gombe — Kinshasa, RDC',
      sections: {
        company: { title: 'Société', links: [['À propos','/a-propos'],['Équipe','/equipe'],['Carrières','/carrieres'],['Insights','/insights']] },
        solutions: { title: 'Solutions', links: [['Vertex Health Suite','/solutions/vertex-health-suite'],['Santé numérique','/expertise#sante'],['Ingénierie logicielle','/expertise#ingenierie'],['Transformation','/expertise#transformation']] },
        contact: { title: 'Contact', links: [['contact@vertex-congo.cd','mailto:contact@vertex-congo.cd'],['Nous écrire','/contact'],['Projets','/projets']] },
      },
      legal: { rccm: 'RCCM CD/KIN/RCCM/24-B-00000', nin: 'NIN 01-93-N00000A', rights: 'Tous droits réservés.' },
    },
    pages: {
      about: {
        eyebrow: 'À propos',
        title: "Une société congolaise d'ingénierie logicielle, fondée sur 20 ans d'expérience internationale en santé.",
        intro: "VERTEX Congo SARL (marque Vertex Développement) est une société d'ingénierie logicielle et d'informatique de santé basée à Kinshasa, République Démocratique du Congo. Nous concevons, déployons et maintenons des systèmes d'information de santé pour des hôpitaux, des laboratoires et des programmes de santé publique en RDC et en Afrique centrale.",
        sections: [
          { h: 'Origine', p: "L'entreprise a été fondée par Dr. Barclay Kadiebwe, Senior Program Manager chez PATH, à la suite de 20 ans passés au sein d'organisations internationales de santé — Organisation mondiale de la Santé, US Centers for Disease Control, GAVI, Fonds mondial, USAID. Ce parcours a constitué la conviction qui structure VERTEX : les systèmes d'information de santé doivent être conçus, gouvernés et maintenus par des équipes africaines." },
          { h: 'Positionnement', p: "Ingénierie de qualité internationale, ancrage congolais. Nous appliquons aux contextes africains les standards d'ingénierie logicielle des meilleures équipes — revue de code, tests, intégration continue, documentation — sans céder sur la spécificité des contraintes locales : connectivité intermittente, multiplicité des sites, hétérogénéité des compétences." },
          { h: 'Méthode', p: "Nous travaillons par cycles courts avec les utilisateurs et les équipes IT du client. Chaque projet livre du code source, une documentation française, un transfert de compétences formalisé et la propriété intellectuelle. Le client n'est jamais captif." },
        ]
      },
      expertise: {
        eyebrow: 'Expertise',
        title: "Trois domaines, une exigence d'ingénierie.",
        intro: "Nous intervenons sur la conception, le déploiement et la maintenance de systèmes critiques pour la santé et l'action publique. Trois domaines structurent notre offre.",
      },
      solution: {
        eyebrow: 'Vertex Health Suite',
        title: "Système d'information de santé pour hôpitaux, laboratoires et programmes.",
        intro: "La Health Suite est notre socle technique pour la prise en charge informatique de la santé en contexte africain. Modulaire, hors-ligne par conception, interopérable.",
        features: [
          { t: 'LIMS — Laboratoire', d: "Bâti sur SENAITE. Gestion complète du parcours d'échantillon : enregistrement, planification, analyses, validation, résultats. Standards LOINC, codes-barres, intégration analyseurs." },
          { t: 'Banque de sang', d: "Tracabilité du donneur au patient. Qualification, dépistage, stockage, distribution. Conforme aux exigences réglementaires." },
          { t: 'Pharmacie', d: "Stock, dispensation, alertes ruptures, traçabilité lots et péremptions. Articulé au dossier patient." },
          { t: 'Gestion patients', d: "Dossier longitudinal, admissions, consultations, prescriptions, comptes-rendus. Modèle FHIR sous-jacent." },
          { t: 'Facturation', d: "Tarification, prises en charge mutuelles, encaissements, états financiers, exports comptables." },
          { t: 'Reporting & DHIS2', d: "Indicateurs programmatiques, tableaux de bord opérationnels, export DHIS2 natif, rapports OMS." },
        ],
        standards: ['HL7 FHIR', 'LOINC', 'ICD-10', 'DHIS2', 'PostgreSQL', 'Keycloak'],
      },
      projects: {
        eyebrow: 'Projets',
        title: 'Déploiements et missions.',
        intro: "Une sélection de travaux récents conduits avec des institutions publiques de santé et des partenaires internationaux.",
        items: [
          { sector: 'Santé publique', client: 'Programme national — RDC', title: "Déploiement SENAITE LIMS sur 4 laboratoires de référence", desc: "Architecture hors-ligne avec synchronisation différée vers un nœud central. Migration des données historiques, formation de 60 agents, transfert d'administration.", year: '2024' },
          { sector: 'Hospitalier', client: 'Hôpital général de référence', title: "Système d'information hospitalier intégré", desc: "Dossier patient, pharmacie, banque de sang et facturation. Interopérabilité DHIS2 pour les programmes verticaux.", year: '2024' },
          { sector: 'ONG internationale', client: 'Programme régional Afrique centrale', title: "Plateforme de surveillance épidémiologique", desc: "Collecte multi-sites, validation, indicateurs OMS. Application terrain Android avec synchronisation différée.", year: '2023' },
          { sector: 'Ministère', client: 'EPSP — RDC', title: "Refonte d'infrastructure et politique de sécurité", desc: "Audit de l'existant, segmentation réseau, gestion centralisée des identités via Keycloak, sauvegarde et reprise d'activité.", year: '2023' },
        ]
      },
      team: {
        eyebrow: 'Équipe',
        title: "Une équipe d'ingénieurs et de praticiens de la santé.",
        intro: "L'équipe combine expérience internationale en santé publique, ingénierie logicielle académique et opérations terrain en RDC.",
        members: [
          { name: 'Dr. Barclay Kadiebwe', role: 'Fondateur · Senior Program Manager, PATH', bio: "20 ans en santé internationale (OMS, US CDC, GAVI, Fonds mondial, USAID). Stratégie, gouvernance, partenariats institutionnels." },
          { name: 'Etienne Ntumba Kabongo', role: 'Architecte Solution & Lead Santé Numérique', bio: "Formé à McGill. Architecture des systèmes d'information de santé, interopérabilité HL7 FHIR, SENAITE LIMS." },
          { name: 'Raphaël Avocegamou', role: 'Lead Développement & Machine Learning', bio: "Ex-Centiro Montréal. Ingénierie backend, pipelines de données, modèles prédictifs appliqués à la santé publique." },
          { name: 'Soraya Kapongo', role: 'Chief Operating Officer · Bioinformatique', bio: "Coordination opérationnelle, qualité, conformité. Bioinformatique appliquée au diagnostic de laboratoire." },
          { name: 'Patriarche Manathan', role: 'DevOps & Sécurité · Ministère EPSP RDC', bio: "Infrastructure, déploiement, sécurité des systèmes. Référent terrain pour les sites publics en RDC." },
        ]
      },
      insights: {
        eyebrow: 'Insights',
        title: "Notes d'ingénierie et de politique publique de santé.",
        intro: "Articles longs, retours de projet, prises de position. Pas de billets d'humeur.",
      },
      careers: {
        eyebrow: 'Carrières',
        title: 'Travailler chez VERTEX Congo.',
        intro: "Nous recrutons des ingénieurs logiciels et des spécialistes santé qui veulent construire dans la durée. Salaires alignés sur les meilleurs standards locaux, télétravail partiel, formation continue financée.",
        positions: [
          { t: 'Ingénieur·e logiciel backend (Python/PostgreSQL)', loc: 'Kinshasa — CDI', tags: ['SENAITE', 'FHIR', 'API'] },
          { t: 'Ingénieur·e DevOps & Sécurité', loc: 'Kinshasa — CDI', tags: ['Linux', 'Keycloak', 'CI/CD'] },
          { t: 'Chef·fe de projet santé numérique', loc: 'Kinshasa — CDI', tags: ['SI Santé', 'DHIS2', 'Programme'] },
          { t: 'Stage — Ingénierie données santé', loc: 'Kinshasa — 6 mois', tags: ['Python', 'SQL', 'Santé publique'] },
        ],
        spontaneous: "Aucune offre ne correspond ? Écrivez-nous à carrieres@vertex-congo.cd avec une lettre motivée.",
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Discutons de votre projet.',
        intro: "Décrivez votre contexte, vos contraintes, vos échéances. Nous revenons vers vous sous 48 heures avec une première lecture technique.",
        form: {
          name: 'Nom complet',
          email: 'Email professionnel',
          org: 'Organisation',
          subject: 'Sujet',
          message: 'Votre message',
          submit: 'Envoyer',
          success: 'Message envoyé. Nous revenons vers vous sous 48 heures.',
          error: "Une erreur est survenue. Merci de réessayer.",
        },
        info: {
          email: 'contact@vertex-congo.cd',
          addr: 'Kinshasa — République Démocratique du Congo',
          hours: 'Lun. — Ven. · 8h–17h (UTC+1)',
        }
      }
    }
  },
  en: {
    brand: { name: 'VERTEX Congo', tagline: 'Vertex Développement' },
    nav: {
      about: 'About',
      expertise: 'Expertise',
      solutions: 'Solutions',
      projects: 'Projects',
      team: 'Team',
      insights: 'Insights',
      contact: 'Contact',
      cta: 'Get in touch',
    },
    home: {
      hero: {
        eyebrow: 'Congolese software engineering company',
        h1: "Building the digital infrastructure of healthcare in Africa.",
        subtitle: 'VERTEX Congo designs and deploys health information systems for hospitals, laboratories and public health programmes across the DRC and Central Africa.',
        cta1: 'Explore our solutions',
        cta2: 'Get in touch',
        partners: 'Alongside',
      },
      stats: [
        { value: '30+', label: 'countries using SENAITE' },
        { value: '4', label: 'deployment sites in DRC' },
        { value: '20 yrs', label: "founder's experience" },
        { value: '100%', label: 'open source' },
      ],
      commitments: {
        eyebrow: 'Our commitments',
        title: 'Three non-negotiable principles.',
        items: [
          { title: 'Engineering quality, local roots', desc: 'International software engineering standards applied by teams based in Kinshasa. Code review, testing, French documentation.' },
          { title: 'Deliberate open source', desc: 'SENAITE, PostgreSQL, FHIR, Keycloak. Source code and intellectual property are transferred to the client on delivery.' },
          { title: 'Capability transfer', desc: 'Training of end-users, administrators and internal trainers. Full French documentation. No vendor lock-in.' },
        ]
      },
      domains: {
        eyebrow: 'Domains',
        title: 'Three domains, one engineering standard.',
        items: [
          { kicker: '01 — Digital health', title: 'Hospital and laboratory information systems.', desc: 'LIMS for reference and routine laboratories, patient records, blood bank, pharmacy, billing. Offline-first architecture for intermittent connectivity. Native interoperability with DHIS2, HL7 FHIR, LOINC.', bullets: ['SENAITE LIMS', 'Patient records & blood bank', 'DHIS2 / FHIR interoperability'], link: 'See Vertex Health Suite' },
          { kicker: '02 — Software engineering', title: 'Custom business applications.', desc: 'Design and development of backend and web applications for public institutions and international organisations. PostgreSQL, Python/Django, Node.js, React. Documented architecture, code delivered.', bullets: ['Critical APIs & backends', 'Web platforms & dashboards', 'Audits and recovery of legacy systems'], link: 'See our approach' },
          { kicker: '03 — Digital transformation', title: 'Strategy, governance, implementation.', desc: 'Digital roadmaps, data governance, architectural choices, change management. Support to health institutions and public agencies from decision to production.', bullets: ['Health IS roadmaps', 'Data governance & quality', 'Change management'], link: 'See our projects' },
        ]
      },
      solution: {
        eyebrow: 'Flagship solution',
        title: 'VERTEX Health Suite — A health information system built for African constraints.',
        desc: 'An integrated suite covering laboratories, blood banks, pharmacy, patient records, billing and health reporting. Offline-first architecture, deferred sync, native DHIS2 interoperability. HL7 FHIR, LOINC, ICD-10 standards. Built on SENAITE, deployed in 30+ countries.',
        modules: ['LIMS', 'Blood bank', 'Pharmacy', 'Patient records', 'Billing', 'Reporting & DHIS2'],
        cta: 'Discover the Health Suite',
      },
      quote: {
        text: 'We do not deliver software. We transfer operational capability to institutions that must be able to use it, administer it and evolve it without us.',
        author: 'Dr. Barclay Kadiebwe',
        role: 'Founder · Senior Program Manager, PATH',
      },
      insights: {
        eyebrow: 'Insights',
        title: 'Engineering and public health policy notes.',
        link: 'Read all articles',
        items: [
          { tag: 'Digital health', date: 'May 2025', title: 'Why SENAITE has become the de facto LIMS standard in African public health.', excerpt: "Architecture, community, data governance: what sets an open source LIMS apart from a proprietary tool in a national programme." },
          { tag: 'Engineering', date: 'April 2025', title: 'Offline-first architecture: running a hospital IS across 4 sites with unstable connectivity.', excerpt: 'Deferred sync, merge conflicts, deterministic resolution. Lessons from a DRC deployment.' },
          { tag: 'Public policy', date: 'March 2025', title: 'Transfer of intellectual property: the condition of sovereign health IT.', excerpt: "Code, documentation, admin accounts. Why transfer is not declared, it is contracted." },
        ]
      },
      finalCta: { title: 'Let us discuss your project.', desc: 'Describe your context. We get back to you within 48 hours with an initial technical reading.', cta: 'Get in touch' }
    },
    footer: {
      tagline: 'International engineering quality, Congolese roots.',
      addr: '4, avenue de la Justice, Gombe — Kinshasa, DRC',
      sections: {
        company: { title: 'Company', links: [['About','/a-propos'],['Team','/equipe'],['Careers','/carrieres'],['Insights','/insights']] },
        solutions: { title: 'Solutions', links: [['Vertex Health Suite','/solutions/vertex-health-suite'],['Digital health','/expertise#sante'],['Software engineering','/expertise#ingenierie'],['Transformation','/expertise#transformation']] },
        contact: { title: 'Contact', links: [['contact@vertex-congo.cd','mailto:contact@vertex-congo.cd'],['Get in touch','/contact'],['Projects','/projets']] },
      },
      legal: { rccm: 'RCCM CD/KIN/RCCM/24-B-00000', nin: 'NIN 01-93-N00000A', rights: 'All rights reserved.' },
    },
    pages: {
      about: {
        eyebrow: 'About',
        title: 'A Congolese software engineering company, built on 20 years of international health experience.',
        intro: 'VERTEX Congo SARL (Vertex Développement brand) is a software engineering and health informatics company based in Kinshasa, DRC. We design, deploy and maintain health information systems for hospitals, laboratories and public health programmes across the DRC and Central Africa.',
        sections: [
          { h: 'Origin', p: 'The company was founded by Dr. Barclay Kadiebwe, Senior Program Manager at PATH, after 20 years in international health organisations — WHO, US CDC, GAVI, Global Fund, USAID. That trajectory shaped the conviction at the heart of VERTEX: African health information systems must be designed, governed and maintained by African teams.' },
          { h: 'Positioning', p: 'International engineering quality, Congolese roots. We apply to African contexts the engineering standards of the best teams — code review, testing, continuous integration, documentation — without compromising on the specifics of local constraints: intermittent connectivity, multiple sites, heterogeneous skills.' },
          { h: 'Method', p: 'We work in short cycles with users and the client IT teams. Every project delivers source code, French documentation, a formal capability transfer and intellectual property. The client is never captive.' },
        ]
      },
      expertise: { eyebrow: 'Expertise', title: 'Three domains, one engineering standard.', intro: 'We operate on the design, deployment and maintenance of critical systems for health and public action. Three domains structure our offering.' },
      solution: {
        eyebrow: 'Vertex Health Suite',
        title: 'A health information system for hospitals, labs and programmes.',
        intro: 'The Health Suite is our technical backbone for health informatics in African contexts. Modular, offline-first, interoperable by design.',
        features: [
          { t: 'LIMS — Laboratory', d: 'Built on SENAITE. Full specimen lifecycle: registration, scheduling, analyses, validation, results. LOINC standards, barcodes, instrument integration.' },
          { t: 'Blood bank', d: 'Donor-to-patient traceability. Qualification, screening, storage, distribution. Compliant with regulatory requirements.' },
          { t: 'Pharmacy', d: 'Stock, dispensing, shortage alerts, lot and expiry traceability. Articulated with the patient record.' },
          { t: 'Patient records', d: 'Longitudinal record, admissions, consultations, prescriptions, reports. FHIR data model.' },
          { t: 'Billing', d: 'Pricing, insurance handling, payments, financial statements, accounting exports.' },
          { t: 'Reporting & DHIS2', d: 'Programme indicators, operational dashboards, native DHIS2 export, WHO reports.' },
        ],
        standards: ['HL7 FHIR', 'LOINC', 'ICD-10', 'DHIS2', 'PostgreSQL', 'Keycloak'],
      },
      projects: {
        eyebrow: 'Projects',
        title: 'Deployments and missions.',
        intro: 'A selection of recent work conducted with public health institutions and international partners.',
        items: [
          { sector: 'Public health', client: 'National programme — DRC', title: 'SENAITE LIMS deployment across 4 reference laboratories', desc: 'Offline-first architecture with deferred sync to a central node. Historical data migration, training of 60 agents, administration transfer.', year: '2024' },
          { sector: 'Hospital', client: 'General referral hospital', title: 'Integrated hospital information system', desc: 'Patient records, pharmacy, blood bank and billing. DHIS2 interoperability for vertical programmes.', year: '2024' },
          { sector: 'International NGO', client: 'Central Africa regional programme', title: 'Epidemiological surveillance platform', desc: 'Multi-site data collection, validation, WHO indicators. Android field app with deferred sync.', year: '2023' },
          { sector: 'Ministry', client: 'EPSP — DRC', title: 'Infrastructure overhaul and security policy', desc: 'Audit, network segmentation, centralised identity via Keycloak, backup and disaster recovery.', year: '2023' },
        ]
      },
      team: {
        eyebrow: 'Team',
        title: 'A team of engineers and health practitioners.',
        intro: 'The team combines international public health experience, academic software engineering and field operations in DRC.',
        members: [
          { name: 'Dr. Barclay Kadiebwe', role: 'Founder · Senior Program Manager, PATH', bio: '20 years in international health (WHO, US CDC, GAVI, Global Fund, USAID). Strategy, governance, institutional partnerships.' },
          { name: 'Etienne Ntumba Kabongo', role: 'Solution Architect & Digital Health Lead', bio: 'Trained at McGill. Health information system architecture, HL7 FHIR interoperability, SENAITE LIMS.' },
          { name: 'Raphaël Avocegamou', role: 'Lead Development & Machine Learning', bio: 'Formerly Centiro Montreal. Backend engineering, data pipelines, predictive models applied to public health.' },
          { name: 'Soraya Kapongo', role: 'Chief Operating Officer · Bioinformatics', bio: 'Operational coordination, quality, compliance. Bioinformatics applied to laboratory diagnostics.' },
          { name: 'Patriarche Manathan', role: 'DevOps & Security · EPSP Ministry DRC', bio: 'Infrastructure, deployment, system security. Field referent for public sites in DRC.' },
        ]
      },
      insights: { eyebrow: 'Insights', title: 'Engineering and public health policy notes.', intro: 'Long-form articles, project reports, position pieces. No hot takes.' },
      careers: {
        eyebrow: 'Careers',
        title: 'Work at VERTEX Congo.',
        intro: 'We hire software engineers and health specialists who want to build for the long run. Salaries aligned with top local standards, partial remote, funded continuing education.',
        positions: [
          { t: 'Backend software engineer (Python/PostgreSQL)', loc: 'Kinshasa — full-time', tags: ['SENAITE', 'FHIR', 'API'] },
          { t: 'DevOps & Security engineer', loc: 'Kinshasa — full-time', tags: ['Linux', 'Keycloak', 'CI/CD'] },
          { t: 'Digital health project lead', loc: 'Kinshasa — full-time', tags: ['Health IS', 'DHIS2', 'Programme'] },
          { t: 'Internship — Health data engineering', loc: 'Kinshasa — 6 months', tags: ['Python', 'SQL', 'Public health'] },
        ],
        spontaneous: 'No matching role? Write to careers@vertex-congo.cd with a cover letter.',
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Let us discuss your project.',
        intro: 'Describe your context, constraints, deadlines. We get back to you within 48 hours with an initial technical reading.',
        form: { name: 'Full name', email: 'Work email', org: 'Organisation', subject: 'Subject', message: 'Your message', submit: 'Send', success: 'Message sent. We get back to you within 48 hours.', error: 'An error occurred. Please retry.' },
        info: { email: 'contact@vertex-congo.cd', addr: 'Kinshasa — Democratic Republic of Congo', hours: 'Mon — Fri · 8am–5pm (UTC+1)' }
      }
    }
  }
}
