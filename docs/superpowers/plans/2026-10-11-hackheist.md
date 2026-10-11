# HackHeist Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Deliver the approved five-section HackHeist landing page, a public GitHub repository, and a verified Vercel deployment.

**Architecture:** Server-rendered Next.js App Router page with typed event content, small reusable React components, and CSS/SVG artwork. Native anchors provide navigation and registration fallback; no backend or client state is needed.

**Tech Stack:** TypeScript strict mode, React, Next.js, Tailwind CSS, ESLint, Playwright, and axe-core through `@axe-core/playwright`. Resolve compatible stable package versions from official package metadata at execution time and commit `package-lock.json`.

**Spec:** `docs/superpowers/specs/2026-10-11-hackheist-design.md`

**Architecture map:** `docs/ARCHITECTURE.md`

**Status:** Approved and executed natively on 11 October 2026, with independent review and test-first fixes. Tasks 1–4 complete; final deployment packaging and remote alignment in progress.

## Global Constraints

- The main element contains exactly five semantic sections. Navigation and a compact footer are outside those sections.
- Next.js App Router, React, TypeScript strict mode, Tailwind CSS.
- No database, authentication, API routes, analytics, or third-party scripts.
- Both Register Now links target `#event-details` until a real registration URL is supplied.
- Show “Registration link coming soon.” and explicitly indicate that the calendar date is to be announced.
- Event details are “HackHeist 2026”, “MIET”, and “9:00 AM onwards”; 15 October 2026 is the submission deadline, not the event date.
- Use flat color, no gradients, generic glass cards, stock dashboard layout, or excessive pill badges.
- Test 360, 390, 768, 1024, 1366, and 1920px widths.
- Content must not depend on animation completing to become visible.
- No invented speakers, attendance figures, prizes, sponsors, deadlines, or agenda.
- Do not claim the resulting work was built without AI assistance.

## Review Focus

1. Missing registration URL: both actions reach the visible fallback; no false submission success. Task 2 tests this.
2. Narrow screens and enlarged text: no overflow, overlap, or inaccessible actions. Task 3 tests this.
3. JavaScript disabled: all essential sections, event facts, and registration anchors still work. Task 2 tests this.
4. Reduced motion and keyboard-only browsing: no decorative motion, visible focus, working skip link. Task 3 tests this.
5. Production differences: security headers and navigation work on the built app and public deployment. Tasks 4 and 5 test this.

---

## Task 1: Runnable foundation and test harness

**Files:** Create `package.json`, `package-lock.json`, `.gitignore`, `tsconfig.json`, `next-env.d.ts`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `playwright.config.ts`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`, and `tests/landing.spec.ts`.

**Interfaces:** Produces npm scripts `dev`, `build`, `start`, `lint`, `typecheck`, `test`, and `test:e2e`. `npm test` runs the full browser suite. Playwright uses `BASE_URL` when provided; otherwise starts the local development server on port 3000. Export `RootLayout({ children }: Readonly<{ children: React.ReactNode }>)` and default `Home(): React.JSX.Element`.

- [x] Verify Node/npm versions, compatible current framework releases, Git identity, GitHub connector authentication, and Vercel authentication without printing credentials. Read the relevant Sites, implementation, and Vercel skills before using their workflows.
- [x] Configure tooling and dependencies; ignore `.env*` except an optional sanitized example, `.vercel/`, `.next/`, `node_modules/`, `test-results/`, and `playwright-report/`. Use an empty route as the test host, not generated product content.
- [x] Write `renders the HackHeist identity` with `await expect(page.getByRole('heading', { level: 1, name: 'HACKHEIST', exact: true })).toBeVisible()` and `await expect(page).toHaveTitle(/HackHeist.*GDG/)`.
- [x] Run `npm test -- --grep "renders the HackHeist identity"`. Confirm assertion failure because the identity is absent; connection errors do not count as the red phase.
- [x] Implement the minimal identity, document language `en`, metadata, and Tailwind entry to pass.
- [x] Run `npm test`, `npm run typecheck`, and `npm run lint`; require all to pass.
- [x] Review staged files for secrets; commit `chore: establish Next.js foundation and test harness`.
- [x] Create an available public repository based on `hackheist-landing-page` using the authenticated user's account. Set `origin`, push `main`, and record the exact URL. If authentication fails, preserve commits and report the blocker without inventing a URL.

## Task 2: Complete semantic content and registration flow

**Files:** Create `src/lib/event.ts`, `src/components/site-header.tsx`, `src/components/register-link.tsx`, `src/components/event-sections.tsx`, and `tests/content.spec.ts`; modify `src/app/page.tsx` and `tests/landing.spec.ts`.

**Interfaces:** Export `event` with readonly string properties `name`, `tagline`, `organizer`, `edition`, `venue`, `time`, `dateNotice`, `registrationHref`, and `registrationNotice`. Export `highlights: readonly { title: string; description: string }[]`. Export named components `SiteHeader()`, `RegisterLink({ className? }: { className?: string })`, `AboutSection()`, `HighlightsSection()`, `DetailsSection()`, and `FinalCtaSection()`, each returning `React.JSX.Element`. `RegisterLink` consumes `event.registrationHref`; sections consume `event` and `highlights`.

- [x] Write `renders exactly five sections in order`: assert `main > section` has IDs `['hero', 'about', 'highlights', 'event-details', 'join']`, one h1, the four highlight titles/descriptions from the spec, and required visible event facts.
- [x] Write `both registration links reach the announced fallback`: assert exactly two links named `Register Now`, each href `#event-details`; click each independently and assert URL hash, visible notice “Registration link coming soon.”, and date notice “Date to be announced”.
- [x] Write `navigation reaches the named sections`: click header links for About, Highlights, and Event Details; assert the corresponding URL hashes and headings are visible.
- [x] Write `essential content works without JavaScript` using `browser.newContext({ javaScriptEnabled: false })`: assert all five sections, facts, and both registration destinations remain available; clicking a registration link updates the hash.
- [x] Run `npm test -- --grep "five sections|registration links|navigation reaches|without JavaScript"`; verify failures show missing page behavior.
- [x] Implement the shared content and server components, with exact copy from the spec, a concise original About paragraph, and native anchors. Render the hero in page composition and a compact footer outside `main`. No menu or unrelated features.
- [x] Run `npm test`, `npm run typecheck`, and `npm run lint`; require all to pass.
- [x] Review staged files, commit `feat: build five-section HackHeist event page`, and push.

## Task 3: Visual design, responsive layout, and accessible motion

**Files:** Create `src/components/hero-art.tsx`, `tests/responsive.spec.ts`, and `tests/accessibility.spec.ts`; modify `src/app/globals.css`, `src/app/page.tsx`, and visual components from Task 2.

**Interfaces:** Export `HeroArt(): React.JSX.Element`, a decorative local SVG/CSS composition with `aria-hidden="true"`. CSS defines warm white, charcoal, blue, red, yellow, and green tokens; shared spacing, typography, focus, and reduced-motion behavior. Skip link targets `main#main-content` with `tabIndex={-1}`.

- [x] Write viewport tests for all six specified widths: `expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)`; assert each primary action is visible, has at least 44px height, and does not intersect its adjacent text.
- [x] Write `keyboard reaches main content and registration`: Tab to the skip link, assert focus/visible state, press Enter, assert main is focused, then traverse to the hero action and activate it without a pointer.
- [x] Write `reduced motion disables animation and smooth scrolling`: emulate reduced motion and assert zero nonzero-duration decorative CSS animations, no running Web Animations, and root computed `scrollBehavior` is `auto`.
- [x] Write `page has no serious accessibility violations` with `new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()` and assert an empty violations array. Run at desktop and mobile widths.
- [x] Run the new tests and confirm expected failures for missing focus, target sizing, motion overrides, or layout behavior. If a check already passes, retain it as regression coverage without claiming a red phase for it.
- [x] Implement the editorial layout: oversized responsive title, asymmetric hero with geometric art, spacious About, four flat highlight cards, ticket-like event details, and bold final CTA. Keep each section visually distinct within a coherent system.
- [x] Add short transform/opacity hover transitions, at most one subtle decorative loop, and reduced-motion overrides; content is always present and visible.
- [x] Run `npm test`, type checking, and lint. Capture and inspect full-page screenshots at all six widths; manually inspect 200% browser zoom, focus outlines, text wrapping, action overlap, and the event pass. Fix any defect with a reproducing test when applicable.
- [x] Review staged files, commit `style: refine responsive event identity and accessible motion`, and push.

## Task 4: Production and security verification

**Files:** Create `tests/security.spec.ts`, `docs/VERIFICATION.md`, and `README.md`; modify `next.config.ts` and any files required by evidenced fixes.

**Interfaces:** `next.config.ts` exports NextConfig with `headers()` applying `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, and `Permissions-Policy: camera=(), microphone=(), geolocation=()` to all page routes. Add CSP only after validating compatibility with actual Next.js assets and rendering.

- [x] Write `serves defensive page headers`: request `/` and assert status 200 plus the exact four header values above. Run it and confirm missing-header failures.
- [x] Implement headers. Review dependencies, tracked files, rendering, external links, and configuration using the scoped security-diff-scan workflow. No credentials or unsafe raw HTML rendering may be committed.
- [x] Run `npm test`, `npm run typecheck`, `npm run lint`, `npm audit`, and `npm run build`; investigate and fix actionable failures rather than suppressing output. Report any unresolved advisory and its actual impact.
- [x] Start the built app on an available local port and rerun the full browser suite with `BASE_URL` pointing to that production server. Inspect browser console errors and failed requests.
- [x] Record commands, actual pass/fail counts, screenshot observations, red/green evidence, dependency findings, and remaining limitations in `docs/VERIFICATION.md`.
- [x] Document setup, scripts, content configuration, registration fallback replacement, and design decisions in `README.md`.
- [x] Review staged changes, commit `test: verify production accessibility and security`, and push.

## Task 5: Vercel deployment and submission package

**Files:** Create `docs/SUBMISSION.md`; update `README.md`, `docs/VERIFICATION.md`, and this plan's completion checkboxes.

**Interfaces:** Produces the exact public GitHub repository URL, stable Vercel production URL, and a 3–5 line submission explanation. No private account data or deployment credentials enter source control.

- [ ] Confirm clean Git status, pushed commits, successful local checks, and authenticated Vercel access. Link or create the Vercel project for this folder and deploy the verified build to production. Keep `.vercel/` ignored.
- [ ] Verify deployment completion and public access without authentication. Request the deployed page and assert status 200 and security headers.
- [ ] Run behavior, accessibility, responsive, and reduced-motion tests against the public production URL using `BASE_URL`. Inspect mobile and desktop screenshots and browser errors. Fix, retest, commit, push, and redeploy if evidence requires it.
- [ ] Add live/repository URLs and the 3–5 line explanation to submission notes. Remind the user to provide their own two prior projects separately; never fabricate those links. State that the date and registration URL still await event-organizer details.
- [ ] Record live verification results, commit `docs: record deployment and submission details`, push, and verify remote `main` matches local HEAD. If a final production deploy is needed to align the deployed commit, perform it and repeat the smoke check.
- [ ] Obtain independent final review using the applicable Superpowers review workflow, resolve actionable findings, and rerun affected checks before declaring completion.

## Plan self-review

All five required sections, exact event facts, registration fallback, motion limits, six widths, accessibility, test-first implementation, incremental public commits, security checks, production verification, and submission notes have owning tasks. Shared exports are defined before consumers. The five review-focus conditions have explicit tests. Remaining unknowns are external event details and account authentication, with explicit fallback behavior and accurate reporting.
