export interface TypeTwitterOptions {
  charactersPerSecond?: number;
  startDelay?: number;
  threshold?: number;
}

export function typeTwitter(
  element: HTMLElement,
  text: string,
  { charactersPerSecond = 70, startDelay = 300, threshold = 0.25 }: TypeTwitterOptions = {}
) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion) {
    element.textContent = text;
    return () => undefined;
  }

  const previousMinHeight = element.style.minHeight;
  const characterInterval = 1000 / Math.max(charactersPerSecond, 1);
  let characterIndex = 0;
  let animationFrame = 0;
  let nextCharacterAt = 0;
  let hasStarted = false;

  element.style.minHeight = `${element.getBoundingClientRect().height}px`;
  element.textContent = "";
  element.dataset.typing = "waiting";
  element.setAttribute("aria-label", text);

  const getCharacterPause = (character: string) => {
    if (character === "\n") return 90;
    if (/[,:]/.test(character)) return 35;
    if (/[.)}]/.test(character)) return 55;
    return 0;
  };

  const typeNextCharacter = (time: number) => {
    while (characterIndex < text.length && time >= nextCharacterAt) {
      const character = text[characterIndex];
      element.textContent += character;
      characterIndex += 1;
      nextCharacterAt += characterInterval + getCharacterPause(character);
    }

    if (characterIndex < text.length) {
      animationFrame = window.requestAnimationFrame(typeNextCharacter);
      return;
    }

    element.dataset.typing = "done";
  };

  const start = () => {
    if (hasStarted) return;

    hasStarted = true;
    element.dataset.typing = "active";
    nextCharacterAt = performance.now() + startDelay;
    animationFrame = window.requestAnimationFrame(typeNextCharacter);
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;

      observer.disconnect();
      start();
    },
    { threshold }
  );

  observer.observe(element);

  return () => {
    observer.disconnect();
    window.cancelAnimationFrame(animationFrame);
    element.textContent = text;
    element.style.minHeight = previousMinHeight;
    element.removeAttribute("data-typing");
    element.removeAttribute("aria-label");
  };
}
