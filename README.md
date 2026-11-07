# Novrian Pratama — Data Analyst Portfolio

Personal portfolio website for Novrian Pratama, Data Analyst with a focus on FMCG.

**Live site:** https://novrianpratama.github.io/

## About

Information Systems graduate (2026) from UIN Sultan Syarif Kasim Riau. Currently Sales Digital Business Application Intern at PT Amerta Indah Otsuka, working on national General Trade visibility monitoring by Region, Branch, Site, and Salesman.

Previously Network Quality Specialist at J&T Cargo Indonesia, Area Marketing Intern at PT Nutrifood Indonesia, and Associate Project Manager Intern at DOT Indonesia.

## Projects

| Project | What it covers |
| --- | --- |
| National GT Visibility Monitoring — PT Amerta Indah Otsuka | Looker Studio dashboard for display compliance in national General Trade. 3,600+ audit records per week, 62,000+ records consolidated. |
| FMCG Sales Performance Analysis | Exploratory and diagnostic analysis of an FMCG sales dataset in Power BI with DAX measures. In progress. |
| Operational Performance & SLA Monitoring — J&T Cargo | Excel-based dashboard for SLA compliance and outlet performance across 77 outlets at 98% SLA, from 200,000+ logistics records processed with Excel Power Query. |

## Tech stack

- [Astro](https://astro.build/) 5
- [Tailwind CSS](https://tailwindcss.com/) 4
- TypeScript

Content for every section lives in a single file, `src/config.ts`.

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
  config.ts          # All site content: identity, experience, projects, skills
  components/        # Hero, About, Experience, Projects, Skills, Education, Contact
  pages/             # Home page and project case-study pages
  styles/            # Global styles and design tokens
public/
  profile.jpg        # Profile photo
  favicon.svg        # Site favicon
.github/workflows/  # Deploy to GitHub Pages
```

## Deployment

Deployed to GitHub Pages with GitHub Actions. Every push to `main` builds the site and publishes it to https://novrianpratama.github.io/

## Contact

- LinkedIn: https://www.linkedin.com/in/novrianpratama
- GitHub: https://github.com/NovrianPratama
- Medium: https://medium.com/@novrianprtama2
- Kaggle: https://www.kaggle.com/novrian02
- Email: novrianprtama2@gmail.com
- CV: https://drive.google.com/file/d/1dycjwS_a-ARQlgVVWnA3XiNbK2r9PpdM/view?usp=sharing

## Credits

Built from the [devportfolio](https://github.com/RyanFitzgerald/devportfolio) template by Ryan Fitzgerald. See `LICENSE.md`.
