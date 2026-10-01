import { useLayoutEffect, useRef } from "react";

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export function useScrollCardMotion<T extends HTMLElement>(itemSelector: string) {
  const rootRef = useRef<T>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>(itemSelector));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame = 0;

    items.forEach((item) => item.setAttribute("data-scroll-motion-item", ""));

    const update = () => {
      animationFrame = 0;

      const viewportHeight = window.innerHeight;
      const rootBounds = root.getBoundingClientRect();
      const sectionProgress = reducedMotion
        ? 1
        : clamp(
            (viewportHeight * 0.88 - rootBounds.top) /
              Math.max(viewportHeight * 0.58 + rootBounds.height, 1),
          );

      root.style.setProperty("--scroll-section-progress", sectionProgress.toFixed(4));
      root.style.setProperty("--scroll-section-percent", `${sectionProgress * 100}%`);
      root.style.setProperty("--scroll-section-angle", `${sectionProgress * 240}deg`);

      items.forEach((item, index) => {
        const bounds = item.getBoundingClientRect();
        const start = viewportHeight * 0.94;
        const end = viewportHeight * 0.3;
        const progress = reducedMotion ? 1 : clamp((start - bounds.top) / (start - end));
        const inverse = 1 - progress;
        const direction = index % 2 === 0 ? -1 : 1;
        const horizontalShift = inverse * 92 * direction;

        item.style.setProperty("--scroll-card-progress", progress.toFixed(4));
        item.style.setProperty("--scroll-card-opacity", (0.14 + progress * 0.86).toFixed(4));
        item.style.setProperty("--scroll-card-x", `${horizontalShift}px`);
        item.style.setProperty("--scroll-card-x-soft", `${horizontalShift * 0.48}px`);
        item.style.setProperty("--scroll-card-y", `${inverse * 86}px`);
        item.style.setProperty("--scroll-card-y-soft", `${inverse * 48}px`);
        item.style.setProperty("--scroll-card-scale", (0.9 + progress * 0.1).toFixed(4));
        item.style.setProperty("--scroll-card-scale-soft", (0.96 + progress * 0.04).toFixed(4));
        item.style.setProperty("--scroll-card-tilt", `${inverse * direction * -8}deg`);
        item.style.setProperty("--scroll-card-rotate", `${inverse * direction * 3.5}deg`);
        item.style.setProperty("--scroll-card-blur", `${inverse * 7}px`);
        item.style.setProperty("--scroll-card-clip", `${inverse * 24}%`);
        item.style.setProperty("--scroll-card-reveal", `${inverse * 100}%`);
        item.style.setProperty("--scroll-card-horizontal-reveal", `${inverse * 100}%`);
        item.style.setProperty("--scroll-card-aperture", `${inverse * 48}%`);
        item.style.setProperty("--scroll-card-progress-percent", `${progress * 100}%`);
        item.style.setProperty("--scroll-card-image-x", `${horizontalShift * -0.28}px`);
        item.style.setProperty("--scroll-card-image-y", `${inverse * 38}px`);
        item.style.setProperty("--scroll-card-image-scale", (1.08 - progress * 0.08).toFixed(4));
        item.style.setProperty("--scroll-card-icon-rotate", `${inverse * direction * -32}deg`);
        item.style.setProperty("--scroll-card-shine", `${100 - progress * 200}%`);
        item.style.setProperty(
          "--scroll-card-glow",
          (Math.sin(progress * Math.PI) * 0.38).toFixed(4),
        );
      });
    };

    const requestUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [itemSelector]);

  return rootRef;
}
