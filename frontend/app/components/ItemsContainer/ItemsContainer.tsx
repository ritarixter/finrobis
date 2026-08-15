import "./ItemsContainer.scss";

export interface ItemsContainerItem {
  title?: string;
  subtitle?: string;
  text: string;
}

export interface ItemsContainerProps {
  items: ItemsContainerItem[];
  className?: string;
  showMarker?: boolean;
}

export function ItemsContainer({ items, className = "", showMarker = true }: ItemsContainerProps) {
  const rootClassName = ["items-container", className].filter(Boolean).join(" ");

  return (
    <div className={rootClassName}>
      {items.map((item, index) => (
        <article
          className={["items-container__item", !showMarker ? "items-container__item--no-marker" : ""]
            .filter(Boolean)
            .join(" ")}
          key={`${index}-${item.text}`}
        >
          {showMarker ? (
            <div className="items-container__marker" aria-hidden="true">
              <span className="items-container__line" />
              <span className="items-container__number">{index + 1}</span>
              <span className="items-container__line" />
            </div>
          ) : null}
          {item.title || item.subtitle ? (
            <div className="items-container__content">
              {item.title ? <h3 className="items-container__title">{item.title}</h3> : null}
              {item.subtitle ? <h4 className="items-container__subtitle">{item.subtitle}</h4> : null}
              <p className="items-container__text">{item.text}</p>
            </div>
          ) : (
            <p className="items-container__text">{item.text}</p>
          )}
        </article>
      ))}
    </div>
  );
}
