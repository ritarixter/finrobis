import type { CSSProperties } from "react";
import { SlideImage, type SlideImageProps } from "../SlideImage/SlideImage";
import "./SlideImageList.scss";

export interface SlideImageListItem extends Omit<SlideImageProps, "className" | "style"> {
  id?: string | number;
}

export interface SlideImageListProps {
  items: SlideImageListItem[];
  className?: string;
  style?: CSSProperties;
  itemClassName?: string;
}

export function SlideImageList({
  items,
  className = "",
  style,
  itemClassName = "",
}: SlideImageListProps) {
  const rootClassName = ["slide-image-list", className].filter(Boolean).join(" ");

  return (
    <div className={rootClassName} style={style}>
      {items.map((item, index) => {
        const { id, ...slideImageProps } = item;

        return <SlideImage key={id ?? index} {...slideImageProps} className={itemClassName} />;
      })}
    </div>
  );
}
