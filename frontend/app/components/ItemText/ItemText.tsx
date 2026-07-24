import type { CSSProperties, ReactNode } from "react";
import "./ItemText.scss";

export interface ItemTextProps {
  title: ReactNode;
  text: ReactNode;
  className?: string;
  style?: CSSProperties;
  titleClassName?: string;
  textClassName?: string;
}

export function ItemText({
  title,
  text,
  className = "",
  style,
  titleClassName = "",
  textClassName = "",
}: ItemTextProps) {
  const rootClassName = ["item-text", className].filter(Boolean).join(" ");
  const titleName = ["item-text__title", titleClassName].filter(Boolean).join(" ");
  const textName = ["item-text__text", textClassName].filter(Boolean).join(" ");

  return (
    <section className={rootClassName} style={style}>
      <h2 className={titleName}>{title}</h2>
      <p className={textName}>{text}</p>
    </section>
  );
}
