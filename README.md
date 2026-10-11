# James Moore — Scientific Portfolio

A lightweight, static professional portfolio built with Astro and TypeScript. The site is designed for GitHub Pages and keeps project descriptions in validated Markdown content files.

## Local development

Requirements: Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

Astro prints the local development URL. Check the site before proposing public content changes.

## Build and preview

```sh
npm run check
npm run build
npm run preview
```

The generated static site is written to `dist/`.

## Deploy

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and publishes the site to GitHub Pages when a commit is pushed to `main`. Repository Pages settings should use **GitHub Actions** as the build and deployment source.

## Add a project

Create a Markdown file in `src/content/projects/`, for example `my-project.md`:

```md
---
title: Project title
summary: A concise, factual overview.
area: Research area
status: In development
featured: false
order: 10
methods:
  - Method or concept
---

## Research question

Describe the question and its scientific context.

## Approach

Describe only verified work. Do not include unpublished results or restricted information.
```

The frontmatter is validated in `src/content.config.ts`. Setting `featured: true` also places the project on the home page. A public repository link is optional and should be added only after the repository itself is public and approved for display.

## Add publications and presentations

Add a Markdown file under `src/content/contributions/`. Its frontmatter is validated by the `contributions` collection in `src/content.config.ts` and supports authors, year, venue, contribution type, DOI/URL, PDF, presentation date, and publication status. Do not add items until titles, authorship, venue, and status are verified. Empty contribution data is not rendered as a fabricated record.

## Update profile and navigation

Edit `src/data/profile.ts` to update the name, current role, institution, research group, expected graduation, and verified GitHub profile. The same file defines the shared navigation. Personal email, phone, and unverified social links are deliberately omitted.

## Add a CV

The CV page and download link are intentionally not published until you provide an approved CV. When ready, place the PDF in `public/cv/`, record its actual path and updated date in the profile configuration, and add a page with a download link (plus an optional embedded preview). No placeholder CV is included.

## Add figures

Place only approved, publication-safe figures in `public/figures/`. Add descriptive alt text, a caption, and relevant context to the associated project Markdown. Do not publish unpublished results, copyrighted article figures without permission, or collaborator data without approval.

## Change navigation

Update the `navigation` array in `src/data/profile.ts` and create or remove the corresponding Astro page under `src/pages/`. Keep labels descriptive and re-check mobile keyboard navigation.

## Content and privacy

This site is an independent personal portfolio, not an official institutional website. Project summaries distinguish ongoing work from results. Do not publish protected protocols, internal documents, private data, or unsupported claims. Missing CV, email, publications, and social links remain absent rather than appearing as public placeholders.
