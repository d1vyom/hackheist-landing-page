# Architecture

Status: implemented and verified on 11 October 2026.

## Runtime

Browser → Vercel → Next.js server-rendered landing page. Static event content is compiled from a typed module. Native anchors handle navigation and the registration fallback. No user input is stored or transmitted.

## Planned files

| Path                                | Responsibility                                                        |
| ----------------------------------- | --------------------------------------------------------------------- |
| `src/app/layout.tsx`                | Document language, metadata, shared shell                             |
| `src/app/page.tsx`                  | Compose exactly five event sections                                   |
| `src/app/globals.css`               | Tailwind entry, design tokens, responsive layout, motion preferences  |
| `src/components/site-header.tsx`    | Brand, navigation, keyboard-accessible links                          |
| `src/components/hero-art.tsx`       | Original decorative SVG/CSS illustration                              |
| `src/components/register-link.tsx`  | Consistent registration action using shared configuration             |
| `src/components/event-sections.tsx` | About, highlights, event details, final CTA                           |
| `src/lib/event.ts`                  | Typed event facts, highlight descriptions, registration configuration |
| `tests/landing.spec.ts`             | Browser behavior and viewport acceptance tests                        |
| `tests/accessibility.spec.ts`       | Automated accessibility checks                                        |
| `next.config.ts`                    | Deployment-compatible security headers                                |
| `playwright.config.ts`              | Browser test configuration and local server lifecycle                 |
| `README.md`                         | Setup, scripts, customization, live/repository links                  |
| `docs/VERIFICATION.md`              | Actual validation evidence and remaining limitations                  |
| `docs/SUBMISSION.md`                | Deliverable links, short explanation, separate prior-project reminder |

## Boundaries

Event content does not import UI components. Components consume content and render semantic HTML. Page composition owns section order. CSS owns presentation and reduced-motion behavior. Add no client state unless an approved interaction requires it.

## Security

No secrets are required for the page. Keep `.env*`, `.vercel`, build output, dependencies, and browser test artifacts out of Git. Use React's escaped text rendering and no raw HTML injection. Set suitable content-type, framing, referrer, and permissions headers; validate any CSP against the actual Next.js build before shipping it. External registration links, if configured later, must use HTTPS and safe new-tab attributes where applicable.

## Delivery sequence

1. Review specification and write the implementation plan.
2. Review plan and confirm execution method.
3. Establish project tooling and failing browser acceptance tests.
4. Build the five-section page and pass behavior checks.
5. Verify visual layout, accessibility, performance behavior, security, and production build.
6. Push verified commits, deploy to Vercel, and smoke-test the public URL.
