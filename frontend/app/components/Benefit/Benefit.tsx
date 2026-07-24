import type { CSSProperties, ReactNode } from "react";
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
  textClassName?: string;
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
  textClassName = "",
}: BenefitProps) {
  const rootClassName = ["benefit", className].filter(Boolean).join(" ");
  const iconWrapperName = ["benefit__icon-wrapper", iconWrapperClassName].filter(Boolean).join(" ");
  const iconName = ["benefit__icon", iconClassName].filter(Boolean).join(" ");
  const contentName = ["benefit__content", contentClassName].filter(Boolean).join(" ");
  const titleName = ["benefit__title", titleClassName].filter(Boolean).join(" ");
  const textName = ["benefit__text", textClassName].filter(Boolean).join(" ");

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
