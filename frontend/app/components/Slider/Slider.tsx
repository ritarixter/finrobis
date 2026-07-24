import { useCallback, useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import styles from "./Slider.module.scss";

export interface SliderProps {
  slides: { title: string; imageSrc: string }[];
  className?: string;
  slideClassName?: string;
  options?: EmblaOptionsType;
  showArrows?: boolean;
  showFade?: boolean;
}

function ArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      style={direction === "prev" ? { transform: "rotate(180deg)" } : undefined}
      aria-hidden="true"
    >
      <path
        d="M5 12h14m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Slider({
  slides,
  className = "",
  slideClassName = "",
  options,
  showArrows = true,
  showFade = true,
}: SliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    ...options,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback((api: NonNullable<typeof emblaApi>) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const rootClassName = [styles.slider, className].filter(Boolean).join(" ");
  const slideItemClassName = [styles.slide, slideClassName].filter(Boolean).join(" ");

  return (
    <div className={rootClassName}>
      {showArrows && (
        <button
          type="button"
          className={styles.button}
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="Previous slide"
        >
          <ArrowIcon direction="prev" />
        </button>
      )}

      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {slides.map((slide, index) => (
            <div className={slideItemClassName} key={index}>
              <img className={styles.slide__image} src={slide.imageSrc} alt={slide.title} />
              <p className={styles.slide__title}>{slide.title}</p>
            </div>
          ))}
        </div>

        {showFade && (
          <>
            <span className={styles.fadeLeft} aria-hidden="true" />
            <span className={styles.fadeRight} aria-hidden="true" />
          </>
        )}
      </div>

      {showArrows && (
        <button
          type="button"
          className={styles.button}
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="Next slide"
        >
          <ArrowIcon direction="next" />
        </button>
      )}
    </div>
  );
}
