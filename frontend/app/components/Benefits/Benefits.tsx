import type { CSSProperties } from "react";
import { Benefit, type BenefitProps } from "../Benefit/Benefit";
import "./Benefits.scss";

export interface BenefitsItem extends Omit<BenefitProps, "className" | "style"> {
  id?: string | number;
}

export interface BenefitsProps {
  items: BenefitsItem[];
  className?: string;
  style?: CSSProperties;
  itemClassName?: string;
}

export function Benefits({ items, className = "", style, itemClassName = "" }: BenefitsProps) {
  const rootClassName = ["benefits", className].filter(Boolean).join(" ");

  return (
    <div className={rootClassName} style={style}>
      {items.map((item, index) => {
        const { id, ...benefitProps } = item;

        return <Benefit key={id ?? index} {...benefitProps} className={itemClassName} />;
      })}
    </div>
  );
}
