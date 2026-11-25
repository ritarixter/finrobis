import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "../Icon/Icon";
import styles from "./Dropdown.module.scss";

export interface DropdownMenuProps {
  children: ReactNode;
  label?: ReactNode;
  description?: ReactNode;
  className?: string;
  headerClassName?: string;
  itemsClassName?: string;
  width?: number | string;
}

export function DropdownMenu({
  children,
  label,
  description,
  className = "",
  headerClassName = "",
  itemsClassName = "",
  width,
}: DropdownMenuProps) {
  return (
    <div
      className={`${styles.menu} ${className}`}
      style={{ width }}
      role="menu"
      aria-label={typeof label === "string" ? label : undefined}
    >
      {label || description ? (
        <div className={`${styles.header} ${headerClassName}`}>
          {label ? <div className={styles.title}>{label}</div> : null}
          {description ? <div className={styles.description}>{description}</div> : null}
        </div>
      ) : null}
      <div className={`${styles.items} ${itemsClassName}`}>{children}</div>
    </div>
  );
}

export interface DropdownItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconName;
  iconSize?: number | string;
  trailing?: ReactNode;
  active?: boolean;
  tone?: "default" | "danger";
  children: ReactNode;
}

export function DropdownItem({
  icon,
  iconSize = 15,
  trailing,
  active = false,
  tone = "default",
  children,
  className = "",
  type = "button",
  ...props
}: DropdownItemProps) {
  return (
    <button
      {...props}
      type={type}
      role="menuitem"
      className={`${styles.item} ${styles[tone]} ${active ? styles.active : ""} ${className}`}
      aria-current={active ? "true" : undefined}
    >
      {icon ? <Icon name={icon} size={iconSize} /> : null}
      <span className={styles.itemLabel}>{children}</span>
      {trailing ? <span className={styles.trailing}>{trailing}</span> : null}
    </button>
  );
}
