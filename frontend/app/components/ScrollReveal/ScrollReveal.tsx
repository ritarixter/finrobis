import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

const REVEAL_SELECTOR = [
  ".section",
  "section",
  "article",
  ".benefit",
  ".item-text-with-image",
  ".item-text",
  ".market-data-card",
  ".technology-cards__card",
  ".items-container__item",
  ".card-with-image",
  ".card-with-icon",
  '[class*="Section"]',
  '[class*="Card"]',
  '[class*="Block"]',
  "h1",
  "h2",
  "h3",
  "p",
  ".item-text__title",
  ".item-text__text",
  ".benefit__title",
  ".benefit__text",
  ".card__title",
  ".card__text",
  ".items-container__title",
  ".items-container__subtitle",
  ".items-container__text",
  ".technology-cards__title",
].join(",");

const VISIBLE_CLASS = "scroll-reveal--visible";

export function ScrollReveal() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.documentElement.classList.add("scroll-reveal-enabled");

    return () => {
      document.documentElement.classList.remove("scroll-reveal-enabled");
    };
  }, []);

  useLayoutEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter(
      (element) => !element.closest("[data-scroll-motion-root]"),
    );
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add(VISIBLE_CLASS));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add(VISIBLE_CLASS);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((element) => {
      const bounds = element.getBoundingClientRect();
      const isAlreadyVisible = bounds.top < window.innerHeight * 0.92 && bounds.bottom > 0;

      if (isAlreadyVisible) {
        element.classList.add(VISIBLE_CLASS);
      } else {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
