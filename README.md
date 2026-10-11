# HackHeist 2026

A five-section event landing page for **GDG on Campus MIET**. The approved Signal Ribbon redesign pairs a white canvas, bold Google Sans Flex, readable event labels, a generated particle ribbon, and restrained motion inspired by the supplied Antigravity reference.

**Source:** [github.com/d1vyom/hackheist-landing-page](https://github.com/d1vyom/hackheist-landing-page)

**Live website:** [hackheist-landing-page.vercel.app](https://hackheist-landing-page.vercel.app)

## Stack

Next.js 16.4 · React 19.3 · TypeScript · Tailwind CSS 4.3 · Playwright · axe-core

The page is prerendered with server components. A small client motion controller adds ribbon parallax, one-time section entrances and pause/resume. It has no backend, database, analytics, remote fonts, or third-party runtime scripts. Google Sans Flex is bundled locally through Fontsource; the generated ribbon is a local optimized WebP; icons come from Phosphor.

## Run locally

Use Node.js 24 LTS and npm.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). For a production preview:

```sh
npm run build
npm start
```

## Verify

```sh
npx playwright install chromium
npm test
npm run typecheck
npm run lint
npm audit
npm run build
```

`npm test` starts the development server if one is not already available. To test a running production server or deployment, set `BASE_URL`:

```powershell
$env:BASE_URL = 'http://127.0.0.1:3002'
npm test
```

In a separate terminal, start that production server with `npm run start -- --port 3002`. The browser suite checks five-section content, navigation, both registration actions, no-JavaScript behavior, accessibility, keyboard focus, reduced motion, 200% text sizing, touch targets, six viewport widths, browser errors, and defensive HTTP headers.

See [verification evidence](docs/VERIFICATION.md).

## Update event information

Edit `src/lib/event.ts` to change the event facts and highlight copy. The source brief provides only **HackHeist 2026**, **MIET**, and **9:00 AM onwards**. The exact calendar date has not been supplied, so the page says **Date to be announced**.

Both **Register Now** links currently use the permitted placeholder `#event-details`. The registration notice appears near the anchor landing point, including on mobile. Once the organizer supplies a real HTTPS registration URL, change `event.registrationHref`, update the notice in `DetailsSection`, and update the registration tests to assert that real destination. No personal information is collected by this page.

The task's **15 October 2026 submission deadline is not an event date**.

## Deploy to Vercel

Import the GitHub repository into Vercel using the Next.js preset, or run `vercel deploy --prod` after linking this folder to the intended project. No application environment variables are required. `.vercelignore` excludes local execution logs, screenshots, test artifacts, documentation, and credentials from deployment uploads; `.gitignore` independently protects local files from Git.

## Design and accessibility

- Exactly five semantic sections: Hero, About, Highlights, Event Details, and Final CTA.
- Generated particle-ribbon artwork, black pill actions and generous whitespace; no gradient backgrounds or animation framework.
- Native anchors, skip link, visible focus states, and at least 44px link targets.
- CSS transforms and Web Animations API entrances; reduced-motion preferences stop active animations and smooth scrolling. A visible pause control is available. Reveals do not replay after resume, and decorative motion pauses offscreen or when the page is hidden.
- Essential content and links work without JavaScript.
- Layout verified at 360, 390, 768, 1024, 1366, and 1920px.

## Project documentation

- [Approved specification](docs/superpowers/specs/2026-10-11-hackheist-design.md)
- [Implementation plan](docs/superpowers/plans/2026-10-11-hackheist.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Approved redesign plan](docs/superpowers/plans/2026-10-11-signal-ribbon.md)
- [Design QA](design-qa.md)
- [Verification](docs/VERIFICATION.md)
- [Submission notes](docs/SUBMISSION.md)

This implementation was developed with AI assistance. The submission explanation does not claim independent or unaided authorship.

## Project summary PDF

A concise overview of the technologies, architecture, security measures, tests, and deployment is available in [the project summary PDF](output/pdf/hackheist-project-summary.pdf).

