import type { CSSProperties, ReactNode } from "react";
import "./CardWithIcon.scss";

export interface CardWithIconProps {
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
  textClassName?: string;
}

export function CardWithIcon({
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
  textClassName = "",
}: CardWithIconProps) {
  const rootClassName = ["card-with-icon", className].filter(Boolean).join(" ");
  const iconWrapperName = ["card-with-icon__icon-wrapper", iconWrapperClassName]
    .filter(Boolean)
    .join(" ");
  const iconName = ["card-with-icon__icon", iconClassName].filter(Boolean).join(" ");
  const contentName = ["card-with-icon__content", contentClassName].filter(Boolean).join(" ");
  const titleName = ["card-with-icon__title", titleClassName].filter(Boolean).join(" ");
  const textName = ["card-with-icon__text", textClassName].filter(Boolean).join(" ");

  return (
    <article className={rootClassName} style={style}>
      {(icon || iconSrc) && (
        <div className={iconWrapperName} aria-hidden={iconAlt === ""}>
          {icon ? icon : <img className={iconName} src={iconSrc} alt={iconAlt} />}
        </div>
      )}

      <div className={contentName}>
        <div className={titleName}>{title}</div>
        <div className={textName}>{text}</div>
      </div>
    </article>
  );
}
