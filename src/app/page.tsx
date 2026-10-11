import {
  AboutSection,
  DetailsSection,
  FinalCtaSection,
  HighlightsSection,
} from "@/components/event-sections";
import { HeroArt } from "@/components/hero-art";
import { Arrow, RegisterLink } from "@/components/register-link";
import { GdgMark, SiteHeader } from "@/components/site-header";
import { event } from "@/lib/event";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section
          id="hero"
          className="hero-section shell"
          aria-labelledby="hero-heading"
        >
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow mono">
                <span className="status-dot" />
                {event.organizer} · PRESENTS
              </p>
              <h1 id="hero-heading" aria-label="HACKHEIST">
                <span>HACK</span>
                <span>
                  HEIST
                  <span className="title-period" aria-hidden="true">
                    .
                  </span>
                </span>
              </h1>
              <p className="hero-tagline">{event.tagline}</p>
              <p className="hero-description">
                A space for curious minds, bold ideas,
                <br className="desktop-break" /> and the people who make them
                happen.
              </p>
              <div className="hero-actions">
                <RegisterLink />
                <a href="#about" className="explore-link">
                  Explore the event <Arrow />
                </a>
              </div>
            </div>
            <HeroArt />
          </div>
          <div className="hero-bottom">
            <div className="hero-fact">
              <span className="fact-icon" aria-hidden="true">
                ↗
              </span>
              <div>
                <span className="mono">THE EDITION</span>
                <span>{event.edition}</span>
              </div>
            </div>
            <div className="hero-fact">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <div>
                <span className="mono">THE PLACE</span>
                <span>{event.venue}</span>
              </div>
            </div>
            <span className="hero-note mono">
              BRING YOUR CURIOSITY.
              <br />
              WE’LL BRING THE COMMUNITY.
            </span>
            <a
              href="#about"
              className="scroll-cue"
              aria-label="Scroll to About HackHeist"
            >
              <span className="mono">SCROLL TO DISCOVER</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <AboutSection />
        <HighlightsSection />
        <DetailsSection />
        <FinalCtaSection />
      </main>
      <footer className="site-footer shell">
        <a
          className="footer-brand"
          href="#hero"
          aria-label="GDG on Campus MIET — back to top"
        >
          <GdgMark />
          <span>{event.organizer}</span>
        </a>
        <span className="mono">CURIOUS MINDS. SHARED POSSIBILITIES.</span>
        <a href="#hero" className="back-top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </>
  );
}
