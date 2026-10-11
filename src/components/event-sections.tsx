import Image from "next/image";
import {
  CodeIcon,
  WrenchIcon,
  MicrophoneStageIcon,
  UsersThreeIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { event, highlights } from "@/lib/event";
import { RegisterLink } from "./register-link";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="about-section section-space"
      aria-labelledby="about-heading"
    >
      <div className="shell about-grid">
        <div data-reveal>
          <SectionLabel>The idea</SectionLabel>
          <h2 id="about-heading">
            Big ideas start
            <br />
            with a little
            <br />
            <span className="text-blue">curiosity.</span>
          </h2>
        </div>
        <div className="about-copy" data-reveal>
          <p className="large-copy">
            That “what if” in your head?
            <br />
            Let’s make it real.
          </p>
          <p className="body-copy">
            HackHeist brings students together to learn, build, and turn that
            “what if” into something real. Dive into workshops, exchange ideas
            with developers, and team up for a hackathon.
          </p>
          <p className="body-copy">
            Come with curiosity. Leave with new skills, new connections, and
            something you made.
          </p>
          <p className="about-signoff">
            Built by the community.
            <br />
            For the community.
          </p>
        </div>
      </div>
    </section>
  );
}

export function HighlightsSection() {
  const icons = [CodeIcon, WrenchIcon, MicrophoneStageIcon, UsersThreeIcon];
  return (
    <section
      id="highlights"
      className="highlights-section section-space"
      aria-labelledby="highlights-heading"
    >
      <div className="shell">
        <div className="section-heading-row" data-reveal>
          <div>
            <SectionLabel>The experience</SectionLabel>
            <h2 id="highlights-heading">
              More than
              <br />
              lines of code.
            </h2>
          </div>
          <p className="body-copy">
            Four ways to get inspired.
            <br />
            One community to build with.
          </p>
        </div>
        <div className="highlight-grid">
          {highlights.map((item, index) => {
            const Icon = icons[index];
            return (
              <article
                className={`highlight-card accent-${index}`}
                key={item.title}
                data-reveal
              >
                <div className="card-top">
                  <Icon size={38} weight="regular" aria-hidden="true" />
                  <span className="card-index">0{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="card-bottom">
                  <span>
                    {
                      [
                        "Ideate. Build. Ship.",
                        "Learn by doing.",
                        "Fresh perspectives.",
                        "Find your people.",
                      ][index]
                    }
                  </span>
                  <ArrowUpRightIcon size={24} aria-hidden="true" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function DetailsSection() {
  return (
    <section
      id="event-details"
      className="details-section section-space"
      aria-labelledby="details-heading"
    >
      <div className="shell details-grid">
        <div data-reveal>
          <SectionLabel>The plan</SectionLabel>
          <p className="registration-notice">{event.registrationNotice}</p>
          <h2 id="details-heading">
            Your next
            <br />
            “I built that.”
            <br />
            <span className="text-blue">Starts here.</span>
          </h2>
          <p className="body-copy">
            Bring your laptop, your ideas,
            <br />
            and a willingness to figure it out.
          </p>
        </div>
        <div className="event-ticket" data-reveal>
          <p className="section-label">Your next chapter</p>
          <h3>{event.edition}</h3>
          <p className="ticket-organizer">{event.organizer}</p>
          <dl className="ticket-facts">
            <div>
              <dt>When</dt>
              <dd>
                2026<span>{event.dateNotice}</span>
              </dd>
            </div>
            <div>
              <dt>Where</dt>
              <dd>
                {event.venue}
                <span>On campus. In good company.</span>
              </dd>
            </div>
            <div>
              <dt>Time</dt>
              <dd>
                {event.time}
                <span>Make room for a day of building.</span>
              </dd>
            </div>
          </dl>
          <p className="ticket-stub">Make something that matters.</p>
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section
      id="join"
      className="join-section section-space"
      aria-labelledby="join-heading"
    >
      <div className="join-ribbon" aria-hidden="true">
        <Image
          src="/images/signal-ribbon.webp"
          alt=""
          width={1100}
          height={1430}
          sizes="(max-width:700px) 90vw, 40vw"
        />
      </div>
      <div className="shell join-copy" data-reveal>
        <SectionLabel>Make your move</SectionLabel>
        <h2 id="join-heading">
          Ready to
          <br />
          HackHeist?
        </h2>
        <p className="body-copy">
          A good idea is a start.
          <br />
          Showing up is the next step.
        </p>
        <RegisterLink />
      </div>
    </section>
  );
}
