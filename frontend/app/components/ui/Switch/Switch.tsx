import { useId, type InputHTMLAttributes, type ReactNode } from "react";
import styles from "./Switch.module.scss";

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label: ReactNode;
  labelPosition?: "start" | "end";
}

export function Switch({
  id,
  label,
  labelPosition = "end",
  className = "",
  disabled,
  ...props
}: SwitchProps) {
  const generatedId = useId();
  const switchId = id ?? generatedId;

  return (
    <label
      htmlFor={switchId}
      className={`${styles.root} ${styles[labelPosition]} ${disabled ? styles.disabled : ""} ${className}`}
    >
      {labelPosition === "start" ? <span className={styles.label}>{label}</span> : null}
      <input
        {...props}
        id={switchId}
        type="checkbox"
        disabled={disabled}
        className={styles.input}
      />
      <span className={styles.track} aria-hidden="true">
        <span className={styles.thumb} />
      </span>
      {labelPosition === "end" ? <span className={styles.label}>{label}</span> : null}
    </label>
  );
}
