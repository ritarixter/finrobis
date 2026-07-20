import type { CSSProperties, ReactNode } from "react";
import "./MarketDataCard.scss";

export interface MarketDataCardItem {
  id?: string | number;
  method: ReactNode;
  path: ReactNode;
  description: ReactNode;
}

export interface MarketDataCardProps {
  title: ReactNode;
  items?: MarketDataCardItem[];
  body?: ReactNode;
  imageSrc: string;
  imageAlt?: string;
  variant?: "compact" | "wide";
  className?: string;
  style?: CSSProperties;
  contentClassName?: string;
  titleClassName?: string;
  bodyClassName?: string;
  listClassName?: string;
  itemClassName?: string;
  methodClassName?: string;
  pathClassName?: string;
  descriptionClassName?: string;
  imageWrapperClassName?: string;
  imageClassName?: string;
}

export function MarketDataCard({
  title,
  items,
  body,
  imageSrc,
  imageAlt = "",
  variant = "compact",
  className = "",
  style,
  contentClassName = "",
  titleClassName = "",
  bodyClassName = "",
  listClassName = "",
  itemClassName = "",
  methodClassName = "",
  pathClassName = "",
  descriptionClassName = "",
  imageWrapperClassName = "",
  imageClassName = "",
}: MarketDataCardProps) {
  const rootClassName = ["market-data-card", `market-data-card--${variant}`, className].filter(Boolean).join(" ");
  const contentName = ["market-data-card__content", contentClassName].filter(Boolean).join(" ");
  const titleName = ["market-data-card__title", titleClassName].filter(Boolean).join(" ");
  const bodyName = ["market-data-card__body", bodyClassName].filter(Boolean).join(" ");
  const listName = ["market-data-card__list", listClassName].filter(Boolean).join(" ");
  const itemName = ["market-data-card__item", itemClassName].filter(Boolean).join(" ");
  const methodName = ["market-data-card__method", methodClassName].filter(Boolean).join(" ");
  const pathName = ["market-data-card__path", pathClassName].filter(Boolean).join(" ");
  const descriptionName = ["market-data-card__description", descriptionClassName].filter(Boolean).join(" ");
  const imageWrapperName = ["market-data-card__image-wrapper", imageWrapperClassName].filter(Boolean).join(" ");
  const imageName = ["market-data-card__image", imageClassName].filter(Boolean).join(" ");

  return (
    <article className={rootClassName} style={style}>
      <div className={contentName}>
        <div className={titleName}>{title}</div>
        {body ? <div className={bodyName}>{body}</div> : null}

        {items?.length ? (
          <div className={listName}>
            {items.map((item, index) => {
              const key = item.id ?? index;

              return (
                <div key={key} className={itemName}>
                  <div className={methodName}>{item.method}</div>
                  <div className={pathName}>{item.path}</div>
                  <div className={descriptionName}>{item.description}</div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className={imageWrapperName} aria-hidden={imageAlt === ""}>
        <img className={imageName} src={imageSrc} alt={imageAlt} />
      </div>
    </article>
  );
}
