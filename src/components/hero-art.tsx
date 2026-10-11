import Image from "next/image";

export function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true" data-parallax>
      <div className="ribbon-float" data-decorative-motion>
        <Image
          src="/images/signal-ribbon.webp"
          alt=""
          width={1100}
          height={1430}
          sizes="(max-width: 700px) 100vw, 55vw"
          priority
          loading="eager"
        />
      </div>
    </div>
  );
}
