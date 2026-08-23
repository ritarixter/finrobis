import type { CSSProperties, ReactNode } from "react";
import styles from "./CardWithImage.module.scss";
export interface CardWithImageProps {
  title: ReactNode;
  text: ReactNode;
  srcImage: string;
  date?: string;
  className?: string;
  imageClassName?: string;
  titleClassName?: string;
  textClassName?: string;
  dateClassName?: string;
  imageStyle?: CSSProperties;
  titleStyle?: CSSProperties;
  textStyle?: CSSProperties;
  dateStyle?: CSSProperties;
  style?: CSSProperties;
}

export function CardWithImage({
  title,
  text,
  srcImage,
  date,
  className = "",
  imageClassName = "",
  titleClassName = "",
  textClassName = "",
  dateClassName = "",
  imageStyle,
  titleStyle,
  textStyle,
  dateStyle,
  style,
}: CardWithImageProps) {
  const rootClassName = [styles.card, className].filter(Boolean).join(" ");
  const imageClassNames = [styles.card__image, imageClassName].filter(Boolean).join(" ");
  const titleClassNames = [styles.card__title, titleClassName].filter(Boolean).join(" ");
  const textClassNames = [styles.card__text, textClassName].filter(Boolean).join(" ");
  const dateClassNames = [styles.card__date, dateClassName].filter(Boolean).join(" ");

  return (
    <div className={rootClassName} style={style}>
      <img className={imageClassNames} src={srcImage} alt="" style={imageStyle} />

      <h3 className={titleClassNames} style={titleStyle}>
        {title}
      </h3>
      {date && (
        <p className={dateClassNames} style={dateStyle}>
          <span className={styles.card__date__badge}>Date: {date}</span>
        </p>
      )}

      <p className={textClassNames} style={textStyle}>
        {text}
      </p>
    </div>
  );
}
