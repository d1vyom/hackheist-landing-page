# Mobile ribbon containment fix

Scope: repair the two mobile artwork cuts and the hero artwork overlapping the edition facts in the supplied screenshots. Preserve the selected desktop design and event content.

Root causes: mobile hero uses a fixed 330px clipping frame and a negative image margin; desktop scroll parallax still translates that entire mobile frame toward the following facts. Final CTA positions its ribbon outside the section using negative bottom/right offsets.

Plan: add geometry regression tests at phone widths, observe failures, then let mobile artwork reserve its natural height and animation clearance. Disable hero parallax at the stacked breakpoint. Put the final CTA artwork in normal document flow beneath its text. Verify full image containment, separation from text, full regression suite, build, and live deployment. Record screenshot evidence and push commits.
