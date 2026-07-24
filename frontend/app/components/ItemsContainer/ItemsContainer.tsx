import "./ItemsContainer.scss";

export interface ItemsContainerItem {
  text: string;
}

export interface ItemsContainerProps {
  items: ItemsContainerItem[];
  className?: string;
}

export function ItemsContainer({ items, className = "" }: ItemsContainerProps) {
  const rootClassName = ["items-container", className].filter(Boolean).join(" ");

  return (
    <div className={rootClassName}>
      {items.map((item, index) => (
        <article className="items-container__item" key={`${index}-${item.text}`}>
          <div className="items-container__marker" aria-hidden="true">
            <span className="items-container__line" />
            <span className="items-container__number">{index + 1}</span>
            <span className="items-container__line" />
          </div>
          <p className="items-container__text">{item.text}</p>
        </article>
      ))}
    </div>
  );
}
