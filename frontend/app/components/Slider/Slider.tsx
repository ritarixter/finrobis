import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType, EngineType, ScrollBodyType } from "embla-carousel";
import styles from "./Slider.module.scss";

export interface SliderProps {
  slides: { title: string; imageSrc: string }[];
  className?: string;
  slideClassName?: string;
  options?: EmblaOptionsType;
  showFade?: boolean;
  autoPlay?: boolean;
  autoPlayDelay?: number;
  autoScrollSpeed?: number;
}

function createContinuousScrollBody(engine: EngineType, speed: number): ScrollBodyType {
  const { location, previousLocation, target, scrollTarget, index, indexPrevious, eventHandler } =
    engine;
  const velocity = -Math.abs(speed);
  const noop = () => scrollBody;
  let direction = -1;
  let rawLocation = location.get();
  let previousRawLocation = rawLocation;

  const scrollBody: ScrollBodyType = {
    direction: () => direction,
    duration: () => -1,
    velocity: () => velocity,
    settled: () => false,
    seek: () => {
      previousLocation.set(location);
      rawLocation += velocity;
      location.add(velocity);
      target.set(location);

      direction = Math.sign(rawLocation - previousRawLocation);
      previousRawLocation = rawLocation;

      const previousIndex = index.get();
      const nextIndex = scrollTarget.byDistance(0, false).index;

      if (previousIndex !== nextIndex) {
        indexPrevious.set(previousIndex);
        index.set(nextIndex);
        eventHandler.emit("select");
      }

      return scrollBody;
    },
    useBaseFriction: noop,
    useBaseDuration: noop,
    useFriction: noop,
    useDuration: noop,
  };

  return scrollBody;
}

export function Slider({
  slides,
  className = "",
  slideClassName = "",
  options,
  showFade = true,
  autoPlay = true,
  autoPlayDelay = 600,
  autoScrollSpeed = 0.6,
}: SliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    duration: 40,
    ...options,
    loop: true,
    watchDrag: false,
  });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    const animationFrame = window.requestAnimationFrame(updatePreference);

    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    if (!emblaApi || !autoPlay || prefersReducedMotion || slides.length < 2) {
      return;
    }

    const engine = emblaApi.internalEngine();
    const defaultScrollBody = engine.scrollBody;
    const continuousScrollBody = createContinuousScrollBody(engine, autoScrollSpeed);
    const startTimer = window.setTimeout(() => {
      engine.scrollBody = continuousScrollBody;
      engine.animation.start();
    }, autoPlayDelay);

    return () => {
      window.clearTimeout(startTimer);

      if (engine.scrollBody === continuousScrollBody) {
        engine.scrollBody = defaultScrollBody;
      }
    };
  }, [autoPlay, autoPlayDelay, autoScrollSpeed, emblaApi, prefersReducedMotion, slides.length]);

  const carouselSlides =
    slides.length > 1 && slides.length < 6
      ? Array.from({ length: Math.ceil(6 / slides.length) }, () => slides).flat()
      : slides;

  const rootClassName = [styles.slider, className].filter(Boolean).join(" ");
  const slideItemClassName = [styles.slide, slideClassName].filter(Boolean).join(" ");

  return (
    <div className={rootClassName} role="region" aria-label="Content carousel">
      <div className={styles.viewport} ref={emblaRef} aria-live="off">
        <div className={styles.container}>
          {carouselSlides.map((slide, index) => {
            const isClone = index >= slides.length;

            return (
              <div
                className={slideItemClassName}
                key={`${slide.imageSrc}-${index}`}
                aria-hidden={isClone || undefined}
              >
                <img
                  className={styles.slide__image}
                  src={slide.imageSrc}
                  alt={isClone ? "" : slide.title}
                />
                <p className={styles.slide__title}>{slide.title}</p>
              </div>
            );
          })}
        </div>

        {showFade && (
          <>
            <span className={styles.fadeLeft} aria-hidden="true" />
            <span className={styles.fadeRight} aria-hidden="true" />
          </>
        )}
      </div>
    </div>
  );
}
