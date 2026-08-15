import type { CSSProperties, ReactNode } from "react";
import styles from "./CardWithImage.module.scss";
export interface CardWithImageProps {
  title: ReactNode;
  text: ReactNode;
  srcImage: string;
  date?: string;
  className?: string;
  style?: CSSProperties;
}

export function CardWithImage({ title, text, srcImage, date, className = "", style }: CardWithImageProps) {
  const rootClassName = [styles.card, className].filter(Boolean).join(" ");

  return (
    <div className={rootClassName} style={style}>
      <img className={styles.card__image} src={srcImage} alt="" />

      <h3 className={styles.card__title}>{title}</h3>
      {date && (
        <p className={styles.card__date}>
          <span className={styles.card__date__badge}>Date: {date}</span>
        </p>
      )}

      <p className={styles.card__text}>{text}</p>
    </div>
  );
}
