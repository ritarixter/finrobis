import { useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Question.module.scss";

export interface QuestionItemProps {
  question: string;
  answer: string;
}

export interface QuestionProps extends QuestionItemProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Question({ question, answer, isOpen, onToggle }: QuestionProps) {
  const buttonId = useId();
  const panelId = useId();

  return (
    <div className={`${styles.item} ${isOpen ? styles.item_open : ""}`.trim()}>
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
