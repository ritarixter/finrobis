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
}

export function Questions({ items, defaultOpenIndex = -1 }: QuestionsProps) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpenIndex);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className={styles.list}>
      {items.map((item, index) => {
        const { id, ...itemProps } = item;

        return (
          <div key={id ?? index} className={index % 2 !== 0 ? styles.pagging : ""}>
            <Question
              {...itemProps}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          </div>
        );
      })}
    </div>
  );
}
