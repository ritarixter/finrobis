import type { CSSProperties, ReactNode } from "react";
import { ItemText } from "../ItemText/ItemText";
import "./ItemTextWithImage.scss";
export type ImagePlacement = "right" | "left" | "bottom";
export interface ItemTextWithImageProps {
  title: ReactNode;
  text: ReactNode;
  imageSrc: string;
  imageAlt?: string;
  imagePlacement?: ImagePlacement;
  className?: string;
  style?: CSSProperties;
  itemTextClassName?: string;
  imageClassName?: string;
  imageStyle?: CSSProperties;
}

export function ItemTextWithImage({
  title,
  text,
  imageSrc,
  imageAlt = "",
  imagePlacement = "right",
  className = "",
  style,
  itemTextClassName = "",
  imageClassName = "",
  imageStyle,
}: ItemTextWithImageProps) {
  const rootClassName = [
    "item-text-with-image",
    `item-text-with-image--${imagePlacement}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const imageName = ["item-text-with-image__image", imageClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={rootClassName} style={style}>
      <div className="item-text-with-image__content">
        <ItemText title={title} text={text} className={itemTextClassName} />
      </div>
      <div className="item-text-with-image__media">
        <img
          className={imageName}
          src={imageSrc}
          alt={imageAlt}
          style={imageStyle}
        />
      </div>
    </section>
  );
}
