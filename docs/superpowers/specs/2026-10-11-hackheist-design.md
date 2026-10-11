# HackHeist landing page specification

Status: approved by the user on 11 October 2026. No product code has been written.

## Purpose and success

Build an original, polished event landing page for the GDG on Campus MIET Core Team 2026–27 web development selection task. Deliver a responsive, accessible single page, a public GitHub repository with incremental commits, a verified Vercel deployment, and a 3–5 line submission explanation.

Source: https://docs.google.com/document/d/1QFuPw5cVrJp9Z9hXvJXqtyH5PVzzlMy2UlAyoB_YTBQ/edit

The submission deadline is 15 October 2026. This is not the event date. Per the user's instruction, the source's Originality & AI Usage Policy is excluded from implementation requirements. Do not claim the resulting work was built without AI assistance.

## Scope and exact content

The main element contains exactly five semantic sections. Navigation and a compact footer are outside those sections.

1. **Hero:** HACKHEIST; tagline “Build something worth breaking.”; GDG on Campus MIET; “HackHeist 2026”; venue “MIET”; Register Now link. Include a custom geometric event illustration and small numbered editorial labels.
2. **About HackHeist:** one concise paragraph describing students learning, building, collaborating, and connecting through workshops, tech sessions, and a hackathon.
3. **Event Highlights:** four cards: Hackathon — Build and showcase your ideas; Workshop — Learn practical development skills; Tech Session — Learn from experienced developers; Networking — Connect with students and the developer community.
4. **Event Details:** creatively arranged event pass with “HackHeist 2026”, “MIET”, and “9:00 AM onwards”. Explicitly indicate that the calendar date is to be announced. No invented speakers, attendance figures, prizes, sponsors, deadlines, or agenda.
5. **Final CTA:** heading “Ready to HackHeist?” and Register Now link.

The brief allows a placeholder registration destination. Until a real registration URL is supplied, both Register Now links target `#event-details`, where a visible message says “Registration link coming soon.” Do not use a fabricated Google Form or show a false success state. This fallback needs no backend or collection of personal data.

The two prior projects requested by the source brief are the user's separate submission responsibility; do not fabricate projects or ownership claims.

## Design direction and alternatives

Recommended: editorial event poster. Warm off-white canvas, near-black oversized typography, crisp thin borders, generous whitespace, asymmetrical composition, and restrained Google blue/red/yellow/green accents. A custom geometric vault/build motif forms the hero's visual anchor. Use flat color, no gradients, generic glass cards, stock dashboard layout, or excessive pill badges.

Alternative: dark terminal aesthetic. It fits the event name but risks generic hackathon styling and weaker readability.

Alternative: fully colorful modular Google-inspired layout. It is energetic but risks overwhelming the content. Retain its color accents within the recommended editorial direction.

Use a compact navigation with native anchor links. Collapse or simplify it on small screens without introducing a menu unless required by the final layout. Primary actions have clear hover, active, and keyboard focus states. All essential information remains visible with JavaScript disabled.

## Architecture

Next.js App Router, React, TypeScript strict mode, Tailwind CSS. Resolve stable supported versions at implementation time and commit the lockfile. Server-render the page; use client components only for behavior that requires browser state. No database, authentication, API routes, analytics, or third-party scripts.

Separate page composition, reusable visual components, and typed event content. Use local SVG/CSS geometric graphics with no remote runtime asset dependencies. Prefer system fonts or self-hosted fonts. Keep event facts and registration destination in one configuration module.

Full module responsibilities and data flow are recorded in `docs/ARCHITECTURE.md`.

## Motion and performance

Use short transform/opacity transitions and at most one subtle decorative loop. Do not animate layout properties or attach heavy scroll handlers. Respect `prefers-reduced-motion`: remove decorative loops, reveal transitions, and smooth scrolling. Content must not depend on animation completing to become visible. Avoid WebGL, video backgrounds, large animation libraries, and unnecessary image downloads.

## Accessibility and responsiveness

Use a skip link, semantic landmarks, one h1, sequential headings, visible keyboard focus, accessible link names, and sufficient text contrast. Decorative illustrations are hidden from assistive technology. Touch targets should be at least 44px. Test 360, 390, 768, 1024, 1366, and 1920px widths. No horizontal overflow, clipped content, or overlapping actions. Check keyboard navigation, 200% zoom, and reduced motion.

## Verification and delivery

Follow test-first development for user-facing behavior: write tests, observe expected failures, implement, then rerun the full relevant suite. Use browser tests for section structure, both registration actions, anchor navigation, mobile overflow, and reduced motion; include an automated accessibility scan. Verify type checking, lint, production build, dependency audit, and security headers. Conduct a scoped security review covering dependencies, secrets, unsafe rendering, external links, and deployment configuration. Record exact results and unresolved findings in `docs/VERIFICATION.md`; do not claim tests passed without running them.

Initialize Git locally and commit the reviewed specification. After approval, create the public repository using the authenticated user's account and an available name based on `hackheist-landing-page`. Commit and push coherent milestones: project foundation/tests, page implementation, verification fixes, and deployment documentation. Check staged files for secrets before each push.

Deploy to Vercel only after local verification passes. Verify the live page, deployed headers, registration behavior, and mobile layout. Document the live URL, repository URL, replacement registration setting, and 3–5 line explanation in README and submission notes. External authentication failures must be reported accurately with local work preserved.

## Workflow checkpoints

This is the Superpowers architectural path. The user reviews this written specification before the detailed implementation plan is prepared. The implementation plan then receives review and an execution-method selection before product code starts. Recommended execution is native implementation in this chat because the project is small and tightly scoped.
