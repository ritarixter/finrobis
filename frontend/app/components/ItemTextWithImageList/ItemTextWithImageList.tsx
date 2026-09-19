import type { CSSProperties } from "react";
import {
  ItemTextWithImage,
  type ItemTextWithImageProps,
} from "../ItemTextWithImage/ItemTextWithImage";
import "./ItemTextWithImageList.scss";

export interface ItemTextWithImageListItem extends Omit<ItemTextWithImageProps, "className"> {
  id?: string | number;
}

export interface ItemTextWithImageListProps {
  items: ItemTextWithImageListItem[];
  className?: string;
  style?: CSSProperties;
  itemClassName?: string;
}

export function ItemTextWithImageList({
  items,
  className = "",
  style,
  itemClassName = "",
}: ItemTextWithImageListProps) {
  const rootClassName = ["item-text-with-image-list", className].filter(Boolean).join(" ");

  return (
    <div className={rootClassName} style={style}>
      {items.map((item, index) => {
        const { id, ...itemProps } = item;

        return <ItemTextWithImage key={id ?? index} {...itemProps} className={itemClassName} />;
      })}
    </div>
  );
}
