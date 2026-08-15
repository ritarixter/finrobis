import { Intro } from "~/components/Intro/Intro";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { ItemText } from "~/components/ItemText/ItemText";
import { CardWithIcon } from "~/components/CardWithIcon/CardWithIcon";
import { ItemTextWithImageList } from "~/components/ItemTextWithImageList/ItemTextWithImageList";
import { Questions } from "~/components/Questions/Questions";
import { Benefits } from "~/components/Benefits/Benefits";
import { useLang } from "~/hooks/useLang";
import { ThemeButton } from "~/components/ui/Button/Button";

import styles from "./TradingPage.module.scss";

export function TradingPage() {
  const { trading } = useLang().content.pages;

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.introSection}>
        <Intro
          title={trading.intro.title}
          subtitle={trading.intro.subtitle}
          badgeText={trading.intro.badgeText}
          imageSrc={trading.intro.image}
          button1={{ text: trading.intro.button1, onClick: () => {} }}
          button1Theme={ThemeButton.GREEN}
          type="without-border"
        />
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title={trading.marketData.title}
          body={trading.marketData.body}
          imageSrc={trading.marketData.imageSrc}
          imageAlt={trading.marketData.imageAlt}
          variant="wide"
        />
      </section>

      <section className={styles.benefitsSection}>
        <Benefits items={trading.benefits} />
      </section>

      <section className={styles.solutionsSection}>
        <h2 className={styles.solutionsTitle}>
          {trading.solutions.title} <span>{trading.solutions.accentTitle}</span>
        </h2>

        <div className={styles.solutionsGrid}>
          {trading.solutions.items.map((item) => (
            <ItemText key={item.id} title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      <section className={styles.whyTradingSection}>
        <div className={styles.whyTradingHeader}>
          <h2 className={styles.whyTradingTitle}>
            {trading.whyTrading.title} <span>{trading.whyTrading.accentTitle}</span>
          </h2>
          <p className={styles.whyTradingDescription}>{trading.whyTrading.description}</p>
        </div>

        <div className={styles.whyTradingGrid}>
          {trading.whyTrading.cards.map((card) => (
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

      <section className={styles.supportedFiatSection}>
        <h2 className={styles.supportedFiatTitle}>
          {trading.supportedFiat.title} <span>{trading.supportedFiat.accentTitle}</span>
        </h2>

        <ItemTextWithImageList items={trading.supportedFiat.items} />
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>
          {trading.faq.title} <span>{trading.faq.accentTitle}</span>
        </h2>

        <Questions items={trading.faq.items} />
      </section>
    </main>
  );
}
