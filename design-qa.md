# Signal Ribbon design QA

Source: second displayed concept, refined for bold typography and readable labels (`exec-86b2f46a-7563-4df1-8521-2a9059a23678.png`). Desktop target 1440 × 1100; browser capture uses 1440 × 1100 CSS pixels, with the native scrollbar retained. Mobile target 390 × 844.

## Findings — first comparison

- [P2] Desktop headline and action scale were smaller than the refined reference. Increased headline from 6.6vw to 7.4vw and button text/padding to match the intended visual emphasis.
- [P2] Ribbon extended into the community baseline in the initial implementation. Constrained its frame to the hero grid with contain sizing. No text or CTA overlays the image.
- [P2] Header overflow at 200% root font size. Allowed brand wrapping and long heading words to wrap. Regression check passes.

## Evidence

Source and desktop capture are combined in ignored `.superpowers/redesign-qa/comparison.png`. Post-fix evidence: `comparison-final.png`, `desktop-final.png`, `full-page.png`, `mobile-final.png`, and `mobile-details.png` in that folder. The final desktop capture was confirmed at 1440 × 1100, device scale factor 1, before comparison. Source and implementation were opened together in `comparison-final.png`; the full-page view was inspected separately. Mobile registration feedback was visually confirmed after the anchor scroll completed.

## Post-fix review

Headline now has the intended bold, two-line emphasis; larger actions preserve hierarchy. Ribbon no longer crosses the community baseline. Header and body remain readable on mobile; enlarged-text regression passes. Artwork is deliberately slightly inset to keep a quiet text region. The source and implementation differ in particle distribution because the standalone generated asset is distinct from the mock; palette, shape, scale and emphasis preserve the selected direction. This is an accepted asset variation, not a placeholder.

Focused inspection covered headline, nav, CTA, edition/community labels, and mobile registration feedback; full-page inspection covered all five sections. No remaining actionable P0/P1/P2 findings. Fine variation in particle placement and font punctuation is accepted P3 polish.

## Fidelity surfaces

- Typography: self-hosted Google Sans Flex, weight 720 hero, 650 section titles, readable 18px edition/community labels. Correct visible and accessible headline.
- Spacing: asymmetric hero, 64px desktop margins, generous vertical rhythm, three-column baseline; stacked mobile layout.
- Colors: white, near-black, quiet gray, blue accents and multicolor ribbon. No gradient surfaces.
- Assets: generated transparent particle ribbon WebP; existing GDG brand mark retained; Phosphor icons. Ribbon preserves aspect ratio.
- Content: five required sections and event facts preserved. Date and registration remain explicitly forthcoming.

## Expected differences

Header uses an edition label instead of a third registration button, preserving the original two-action flow. The blue period uses the font punctuation. Mobile reflows the ribbon beneath the actions to protect text readability. Motion is progressive enhancement; no content is hidden until JavaScript loads.

final result: passed
