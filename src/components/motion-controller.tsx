"use client";

import { useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "@phosphor-icons/react";

export function MotionController() {
  const [paused, setPaused] = useState(false);
  const revealed = useRef(new Set<Element>());
  useEffect(() => {
    const root = document.documentElement;
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const art = document.querySelector<HTMLElement>("[data-parallax]");
    const hero = document.querySelector("#hero");
    let visible = true;
    let frame = 0;
    const entrances = new Set<Animation>();
    const sync = () => {
      const stop = paused || media.matches || document.hidden || !visible;
      root.dataset.motion = stop ? "paused" : "running";
      if (paused || media.matches || document.hidden) {
        entrances.forEach((animation) => animation.cancel());
        entrances.clear();
      }
      if (stop) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
      if (stop && art) art.style.removeProperty("transform");
    };
    const scroll = () => {
      if (frame || paused || media.matches || document.hidden || !visible)
        return;
      frame = requestAnimationFrame(() => {
        if (art)
          art.style.transform = `translate3d(0,${Math.min(scrollY * 0.12, 100)}px,0)`;
        frame = 0;
      });
    };
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        sync();
      },
      { threshold: 0 },
    );
    if (hero) heroObserver.observe(hero);
    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            revealed.current.add(el);
            if (!paused && !media.matches && !document.hidden) {
              const animation = el.animate(
                [
                  { opacity: 0.3, transform: "translateY(28px)" },
                  { opacity: 1, transform: "translateY(0)" },
                ],
                { duration: 750, easing: "cubic-bezier(.2,.7,.2,1)" },
              );
              entrances.add(animation);
              animation.onfinish = () => entrances.delete(animation);
            }
            revealObserver.unobserve(el);
          }
        }
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      if (!revealed.current.has(el)) revealObserver.observe(el);
    });
    sync();
    window.addEventListener("scroll", scroll, { passive: true });
    document.addEventListener("visibilitychange", sync);
    media.addEventListener("change", sync);
    return () => {
      cancelAnimationFrame(frame);
      heroObserver.disconnect();
      revealObserver.disconnect();
      window.removeEventListener("scroll", scroll);
      document.removeEventListener("visibilitychange", sync);
      media.removeEventListener("change", sync);
      entrances.forEach((animation) => animation.cancel());
      delete root.dataset.motion;
    };
  }, [paused]);
  const Icon = paused ? PlayIcon : PauseIcon;
  return (
    <button
      type="button"
      className="motion-toggle"
      onClick={() => setPaused(!paused)}
      aria-label={paused ? "Resume animations" : "Pause animations"}
      aria-pressed={paused}
    >
      <Icon size={18} aria-hidden="true" />
      <span>{paused ? "Resume motion" : "Pause motion"}</span>
    </button>
  );
}
