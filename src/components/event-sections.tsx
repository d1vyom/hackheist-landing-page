import { event, highlights } from "@/lib/event";
import { Arrow, RegisterLink } from "./register-link";

function SectionLabel({
  number,
  children,
  light = false,
}: {
  number: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`section-label mono${light ? " label-light" : ""}`}>
      <span className="section-number">{number}</span>
      {children}
    </div>
  );
}

function HighlightIcon({ index }: { index: number }) {
  const paths = [
    <path key="code" d="m9 8-5 4 5 4m6-8 5 4-5 4m-2-11-2 14" />,
    <path key="tool" d="m14 5 5 5M5 19l8-8m-7 3 4 4M16 3l5 5-4 4-5-5Z" />,
    <path
      key="mic"
      d="M9 5a3 3 0 0 1 6 0v7a3 3 0 0 1-6 0V5ZM6 10v2a6 6 0 0 0 12 0v-2m-6 8v4m-4 0h8"
    />,
    <path
      key="people"
      d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-6 9v-2a6 6 0 0 1 12 0v2m1-15a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 4v2"
    />,
  ];
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[index]}
    </svg>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="about-section section-space"
      aria-labelledby="about-heading"
    >
      <div className="shell about-grid">
        <div>
          <SectionLabel number="01">THE IDEA</SectionLabel>
          <div className="about-symbol" aria-hidden="true">
            &#123; <span>+</span> &#125;
          </div>
        </div>
        <div>
          <h2 id="about-heading">
            Big ideas start
            <br />
            with <span className="text-blue">a little curiosity.</span>
          </h2>
          <p className="body-copy">
            HackHeist brings students together to learn, build, and turn that
            “what if” into something real. Dive into workshops, exchange ideas
            with developers, and team up for a hackathon. Come with curiosity.
            Leave with new skills, new connections, and something you made.
          </p>
          <p className="about-signoff mono">
            <span className="small-cross" aria-hidden="true">
              +
            </span>{" "}
            BUILT BY THE COMMUNITY. FOR THE COMMUNITY.
          </p>
        </div>
      </div>
    </section>
  );
}

export function HighlightsSection() {
  return (
    <section
      id="highlights"
      className="highlights-section section-space"
      aria-labelledby="highlights-heading"
    >
      <div className="shell">
        <SectionLabel number="02">THE EXPERIENCE</SectionLabel>
        <div className="section-heading-row">
          <h2 id="highlights-heading">
            More than
            <br />
            lines of code.
          </h2>
          <p className="body-copy">
            Four ways to get inspired.
            <br />
            One community to build with.
          </p>
        </div>
        <div className="highlight-grid">
          {highlights.map((item, index) => (
            <article
              className={`highlight-card accent-${index}`}
              key={item.title}
            >
              <div className="card-top">
                <span className="highlight-icon">
                  <HighlightIcon index={index} />
                </span>
                <span className="mono card-index">0{index + 1}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="card-bottom" aria-hidden="true">
                <span>
                  {
                    [
                      "IDEATE / BUILD / SHIP",
                      "LEARN BY DOING",
                      "FRESH PERSPECTIVES",
                      "FIND YOUR PEOPLE",
                    ][index]
                  }
                </span>
                <Arrow />
              </div>
            </article>
          ))}
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
        <div>
          <SectionLabel number="03">THE PLAN</SectionLabel>
          <p className="registration-notice">{event.registrationNotice}</p>
          <h2 id="details-heading">
            Your next
            <br />
            “I built that.”
            <br />
            <span className="text-green">Starts here.</span>
          </h2>
          <p className="body-copy">
            Bring your laptop, your ideas,
            <br />
            and a willingness to figure it out.
          </p>
        </div>
        <div className="event-ticket">
          <div className="ticket-top">
            <span className="mono">YOUR NEXT CHAPTER</span>
            <span className="ticket-star" aria-hidden="true">
              ✳
            </span>
          </div>
          <div className="ticket-title">
            {event.edition}
            <span className="mono">{event.organizer}</span>
          </div>
          <dl className="ticket-facts">
            <div>
              <dt>WHEN</dt>
              <dd>
                2026<span>{event.dateNotice}</span>
              </dd>
            </div>
            <div>
              <dt>WHERE</dt>
              <dd>
                {event.venue}
                <span>On campus. In good company.</span>
              </dd>
            </div>
            <div>
              <dt>TIME</dt>
              <dd className="ticket-time">
                {event.time}
                <span>Make room for a day of building.</span>
              </dd>
            </div>
          </dl>
          <div className="ticket-stub">
            <svg className="barcode" viewBox="0 0 60 32" aria-hidden="true">
              {[0, 4, 8, 11, 16, 20, 23, 28, 32, 35, 40, 44, 49, 52, 57].map(
                (x, i) => (
                  <rect
                    key={x}
                    x={x}
                    width={i % 3 === 0 ? 3 : 1.5}
                    height="32"
                    fill="currentColor"
                  />
                ),
              )}
            </svg>
            <p>
              <strong>Make something that matters.</strong>
              <span>Keep your ideas ready.</span>
            </p>
            <Arrow diagonal />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section id="join" className="join-section" aria-labelledby="join-heading">
      <div className="shell join-grid">
        <div>
          <SectionLabel number="04" light>
            MAKE YOUR MOVE
          </SectionLabel>
          <h2 id="join-heading">
            Ready to
            <br />
            HackHeist?
          </h2>
          <p>A good idea is a start. Showing up is the next step.</p>
          <RegisterLink className="register-light" />
        </div>
        <div className="join-art" aria-hidden="true">
          <svg viewBox="0 0 280 280" fill="none">
            <path
              d="M55 225 225 55M55 55h170v170"
              stroke="currentColor"
              strokeWidth="24"
            />
            <path d="M22 165v93h93" stroke="currentColor" strokeWidth="2" />
            <circle cx="23" cy="24" r="7" fill="#fbbc04" />
            <circle cx="255" cy="255" r="7" fill="#ea4335" />
          </svg>
          <span className="mono">LESS SCROLLING. MORE BUILDING.</span>
        </div>
      </div>
    </section>
  );
}
