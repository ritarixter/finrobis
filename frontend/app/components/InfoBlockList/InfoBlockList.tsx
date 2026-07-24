import type { CSSProperties } from "react";
import { InfoBlock, type InfoBlockProps } from "../InfoBlock/InfoBlock";
import "./InfoBlockList.scss";

export interface InfoBlockListItem extends Omit<InfoBlockProps, "className" | "style"> {
  id?: string | number;
}

export interface InfoBlockListProps {
  items: InfoBlockListItem[];
  className?: string;
  style?: CSSProperties;
  itemClassName?: string;
}

export function InfoBlockList({
  items,
  className = "",
  style,
  itemClassName = "",
}: InfoBlockListProps) {
  const rootClassName = ["info-block-list", className].filter(Boolean).join(" ");

  return (
    <div className={rootClassName} style={style}>
      {items.map((item, index) => {
        const { id, ...itemProps } = item;

        return <InfoBlock key={id ?? index} {...itemProps} className={itemClassName} />;
      })}
    </div>
  );
}
