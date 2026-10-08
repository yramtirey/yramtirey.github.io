# Yeritmary Rodriguez Delgado — Portfolio

Personal portfolio showcasing work in automated experimentation, robotics, machine learning, and computational imaging, with selected projects, independent prototypes, professional experience, and contact links.

[Live portfolio](https://yramtirey.github.io/) · [Repository](https://github.com/yramtirey/yramtirey.github.io) · [Résumé](https://yramtirey.github.io/resume.pdf) · [Full CV](https://yramtirey.github.io/cv.pdf)

## Stack

Next.js 16 (App Router), React 19, TypeScript 5, and Tailwind CSS 4. The site is statically exported and hosted on GitHub Pages.

## Local development

Use Node.js 24 and npm to match the deployment workflow.

```bash
git clone https://github.com/yramtirey/yramtirey.github.io.git
cd yramtirey.github.io
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edit the homepage in `app/page.tsx`; the development server updates as files change.

## Production build

```bash
npm run build
```

This runs `next build --webpack`. In [next.config.ts](next.config.ts), `output: "export"` generates the static site in `out/`, `trailingSlash: true` exports routes as directories with `index.html`, and `images.unoptimized: true` serves images without the Next.js image optimization service. Files in `public/`, including the résumé, CV, and project screenshots, are copied into the export.

Deploy the generated `out/` directory; no running Next.js server is required. The `npm run start` script invokes `next start` and is not used for this static export.

To run the repository's lint command:

```bash
npm run lint
```

## Pages and assets

| Source | Purpose |
| --- | --- |
| `app/page.tsx` | Homepage with About, selected work, Personal Projects, Experience, and Contact sections. |
| `app/projects/neurovasc-workbench/page.tsx` | Dedicated [NeuroVasc Workbench project page](https://yramtirey.github.io/projects/neurovasc-workbench/) with screenshots, architecture, validation, and data provenance links. |
| `app/layout.tsx` and `app/globals.css` | Shared layout, metadata, and global styles. |
| `public/projects/neurovasc/` | NeuroVasc screenshots and [attribution](public/projects/neurovasc/ATTRIBUTION.md). |
| `public/resume.pdf` and `public/cv.pdf` | Downloadable professional documents. |

NeuroVasc Workbench is the current dedicated project route. Other linked project cards point to their external repositories; the homepage also includes LabOS as an in-development project.

## GitHub Pages deployment

[.github/workflows/deploy.yml](.github/workflows/deploy.yml) runs on pushes to `main` or a manual `workflow_dispatch`. GitHub Actions:

1. Sets up Node.js 24 and installs locked dependencies with `npm ci`.
2. Builds the static export with `npm run build`.
3. Verifies that `out/index.html`, `out/resume.pdf`, and `out/cv.pdf` exist.
4. Uploads `out/` as the Pages artifact and deploys it using `actions/deploy-pages`.

The published site is [https://yramtirey.github.io](https://yramtirey.github.io/). See the [deployment history](https://github.com/yramtirey/yramtirey.github.io/actions/workflows/deploy.yml) for build and deployment results.
