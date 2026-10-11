import {
  AboutSection,
  DetailsSection,
  FinalCtaSection,
  HighlightsSection,
} from "@/components/event-sections";
import { HeroArt } from "@/components/hero-art";
import { MotionController } from "@/components/motion-controller";
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
          className="hero-section"
          aria-labelledby="hero-heading"
        >
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{event.edition}</p>
              <h1 id="hero-heading">
                Build something
                <br />
                worth breaking<span className="text-blue">.</span>
              </h1>
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
          <div className="shell hero-bottom">
            <div className="hero-fact">
              <strong>HackHeist 2026</strong>
              <span>Build something worth breaking.</span>
            </div>
            <div className="hero-fact">
              <strong>MIET</strong>
              <span>A campus for creators.</span>
            </div>
            <div className="hero-fact">
              <strong>GDG Community</strong>
              <span>Ideas. People. Possibilities.</span>
            </div>
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
        <span>Curious minds. Shared possibilities.</span>
        <a href="#hero" className="back-top">
          Back to top <Arrow diagonal />
        </a>
      </footer>
      <MotionController />
    </>
  );
}
