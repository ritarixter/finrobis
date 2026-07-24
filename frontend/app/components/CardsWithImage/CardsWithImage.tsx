import { CardWithImage } from "../CardWithImage/CardWithImage";
import type { CardWithImageProps } from "../CardWithImage/CardWithImage";
import styles from "./CardsWithImage.module.scss";

interface CardsWithImageProps {
  items: CardWithImageProps[];
}

export function CardsWithImage({ items }: CardsWithImageProps) {
  return (
    <div className={styles.grid}>
      {items.map((item, index) => (
        <CardWithImage key={index} {...item} />
      ))}
    </div>
  );
}
