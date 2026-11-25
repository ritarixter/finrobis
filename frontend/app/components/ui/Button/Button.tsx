import { type ButtonHTMLAttributes, type CSSProperties, type ReactNode, memo } from "react";
import styles from "./Button.module.scss";

export enum ThemeButton {
  GREEN = "green",
  BLACK = "black",
  ALPHAMARK = "alphamark",
}

export type ButtonAppearance = "primary" | "secondary" | "ghost" | "filled" | "danger";
export type ButtonSize = "xs" | "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  style?: CSSProperties;
  theme?: ThemeButton;
  appearance?: ButtonAppearance;
  size?: ButtonSize;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  fullWidth?: boolean;
  active?: boolean;
  loading?: boolean;
  children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    style,
    className = "",
    disabled = false,
    theme,
    appearance,
    size = "md",
    leadingIcon,
    trailingIcon,
    fullWidth = false,
    active = false,
    loading = false,
    children,
    type = "button",
    ...otherProps
  } = props;
  const isLegacy = theme !== undefined || appearance === undefined;
  const legacyTheme = theme ?? ThemeButton.GREEN;
  const classes = [
    styles.button,
    isLegacy ? styles[legacyTheme] : styles.uiKit,
    !isLegacy && appearance ? styles[appearance] : "",
    !isLegacy ? styles[size] : "",
    fullWidth ? styles.fullWidth : "",
    active ? styles.active : "",
    loading ? styles.loading : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      style={style}
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      aria-pressed={active || undefined}
      {...otherProps}
    >
      {loading ? <span className={styles.spinner} aria-hidden="true" /> : leadingIcon}
      <span className={styles.label}>{children}</span>
      {!loading && trailingIcon}
      {legacyTheme === ThemeButton.ALPHAMARK && (
        <span className={styles.alphamarkArrow} aria-hidden="true">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 960 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
          >
            <path d="M0 240V360H720V480H840V360H960V240H840V120H720V240H0Z" fill="currentColor" />
            <path d="M720 0H600V120H720V0Z" fill="currentColor" />
            <path d="M720 480H600V600H720V480Z" fill="currentColor" />
          </svg>
        </span>
      )}
    </button>
  );
});
