// ============================================================
// SITE CONFIGURATION: Novrian Pratama Portfolio
// Last updated: 1 November 2026
// Fixed: 6 November 2026: audit fixes, see audit notes in chat.
// Rule: NEVER fabricate numbers, links, dates, or company names.
//       Leave field empty with // TODO: comment if not confirmed.
// Dates, email, CV link, photo and social links are kept exactly as
// supplied in the previous version: verify them against the CV
// before pushing to the public repo.
// ============================================================

export const siteConfig = {
  name: "Novrian Pratama",
  title: "Data & Business Intelligence Analyst",
  tagline: "FMCG-focused",
  subtitle:
    "I turn messy sales and distribution data into dashboards and decisions. Currently at PT Amerta Indah Otsuka.",
  description:
    "Portfolio of Novrian Pratama: FMCG visibility monitoring at PT Amerta Indah Otsuka, sales analytics, and logistics network quality.",
  location: "South Jakarta, Indonesia",
  photo: "/profile.jpg",

  // Accent color: PRD §8.2: single teal accent
  accentColor: "#0F766E",

  social: {
    email: "novrianprtama2@gmail.com",
    linkedin: "https://www.linkedin.com/in/novrianpratama",
    github: "https://github.com/NovrianPratama",
    medium: "https://medium.com/@novrianprtama2",
    kaggle: "https://www.kaggle.com/novrian02",
    // twitter: omitted: not in scope (PRD §4)
  },

  cv: "https://drive.google.com/file/d/1dycjwS_a-ARQlgVVWnA3XiNbK2r9PpdM/view?usp=sharing",

  // ABOUT
  // PRD §6.3: two position sentences + one proof sentence. No skill list.
  aboutMe:
    "I am a recent Information Systems graduate with hands-on experience in data analytics and business intelligence, focused on the FMCG industry. I have worked across four organisations, building dashboards, processing large datasets, and translating data into decisions that teams can act on. At PT Amerta Indah Otsuka, I work on national General Trade visibility monitoring, processing 3,600+ audit records weekly and consolidating 62,000+ visibility records into a Looker Studio dashboard.",

  // SKILLS
  // PRD §6.6: grouped, no percentages, no progress bars.
  // Copy rule §6.1: write as "I have experience using X."
  skillGroups: [
    {
      label: "Data Analysis & Visualisation",
      tools: ["Python", "Power BI", "Looker Studio", "Tableau", "Google Sheets"],
    },
    {
      label: "Database & Engineering Tools",
      tools: ["MySQL", "DBeaver", "Google Colab", "Excel Power Query"],
    },
    {
      label: "Productivity & Collaboration",
      tools: ["Git", "Notion"],
    },
  ],

  // EXPERIENCE
  // PRD §6.4: four entries, FMCG anchor first.
  // Bullets: only verified numbers: no fabrication.
  experience: [
    {
      company: "PT Amerta Indah Otsuka",
      title: "Sales Digital Business Application Intern",
      dateRange: "Aug 2026 - Present",
      bullets: [
        "Process 3,600+ visibility audit records per week for National General Trade Visibility Monitoring.",
        "Consolidated 62,000+ visibility records from multiple Excel and Google Sheets sources into a Looker Studio dashboard.",
        "Monitored display compliance across Region, Branch, Site, and Salesman dimensions, covering categories: AVAILABLE, NO DISPLAY, NO PHOTO, and photo-quality flags.",
        "Processed ~3,000 new field submissions per week from sales teams across multiple regions.",
      ],
    },
    {
      company: "J&T Cargo Indonesia",
      title: "Network Quality Specialist",
      dateRange: "Feb 2026 - Jun 2026",
      bullets: [
        "Monitored operational performance and SLA compliance across 77 outlets, sustaining a 98% SLA rate.",
        "Processed 200,000+ logistics records using Excel Power Query for exception handling and outlet performance analysis.",
      ],
    },
    {
      company: "PT Nutrifood Indonesia",
      title: "Area Marketing Intern",
      dateRange: "Aug 2025 - Dec 2025",
      bullets: [
        "Achieved 60% product trial conversion.",
        "Built 15+ partnerships from 50+ senior high schools evaluated.",
      ],
    },
    {
      company: "DOT Indonesia",
      title: "Associate Project Manager Intern",
      dateRange: "Nov 2024 - Feb 2025",
      bullets: [
        "Delivered 100% on-time milestones with a 7-person team across 8 sprints.",
      ],
    },
  ],

  // PROJECTS
  // PRD §7: three real case studies + three coming-soon duplicate placeholders (6 total).
  projects: [
    {
      slug: "otsuka-visibility-monitoring",
      name: "National GT Visibility Monitoring: PT Amerta Indah Otsuka",
      description:
        "Consolidated visibility audit data into a Looker Studio dashboard to monitor display compliance in national General Trade. Processed 62,000+ cumulative visibility records and 3,600+ weekly audit entries.",
      tools: ["Looker Studio", "Google Sheets", "Excel"],
      status: "live",
      image: "/project-placeholder.svg",
      // liveLink: null, // TODO: Looker Studio link: not open-sourced yet
    },
    {
      slug: "fmcg-sales-dataset",
      name: "FMCG Sales Performance Analysis",
      description:
        "Exploratory and diagnostic analysis of a FMCG sales dataset, modelling sales performance drivers using Power BI with DAX measures. Project is ongoing.",
      tools: ["Power BI", "DAX", "Excel"],
      status: "in-progress",
      image: "/project-placeholder.svg",
      // repoLink: null, // TODO: repo not yet published
    },
    {
      slug: "jnt-network-quality",
      name: "Operational Performance & SLA Monitoring: J&T Cargo",
      description:
        "Designed an Excel-based operational dashboard to monitor SLA compliance, shipment exceptions, and outlet performance for 77 outlets. Processed 200,000+ logistics records using Excel Power Query.",
      tools: ["Excel", "Power Query"],
      status: "live",
      image: "/project-placeholder.svg",
    },
    {
      slug: "",
      name: "National GT Visibility Monitoring: PT Amerta Indah Otsuka",
      description:
        "Consolidated visibility audit data into a Looker Studio dashboard to monitor display compliance in national General Trade. Processed 62,000+ cumulative visibility records and 3,600+ weekly audit entries.",
      tools: ["Looker Studio", "Google Sheets", "Excel"],
      status: "coming-soon",
      image: "/project-placeholder.svg",
    },
    {
      slug: "",
      name: "FMCG Sales Performance Analysis",
      description:
        "Exploratory and diagnostic analysis of a FMCG sales dataset, modelling sales performance drivers using Power BI with DAX measures. Project is ongoing.",
      tools: ["Power BI", "DAX", "Excel"],
      status: "coming-soon",
      image: "/project-placeholder.svg",
    },
    {
      slug: "",
      name: "Operational Performance & SLA Monitoring: J&T Cargo",
      description:
        "Designed an Excel-based operational dashboard to monitor SLA compliance, shipment exceptions, and outlet performance for 77 outlets. Processed 200,000+ logistics records using Excel Power Query.",
      tools: ["Excel", "Power Query"],
      status: "coming-soon",
      image: "/project-placeholder.svg",
    },
  ],

  // EDUCATION
  // PRD §6.7: GPA 3.89 only here, not in Hero or About.
  education: [
    {
      school: "Universitas Islam Negeri Sultan Syarif Kasim Riau",
      degree: "Bachelor of Computer Science in Information Systems",
      location: "",
      dateRange: "2021 - January 2026",
      achievements: [
        "GPA: 3.89 / 4.00 • Cumlaude (7-Semester Program Completed)",
      ],
      thesis: {
        label: "Thesis (Skripsi)",
        title:
          "Penerapan Deep Learning untuk Klasifikasi Tumor Otak dengan Pendekatan Explainable Artificial Intelligence (XAI)",
        url: "http://repository.uin-suska.ac.id/92583/",
      },
    },
    {
      school: "Machine Learning Engineer Learning Path",
      degree: "Coding Camp powered by DBS Foundation",
      location: "Remote (Online)",
      dateRange: "Feb 2025 - Aug 2025",
      achievements: [
        'Completed a 7-month industry-focused Machine Learning program covering EDA, feature engineering, and model deployment, earning "High Performing" and "Most Active Student" awards.',
        'Developed "Foodinary", an end-to-end Deep Learning capstone project achieving a 94% classification accuracy.',
      ],
      thesis: {
        label: "Capstone Project",
        title:
          "Foodinary: Web Platform for Indonesian Traditional Cuisine with ML-Based Food Recognition",
        url: "https://github.com/foodinary-project/.github",
      },
    },
  ],

  // CERTIFICATIONS
  certifications: [
    {
      name: "Coding Camp: Machine Learning Engineer",
      issuer: "DBS Foundation and Dicoding",
      year: "2025",
      category: "Technology",
      credentialUrl: "", // TODO: add credential URL
    },
    {
      name: "Fundamentals of Structured Query Language (SQL)",
      issuer: "Dicoding Indonesia",
      year: "2025",
      category: "Technology",
      credentialUrl: "", // TODO: add credential URL
    },
    {
      name: "Applied Machine Learning",
      issuer: "Dicoding Indonesia",
      year: "2025",
      category: "Technology",
      credentialUrl: "", // TODO: add credential URL
    },
    {
      name: "Data Analysis with Python",
      issuer: "Dicoding Indonesia",
      year: "2025",
      category: "Technology",
      credentialUrl: "", // TODO: add credential URL
    },
    {
      name: "EnglishScore CEFR B1 (Score: 349)",
      issuer: "British Council",
      year: "2024",
      category: "Language",
      credentialUrl: "", // TODO: add credential URL
    },
    {
      name: "Microsoft Excel Basic to Advance Excel Formulas",
      issuer: "Udemy",
      year: "2026",
      category: "Technology",
      credentialUrl: "", // TODO: add credential URL
    },
    {
      name: "Power BI 101: Microsoft Power BI Essentials & Certification",
      issuer: "Udemy (ExpertEase Education)",
      year: "2025",
      category: "Technology",
      credentialUrl: "", // TODO: add credential URL
    },
    {
      name: "Fundamentals of Data Processing",
      issuer: "Dicoding Indonesia",
      year: "2025",
      category: "Technology",
      credentialUrl: "", // TODO: add credential URL
    },
    {
      name: "Machine Learning Development",
      issuer: "Dicoding Indonesia",
      year: "2025",
      category: "Technology",
      credentialUrl: "", // TODO: add credential URL
    },
    {
      name: "Practical Office Advanced (Computer Operation)",
      issuer: "BNSP, LSP DITEKINDO",
      year: "2024",
      category: "Other",
      credentialUrl: "", // TODO: add credential URL
    },
    {
      name: "TOEFL ITP (Score: 453)",
      issuer: "ETS, UIN Suska Riau",
      year: "2025",
      category: "Language",
      credentialUrl: "", // TODO: add credential URL
    },
  ],

  // ORGANIZATIONS
  organizations: [
    {
      initials: "PR",
      name: "Puzzle Research Data Technology (PREDATECH)",
      location: "Pekanbaru, Riau",
      role: "Chief Student Coordinator",
      period: "Mar 2025 - Dec 2025",
      photos: [] as string[], // TODO: add activity photos
      bullets: [
        "Led a 100+ member technology community, managing 6 division heads to drive talent and organizational growth.",
        "Managed 3 development cohorts for 80+ participants across ML, Web, and Mobile tracks, achieving a 90% satisfaction rate.",
        "Led the Predatech Goes To Industry program with PT Nutrifood, providing industry exposure for 35 student delegates.",
      ],
    },
    {
      initials: "GB",
      name: "Generasi Baru Indonesia (GenBI) Riau",
      location: "Pekanbaru, Riau",
      role: "Member of Education & Culture Division",
      period: "Apr 2024 - Dec 2024",
      photos: [] as string[], // TODO: add activity photos
      bullets: [
        "Led the GeMAI AI seminar, coordinating 2 speakers and delivering technology education to 80+ participants.",
        "Developed financial literacy programs for 30+ special needs students through the GenBI Goes to SLB Program.",
        "Led the Rumah Singgah Tuan Kadi educational visit, coordinating 4 stakeholders and a 15-member committee to promote cultural heritage.",
      ],
    },
    {
      initials: "GD",
      name: "Google Developer Student Clubs (GDSC)",
      location: "Pekanbaru, Riau",
      role: "Core Team Program & Partnerships Division",
      period: "Oct 2023 - May 2024",
      photos: [] as string[], // TODO: add activity photos
      bullets: [
        "Led the onboarding of 50+ new members, achieving 100% successful integration into the developer community.",
        "Organized 6 Machine Learning Study Jam sessions for 30+ participants, supporting an 80% completion rate.",
        "Built partnerships with 4 external organizations, increasing event participation and community engagement by 25%. ",
      ],
    },
  ],

  // AWARDS
  awards: [
    {
      year: "2025",
      items: [
        {
          text: 'Speaker at "Digital Journey: Crafting Your Path for Better Future" Seminar, HIMASI UIN Sultan Syarif Kasim Riau',
          link: "", // TODO: add source link
        },
        {
          text: "Awarded 1st Best Presentation for Project SGDs at Universiti Malaysia Terengganu",
          link: "", // TODO: add source link
        },
        {
          text: 'Published "Classification of E-Commerce Shipping Timeliness Using Supervised Learning Algorithm", PREDATECS Journal (Vol. 3 No. 1)',
          link: "", // TODO: add source link
        },
        {
          text: "Selected for DBS Foundation Coding Camp: Machine Learning Engineer Learning Path",
          link: "", // TODO: add source link
        },
        {
          text: "Selected as International Community Service (ISCE) Delegate,",
          link: "", // TODO: add source link
        },
        {
          text: "Recognized as Best Active Student among 20+ participants in Krirk University's international English program.",
          link: "", // TODO: add source link
        },
      ],
    },
    {
      year: "2024",
      items: [
        {
          text: "Bank Indonesia Scholarship Awardee",
          link: "", // TODO: add source link
        },
        {
          text: "Abstract Accepted, Project Management Competition (PMC) 2024: Project Management Institute Indonesia (PMII).",
          link: "", // TODO: add source link
        },
      ],
    },
    {
      year: "2023",
      items: [
        {
          text: "Published a research paper in a SINTA-indexed national journal.",
          link: "", // TODO: add source link
        },
      ],
    },
  ],
};

// ============================================================
// SINGLE SOURCE OF TRUTH FOR EN / ID TRANSLATIONS
// Default English values come directly from siteConfig + UI labels.
// Indonesian translations preserve all facts, numbers, dates,
// company names, proper nouns, URLs, and email addresses identically.
// ============================================================

export type Lang = "en" | "id";

function buildEnFlat(): Record<string, string> {
  const map: Record<string, string> = {
    "page.title": `${siteConfig.name}: ${siteConfig.title}`,
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.certifications": "Certifications",
    "nav.organizations": "Organizations",
    "nav.awards": "Awards",
    "nav.contact": "Contact",
    "nav.heading": "Navigation",
    "nav.language": "Language",
    "nav.toggleTheme": "Toggle dark mode",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",

    "hero.location": siteConfig.location,
    "hero.greeting": "Hello!",
    "hero.imPrefix": "I'm ",
    "hero.title": siteConfig.title,
    "hero.tagline": siteConfig.tagline,
    "hero.subtitle": siteConfig.subtitle,
    "hero.downloadCv": "Download CV",
    "hero.viewProjects": "View Projects",

    "about.heading": "About Me",
    "about.body": siteConfig.aboutMe,

    "experience.heading": "Experience",

    "projects.heading": "Projects",
    "projects.subheading":
      "Selected data analytics and business intelligence case studies.",
    "projects.statusInProgress": "In progress",
    "projects.statusComingSoon": "Coming soon",
    "projects.viewDetails": "View Details",
    "projects.repository": "Repository",
    "projects.moreOnGithub": "View More Projects on GitHub",

    "skills.heading": "Skills",
    "skills.intro":
      "Tools and technologies I have experience using across data analytics and business intelligence projects.",

    "education.heading": "Education",

    "certifications.heading": "Certifications",
    "certifications.filterAria": "Filter certifications by category",
    "certifications.cat.All": "All",
    "certifications.cat.Technology": "Technology",
    "certifications.cat.Language": "Language",
    "certifications.cat.Other": "Other",
    "certifications.viewCredential": "View credential",
    "certifications.comingSoon": "Credential link coming soon",
    "certifications.swipeHint": "Swipe to browse",
    "certifications.prevAria": "Previous certification",
    "certifications.nextAria": "Next certification",

    "organizations.heading": "Organizations",
    "organizations.viewDetails": "View details",
    "organizations.keyContributions": "Key Contributions",
    "organizations.activityDocs": "Activity Documentation",
    "organizations.closeModal": "Close modal",

    "awards.heading": "Awards",
    "awards.filterAria": "Filter awards by year",
    "awards.viewSource": "View source",

    "contact.eyebrow": "Contact",
    "contact.heading": "Contact",
    "contact.intro":
      "Open to Data Analyst, BI Analyst, and Business Analyst roles, especially in FMCG. Feel free to reach out or view my work.",
    "contact.findMeOn": "Find me on",
    "contact.nameLabel": "Name",
    "contact.namePlaceholder": "Your name",
    "contact.emailLabel": "Email",
    "contact.emailPlaceholder": "you@example.com",
    "contact.messageLabel": "Message",
    "contact.messagePlaceholder": "Write your message here...",
    "contact.send": "Send message",
    "contact.sending": "Sending...",
    "contact.validationError":
      "Please fill in all fields with a valid email address.",
    "contact.successMsg":
      "Thank you! Your message has been sent successfully.",
    "contact.orEmailPrefix": "Or email me directly at ",

    "footer.rights": "All rights reserved.",
  };

  siteConfig.skillGroups.forEach((g, idx) => {
    map[`skills.group.${idx}`] = g.label;
  });

  siteConfig.experience.forEach((exp, idx) => {
    map[`experience.${idx}.title`] = exp.title;
    exp.bullets.forEach((b, bIdx) => {
      map[`experience.${idx}.bullet.${bIdx}`] = b;
    });
  });

  siteConfig.projects.forEach((proj, idx) => {
    map[`projects.${idx}.name`] = proj.name;
    map[`projects.${idx}.description`] = proj.description;
  });

  siteConfig.education.forEach((edu, idx) => {
    map[`education.${idx}.degree`] = edu.degree;
    map[`education.${idx}.school`] = edu.school;
    if (edu.location) {
      map[`education.${idx}.location`] = edu.location;
    }
    edu.achievements.forEach((a, aIdx) => {
      map[`education.${idx}.achievement.${aIdx}`] = a;
    });
    if (edu.thesis) {
      map[`education.${idx}.thesis.label`] = edu.thesis.label;
      map[`education.${idx}.thesis.title`] = edu.thesis.title;
    }
  });

  siteConfig.certifications.forEach((cert, idx) => {
    map[`certifications.${idx}.name`] = cert.name;
    map[`certifications.${idx}.issuer`] = cert.issuer;
  });

  siteConfig.organizations.forEach((org, idx) => {
    map[`organizations.${idx}.role`] = org.role;
    org.bullets.forEach((b, bIdx) => {
      map[`organizations.${idx}.bullet.${bIdx}`] = b;
    });
  });

  siteConfig.awards.forEach((group, gIdx) => {
    group.items.forEach((item, iIdx) => {
      map[`awards.${gIdx}.${iIdx}.text`] = item.text;
    });
  });

  return map;
}

const idFlat: Record<string, string> = {
  "page.title": `${siteConfig.name}: Analis Data & Business Intelligence`,
  "nav.about": "Tentang",
  "nav.experience": "Pengalaman",
  "nav.projects": "Proyek",
  "nav.skills": "Keahlian",
  "nav.education": "Pendidikan",
  "nav.certifications": "Sertifikasi",
  "nav.organizations": "Organisasi",
  "nav.awards": "Penghargaan",
  "nav.contact": "Kontak",
  "nav.heading": "Navigasi",
  "nav.language": "Bahasa",
  "nav.toggleTheme": "Ganti mode tampilan",
  "nav.openMenu": "Buka menu",
  "nav.closeMenu": "Tutup menu",

  "hero.location": "Jakarta Selatan, Indonesia",
  "hero.greeting": "Halo!",
  "hero.imPrefix": "Saya ",
  "hero.title": "Analis Data & Business Intelligence",
  "hero.tagline": "Fokus FMCG",
  "hero.subtitle":
    "Saya mengolah data penjualan dan distribusi yang belum terstruktur menjadi dashboard dan keputusan bisnis. Saat ini berkarya di PT Amerta Indah Otsuka.",
  "hero.downloadCv": "Unduh CV",
  "hero.viewProjects": "Lihat Proyek",

  "about.heading": "Tentang Saya",
  "about.body":
    "Saya adalah lulusan baru Sistem Informasi dengan pengalaman langsung di bidang analitik data dan business intelligence yang berfokus pada industri FMCG. Saya telah berkontribusi di empat organisasi dengan membangun dashboard, mengolah dataset berskala besar, dan menerjemahkan data menjadi keputusan yang dapat ditindaklanjuti oleh tim. Di PT Amerta Indah Otsuka, saya menangani pemantauan visibilitas General Trade nasional dengan memproses 3,600+ data audit setiap minggu serta mengonsolidasikan 62,000+ data visibilitas ke dalam dashboard Looker Studio.",

  "experience.heading": "Pengalaman",
  "experience.0.title": "Magang Sales Digital Business Application",
  "experience.0.bullet.0":
    "Memproses 3,600+ data audit visibilitas per minggu untuk Pemantauan Visibilitas General Trade Nasional.",
  "experience.0.bullet.1":
    "Mengonsolidasikan 62,000+ data visibilitas dari berbagai sumber Excel dan Google Sheets ke dalam dashboard Looker Studio.",
  "experience.0.bullet.2":
    "Memantau kepatuhan display lintas dimensi Region, Branch, Site, dan Salesman, mencakup kategori AVAILABLE, NO DISPLAY, NO PHOTO, serta penanda kualitas foto.",
  "experience.0.bullet.3":
    "Memproses ~3,000 kiriman data lapangan baru per minggu dari tim penjualan di berbagai wilayah.",
  "experience.1.title": "Spesialis Kualitas Jaringan (Network Quality Specialist)",
  "experience.1.bullet.0":
    "Memantau kinerja operasional dan kepatuhan SLA di 77 outlet dengan mempertahankan tingkat SLA sebesar 98%.",
  "experience.1.bullet.1":
    "Memproses 200,000+ data logistik menggunakan Excel Power Query untuk penanganan pengecualian dan analisis kinerja outlet.",
  "experience.2.title": "Magang Area Marketing",
  "experience.2.bullet.0": "Mencapai tingkat konversi uji coba produk sebesar 60%.",
  "experience.2.bullet.1":
    "Membangun 15+ kemitraan dari 50+ sekolah menengah atas yang dievaluasi.",
  "experience.3.title": "Magang Associate Project Manager",
  "experience.3.bullet.0":
    "Menyelesaikan 100% milestone tepat waktu bersama tim beranggotakan 7 orang selama 8 sprint.",

  "projects.heading": "Proyek",
  "projects.subheading":
    "Studi kasus pilihan analitik data dan business intelligence.",
  "projects.statusInProgress": "Sedang berjalan",
  "projects.statusComingSoon": "Segera hadir",
  "projects.viewDetails": "Lihat Detail",
  "projects.repository": "Repositori",
  "projects.moreOnGithub": "Lihat Proyek Lainnya di GitHub",
  "projects.0.name": "Pemantauan Visibilitas GT Nasional: PT Amerta Indah Otsuka",
  "projects.0.description":
    "Mengonsolidasikan data audit visibilitas ke dalam dashboard Looker Studio untuk memantau kepatuhan display di jaringan General Trade nasional. Memproses 62,000+ data visibilitas kumulatif dan 3,600+ entri audit mingguan.",
  "projects.1.name": "Analisis Kinerja Penjualan FMCG",
  "projects.1.description":
    "Analisis eksploratif dan diagnostik pada dataset penjualan FMCG dengan memodelkan faktor pendorong kinerja penjualan menggunakan Power BI dan ukuran DAX. Proyek sedang berlangsung.",
  "projects.2.name": "Pemantauan Kinerja Operasional & SLA: J&T Cargo",
  "projects.2.description":
    "Merancang dashboard operasional berbasis Excel untuk memantau kepatuhan SLA, pengecualian pengiriman, dan kinerja pada 77 outlet. Memproses 200,000+ data logistik menggunakan Excel Power Query.",
  "projects.3.name": "Pemantauan Visibilitas GT Nasional: PT Amerta Indah Otsuka",
  "projects.3.description":
    "Mengonsolidasikan data audit visibilitas ke dalam dashboard Looker Studio untuk memantau kepatuhan display di jaringan General Trade nasional. Memproses 62,000+ data visibilitas kumulatif dan 3,600+ entri audit mingguan.",
  "projects.4.name": "Analisis Kinerja Penjualan FMCG",
  "projects.4.description":
    "Analisis eksploratif dan diagnostik pada dataset penjualan FMCG dengan memodelkan faktor pendorong kinerja penjualan menggunakan Power BI dan ukuran DAX. Proyek sedang berlangsung.",
  "projects.5.name": "Pemantauan Kinerja Operasional & SLA: J&T Cargo",
  "projects.5.description":
    "Merancang dashboard operasional berbasis Excel untuk memantau kepatuhan SLA, pengecualian pengiriman, dan kinerja pada 77 outlet. Memproses 200,000+ data logistik menggunakan Excel Power Query.",

  "skills.heading": "Keahlian",
  "skills.intro":
    "Alat dan teknologi yang berpengalaman saya gunakan dalam proyek analitik data dan business intelligence.",
  "skills.group.0": "Analisis & Visualisasi Data",
  "skills.group.1": "Basis Data & Alat Rekayasa Data",
  "skills.group.2": "Produktivitas & Kolaborasi",

  "education.heading": "Pendidikan",
  "education.0.degree": "Sarjana Komputer (S.Kom.) Sistem Informasi",
  "education.0.school": "Universitas Islam Negeri Sultan Syarif Kasim Riau",
  "education.0.achievement.0":
    "IPK: 3.89 / 4.00 • Cumlaude (Lulus Program 7 Semester)",
  "education.0.thesis.label": "Skripsi (Tugas Akhir)",
  "education.0.thesis.title":
    "Penerapan Deep Learning untuk Klasifikasi Tumor Otak dengan Pendekatan Explainable Artificial Intelligence (XAI)",
  "education.1.degree": "Coding Camp powered by DBS Foundation",
  "education.1.school": "Jalur Pembelajaran Machine Learning Engineer",
  "education.1.location": "Jarak Jauh (Online)",
  "education.1.achievement.0":
    'Menyelesaikan program Machine Learning berfokus industri selama 7 bulan yang mencakup EDA, feature engineering, dan penerapan model, serta meraih penghargaan "High Performing" dan "Most Active Student".',
  "education.1.achievement.1":
    'Mengembangkan "Foodinary", proyek capstone Deep Learning end-to-end dengan akurasi klasifikasi sebesar 94%.',
  "education.1.thesis.label": "Proyek Capstone",
  "education.1.thesis.title":
    "Foodinary: Platform Web Kuliner Tradisional Indonesia dengan Pengenalan Makanan Berbasis ML",

  "certifications.heading": "Sertifikasi",
  "certifications.filterAria": "Filter sertifikasi berdasarkan kategori",
  "certifications.cat.All": "Semua",
  "certifications.cat.Technology": "Teknologi",
  "certifications.cat.Language": "Bahasa",
  "certifications.cat.Other": "Lainnya",
  "certifications.viewCredential": "Lihat kredensial",
  "certifications.comingSoon": "Tautan kredensial segera hadir",
  "certifications.swipeHint": "Geser untuk melihat",
  "certifications.prevAria": "Sertifikasi sebelumnya",
  "certifications.nextAria": "Sertifikasi berikutnya",
  "certifications.0.name": "Coding Camp: Machine Learning Engineer",
  "certifications.0.issuer": "DBS Foundation dan Dicoding",
  "certifications.1.name": "Dasar Structured Query Language (SQL)",
  "certifications.1.issuer": "Dicoding Indonesia",
  "certifications.2.name": "Machine Learning Terapan",
  "certifications.2.issuer": "Dicoding Indonesia",
  "certifications.3.name": "Analisis Data dengan Python",
  "certifications.3.issuer": "Dicoding Indonesia",
  "certifications.4.name": "EnglishScore CEFR B1 (Skor: 349)",
  "certifications.4.issuer": "British Council",
  "certifications.5.name": "Microsoft Excel: Rumus Excel Dasar hingga Lanjutan",
  "certifications.5.issuer": "Udemy",
  "certifications.6.name": "Power BI 101: Dasar & Sertifikasi Microsoft Power BI",
  "certifications.6.issuer": "Udemy (ExpertEase Education)",
  "certifications.7.name": "Dasar Pemrosesan Data",
  "certifications.7.issuer": "Dicoding Indonesia",
  "certifications.8.name": "Pengembangan Machine Learning",
  "certifications.8.issuer": "Dicoding Indonesia",
  "certifications.9.name": "Practical Office Advanced (Pengoperasian Komputer)",
  "certifications.9.issuer": "BNSP, LSP DITEKINDO",
  "certifications.10.name": "TOEFL ITP (Skor: 453)",
  "certifications.10.issuer": "ETS, UIN Suska Riau",

  "organizations.heading": "Organisasi",
  "organizations.viewDetails": "Lihat detail",
  "organizations.keyContributions": "Kontribusi Utama",
  "organizations.activityDocs": "Dokumentasi Kegiatan",
  "organizations.closeModal": "Tutup jendela",
  "organizations.0.role": "Koordinator Utama Mahasiswa",
  "organizations.0.bullet.0":
    "Memimpin komunitas teknologi beranggotakan 100+ mahasiswa serta mengelola 6 kepala divisi untuk mendorong pengembangan talenta dan pertumbuhan organisasi.",
  "organizations.0.bullet.1":
    "Mengelola 3 kelompok pengembangan bagi 80+ peserta pada jalur ML, Web, dan Mobile dengan tingkat kepuasan sebesar 90%.",
  "organizations.0.bullet.2":
    "Memimpin program Predatech Goes To Industry bersama PT Nutrifood yang memberikan wawasan industri bagi 35 delegasi mahasiswa.",
  "organizations.1.role": "Anggota Divisi Pendidikan & Kebudayaan",
  "organizations.1.bullet.0":
    "Memimpin seminar AI GeMAI dengan mengoordinasikan 2 pembicara dan menyampaikan edukasi teknologi kepada 80+ peserta.",
  "organizations.1.bullet.1":
    "Mengembangkan program literasi keuangan bagi 30+ siswa berkebutuhan khusus melalui Program GenBI Goes to SLB.",
  "organizations.1.bullet.2":
    "Memimpin kunjungan edukasi Rumah Singgah Tuan Kadi dengan mengoordinasikan 4 pemangku kepentingan dan 15 anggota panitia untuk mempromosikan warisan budaya.",
  "organizations.2.role": "Tim Inti Divisi Program & Kemitraan",
  "organizations.2.bullet.0":
    "Memimpin orientasi bagi 50+ anggota baru hingga mencapai integrasi komunitas pengembang sebesar 100%.",
  "organizations.2.bullet.1":
    "Menyelenggarakan 6 sesi Machine Learning Study Jam bagi 30+ peserta yang mendukung tingkat penyelesaian sebesar 80%.",
  "organizations.2.bullet.2":
    "Membangun kemitraan dengan 4 organisasi eksternal sehingga meningkatkan partisipasi acara dan keterlibatan komunitas sebesar 25%.",

  "awards.heading": "Penghargaan",
  "awards.filterAria": "Filter penghargaan berdasarkan tahun",
  "awards.viewSource": "Lihat sumber",
  "awards.0.0.text":
    'Pembicara pada Seminar "Digital Journey: Crafting Your Path for Better Future", HIMASI UIN Sultan Syarif Kasim Riau',
  "awards.0.1.text":
    "Peraih Juara 1 Presentasi Terbaik Proyek SGDs di Universiti Malaysia Terengganu",
  "awards.0.2.text":
    'Publikasi ilmiah "Classification of E-Commerce Shipping Timeliness Using Supervised Learning Algorithm", Jurnal PREDATECS (Vol. 3 No. 1)',
  "awards.0.3.text":
    "Terpilih sebagai Peserta DBS Foundation Coding Camp: Machine Learning Engineer Learning Path",
  "awards.0.4.text":
    "Terpilih sebagai Delegasi Pengabdian Masyarakat Internasional (ISCE)",
  "awards.0.5.text":
    "Dinobatkan sebagai Mahasiswa Aktif Terbaik di antara 20+ peserta dalam program bahasa Inggris internasional Krirk University.",
  "awards.1.0.text": "Penerima Beasiswa Bank Indonesia",
  "awards.1.1.text":
    "Abstrak Diterima pada Project Management Competition (PMC) 2024: Project Management Institute Indonesia (PMII).",
  "awards.2.0.text":
    "Mempublikasikan artikel penelitian pada jurnal nasional terindeks SINTA.",

  "contact.eyebrow": "Kontak",
  "contact.heading": "Kontak",
  "contact.intro":
    "Terbuka untuk peluang peran Data Analyst, BI Analyst, dan Business Analyst, khususnya di industri FMCG. Silakan hubungi saya atau lihat karya saya.",
  "contact.findMeOn": "Temukan saya di",
  "contact.nameLabel": "Nama",
  "contact.namePlaceholder": "Nama Anda",
  "contact.emailLabel": "Email",
  "contact.emailPlaceholder": "nama@contoh.com",
  "contact.messageLabel": "Pesan",
  "contact.messagePlaceholder": "Tulis pesan Anda di sini...",
  "contact.send": "Kirim pesan",
  "contact.sending": "Mengirim...",
  "contact.validationError":
    "Harap isi seluruh kolom dengan alamat email yang valid.",
  "contact.successMsg": "Terima kasih! Pesan Anda telah berhasil dikirim.",
  "contact.orEmailPrefix": "Atau kirim email langsung ke ",

  "footer.rights": "Hak cipta dilindungi.",
};

export const i18nDictionary: Record<Lang, Record<string, string>> = {
  en: buildEnFlat(),
  id: idFlat,
};
