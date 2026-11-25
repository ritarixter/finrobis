import { useId, useState, type KeyboardEvent, type ReactNode } from "react";
import styles from "./Tabs.module.scss";

export interface TabItem {
  value: string;
  label: ReactNode;
  disabled?: boolean;
  count?: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  variant?: "segmented" | "underline" | "group";
  fullWidth?: boolean;
  ariaLabel?: string;
  className?: string;
}

export function Tabs({
  items,
  value,
  defaultValue,
  onChange,
  variant = "segmented",
  fullWidth = false,
  ariaLabel = "Tabs",
  className = "",
}: TabsProps) {
  const id = useId();
  const firstEnabled = items.find((item) => !item.disabled)?.value ?? "";
  const [internalValue, setInternalValue] = useState(defaultValue ?? firstEnabled);
  const selectedValue = value ?? internalValue;

  const select = (nextValue: string) => {
    if (value === undefined) setInternalValue(nextValue);
    onChange?.(nextValue);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const enabled = items
      .map((item, itemIndex) => ({ ...item, itemIndex }))
      .filter((item) => !item.disabled);
    const currentEnabledIndex = enabled.findIndex((item) => item.itemIndex === index);
    let next = currentEnabledIndex;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = enabled.length - 1;
    if (event.key === "ArrowLeft")
      next = (currentEnabledIndex - 1 + enabled.length) % enabled.length;
    if (event.key === "ArrowRight") next = (currentEnabledIndex + 1) % enabled.length;
    const target = enabled[next];
    if (!target) return;
    select(target.value);
    document.getElementById(`${id}-tab-${target.itemIndex}`)?.focus();
  };

  return (
    <div
      className={`${styles.tabs} ${styles[variant]} ${fullWidth ? styles.fullWidth : ""} ${className}`}
      role="tablist"
      aria-label={ariaLabel}
    >
      {items.map((item, index) => {
        const selected = item.value === selectedValue;
        return (
          <button
            key={item.value}
            id={`${id}-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls={`${id}-panel-${item.value}`}
            tabIndex={selected ? 0 : -1}
            disabled={item.disabled}
            className={`${styles.tab} ${selected ? styles.active : ""}`}
            onClick={() => select(item.value)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            <span>{item.label}</span>
            {item.count !== undefined ? <span className={styles.count}>{item.count}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
