import { Benefits } from "~/components/Benefits/Benefits";
import { CardWithIcon } from "~/components/CardWithIcon/CardWithIcon";
import { Intro } from "~/components/Intro/Intro";
import { ItemText } from "~/components/ItemText/ItemText";
import { ItemTextWithImageList } from "~/components/ItemTextWithImageList/ItemTextWithImageList";
import { ItemsContainer } from "~/components/ItemsContainer/ItemsContainer";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { Questions } from "~/components/Questions/Questions";
import { ThemeButton } from "~/components/ui/Button/Button";
import { useLang } from "~/hooks/useLang";

import styles from "./AssetManagementPortfolioPage.module.scss";

export function AssetManagementPortfolioPage() {
  const { assetManagement } = useLang().content.pages;
  const { portfolio } = assetManagement;

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.introSection}>
        <Intro
          title={portfolio.intro.title}
          subtitle={portfolio.intro.subtitle}
          badgeText={portfolio.intro.badgeText}
          imageSrc={portfolio.intro.image}
          button1={{ text: portfolio.intro.button1, onClick: () => {} }}
          button1Theme={ThemeButton.ALPHAMARK}
          type="without-border"
        />
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title={portfolio.marketData.title}
          body={portfolio.marketData.body}
          imageSrc={portfolio.marketData.imageSrc}
          imageAlt={portfolio.marketData.imageAlt}
          variant="wide"
        />
      </section>

      <section className={styles.benefitsSection}>
        <Benefits items={portfolio.benefits.items} className={styles.benefitsGrid} />
      </section>

      <section className={styles.strategiesSection}>
        <h2 className={styles.sectionTitle}>
          {portfolio.strategies.title} <span>{portfolio.strategies.accentTitle}</span>
        </h2>

        <p className={styles.sectionDescription}>{portfolio.strategies.description}</p>
      </section>

      <section className={styles.strategiesCardsSection}>
        <div className={styles.strategiesCardsGrid}>
          {portfolio.strategies.cards.map((card) => (
            <ItemText key={card.id} title={card.title} text={card.text} />
          ))}
        </div>
      </section>

      <section className={styles.processSection}>
        <h2 className={styles.sectionTitle}>
          {portfolio.process.title} <span>{portfolio.process.accentTitle}</span>
        </h2>

        <ItemsContainer
          items={portfolio.process.items}
          className={styles.processItems}
          showMarker={false}
        />
      </section>

      <section className={styles.structuredProductsSection}>
        <h2 className={styles.sectionTitle}>
          {portfolio.structuredProducts.title}{" "}
          <span>{portfolio.structuredProducts.accentTitle}</span>
        </h2>

        <p className={styles.sectionDescription}>{portfolio.structuredProducts.description}</p>

        <ItemTextWithImageList
          items={portfolio.structuredProducts.items}
          className={styles.structuredProductsList}
        />
      </section>

      <section className={styles.reportingSection}>
        <h2 className={styles.sectionTitle}>
          {portfolio.reporting.title} <span>{portfolio.reporting.accentTitle}</span>
        </h2>

        <div className={styles.reportingCardsGrid}>
          {portfolio.reporting.cards.map((card, index) => (
            <CardWithIcon
              key={card.id}
              iconSrc={card.iconSrc}
              iconAlt={card.iconAlt}
              title={card.title}
              text={card.text}
              className={
                index === portfolio.reporting.cards.length - 1
                  ? styles.reportingCardWide
                  : styles.reportingCard
              }
            />
          ))}
        </div>
      </section>

      <section className={styles.riskSection}>
        <ItemsContainer
          items={portfolio.riskDisclaimer.items}
          className={styles.riskDisclaimerItems}
          showMarker={false}
        />
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>
          {portfolio.faq.title} <span>{portfolio.faq.accentTitle}</span>
        </h2>

        <Questions items={portfolio.faq.items} />
      </section>
    </main>
  );
}
