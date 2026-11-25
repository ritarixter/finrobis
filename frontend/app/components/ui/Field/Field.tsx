import {
  forwardRef,
  useId,
  useState,
  type CSSProperties,
  type ChangeEvent,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { Icon, type IconName } from "../Icon/Icon";
import styles from "./Field.module.scss";

type FieldChromeProps = {
  id: string;
  label?: ReactNode;
  required?: boolean;
  helperText?: ReactNode;
  error?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
};

function FieldChrome({
  id,
  label,
  required,
  helperText,
  error,
  action,
  children,
  className = "",
}: FieldChromeProps) {
  return (
    <div className={`${styles.field} ${error ? styles.hasError : ""} ${className}`}>
      {label || action ? (
        <div className={styles.labelRow}>
          {label ? (
            <label className={styles.label} htmlFor={id}>
              {label}
              {required ? <span className={styles.required}>*</span> : null}
            </label>
          ) : (
            <span />
          )}
          {action ? <div className={styles.action}>{action}</div> : null}
        </div>
      ) : null}
      {children}
      {error ? (
        <div id={`${id}-error`} className={styles.error} role="alert">
          {error}
        </div>
      ) : helperText ? (
        <div id={`${id}-helper`} className={styles.helper}>
          {helperText}
        </div>
      ) : null}
    </div>
  );
}

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  action?: ReactNode;
  leadingIcon?: IconName;
  trailingContent?: ReactNode;
  fieldClassName?: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(function InputField(
  {
    id,
    label,
    helperText,
    error,
    action,
    leadingIcon,
    trailingContent,
    fieldClassName,
    className = "",
    required,
    disabled,
    type = "text",
    ...props
  },
  ref
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const describedBy = error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined;

  return (
    <FieldChrome
      id={inputId}
      label={label}
      required={required}
      helperText={helperText}
      error={error}
      action={action}
      className={fieldClassName}
    >
      <div className={styles.control}>
        {leadingIcon ? <Icon name={leadingIcon} size={15} className={styles.leadingIcon} /> : null}
        <input
          {...props}
          ref={ref}
          id={inputId}
          type={type}
          required={required}
          disabled={disabled}
          className={`${styles.input} ${leadingIcon ? styles.withLeading : ""} ${trailingContent ? styles.withTrailing : ""} ${className}`}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
        />
        {trailingContent ? <div className={styles.trailing}>{trailingContent}</div> : null}
      </div>
    </FieldChrome>
  );
});

export interface SelectOption {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  action?: ReactNode;
  options: SelectOption[];
  placeholder?: string;
  fieldClassName?: string;
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(function SelectField(
  {
    id,
    label,
    helperText,
    error,
    action,
    options,
    placeholder,
    fieldClassName,
    className = "",
    required,
    ...props
  },
  ref
) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const describedBy = error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined;

  return (
    <FieldChrome
      id={selectId}
      label={label}
      required={required}
      helperText={helperText}
      error={error}
      action={action}
      className={fieldClassName}
    >
      <div className={styles.control}>
        <select
          {...props}
          ref={ref}
          id={selectId}
          required={required}
          className={`${styles.input} ${styles.select} ${className}`}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
        >
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        <Icon name="chevron-down" size={14} className={styles.selectIcon} />
      </div>
    </FieldChrome>
  );
});

export interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  action?: ReactNode;
  showCount?: boolean;
  fieldClassName?: string;
}

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  function TextareaField(
    {
      id,
      label,
      helperText,
      error,
      action,
      showCount = false,
      fieldClassName,
      className = "",
      required,
      value,
      defaultValue,
      onChange,
      maxLength,
      rows = 4,
      ...props
    },
    ref
  ) {
    const generatedId = useId();
    const textareaId = id ?? generatedId;
    const [uncontrolledValue, setUncontrolledValue] = useState(String(defaultValue ?? ""));
    const currentValue = value === undefined ? uncontrolledValue : String(value);
    const countText = showCount && maxLength ? `${currentValue.length}/${maxLength}` : undefined;
    const visibleHelper = countText
      ? helperText
        ? `${helperText} · ${countText}`
        : countText
      : helperText;
    const describedBy = error
      ? `${textareaId}-error`
      : visibleHelper
        ? `${textareaId}-helper`
        : undefined;
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      if (value === undefined) setUncontrolledValue(event.target.value);
      onChange?.(event);
    };

    return (
      <FieldChrome
        id={textareaId}
        label={label}
        required={required}
        helperText={visibleHelper}
        error={error}
        action={action}
        className={fieldClassName}
      >
        <textarea
          {...props}
          ref={ref}
          id={textareaId}
          rows={rows}
          required={required}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          maxLength={maxLength}
          className={`${styles.input} ${styles.textarea} ${className}`}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
        />
      </FieldChrome>
    );
  }
);

export type DateFieldProps = Omit<InputFieldProps, "type" | "leadingIcon">;

export const DateField = forwardRef<HTMLInputElement, DateFieldProps>(
  function DateField(props, ref) {
    return <InputField {...props} ref={ref} type="date" />;
  }
);

export interface FieldGridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3;
  className?: string;
}

export function FieldGrid({ children, columns = 2, className = "" }: FieldGridProps) {
  return (
    <div
      className={`${styles.grid} ${className}`}
      style={{ "--ui-field-columns": columns } as CSSProperties}
    >
      {children}
    </div>
  );
}
