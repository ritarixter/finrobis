import { type ButtonHTMLAttributes, type CSSProperties, type ReactNode, memo } from "react";
import styles from "./Button.module.scss";

export enum ThemeButton {
  GREEN = "green",
  BLACK = "black",
  ALPHAMARK = "alphamark",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  style?: CSSProperties;
  theme?: ThemeButton;
  disabled?: boolean;
  children: ReactNode;
}

export const Button = memo((props: IButtonProps) => {
  const { style, disabled = false, theme = ThemeButton.GREEN, children, ...otherProps } = props;

  return (
    <button
      style={style}
      className={`${styles.button} ${styles[theme]}`}
      disabled={disabled}
      {...otherProps}
    >
      <span className={styles.label}>{children}</span>
      {theme === ThemeButton.ALPHAMARK && (
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
