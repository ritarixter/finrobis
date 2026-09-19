import { useState } from "react";
import { Question } from "../Question/Question";
import type { QuestionItemProps } from "../Question/Question";
import styles from "./Questions.module.scss";

export interface QuestionsItem extends QuestionItemProps {
  id?: string | number;
}

export interface QuestionsProps {
  items: QuestionsItem[];
  defaultOpenIndex?: number;
  interactiveDots?: boolean;
}

export function Questions({ items, defaultOpenIndex = -1, interactiveDots = true }: QuestionsProps) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpenIndex);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className={styles.list}>
      {items.map((item, index) => {
        const { id, ...itemProps } = item;
        const wrapperClassName = index % 2 === 0 ? styles.leftOffset : styles.rightOffset;

        return (
          <div key={id ?? index} className={wrapperClassName}>
            <Question
              {...itemProps}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              interactiveDots={interactiveDots}
            />
          </div>
        );
      })}
    </div>
  );
}
