import type { CSSProperties, ReactNode } from "react";
import "./InfoBlock.scss";

export interface InfoBlockProps {
  title: ReactNode;
  text: ReactNode;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  style?: CSSProperties;
  imageClassName?: string;
  imageWrapperClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  textClassName?: string;
}

export function InfoBlock({
  title,
  text,
  imageSrc,
  imageAlt = "",
  className = "",
  style,
  imageClassName = "",
  imageWrapperClassName = "",
  contentClassName = "",
  titleClassName = "",
  textClassName = "",
}: InfoBlockProps) {
  const rootClassName = ["info-block", className].filter(Boolean).join(" ");
  const imageWrapperName = ["info-block__image-wrapper", imageWrapperClassName]
    .filter(Boolean)
    .join(" ");
  const imageName = ["info-block__image", imageClassName].filter(Boolean).join(" ");
  const contentName = ["info-block__content", contentClassName].filter(Boolean).join(" ");
  const titleName = ["info-block__title", titleClassName].filter(Boolean).join(" ");
  const textName = ["info-block__text", textClassName].filter(Boolean).join(" ");

  return (
    <article className={rootClassName} style={style}>
      <div className={imageWrapperName} aria-hidden={imageAlt === ""}>
        <img className={imageName} src={imageSrc} alt={imageAlt} />
      </div>

      <div className={contentName}>
        <div className={titleName}>{title}</div>
        <div className={textName}>{text}</div>
      </div>
    </article>
  );
}
