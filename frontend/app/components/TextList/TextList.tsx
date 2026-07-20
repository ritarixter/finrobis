import type { CSSProperties, ReactNode } from "react";
import "./TextList.scss";

export interface TextListProps {
  items: ReactNode[];
  className?: string;
  style?: CSSProperties;
  itemClassName?: string;
}

export function TextList({
  items,
  className = "",
  style,
  itemClassName = "",
}: TextListProps) {
  const rootClassName = ["text-list", className].filter(Boolean).join(" ");
  const itemName = ["text-list__item", itemClassName].filter(Boolean).join(" ");

  return (
    <section className={rootClassName} style={style}>
      {items.map((item, index) => (
        <p key={index} className={itemName}>
          {item}
        </p>
      ))}
    </section>
  );
}
