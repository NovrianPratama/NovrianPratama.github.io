// ============================================================
// SITE CONFIGURATION — Novrian Pratama Portfolio
// Last updated: 1 November 2026
// Fixed: 6 November 2026 — audit fixes, see audit notes in chat.
// Rule: NEVER fabricate numbers, links, dates, or company names.
//       Leave field empty with // TODO: comment if not confirmed.
// Dates, email, CV link, photo and social links are kept exactly as
// supplied in the previous version — verify them against the CV
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

  // Accent color — PRD §8.2: single teal accent
  accentColor: "#0F766E",

  social: {
    email: "novrianprtama2@gmail.com",
    linkedin: "https://www.linkedin.com/in/novrianpratama",
    github: "https://github.com/NovrianPratama",
    medium: "https://medium.com/@novrianprtama2",
    kaggle: "https://www.kaggle.com/novrian02",
    // twitter: omitted — not in scope (PRD §4)
  },

  cv: "https://drive.google.com/file/d/1dycjwS_a-ARQlgVVWnA3XiNbK2r9PpdM/view?usp=sharing",

  // ── ABOUT ─────────────────────────────────────────────────
  // PRD §6.3: two position sentences + one proof sentence. No skill list.
  aboutMe:
    "I am a recent Information Systems graduate with hands-on experience in data analytics and business intelligence, focused on the FMCG industry. I have worked across four organisations, building dashboards, processing large datasets, and translating data into decisions that teams can act on. At PT Amerta Indah Otsuka, I work on national General Trade visibility monitoring, processing 3,600+ audit records weekly and consolidating 62,000+ visibility records into a Looker Studio dashboard.",

  // ── SKILLS ────────────────────────────────────────────────
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

  // ── EXPERIENCE ────────────────────────────────────────────
  // PRD §6.4: four entries, FMCG anchor first.
  // Bullets: only verified numbers — no fabrication.
  experience: [
    {
      company: "PT Amerta Indah Otsuka",
      title: "Sales Digital Business Application Intern",
      dateRange: "Aug 2026 to Present",
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
      dateRange: "Feb 2026 to Jun 2026",
      bullets: [
        "Monitored operational performance and SLA compliance across 77 outlets, sustaining a 98% SLA rate.",
        "Processed 200,000+ logistics records using Excel Power Query for exception handling and outlet performance analysis.",
      ],
    },
    {
      company: "PT Nutrifood Indonesia",
      title: "Area Marketing Intern",
      dateRange: "Aug 2025 to Dec 2025",
      bullets: [
        "Achieved 60% product trial conversion.",
        "Built 15+ partnerships from 50+ senior high schools evaluated.",
      ],
    },
    {
      company: "DOT Indonesia",
      title: "Associate Project Manager Intern",
      dateRange: "Nov 2024 to Feb 2025",
      bullets: [
        "Delivered 100% on-time milestones with a 7-person team across 8 sprints.",
      ],
    },
  ],

  // ── PROJECTS ──────────────────────────────────────────────
  // PRD §7: three case studies. Slug-based links to /projects/[slug].
  // link: null = no external link; slug = internal case study page.
  projects: [
    {
      slug: "otsuka-visibility-monitoring",
      name: "National GT Visibility Monitoring: PT Amerta Indah Otsuka",
      description:
        "Consolidated visibility audit data into a Looker Studio dashboard to monitor display compliance in national General Trade. Processed 62,000+ cumulative visibility records and 3,600+ weekly audit entries.",
      tools: ["Python", "MySQL", "Looker Studio", "Google Sheets", "Excel"],
      status: "live", // "live" | "in-progress"
      image: "/project-placeholder.svg",
      // liveLink: null, // TODO: Looker Studio link — not open-sourced yet
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
      name: "New Project",
      description: "Details coming soon. This project will be added here.",
      tools: ["Coming soon"],
      status: "coming-soon",
      image: "/project-placeholder.svg",
    },
  ],

  // ── EDUCATION ─────────────────────────────────────────────
  // PRD §6.7: GPA 3.89 only here, not in Hero or About.
  education: [
    {
      school: "Universitas Islam Negeri Sultan Syarif Kasim Riau",
      degree: "Bachelor of Computer Science in Information Systems",
      dateRange: "2021 to January 2026",
      achievements: [
        "GPA: 3.89 / 4.00",
        // TODO: add thesis title if Novrian wants to display it
      ],
    },
  ],
};
