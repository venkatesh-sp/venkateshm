# Venkatesh Marreboyina · Portfolio

Personal portfolio for a full-stack developer, built with **Next.js (Pages Router)**, **TypeScript**, **Tailwind CSS**, **shadcn/ui-style components** and **motion**.

Sections: hero (with animated developer illustration), profile, skills, projects (with GitHub activity), experience, education, declaration and contact. Includes a downloadable PDF resume generated from the same data.

## Run locally

```bash
yarn install
yarn dev            # http://localhost:3000
```

## Scripts

| Script                              | What it does                                                 |
| ----------------------------------- | ------------------------------------------------------------ |
| `yarn dev`                          | Development server                                           |
| `yarn build`                        | Production build (runs the SEO and GitHub-stats steps first) |
| `yarn start`                        | Serves the production build                                  |
| `yarn format` / `yarn format:check` | Prettier formatting                                          |
| `yarn lint` / `yarn lint:fix`       | ESLint with the project rules                                |
| `yarn typecheck`                    | TypeScript check                                             |
| `yarn validate`                     | Format check + lint + typecheck                              |

## Environment variables

Set these in `.env.local` for local builds, and in the Vercel project settings for production.

| Variable               | Required            | Purpose                                                                                                                                                 |
| ---------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Yes, for production | Your public URL, e.g. `https://yourname.dev`. Used for canonical links, Open Graph tags and the sitemap.                                                |
| `GITHUB_TOKEN`         | Optional            | Read-only GitHub token. When set, the build refreshes the contribution numbers in `data/github-stats.json`. Without it, the committed snapshot is used. |
| `GITHUB_LOGIN`         | Optional            | GitHub account to read contributions from (defaults to `venkatesh-sp`).                                                                                 |

## Customise

- `data/site.ts`: name, contact details, SEO title and description, profile photo path (`profile.image`).
- `data/portfolio.ts`: skills, projects (with optional `links`), experience and education.
- `public/profile.jpg`: optional profile photo. When the file is missing, the animated developer is shown instead.
- `public/og-image.png`: social share image. Bump `ogImageVersion` in `data/site.ts` after replacing it.

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository. Vercel detects Next.js automatically.
3. Add the environment variables above, at least `NEXT_PUBLIC_SITE_URL`.
4. Deploy. Later pushes to `main` redeploy automatically.

## Project layout

```
pages/                    Next.js routes (index page, _app, _document)
components/sections/      Page sections (hero, projects, experience, ...)
components/shared/        Reusable UI and motion components
components/resume/        Resume PDF document and download button
data/                     Content and configuration
scripts/                  Build steps: SEO files and GitHub stats
styles/globals.css        Theme tokens and animations
```
