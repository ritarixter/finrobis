import {
  type CSSProperties,
  type ReactElement,
  type ReactNode,
  useEffect,
  useId,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import { Button } from "../Button/Button";
import { IconButton } from "../Controls/Controls";
import { Icon, type IconName } from "../Icon/Icon";
import styles from "./Modal.module.scss";

const FOCUSABLE_ELEMENTS = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

type ModalStyle = CSSProperties & {
  "--ui-modal-max-width": string;
};

export interface ModalProps {
  open: boolean;
  title: ReactNode;
  children: ReactNode;
  onClose: () => void;
  titleIcon?: IconName | ReactElement;
  action?: () => void;
  actionText?: ReactNode;
  actionDisabled?: boolean;
  actionLoading?: boolean;
  closeText?: ReactNode;
  closeLabel?: string;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  maxWidth?: number | string;
  className?: string;
}

export function Modal({
  open,
  title,
  children,
  onClose,
  titleIcon,
  action,
  actionText,
  actionDisabled = false,
  actionLoading = false,
  closeText = "Close",
  closeLabel = "Close modal",
  closeOnOverlayClick = true,
  closeOnEscape = true,
  maxWidth = 720,
  className = "",
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const dialog = dialogRef.current;
    const previouslyFocusedElement = document.activeElement as HTMLElement | null;
    const previousBodyOverflow = document.body.style.overflow;
    const focusFrame = window.requestAnimationFrame(() => {
      const firstFocusableElement = dialog?.querySelector<HTMLElement>(FOCUSABLE_ELEMENTS);
      (firstFocusableElement ?? dialog)?.focus();
    });

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && closeOnEscape) {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialog) return;

      const focusableElements = Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS)
      ).filter((element) => element.getClientRects().length > 0);

      if (focusableElements.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;

      if (previouslyFocusedElement?.isConnected) {
        previouslyFocusedElement.focus();
      }
    };
  }, [closeOnEscape, onClose, open]);

  if (!open || typeof document === "undefined") return null;

  const modalStyle: ModalStyle = {
    "--ui-modal-max-width": typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth,
  };

  return createPortal(
    <div
      className={styles.overlay}
      onMouseDown={(event) => {
        if (closeOnOverlayClick && event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className={`${styles.modal} ${className}`}
        style={modalStyle}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
      >
        <header className={styles.header}>
          <div className={styles.headingGroup}>
            {titleIcon ? (
              <span className={styles.titleIcon} aria-hidden="true">
                {typeof titleIcon === "string" ? <Icon name={titleIcon} size={18} /> : titleIcon}
              </span>
            ) : null}
            <h2 id={titleId} className={styles.title}>
              {title}
            </h2>
          </div>
          <IconButton
            className={styles.closeButton}
            icon="close"
            label={closeLabel}
            size="lg"
            iconSize={16}
            onClick={onClose}
          />
        </header>

        <div className={styles.content}>{children}</div>

        <footer className={styles.footer}>
          <Button appearance="secondary" size="md" onClick={onClose}>
            {closeText}
          </Button>
          {action && actionText ? (
            <Button
              appearance="primary"
              size="md"
              disabled={actionDisabled}
              loading={actionLoading}
              onClick={action}
            >
              {actionText}
            </Button>
          ) : null}
        </footer>
      </div>
    </div>,
    document.body
  );
}
