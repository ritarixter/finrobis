import type { ReactNode } from "react";
import styles from "./CardWithImage.module.scss";
export interface CardWithImageProps {
  title: ReactNode;
  text: ReactNode;
  srcImage: string;
  date?: string;
}

export function CardWithImage({ title, text, srcImage, date }: CardWithImageProps) {
  return (
    <div className={styles.card}>
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
