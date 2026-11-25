import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Badge.module.scss";

export type BadgeTone =
  | "neutral"
  | "pending"
  | "completed"
  | "failed"
  | "processing"
  | "reversed"
  | "rejected"
  | "verified";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  tone?: BadgeTone;
  dot?: boolean;
}

export function Badge({
  children,
  tone = "neutral",
  dot = false,
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span {...props} className={`${styles.badge} ${styles[tone]} ${className}`}>
      {dot ? <span className={styles.dot} aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
