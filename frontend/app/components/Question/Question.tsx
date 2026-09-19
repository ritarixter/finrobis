import { useId } from "react";
import type { PointerEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Question.module.scss";

export interface QuestionItemProps {
  question: string;
  answer: string;
}

export interface QuestionProps extends QuestionItemProps {
  isOpen: boolean;
  onToggle: () => void;
  interactiveDots?: boolean;
}

export function Question({
  question,
  answer,
  isOpen,
  onToggle,
  interactiveDots = false,
}: QuestionProps) {
  const buttonId = useId();
  const panelId = useId();

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!interactiveDots || event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--question-dots-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--question-dots-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <div
      className={`${styles.item} ${isOpen ? styles.item_open : ""} ${
        interactiveDots ? styles.item_interactive : ""
      }`.trim()}
      onPointerMove={interactiveDots ? handlePointerMove : undefined}
    >
      <div className={styles.heading}>
        <button
          type="button"
          id={buttonId}
          className={styles.trigger}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className={styles.question}>{question}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={styles.icon}
          >
            <path
              d="M19.92 15.0498L13.4 8.5298C12.63 7.7598 11.37 7.7598 10.6 8.5298L4.07996 15.0498"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            className={styles.panel}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className={styles.answer}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
