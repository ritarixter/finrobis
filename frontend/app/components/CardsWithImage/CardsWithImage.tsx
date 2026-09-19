import type { CSSProperties } from "react";
import { CardWithImage } from "../CardWithImage/CardWithImage";
import type { CardWithImageProps } from "../CardWithImage/CardWithImage";
import styles from "./CardsWithImage.module.scss";

interface CardsWithImageProps {
  items: CardWithImageProps[];
  className?: string;
  style?: CSSProperties;
  itemClassName?: string;
}

export function CardsWithImage({
  items,
  className = "",
  style,
  itemClassName = "",
}: CardsWithImageProps) {
  const rootClassName = [styles.grid, className].filter(Boolean).join(" ");

  return (
    <div className={rootClassName} style={style}>
      {items.map((item, index) => (
        <CardWithImage key={index} {...item} className={itemClassName} />
      ))}
    </div>
  );
}
