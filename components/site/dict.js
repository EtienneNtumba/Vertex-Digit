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
        company: { title: 'Société', links: [['À propos','/a-propos'],['Équipe','/equipe'],['Carrières','/carrieres'],['Insights','/insights'],['Presse','/presse']] },
        solutions: { title: 'Solutions', links: [['Vertex Health Suite','/solutions/vertex-health-suite'],['Santé numérique','/expertise#sante'],['Ingénierie logicielle','/expertise#ingenierie'],['Transformation','/expertise#transformation']] },
        contact: { title: 'Contact', links: [['contact@vertex-congo.cd','mailto:contact@vertex-congo.cd'],['Nous écrire','/contact'],['Projets','/projets']] },
      },
      bottomLinks: [['Mentions légales', '/mentions-legales']],
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
          {
            slug: 'senaite-lims-4-labs',
            sector: 'Santé publique',
            client: 'Programme national — RDC',
            title: "Déploiement SENAITE LIMS sur 4 laboratoires de référence",
            desc: "Architecture hors-ligne avec synchronisation différée vers un nœud central. Migration des données historiques, formation de 60 agents, transfert d'administration.",
            year: '2024',
            duration: '11 mois',
            stack: ['SENAITE', 'PostgreSQL', 'DHIS2', 'LOINC', 'Keycloak'],
            kpis: [
              { v: '4', l: 'laboratoires connectés' },
              { v: '60', l: 'agents formés' },
              { v: '18 mois', l: 'de données historiques migrées' },
              { v: '99,2%', l: 'de disponibilité observée' },
            ],
            context: {
              h: "Quatre laboratoires, quatre systèmes, aucun langage commun.",
              p: "Le programme opérait avec des outils hétérogènes — feuilles Excel, un LIMS propriétaire vieillissant sur un site, aucun système sur les trois autres. Impossible de consolider les indicateurs, impossible de garantir la qualité de la donnée transmise aux bailleurs. Connectivité intermittente entre les sites, personnel technique dispersé."
            },
            approach: {
              h: "SENAITE, architecture hors-ligne, synchronisation différée.",
              p: "Un nœud SENAITE par site, un nœud central de consolidation, synchronisation asynchrone avec résolution déterministe des conflits. Migration accompagnée du LIMS existant, harmonisation du catalogue d'analyses aux codes LOINC, gestion centralisée des identités via Keycloak.",
              bullets: [
                'Cadrage fonctionnel et cartographie des flux avec les biologistes',
                "Migration accompagnée : 18 mois de données historiques réconciliées",
                "Formation de 60 agents (utilisateurs, admin, formateurs internes)",
                "Passation opérationnelle et transfert de l'administration système",
              ]
            },
            results: {
              h: "Les indicateurs consolidés, la souveraineté acquise.",
              p: "Depuis la mise en service, les résultats d'analyses sont produits, validés et transmis avec des indicateurs consolidés au niveau national. Le programme administre lui-même la solution : ajouts d'utilisateurs, ajustements de catalogue, sauvegardes. Le contrat de maintenance de VERTEX est ciblé sur les évolutions et les incidents complexes, pas sur l'exploitation courante."
            },
            quote: { text: "Nous avions un outil imposé, nous avons désormais un système que nous administrons.", author: "Chef de programme national" }
          },
          {
            slug: 'sih-integre-hopital',
            sector: 'Hospitalier',
            client: 'Hôpital général de référence',
            title: "Système d'information hospitalier intégré",
            desc: "Dossier patient, pharmacie, banque de sang et facturation. Interopérabilité DHIS2 pour les programmes verticaux.",
            year: '2024',
            duration: '14 mois',
            stack: ['SENAITE', 'PostgreSQL', 'HL7 FHIR', 'DHIS2', 'Django'],
            kpis: [
              { v: '4', l: 'modules intégrés' },
              { v: '120+', l: 'utilisateurs quotidiens' },
              { v: '35%', l: "de réduction du temps d'admission" },
              { v: '0', l: 'perte de traçabilité sur banque de sang' },
            ],
            context: {
              h: "Un hôpital, quatre applications indépendantes.",
              p: "Le dossier patient était papier, la pharmacie tenait un fichier Excel, la banque de sang un registre manuscrit, la facturation un logiciel dédié dont personne ne pouvait exporter les données. Multiplication des ressaisies, factures perdues, ruptures pharmacie non détectées."
            },
            approach: {
              h: "Un modèle patient FHIR, quatre modules articulés.",
              p: "Modélisation du dossier patient au format HL7 FHIR, articulation autour de ce modèle des modules pharmacie, banque de sang et facturation. Reprise progressive service par service, sans arrêt de l'activité. Formation par vagues, référents internes formés en priorité.",
              bullets: [
                "Modèle patient longitudinal FHIR",
                "Interopérabilité native DHIS2 pour les programmes verticaux",
                "Traçabilité banque de sang du donneur au patient",
                "Migration progressive service par service, sans coupure",
              ]
            },
            results: {
              h: "Un fil rouge de données, du guichet au reporting.",
              p: "L'admission d'un patient déclenche automatiquement l'ouverture du dossier, la génération des étiquettes de prélèvement et l'ouverture d'un dossier de facturation. Les indicateurs DHIS2 sont générés automatiquement à partir des données de production, sans ressaisie."
            },
            quote: { text: "Nous ne perdons plus de dossiers, nous ne perdons plus de facturation.", author: "Directeur médical" }
          },
          {
            slug: 'surveillance-epidemio',
            sector: 'ONG internationale',
            client: 'Programme régional Afrique centrale',
            title: "Plateforme de surveillance épidémiologique",
            desc: "Collecte multi-sites, validation, indicateurs OMS. Application terrain Android avec synchronisation différée.",
            year: '2023',
            duration: '8 mois',
            stack: ['Django', 'PostgreSQL', 'DHIS2', 'Android', 'FHIR'],
            kpis: [
              { v: '9', l: 'pays connectés' },
              { v: '4 200+', l: 'notifications par mois' },
              { v: '< 48 h', l: 'délai moyen de notification' },
              { v: '100%', l: "d'indicateurs OMS générés" },
            ],
            context: {
              h: "Neuf pays, neuf outils de notification.",
              p: "Le programme cherchait à harmoniser la remontée d'événements épidémiologiques entre neuf pays de la région, chacun ayant ses propres outils et ses propres définitions de cas. Les indicateurs OMS étaient reconstruits manuellement à chaque cycle de reporting."
            },
            approach: {
              h: "Un socle central, une app terrain hors-ligne.",
              p: "Application Android pour les agents de surveillance, avec formulaires configurables et synchronisation différée. Socle central Django/PostgreSQL exposant une API standard, tableaux de bord de suivi et export DHIS2 automatique vers les indicateurs OMS.",
              bullets: [
                "Formulaires configurables par pays et par type d'événement",
                "Synchronisation différée pour les zones sans connectivité",
                "Validation à deux niveaux (district / national) intégrée",
                "Export automatique aux formats OMS et DHIS2",
              ]
            },
            results: {
              h: "Une notification, une seule fois, partout.",
              p: "Les agents saisissent une seule fois, hors ligne si nécessaire. Les indicateurs OMS sont générés automatiquement, les tableaux de bord régionaux consolidés en quasi temps réel. Le délai moyen de notification a été divisé par cinq."
            }
          },
          {
            slug: 'refonte-infrastructure-epsp',
            sector: 'Ministère',
            client: 'EPSP — RDC',
            title: "Refonte d'infrastructure et politique de sécurité",
            desc: "Audit de l'existant, segmentation réseau, gestion centralisée des identités via Keycloak, sauvegarde et reprise d'activité.",
            year: '2023',
            duration: '6 mois',
            stack: ['Linux', 'Keycloak', 'Ansible', 'PostgreSQL', 'Nginx'],
            kpis: [
              { v: '1 500+', l: 'comptes migrés vers Keycloak' },
              { v: '4', l: 'segments réseau isolés' },
              { v: '< 30 min', l: 'RTO cible atteint' },
              { v: '100%', l: 'des sauvegardes chiffrées' },
            ],
            context: {
              h: "Une infrastructure historique, des comptes partagés, aucun plan de reprise.",
              p: "Le ministère opérait sur une infrastructure accumulée au fil des projets, avec des comptes locaux dupliqués, des règles de pare-feu non documentées et aucun plan de reprise d'activité formalisé. Un incident matériel majeur aurait été catastrophique."
            },
            approach: {
              h: "Un audit, une carte, un plan de reprise.",
              p: "Audit complet documenté, cartographie réseau, segmentation par usage. Déploiement de Keycloak comme fournisseur d'identité unique, migration des comptes, activation du double facteur pour les administrateurs. Automatisation des déploiements et des sauvegardes chiffrées avec Ansible.",
              bullets: [
                "Segmentation réseau (production / test / admin / DMZ)",
                "Fournisseur d'identité Keycloak et politique MFA",
                "Sauvegardes chiffrées quotidiennes, test de restauration mensuel",
                "Documentation d'exploitation transférée aux équipes IT",
              ]
            },
            results: {
              h: "Un ministère qui sait où sont ses données et comment les récupérer.",
              p: "L'objectif de reprise d'activité de 30 minutes est atteint et testé. Les équipes IT du ministère opèrent l'infrastructure de manière autonome, avec un runbook documenté. VERTEX intervient en tant que support de niveau 3 sur les incidents complexes."
            }
          },
        ]
      },
      projectCase: {
        back: 'Retour aux projets',
        client: 'Client',
        sector: 'Secteur',
        year: 'Année',
        duration: 'Durée',
        stack: 'Stack',
        context: 'Contexte',
        approach: 'Approche',
        results: 'Résultats',
        next: 'Projet suivant',
        readNext: 'Lire l\'étude de cas',
        discussEyebrow: 'Un projet similaire ?',
        discussTitle: 'Discutons de votre contexte.',
        discussDesc: "Première lecture technique sous 48 h. Sans engagement.",
        discussCta: 'Nous écrire',
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
        positionsLabel: 'Postes ouverts',
        applyCta: 'Postuler',
        positions: [
          { t: 'Ingénieur·e logiciel backend (Python/PostgreSQL)', loc: 'Kinshasa — CDI', tags: ['SENAITE', 'FHIR', 'API'] },
          { t: 'Ingénieur·e DevOps & Sécurité', loc: 'Kinshasa — CDI', tags: ['Linux', 'Keycloak', 'CI/CD'] },
          { t: 'Chef·fe de projet santé numérique', loc: 'Kinshasa — CDI', tags: ['SI Santé', 'DHIS2', 'Programme'] },
          { t: 'Stage — Ingénierie données santé', loc: 'Kinshasa — 6 mois', tags: ['Python', 'SQL', 'Santé publique'] },
        ],
        spontaneous: "Aucune offre ne correspond ? Écrivez-nous à carrieres@vertex-congo.cd avec une lettre motivée.",
        application: {
          eyebrow: 'Candidature',
          name: 'Nom complet',
          email: 'Email',
          phone: 'Téléphone',
          cv: 'CV (PDF, DOC, DOCX)',
          cvPlaceholder: 'Choisir un fichier…',
          cvHelp: 'Format PDF ou Word. Taille max 5 Mo.',
          cvRequired: 'Merci de joindre un CV.',
          tooLarge: 'Fichier trop volumineux (max 5 Mo).',
          message: 'Lettre de motivation',
          messagePlaceholder: 'Pourquoi ce poste, ce que vous apportez, vos disponibilités…',
          consent: 'Vos données sont utilisées uniquement pour le traitement de la candidature.',
          submit: 'Envoyer ma candidature',
          success: 'Votre candidature a bien été reçue. Nous vous répondons sous 10 jours ouvrés.',
          successTitle: 'Merci pour votre candidature.',
          error: "Une erreur est survenue. Merci de réessayer.",
          closeCta: 'Fermer',
        },
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
      },
      press: {
        eyebrow: 'Presse',
        title: 'Espace presse & kit média.',
        intro: "Ressources destinées aux journalistes et partenaires média souhaitant écrire sur VERTEX Congo, la santé numérique en RDC ou nos déploiements SENAITE.",
        factSheet: {
          eyebrow: 'Faits marquants',
          title: "L'entreprise en cinq chiffres.",
          items: [
            { v: '2024', k: 'Fondation', d: "Fondée à Kinshasa, RDC, par Dr. Barclay Kadiebwe." },
            { v: '30+', k: 'Pays SENAITE', d: "Socle open source utilisé dans 30+ pays." },
            { v: '4', k: 'Sites RDC', d: "Laboratoires équipés en production." },
            { v: '100%', k: 'Logiciel libre', d: "Code source transféré au client." },
          ]
        },
        kit: {
          eyebrow: 'Kit média',
          title: "Logos, palette, typographie \u2014 à télécharger.",
          intro: "Merci de respecter les règles d'usage : espace de protection minimal équivalent à la hauteur du D, aucune modification des proportions ni des couleurs.",
          downloadAll: 'Télécharger le logo',
          logoTitle: 'Logo primaire',
          logoDesc: "Version bleu Vertex sur fond blanc. Usage principal, tous supports.",
          wordmarkTitle: 'Wordmark monochrome',
          wordmarkDesc: "Version texte seule pour fonds sombres et usages compacts.",
          factSheetTitle: 'Fiche société',
          factSheetDesc: "Dossier PDF avec chiffres clés, biographies dirigeants et faits.",
          onRequest: 'Sur demande',
          paletteEyebrow: 'Palette',
          paletteTitle: 'Couleurs institutionnelles.',
          typoEyebrow: 'Typographie',
          typoTitle: 'DM Serif Display · DM Sans.',
        },
        contact: {
          eyebrow: 'Contact presse',
          title: "Une interview, un communiqué, un fait à vérifier ?",
          desc: "Nous répondons aux sollicitations média sous 24 heures ouvrées. Merci de préciser le média, la deadline et l'angle prévu.",
          email: 'presse@vertex-congo.cd',
          formCta: 'Utiliser le formulaire',
        }
      },
      legal: {
        eyebrow: 'Mentions légales',
        title: 'Mentions légales & politique de données.',
        intro: "Informations légales relatives à VERTEX Congo SARL et politique de traitement des données personnelles collectées sur ce site.",
        updated: 'Dernière mise à jour : juin 2025.',
        sections: [
          {
            h: 'Éditeur du site',
            rows: [
              ['Raison sociale', 'VERTEX Congo SARL (marque commerciale : Vertex Développement)'],
              ['Forme juridique', 'Société à responsabilité limitée de droit congolais'],
              ['Siège social', '4, avenue de la Justice, Gombe — Kinshasa, République Démocratique du Congo'],
              ['RCCM', 'CD/KIN/RCCM/24-B-00000'],
              ['Numéro d\'identification nationale (NIN)', '01-93-N00000A'],
              ['Représentant légal', 'Dr. Barclay Kadiebwe, Fondateur'],
              ['Email', 'contact@vertex-congo.cd'],
            ],
          },
          {
            h: 'Hébergement',
            rows: [
              ['Hébergeur', 'Infrastructure cloud européenne conforme RGPD'],
              ['Localisation des données', 'Union européenne'],
              ['Contact hébergeur', 'À préciser à la mise en production'],
            ],
          },
          {
            h: 'Propriété intellectuelle',
            p: "L'ensemble des contenus de ce site (textes, illustrations, marques, logos, code source des composants d'interface) est la propriété de VERTEX Congo SARL ou fait l'objet d'une autorisation d'usage. Toute reproduction, représentation, modification ou exploitation totale ou partielle sans autorisation écrite préalable est interdite. Les technologies libres utilisées dans nos solutions logicielles (SENAITE, PostgreSQL, Keycloak, notamment) demeurent régies par leurs licences respectives.",
          },
          {
            h: 'Données personnelles',
            p: "Les données collectées via les formulaires (contact, candidature) sont utilisées exclusivement pour traiter votre demande et vous recontacter. Elles ne sont ni vendues ni cédées à des tiers. Base légale : consentement de la personne concernée et intérêt légitime de VERTEX Congo à répondre aux sollicitations professionnelles. Durée de conservation : 24 mois pour les demandes de contact, 12 mois pour les candidatures non retenues. Vous pouvez demander à tout moment l'accès, la rectification ou la suppression de vos données en écrivant à contact@vertex-congo.cd.",
          },
          {
            h: 'Cookies & mesure d\'audience',
            p: "Ce site n'utilise pas de cookies publicitaires ni de traceurs tiers. Une solution de mesure d'audience respectueuse de la vie privée (sans cookies persistants ni identification personnelle) pourra être activée pour comprendre l'usage général du site. Aucun profil individuel n'est constitué.",
          },
          {
            h: 'Droit applicable',
            p: "Le présent site et son contenu sont régis par le droit congolais. Tout litige relatif à leur utilisation relève de la compétence exclusive des juridictions de Kinshasa.",
          },
        ],
      },
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
        company: { title: 'Company', links: [['About','/a-propos'],['Team','/equipe'],['Careers','/carrieres'],['Insights','/insights'],['Press','/presse']] },
        solutions: { title: 'Solutions', links: [['Vertex Health Suite','/solutions/vertex-health-suite'],['Digital health','/expertise#sante'],['Software engineering','/expertise#ingenierie'],['Transformation','/expertise#transformation']] },
        contact: { title: 'Contact', links: [['contact@vertex-congo.cd','mailto:contact@vertex-congo.cd'],['Get in touch','/contact'],['Projects','/projets']] },
      },
      bottomLinks: [['Legal', '/mentions-legales']],
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
          {
            slug: 'senaite-lims-4-labs',
            sector: 'Public health',
            client: 'National programme — DRC',
            title: 'SENAITE LIMS deployment across 4 reference laboratories',
            desc: 'Offline-first architecture with deferred sync to a central node. Historical data migration, training of 60 agents, administration transfer.',
            year: '2024',
            duration: '11 months',
            stack: ['SENAITE', 'PostgreSQL', 'DHIS2', 'LOINC', 'Keycloak'],
            kpis: [
              { v: '4', l: 'connected laboratories' },
              { v: '60', l: 'agents trained' },
              { v: '18 months', l: 'of historical data migrated' },
              { v: '99.2%', l: 'observed uptime' },
            ],
            context: { h: 'Four labs, four systems, no shared language.', p: "The programme operated with heterogeneous tools: spreadsheets, an ageing proprietary LIMS on one site, no system on the other three. Consolidating indicators was impossible, guaranteeing data quality to donors was impossible." },
            approach: { h: 'SENAITE, offline-first, deferred sync.', p: 'One SENAITE node per site, a central consolidation node, deferred sync with deterministic conflict resolution. Assisted migration of the existing LIMS, harmonisation of the analysis catalogue to LOINC codes, centralised identity via Keycloak.', bullets: ['Functional scoping and flow mapping with biologists', '18 months of historical data reconciled', '60 agents trained (users, admins, internal trainers)', 'Operational handover and administration transfer'] },
            results: { h: 'Consolidated indicators, sovereignty acquired.', p: 'Since go-live, results are produced, validated and transmitted with consolidated indicators at national level. The programme administers the solution itself. VERTEX maintenance is now focused on evolutions and complex incidents, not day-to-day operations.' },
            quote: { text: 'We had an imposed tool; we now have a system we administer.', author: 'National programme lead' }
          },
          {
            slug: 'sih-integre-hopital',
            sector: 'Hospital',
            client: 'General referral hospital',
            title: 'Integrated hospital information system',
            desc: 'Patient records, pharmacy, blood bank and billing. DHIS2 interoperability for vertical programmes.',
            year: '2024',
            duration: '14 months',
            stack: ['SENAITE', 'PostgreSQL', 'HL7 FHIR', 'DHIS2', 'Django'],
            kpis: [
              { v: '4', l: 'integrated modules' },
              { v: '120+', l: 'daily users' },
              { v: '35%', l: 'reduction in admission time' },
              { v: '0', l: 'traceability loss on blood bank' },
            ],
            context: { h: 'One hospital, four independent applications.', p: 'Paper patient records, pharmacy on Excel, blood bank on a handwritten register, billing on a dedicated tool no one could export from. Duplicate data entry, lost invoices, undetected pharmacy stock-outs.' },
            approach: { h: 'A FHIR patient model, four articulated modules.', p: 'Patient record modelled in HL7 FHIR, pharmacy, blood bank and billing modules articulated around it. Progressive service-by-service rollout, no interruption. Wave-based training, internal champions first.', bullets: ['Longitudinal FHIR patient model', 'Native DHIS2 interoperability for vertical programmes', 'Donor-to-patient blood bank traceability', 'Progressive rollout, service by service, no downtime'] },
            results: { h: 'A data thread, from front desk to reporting.', p: 'Patient admission automatically opens the record, triggers sample labels and opens a billing file. DHIS2 indicators are generated automatically from production data, no re-entry.' },
            quote: { text: 'We no longer lose records, we no longer lose billing.', author: 'Medical director' }
          },
          {
            slug: 'surveillance-epidemio',
            sector: 'International NGO',
            client: 'Central Africa regional programme',
            title: 'Epidemiological surveillance platform',
            desc: 'Multi-site data collection, validation, WHO indicators. Android field app with deferred sync.',
            year: '2023',
            duration: '8 months',
            stack: ['Django', 'PostgreSQL', 'DHIS2', 'Android', 'FHIR'],
            kpis: [
              { v: '9', l: 'connected countries' },
              { v: '4,200+', l: 'notifications per month' },
              { v: '< 48 h', l: 'average notification delay' },
              { v: '100%', l: 'WHO indicators generated' },
            ],
            context: { h: 'Nine countries, nine notification tools.', p: 'The programme sought to harmonise epidemiological event reporting across nine countries, each with its own tools and case definitions. WHO indicators were rebuilt manually at every reporting cycle.' },
            approach: { h: 'A central backbone, an offline field app.', p: 'Android app for surveillance officers, configurable forms and deferred sync. Django/PostgreSQL backbone exposing a standard API, monitoring dashboards and automatic DHIS2 export to WHO indicators.', bullets: ['Country- and event-type-configurable forms', 'Deferred sync for connectivity-poor areas', 'Built-in two-level validation (district / national)', 'Automatic WHO and DHIS2 exports'] },
            results: { h: 'One notification, once, everywhere.', p: 'Officers enter data once, offline if needed. WHO indicators are generated automatically, regional dashboards near real-time. Average notification delay divided by five.' }
          },
          {
            slug: 'refonte-infrastructure-epsp',
            sector: 'Ministry',
            client: 'EPSP — DRC',
            title: 'Infrastructure overhaul and security policy',
            desc: 'Audit, network segmentation, centralised identity via Keycloak, backup and disaster recovery.',
            year: '2023',
            duration: '6 months',
            stack: ['Linux', 'Keycloak', 'Ansible', 'PostgreSQL', 'Nginx'],
            kpis: [
              { v: '1,500+', l: 'accounts migrated to Keycloak' },
              { v: '4', l: 'isolated network segments' },
              { v: '< 30 min', l: 'target RTO achieved' },
              { v: '100%', l: 'encrypted backups' },
            ],
            context: { h: 'Legacy infrastructure, shared accounts, no recovery plan.', p: 'The ministry operated on infrastructure accumulated over projects, with duplicate local accounts, undocumented firewall rules and no formalised disaster recovery plan. A major hardware incident would have been catastrophic.' },
            approach: { h: 'An audit, a map, a recovery plan.', p: 'Documented audit, network mapping, segmentation by usage. Keycloak as single identity provider, account migration, MFA for administrators. Automated deployments and encrypted backups via Ansible.', bullets: ['Network segmentation (prod / test / admin / DMZ)', 'Keycloak IdP and MFA policy', 'Daily encrypted backups, monthly restore tests', 'Operations documentation transferred to IT teams'] },
            results: { h: 'A ministry that knows where its data is and how to recover it.', p: 'The 30-minute RTO is achieved and tested. Ministry IT teams operate the infrastructure autonomously with a documented runbook. VERTEX intervenes as level-3 support on complex incidents.' }
          },
        ]
      },
      projectCase: {
        back: 'Back to projects',
        client: 'Client',
        sector: 'Sector',
        year: 'Year',
        duration: 'Duration',
        stack: 'Stack',
        context: 'Context',
        approach: 'Approach',
        results: 'Results',
        next: 'Next project',
        readNext: 'Read the case study',
        discussEyebrow: 'A similar project?',
        discussTitle: 'Let us discuss your context.',
        discussDesc: 'Initial technical reading within 48 hours. No commitment.',
        discussCta: 'Get in touch',
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
        positionsLabel: 'Open positions',
        applyCta: 'Apply',
        positions: [
          { t: 'Backend software engineer (Python/PostgreSQL)', loc: 'Kinshasa — full-time', tags: ['SENAITE', 'FHIR', 'API'] },
          { t: 'DevOps & Security engineer', loc: 'Kinshasa — full-time', tags: ['Linux', 'Keycloak', 'CI/CD'] },
          { t: 'Digital health project lead', loc: 'Kinshasa — full-time', tags: ['Health IS', 'DHIS2', 'Programme'] },
          { t: 'Internship — Health data engineering', loc: 'Kinshasa — 6 months', tags: ['Python', 'SQL', 'Public health'] },
        ],
        spontaneous: 'No matching role? Write to careers@vertex-congo.cd with a cover letter.',
        application: {
          eyebrow: 'Application',
          name: 'Full name',
          email: 'Email',
          phone: 'Phone',
          cv: 'CV (PDF, DOC, DOCX)',
          cvPlaceholder: 'Choose a file…',
          cvHelp: 'PDF or Word format. Max 5 MB.',
          cvRequired: 'Please attach a CV.',
          tooLarge: 'File too large (max 5 MB).',
          message: 'Cover letter',
          messagePlaceholder: 'Why this role, what you bring, availability…',
          consent: 'Your data is used solely to process the application.',
          submit: 'Submit application',
          success: 'Your application has been received. We reply within 10 business days.',
          successTitle: 'Thank you for applying.',
          error: 'An error occurred. Please retry.',
          closeCta: 'Close',
        },
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Let us discuss your project.',
        intro: 'Describe your context, constraints, deadlines. We get back to you within 48 hours with an initial technical reading.',
        form: { name: 'Full name', email: 'Work email', org: 'Organisation', subject: 'Subject', message: 'Your message', submit: 'Send', success: 'Message sent. We get back to you within 48 hours.', error: 'An error occurred. Please retry.' },
        info: { email: 'contact@vertex-congo.cd', addr: 'Kinshasa — Democratic Republic of Congo', hours: 'Mon — Fri · 8am–5pm (UTC+1)' }
      },
      press: {
        eyebrow: 'Press',
        title: 'Press room & media kit.',
        intro: 'Resources for journalists and media partners covering VERTEX Congo, digital health in the DRC or our SENAITE deployments.',
        factSheet: {
          eyebrow: 'Key facts',
          title: 'The company in five figures.',
          items: [
            { v: '2024', k: 'Founded', d: 'Founded in Kinshasa, DRC, by Dr. Barclay Kadiebwe.' },
            { v: '30+', k: 'SENAITE countries', d: 'Open source backbone used in 30+ countries.' },
            { v: '4', k: 'DRC sites', d: 'Laboratories running in production.' },
            { v: '100%', k: 'Open source', d: 'Source code transferred to the client.' },
          ]
        },
        kit: {
          eyebrow: 'Media kit',
          title: 'Logos, palette, typography — for download.',
          intro: 'Please respect usage rules: minimum clear space equal to the D height, no changes to proportions or colours.',
          downloadAll: 'Download the logo',
          logoTitle: 'Primary logo',
          logoDesc: 'Vertex Blue version on white background. Main use, all media.',
          wordmarkTitle: 'Monochrome wordmark',
          wordmarkDesc: 'Text-only version for dark backgrounds and compact uses.',
          factSheetTitle: 'Company fact sheet',
          factSheetDesc: 'PDF with key figures, executive bios and facts.',
          onRequest: 'On request',
          paletteEyebrow: 'Palette',
          paletteTitle: 'Institutional colours.',
          typoEyebrow: 'Typography',
          typoTitle: 'DM Serif Display · DM Sans.',
        },
        contact: {
          eyebrow: 'Press contact',
          title: 'An interview, a release, a fact to verify?',
          desc: 'We respond to media enquiries within 24 business hours. Please state the outlet, deadline and angle.',
          email: 'press@vertex-congo.cd',
          formCta: 'Use the form',
        }
      },
      legal: {
        eyebrow: 'Legal',
        title: 'Legal notice & data policy.',
        intro: 'Legal information about VERTEX Congo SARL and processing policy for personal data collected on this website.',
        updated: 'Last updated: June 2025.',
        sections: [
          {
            h: 'Publisher',
            rows: [
              ['Legal name', 'VERTEX Congo SARL (trade name: Vertex Développement)'],
              ['Legal form', 'Limited liability company under Congolese law'],
              ['Registered office', '4, avenue de la Justice, Gombe — Kinshasa, Democratic Republic of Congo'],
              ['RCCM', 'CD/KIN/RCCM/24-B-00000'],
              ['National identification number (NIN)', '01-93-N00000A'],
              ['Legal representative', 'Dr. Barclay Kadiebwe, Founder'],
              ['Email', 'contact@vertex-congo.cd'],
            ],
          },
          {
            h: 'Hosting',
            rows: [
              ['Host', 'European cloud infrastructure, GDPR compliant'],
              ['Data location', 'European Union'],
              ['Host contact', 'To be specified upon production launch'],
            ],
          },
          {
            h: 'Intellectual property',
            p: "All content on this site (text, illustrations, trademarks, logos, interface component source code) is the property of VERTEX Congo SARL or used under licence. Any reproduction, representation, modification or exploitation, in whole or in part, without prior written authorisation is prohibited. Open source technologies used in our software solutions (SENAITE, PostgreSQL, Keycloak, among others) remain governed by their respective licences.",
          },
          {
            h: 'Personal data',
            p: "Data collected via the forms (contact, application) is used exclusively to handle your request and get back to you. It is not sold or transferred to third parties. Legal basis: consent of the person concerned and legitimate interest of VERTEX Congo to respond to professional enquiries. Retention: 24 months for contact enquiries, 12 months for unsuccessful applications. You may request access, correction or deletion of your data at any time by writing to contact@vertex-congo.cd.",
          },
          {
            h: 'Cookies & analytics',
            p: "This site uses no advertising cookies or third-party trackers. A privacy-friendly analytics solution (no persistent cookies or personal identification) may be enabled to understand general site usage. No individual profile is built.",
          },
          {
            h: 'Applicable law',
            p: "This site and its content are governed by Congolese law. Any dispute relating to their use falls under the exclusive jurisdiction of the courts of Kinshasa.",
          },
        ],
      },
    }
  }
}
