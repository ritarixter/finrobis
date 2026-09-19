import { useCallback, useRef, useState } from "react";
import type { CSSProperties } from "react";
import styles from "./Form.module.scss";
import { Button, ThemeButton } from "../ui/Button/Button";

const MAX_MESSAGE_LENGTH = 200;
const COUNTER_THRESHOLD = 100;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

type EmailError = "" | "required" | "invalid";

export type TFormLabels = {
  name?: string;
  firstName?: string;
  lastName?: string;
  company: string;
  email: string;
  phoneNumber?: string;
  message: string;
};

export type TFormErrors = {
  emailRequired: string;
  emailInvalid: string;
};

type TFormProps = {
  title: string;
  labels: TFormLabels;
  buttonText: string;
  errorMessages: TFormErrors;
  variant?: "default" | "contact";
  style?: CSSProperties;
  onSubmit?: (data: {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phoneNumber: string;
    message: string;
  }) => Promise<void>;
};

type FormData = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phoneNumber: string;
  message: string;
};

export function Form({
  title,
  labels,
  buttonText,
  errorMessages,
  variant = "default",
  style,
  onSubmit,
}: TFormProps) {
  const isContactVariant = variant === "contact";
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [emailError, setEmailError] = useState<EmailError>("");
  const [focusedField, setFocusedField] = useState<keyof FormData | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isFloating = (field: keyof FormData) => focusedField === field || formData[field] !== "";

  const firstNameLabel = labels.firstName ?? labels.name ?? "";
  const showExtendedFields = isContactVariant || Boolean(labels.lastName) || Boolean(labels.phoneNumber);
  const hideLabel = (field: keyof FormData) =>
    isContactVariant && (focusedField === field || formData[field].length > 0);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (name === "email" && emailError) {
        setEmailError("");
      }
    },
    [emailError]
  );

  const handleTextareaChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      handleChange(e);
      if (isContactVariant) {
        return;
      }
      const ta = textareaRef.current;
      if (ta) {
        ta.style.height = "auto";
        ta.style.height = `${ta.scrollHeight}px`;
      }
    },
    [handleChange]
  );

  const handleFocus = useCallback((field: keyof FormData) => {
    setFocusedField(field);
  }, []);

  const handleBlur = useCallback(() => {
    setFocusedField(null);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email) {
      setEmailError("required");
      return;
    }
    if (!isValidEmail(formData.email)) {
      setEmailError("invalid");
      return;
    }
    setEmailError("");

    if (onSubmit) {
      await onSubmit(formData);
    }
  };

  const emailErrorText =
    emailError === "required" ? errorMessages.emailRequired : errorMessages.emailInvalid;

  const rootClassName = [
    styles.form,
    isContactVariant ? styles["form--contact"] : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <form className={rootClassName} style={style} onSubmit={handleSubmit} noValidate>
      {isContactVariant ? (
        <div className={styles.dotAnimation} aria-hidden="true">
          <span className={styles.dotDonut} />
          <span className={styles.dotWave} />
          <span className={styles.dotWaveSecondary} />
        </div>
      ) : null}

      <h2 className={styles.title}>{title}</h2>

      <div className={styles.fields}>
        {/* First name */}
        <div className={styles.field}>
          <label
            htmlFor="form-firstName"
            className={`${styles.label} ${isFloating("firstName") ? styles.labelFloating : ""} ${hideLabel("firstName") ? styles.labelHidden : ""}`}
          >
            {firstNameLabel}
          </label>
          <input
            id="form-firstName"
            name="firstName"
            type="text"
            autoComplete="name"
            className={styles.input}
            value={formData.firstName}
            onChange={handleChange}
            onFocus={() => handleFocus("firstName")}
            onBlur={handleBlur}
          />
        </div>

        {showExtendedFields ? (
          <div className={styles.field}>
          <label
            htmlFor="form-lastName"
            className={`${styles.label} ${isFloating("lastName") ? styles.labelFloating : ""} ${hideLabel("lastName") ? styles.labelHidden : ""}`}
          >
              {labels.lastName ?? "Last Name"}
            </label>
            <input
              id="form-lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              className={styles.input}
              value={formData.lastName}
              onChange={handleChange}
              onFocus={() => handleFocus("lastName")}
              onBlur={handleBlur}
            />
          </div>
        ) : null}

        {/* Company */}
        <div className={styles.field}>
          <label
            htmlFor="form-company"
            className={`${styles.label} ${isFloating("company") ? styles.labelFloating : ""} ${hideLabel("company") ? styles.labelHidden : ""}`}
          >
            {labels.company}
          </label>
          <input
            id="form-company"
            name="company"
            type="text"
            autoComplete="organization"
            className={styles.input}
            value={formData.company}
            onChange={handleChange}
            onFocus={() => handleFocus("company")}
            onBlur={handleBlur}
          />
        </div>

        {/* Email */}
        <div className={styles.fieldWrapper}>
          <div className={styles.field}>
            <label
              htmlFor="form-email"
              className={`${styles.label} ${isFloating("email") ? styles.labelFloating : ""} ${hideLabel("email") ? styles.labelHidden : ""} ${emailError ? styles.labelError : ""}`}
            >
              {labels.email}*
            </label>
            <input
              id="form-email"
              name="email"
              type="email"
              autoComplete="email"
              className={`${styles.input} ${emailError ? styles.inputError : ""}`}
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              aria-invalid={!!emailError}
              aria-describedby={emailError ? "form-email-error" : undefined}
            />
          </div>
          {emailError && (
            <span id="form-email-error" className={styles.errorText} role="alert">
              {emailErrorText}
            </span>
          )}
        </div>

        {showExtendedFields ? (
          <div className={styles.field}>
          <label
            htmlFor="form-phoneNumber"
            className={`${styles.label} ${isFloating("phoneNumber") ? styles.labelFloating : ""} ${hideLabel("phoneNumber") ? styles.labelHidden : ""}`}
          >
              {labels.phoneNumber ?? "Phone Number"}
            </label>
            <input
              id="form-phoneNumber"
              name="phoneNumber"
              type="tel"
              autoComplete="tel"
              className={styles.input}
              value={formData.phoneNumber}
              onChange={handleChange}
              onFocus={() => handleFocus("phoneNumber")}
              onBlur={handleBlur}
            />
          </div>
        ) : null}

        {/* Message */}
        <div className={styles.field}>
          <label
            htmlFor="form-message"
            className={`${styles.label} ${styles.labelTextarea} ${isFloating("message") ? styles.labelFloating : ""} ${hideLabel("message") ? styles.labelHidden : ""}`}
          >
            {labels.message}
          </label>
          <textarea
            ref={textareaRef}
            id="form-message"
            name="message"
            className={styles.textarea}
            value={formData.message}
            onChange={handleTextareaChange}
            onFocus={() => handleFocus("message")}
            onBlur={handleBlur}
            maxLength={MAX_MESSAGE_LENGTH}
            rows={isContactVariant ? 1 : 3}
          />
          {formData.message.length >= COUNTER_THRESHOLD && (
            <span
              className={`${styles.counter} ${formData.message.length === MAX_MESSAGE_LENGTH ? styles.counterMax : ""}`}
              aria-live="polite"
            >
              {formData.message.length}/{MAX_MESSAGE_LENGTH}
            </span>
          )}
        </div>
      </div>

      <div className={styles.btnWrapper}>
        <Button type="submit" theme={ThemeButton.GREEN}>
          {buttonText}
        </Button>
      </div>
    </form>
  );
}
