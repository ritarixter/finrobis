import { Button, ThemeButton } from "~/components/ui/Button/Button";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { ItemsContainer } from "~/components/ItemsContainer/ItemsContainer";
import { Questions } from "~/components/Questions/Questions";
import { MarketBackgroundAnimation } from "~/components/MarketBackgroundAnimation/MarketBackgroundAnimation";
import { useNavigate } from "react-router";
import { useLang } from "~/hooks/useLang";

import styles from "./ResourcesNewsPage.module.scss";

export function ResourcesNewsPage() {
  const { resourcesNews } = useLang().content.pages;
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate("/company/contact#form");
  };

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.hero}>
        <img className={styles.heroImage} src={resourcesNews.intro.imageSrc} alt={resourcesNews.intro.title} />
        <MarketBackgroundAnimation />

        <div className={styles.heroCard}>
          <h1 className={styles.title}>{resourcesNews.intro.title}</h1>
          <p className={styles.text}>{resourcesNews.intro.text}</p>

          <Button theme={ThemeButton.GREEN} onClick={handleContactUsClick}>
            {resourcesNews.intro.button1}
          </Button>
        </div>
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title={resourcesNews.marketData.title}
          body={resourcesNews.marketData.body}
          imageSrc={resourcesNews.marketData.imageSrc}
          imageAlt={resourcesNews.marketData.imageAlt}
          variant="wide"
        />
      </section>

      <section className={styles.newsSection}>
        <aside className={styles.newsSidebar} aria-label="News categories">
          {resourcesNews.categories.map((category, index) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${index === 0 ? styles.categoryButtonActive : ""}`}
              type="button"
            >
              {category}
            </button>
          ))}
        </aside>

        <div className={styles.newsGrid}>
          {resourcesNews.cards.map((card, index) => (
            <article key={`${card.title}-${index}`} className={styles.newsCard}>
              <div className={styles.cardTop}>
                <h2 className={styles.cardTitle}>{card.title}</h2>

                <div className={styles.datePill}>Date: {card.date}</div>
              </div>

              <div className={styles.lines} aria-hidden="true">
                {card.lines.map((lineWidth, lineIndex) => (
                  <span
                    key={`${card.title}-${lineIndex}`}
                    className={styles.line}
                    style={{ width: `${lineWidth}%` }}
                  >
                    {".".repeat(130)}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.categoriesSection}>
        <h2 className={styles.sectionTitle}>{resourcesNews.categoriesSection.title}</h2>

        <ItemsContainer
          items={[
            ...resourcesNews.categoriesSection.items,
            resourcesNews.categoriesSection.featuredItem,
          ]}
          className={styles.categoriesItems}
          showMarker={false}
        />
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>
          {resourcesNews.faq.title} <span>{resourcesNews.faq.accentTitle}</span>
        </h2>

        <Questions items={resourcesNews.faq.items} />
      </section>
    </main>
  );
}
