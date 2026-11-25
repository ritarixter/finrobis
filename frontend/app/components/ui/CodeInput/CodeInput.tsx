import {
  useRef,
  useState,
  type CSSProperties,
  type ChangeEvent,
  type ClipboardEvent,
  type KeyboardEvent,
} from "react";
import styles from "./CodeInput.module.scss";

export interface CodeInputProps {
  length?: number;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  inputMode?: "numeric" | "text";
  ariaLabel?: string;
  className?: string;
}

export function CodeInput({
  length = 6,
  value,
  defaultValue = "",
  onChange,
  onComplete,
  disabled = false,
  autoFocus = false,
  inputMode = "numeric",
  ariaLabel = "Verification code",
  className = "",
}: CodeInputProps) {
  const [internalValue, setInternalValue] = useState(defaultValue.slice(0, length));
  const currentValue = (value ?? internalValue).padEnd(length, " ").slice(0, length);
  const refs = useRef<Array<HTMLInputElement | null>>([]);
  const allowed = inputMode === "numeric" ? /\d/g : /[a-zA-Z0-9]/g;

  const commit = (characters: string[]) => {
    const next = characters.join("").replace(/\s/g, "").slice(0, length);
    if (value === undefined) setInternalValue(next);
    onChange?.(next);
    if (next.length === length) onComplete?.(next);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const match = event.target.value.match(allowed)?.at(-1) ?? "";
    const characters = currentValue.split("");
    characters[index] = match || " ";
    commit(characters);
    if (match && index < length - 1) refs.current[index + 1]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === "Backspace" && currentValue[index] === " " && index > 0) {
      event.preventDefault();
      const characters = currentValue.split("");
      characters[index - 1] = " ";
      commit(characters);
      refs.current[index - 1]?.focus();
    }
    if (event.key === "ArrowLeft" && index > 0) refs.current[index - 1]?.focus();
    if (event.key === "ArrowRight" && index < length - 1) refs.current[index + 1]?.focus();
  };

  const handlePaste = (event: ClipboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    const pasted = event.clipboardData.getData("text").match(allowed)?.join("") ?? "";
    if (!pasted) return;
    const next = pasted.slice(0, length);
    commit(next.padEnd(length, " ").split(""));
    refs.current[Math.min(next.length, length) - 1]?.focus();
  };

  return (
    <div
      className={`${styles.root} ${className}`}
      style={{ "--code-length": length } as CSSProperties}
      role="group"
      aria-label={ariaLabel}
      onPaste={handlePaste}
    >
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          ref={(node) => {
            refs.current[index] = node;
          }}
          className={styles.cell}
          type="text"
          inputMode={inputMode}
          autoComplete={index === 0 ? "one-time-code" : "off"}
          maxLength={1}
          value={currentValue[index] === " " ? "" : currentValue[index]}
          disabled={disabled}
          autoFocus={autoFocus && index === 0}
          aria-label={`${ariaLabel}, character ${index + 1} of ${length}`}
          onChange={(event) => handleChange(event, index)}
          onKeyDown={(event) => handleKeyDown(event, index)}
          onFocus={(event) => event.currentTarget.select()}
        />
      ))}
    </div>
  );
}
