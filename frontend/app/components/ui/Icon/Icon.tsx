import type { CSSProperties, HTMLAttributes } from "react";
import { iconAssets, type IconName } from "./iconAssets";
import styles from "./Icon.module.scss";

export type { IconName } from "./iconAssets";

export interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  name: IconName;
  size?: number | string;
  label?: string;
}

type IconStyle = CSSProperties & { "--ui-icon-url": string };

export function Icon({ name, size = 16, label, className = "", style, ...props }: IconProps) {
  const mergedStyle: IconStyle = {
    "--ui-icon-url": `url("${iconAssets[name]}")`,
    width: size,
    height: size,
    ...style,
  };

  return (
    <span
      {...props}
      className={`${styles.icon} ${className}`}
      style={mergedStyle}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}
