import { Benefits } from "~/components/Benefits/Benefits";
import { CardsWithImage } from "~/components/CardsWithImage/CardsWithImage";
import { CardWithIcon } from "~/components/CardWithIcon/CardWithIcon";
import { Intro } from "~/components/Intro/Intro";
import { ItemText } from "~/components/ItemText/ItemText";
import { ItemsContainer } from "~/components/ItemsContainer/ItemsContainer";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { Questions } from "~/components/Questions/Questions";
import { ThemeButton } from "~/components/ui/Button/Button";
import { useLang } from "~/hooks/useLang";

import styles from "./AssetManagementInvestmentAdvisoryPage.module.scss";

export function AssetManagementInvestmentAdvisoryPage() {
  const { assetManagement } = useLang().content.pages;
  const { investmentAdvisory } = assetManagement;

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.introSection}>
        <Intro
          title={investmentAdvisory.intro.title}
          subtitle={investmentAdvisory.intro.subtitle}
          badgeText={investmentAdvisory.intro.badgeText}
          imageSrc={investmentAdvisory.intro.image}
          button1={{ text: investmentAdvisory.intro.button1, onClick: () => {} }}
          button1Theme={ThemeButton.ALPHAMARK}
          type="without-border"
        />
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title={investmentAdvisory.marketData.title}
          body={investmentAdvisory.marketData.body}
          imageSrc={investmentAdvisory.marketData.imageSrc}
          imageAlt={investmentAdvisory.marketData.imageAlt}
          variant="wide"
        />
      </section>

      <section className={styles.benefitsSection}>
        <Benefits items={investmentAdvisory.benefits.items} className={styles.benefitsGrid} />
      </section>

      <section className={styles.cardsWithImageTitleSection}>
        <h2 className={styles.sectionTitle}>
          {investmentAdvisory.cardsWithImage.title}{" "}
          <span>{investmentAdvisory.cardsWithImage.accentTitle}</span>
        </h2>
      </section>

      <section className={styles.cardsWithImageSection}>
        <CardsWithImage items={investmentAdvisory.cardsWithImage.items} />
      </section>

      <section className={styles.whoSection}>
        <h2 className={styles.sectionTitle}>
          {investmentAdvisory.who.title} <span>{investmentAdvisory.who.accentTitle}</span>
        </h2>

        <div className={styles.whoGrid}>
          {investmentAdvisory.who.items.map((item) => (
            <ItemText key={item.id} title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      <section className={styles.processSection}>
        <h2 className={styles.sectionTitle}>
          {investmentAdvisory.process.title} <span>{investmentAdvisory.process.accentTitle}</span>
        </h2>

        <ItemsContainer
          items={investmentAdvisory.process.items}
          className={styles.processItems}
          showMarker={false}
        />
      </section>

      <section className={styles.researchSection}>
        <h2 className={styles.sectionTitle}>
          {investmentAdvisory.research.title} <span>{investmentAdvisory.research.accentTitle}</span>
        </h2>

        <p className={styles.sectionDescription}>{investmentAdvisory.research.description}</p>
      </section>

      <section className={styles.researchCardsSection}>
        <div className={styles.researchCardsGrid}>
          {investmentAdvisory.research.cards.map((card) => (
            <CardWithIcon
              key={card.id}
              iconSrc={card.iconSrc}
              iconAlt={card.iconAlt}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </section>

      <section className={styles.riskSection}>
        <ItemsContainer
          items={investmentAdvisory.riskDisclaimer.items}
          className={styles.riskDisclaimerItems}
          showMarker={false}
        />
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>
          {investmentAdvisory.faq.title} <span>{investmentAdvisory.faq.accentTitle}</span>
        </h2>

        <Questions items={investmentAdvisory.faq.items} />
      </section>
    </main>
  );
}
