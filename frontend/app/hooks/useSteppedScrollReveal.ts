import { useLayoutEffect, useRef } from "react";

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export function useSteppedScrollReveal<T extends HTMLElement>(itemSelector: string) {
  const rootRef = useRef<T>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>(itemSelector));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame = 0;

    items.forEach((item, index) => {
      item.setAttribute("data-step-scroll-item", "");
      item.style.setProperty("--step-index", String(index));
    });

    const update = () => {
      animationFrame = 0;

      const viewportHeight = window.innerHeight;
      const bounds = root.getBoundingClientRect();
      const start = viewportHeight * 0.9;
      const scrollDistance = Math.max(
        viewportHeight * 0.66,
        Math.min(bounds.height * 0.78, viewportHeight * 1.2),
      );
      const progress = reducedMotion ? 1 : clamp((start - bounds.top) / scrollDistance);

      root.style.setProperty("--step-scroll-progress", progress.toFixed(4));
      root.style.setProperty("--step-scroll-percent", `${progress * 100}%`);

      items.forEach((item, index) => {
        const threshold = (index + 1) / items.length;
        item.toggleAttribute("data-step-visible", progress + 0.001 >= threshold);
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
