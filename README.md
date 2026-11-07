# Novrian Pratama: Data Analyst Portfolio

Personal portfolio website for Novrian Pratama, a Data & Business Intelligence Analyst focused on FMCG.

**Live site:** https://novrianpratama.my.id/

## About

Information Systems graduate (2026) from UIN Sultan Syarif Kasim Riau. Currently Sales Digital Business Application Intern at PT Amerta Indah Otsuka, working on national General Trade visibility monitoring by Region, Branch, Site, and Salesman.

Previously Network Quality Specialist at J&T Cargo Indonesia, Area Marketing Intern at PT Nutrifood Indonesia, and Associate Project Manager Intern at DOT Indonesia.

## Projects

| Project | What it covers |
| --- | --- |
| National GT Visibility Monitoring: PT Amerta Indah Otsuka | Looker Studio dashboard for display compliance in national General Trade. 3,600+ audit records per week, 62,000+ records consolidated. |
| FMCG Sales Performance Analysis | Exploratory and diagnostic analysis of an FMCG sales dataset in Power BI with DAX measures. In progress. |
| Operational Performance & SLA Monitoring: J&T Cargo | Excel-based dashboard for SLA compliance, shipment exceptions, and outlet performance across 77 outlets at 98% SLA. 200,000+ logistics records processed with Excel Power Query. |

## Tech stack

- [Astro](https://astro.build/) 5
- [Tailwind CSS](https://tailwindcss.com/) 4
- TypeScript

Most site content (identity, about, skills, experience, projects, education) lives in a single file, `src/config.ts`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:4321/

Build for production:

```bash
npm run build
```

## Project structure

```
src/
  config.ts          # Site content: identity, about, skills, experience, projects, education
  components/        # Header, Hero, About, Experience, Projects, Skills, Education, Contact, Footer
  pages/             # index.astro (home page)
  styles/            # global.css
public/
  profile.jpg        # Profile photo
  favicon.svg        # Site favicon
.github/workflows/   # deploy.yml (GitHub Pages deployment)
```

## Deployment

Deployed to GitHub Pages with GitHub Actions. Every push to `main` builds the site and publishes it to https://novrianpratama.my.id/

## Contact

- LinkedIn: https://www.linkedin.com/in/novrianpratama
- GitHub: https://github.com/NovrianPratama
- Medium: https://medium.com/@novrianprtama2
- Kaggle: https://www.kaggle.com/novrian02
- Email: novrianprtama2@gmail.com
- CV: https://drive.google.com/file/d/1dycjwS_a-ARQlgVVWnA3XiNbK2r9PpdM/view?usp=sharing

## Credits

Built from the [devportfolio](https://github.com/RyanFitzgerald/devportfolio) template by Ryan Fitzgerald. See `LICENSE.md`.
