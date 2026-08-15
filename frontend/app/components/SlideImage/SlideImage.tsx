import type { CSSProperties, ReactNode } from "react";
import "./SlideImage.scss";

export interface SlideImageProps {
  title: ReactNode;
  text: ReactNode;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  style?: CSSProperties;
  imageClassName?: string;
  titleClassName?: string;
  textClassName?: string;
}

export function SlideImage({
  title,
  text,
  imageSrc,
  imageAlt = "",
  className = "",
  style,
  imageClassName = "",
  titleClassName = "",
  textClassName = "",
}: SlideImageProps) {
  const rootClassName = ["slide-image", className].filter(Boolean).join(" ");
  const imageName = ["slide-image__image", imageClassName].filter(Boolean).join(" ");
  const titleName = ["slide-image__title", titleClassName].filter(Boolean).join(" ");
  const textName = ["slide-image__text", textClassName].filter(Boolean).join(" ");

  return (
    <article className={rootClassName} style={style}>
      <img className={imageName} src={imageSrc} alt={imageAlt} />
      <h3 className={titleName}>{title}</h3>
      <p className={textName}>{text}</p>
    </article>
  );
}
