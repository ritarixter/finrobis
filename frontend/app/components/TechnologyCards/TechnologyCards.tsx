import "./TechnologyCards.scss";

export interface TechnologyCardItem {
  title: string;
  iconSrc: string;
  href?: string;
}

export interface TechnologyCardsProps {
  items: TechnologyCardItem[];
  className?: string;
}

export function TechnologyCards({ items, className = "" }: TechnologyCardsProps) {
  const rootClassName = ["technology-cards", className].filter(Boolean).join(" ");

  return (
    <section className={rootClassName} aria-label="Supported technologies">
      <div className="technology-cards__pattern" aria-hidden="true" />
      <div className="technology-cards__grid">
        {items.map((item) => {
          const title = <span className="technology-cards__title">{item.title}</span>;

          return (
            <article className="technology-cards__card" key={item.title}>
              <div className="technology-cards__icon-container">
                <div className="technology-cards__icon-frame">
                  <img className="technology-cards__icon" src={item.iconSrc} alt="" />
                </div>
              </div>
              {item.href ? (
                <a
                  className="technology-cards__link"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {title}
                </a>
              ) : (
                title
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
