import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "../Icon/Icon";
import styles from "./Controls.module.scss";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  label: string;
  size?: "sm" | "md" | "lg";
  iconSize?: number | string;
  tone?: "default" | "danger";
  active?: boolean;
}

export function IconButton({
  icon,
  label,
  size = "md",
  iconSize,
  tone = "default",
  active = false,
  className = "",
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={`${styles.iconButton} ${styles[size]} ${styles[tone]} ${active ? styles.active : ""} ${className}`}
      aria-label={label}
      aria-pressed={active || undefined}
    >
      <Icon name={icon} size={iconSize ?? (size === "sm" ? 14 : size === "lg" ? 20 : 16)} />
    </button>
  );
}

export interface NavigationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  label: ReactNode;
  active?: boolean;
  expanded?: boolean;
  badge?: ReactNode;
}

export function NavigationButton({
  icon,
  label,
  active = false,
  expanded,
  badge,
  className = "",
  type = "button",
  ...props
}: NavigationButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={`${styles.navigationButton} ${active ? styles.active : ""} ${className}`}
      aria-current={active ? "page" : undefined}
      aria-expanded={expanded}
    >
      <Icon name={icon} size={16} />
      <span className={styles.navigationLabel}>{label}</span>
      {badge ? <span className={styles.navigationBadge}>{badge}</span> : null}
      {expanded !== undefined ? (
        <Icon name={expanded ? "chevron-up" : "chevron-down"} size={14} />
      ) : null}
    </button>
  );
}

export interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: IconName;
  active?: boolean;
  appearance?: "tab" | "outline" | "primary";
  trailingArrow?: boolean;
}

export function ActionButton({
  children,
  icon,
  active = false,
  appearance = "outline",
  trailingArrow = false,
  className = "",
  type = "button",
  ...props
}: ActionButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={`${styles.actionButton} ${styles[appearance]} ${active ? styles.active : ""} ${className}`}
      aria-pressed={active || undefined}
    >
      {icon ? <Icon name={icon} size={14} /> : null}
      <span>{children}</span>
      {trailingArrow ? <Icon name="arrow-right" size={14} /> : null}
    </button>
  );
}

type LinkButtonCommonProps = {
  children: ReactNode;
  active?: boolean;
  external?: boolean;
};

export type LinkButtonProps = LinkButtonCommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children">;

export function LinkButton({
  children,
  active = false,
  external = false,
  className = "",
  target,
  rel,
  ...props
}: LinkButtonProps) {
  return (
    <a
      {...props}
      className={`${styles.linkButton} ${active ? styles.active : ""} ${className}`}
      target={target ?? (external ? "_blank" : undefined)}
      rel={rel ?? (external ? "noreferrer" : undefined)}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </a>
  );
}

export interface SortButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: ReactNode;
  direction?: "asc" | "desc" | null;
}

export function SortButton({
  label,
  direction = null,
  className = "",
  type = "button",
  ...props
}: SortButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={`${styles.sortButton} ${direction ? styles.active : ""} ${className}`}
      aria-label={`${typeof label === "string" ? label : "Sort"}${direction ? `, ${direction === "asc" ? "ascending" : "descending"}` : ""}`}
    >
      <span>{label}</span>
      {direction ? (
        <Icon name={direction === "asc" ? "chevron-up" : "chevron-down"} size={13} />
      ) : null}
    </button>
  );
}
