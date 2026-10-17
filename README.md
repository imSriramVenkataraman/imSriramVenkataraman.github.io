# Sriram V — Portfolio

Personal portfolio site. React 18 + Vite + Tailwind CSS. Static site, no backend.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the built site locally
```

## Editing content

All text lives in `src/data/profile.js`: profile, stats, certifications, experience, projects and skills.
Components in `src/components/` only handle layout, so most updates touch that one file.

- **Photo:** drop a square image at `public/sriram.jpg` and set `photo: '/sriram.jpg'` in `profile`.
- **GitHub link:** set `github` in `profile`; the icon appears wherever it's empty now.
- **New job:** add an entry at the top of `experience` and set the previous one's end date.

## Structure

```
src/
  data/profile.js       all site content
  components/           Header, Hero, About, Experience, Projects, Skills, Contact, Footer
  index.css             Tailwind layers and shared classes (.card, .btn, .tag, .grad)
tailwind.config.js      colour palette and fonts
.github/workflows/      GitHub Pages deploy on push to main
```

## Deploy

**GitHub Pages:** in the repo, Settings → Pages → Source: GitHub Actions. Every push to `main` builds and deploys.
For a project URL (`https://<user>.github.io/<repo>/`) set `BASE_PATH: /<repo>/` in the workflow.

**Custom domain:** add `public/CNAME` containing the domain (e.g. `sriramv.com`), point DNS at GitHub Pages,
and keep `BASE_PATH: /`. Vercel, Netlify, Cloudflare Pages or S3 + CloudFront also work: build command
`npm run build`, output folder `dist`.
