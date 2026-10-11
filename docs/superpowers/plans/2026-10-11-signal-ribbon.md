# Signal Ribbon redesign

Approved direction: the second displayed Product Design concept, refined with bold Google Sans Flex and larger supporting labels. Preserve the five-section event brief and existing registration fallback.

## Specification
- White canvas, asymmetric two-line bold hero, generated particle ribbon on the right, black pill actions.
- Self-host Google Sans Flex. Edition/community labels at least 18px; readable body text and navigation.
- Gentle ribbon drift and scroll parallax, section entrances, purposeful hover motion. Pause control, reduced-motion support, no-JavaScript content, offscreen/hidden-page suspension.
- Continue the visual system through about, four highlights, event details, final CTA. No invented event facts.

## Architecture
Keep server-rendered page/content. One client motion controller enhances existing DOM and owns motion preference/pause state, observers and cleanup. Native anchors remain functional. Use a generated raster ribbon asset and library icons; no animation framework or backend needed.

## Implementation and verification
1. Add regression tests for motion pause/resume, reduced motion and label readability; observe failures.
2. Replace typography/layout/artwork, implement optional motion enhancement.
3. Run complete browser, accessibility, responsive and security-header suite; lint, typecheck, production build, dependency audit.
4. Compare desktop with refined concept and inspect mobile. Record design QA, fix issues.
5. Commit, push, deploy production, rerun live verification and record deployment.
