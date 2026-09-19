import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import "./Benefit.scss";

export interface BenefitProps {
  title: ReactNode;
  text: ReactNode;
  iconSrc?: string;
  iconAlt?: string;
  icon?: ReactNode;
  className?: string;
  style?: CSSProperties;
  iconClassName?: string;
  iconWrapperClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  titleCounter?: ReactNode;
  titleCounterClassName?: string;
  titleAscent?: ReactNode | boolean;
  titleAscentClassName?: string;
  textClassName?: string;
}

function parseCounterValue(value: ReactNode): number | null {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string") {
    const normalized = value.replace(/[^0-9.,-]/g, "");
    if (!normalized || normalized === "-" || normalized === ".") {
      return null;
    }

    const numericValue = Number(normalized.replace(/,/g, ""));
    return Number.isFinite(numericValue) ? numericValue : null;
  }

  return null;
}

function formatCounterValue(value: number, original: number) {
  if (Number.isInteger(original)) {
    return new Intl.NumberFormat("en-US").format(Math.round(value));
  }

  return value.toLocaleString("en-US", {
    maximumFractionDigits: 1,
    minimumFractionDigits: 0,
  });
}

export function Benefit({
  title,
  text,
  iconSrc,
  iconAlt = "",
  icon,
  className = "",
  style,
  iconClassName = "",
  iconWrapperClassName = "",
  contentClassName = "",
  titleClassName = "",
  titleCounter,
  titleCounterClassName = "",
  titleAscent,
  titleAscentClassName = "",
  textClassName = "",
}: BenefitProps) {
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.5 });
  const [displayCounter, setDisplayCounter] = useState(0);

  const numericTitleValue = useMemo(() => parseCounterValue(title), [title]);
  const hasNumericTitle = numericTitleValue !== null;
  const showTitleMeta = titleCounter !== undefined || titleAscent !== undefined;

  useEffect(() => {
    if (!hasNumericTitle || !isInView) {
      return;
    }

    let animationFrame = 0;
    const duration = 1200;
    const start = performance.now();
    const startValue = 0;
    const endValue = Math.abs(numericTitleValue);

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      const nextValue = startValue + (endValue - startValue) * eased;

      setDisplayCounter(nextValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasNumericTitle, isInView, numericTitleValue]);

  const titleValue = hasNumericTitle ? formatCounterValue(displayCounter, numericTitleValue) : "";
  const titleContent = hasNumericTitle ? titleValue : title;

  return (
    <motion.article
      className={["benefit", className].filter(Boolean).join(" ")}
      style={style}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {(icon || iconSrc) && (
        <motion.div
          className={["benefit__icon-wrapper", iconWrapperClassName].filter(Boolean).join(" ")}
          aria-hidden={iconAlt === ""}
          initial={{ opacity: 0, y: 18, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          {icon ? (
            icon
          ) : (
            <img
              className={["benefit__icon", iconClassName].filter(Boolean).join(" ")}
              src={iconSrc}
              alt={iconAlt}
            />
          )}
        </motion.div>
      )}

      <motion.div
        className={["benefit__content", contentClassName].filter(Boolean).join(" ")}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
      >
        <motion.div
          className={["benefit__title", titleClassName].filter(Boolean).join(" ")}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, delay: 0.28, ease: "easeOut" }}
        >
          {(showTitleMeta || hasNumericTitle) && !(!showTitleMeta && !hasNumericTitle) ? (
            <span className="benefit__title-row">
              <span className="benefit__title-main" ref={counterRef}>
                {titleContent}
              </span>

              {(showTitleMeta || hasNumericTitle) && (
                <span className="benefit__title-meta" aria-label="Title trend">
                  {titleAscent !== undefined && (
                    <span
                      className={["benefit__title-ascent", titleAscentClassName]
                        .filter(Boolean)
                        .join(" ")}
                      aria-hidden="true"
                    >
                      {titleAscent === true ? "▲" : titleAscent}
                    </span>
                  )}
                  {titleCounter !== undefined && (
                    <span
                      className={["benefit__title-counter", titleCounterClassName]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {titleCounter}
                    </span>
                  )}
                </span>
              )}
            </span>
          ) : (
            title
          )}
        </motion.div>

        <motion.div
          className={["benefit__text", textClassName].filter(Boolean).join(" ")}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, delay: 0.4, ease: "easeOut" }}
        >
          {text}
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
