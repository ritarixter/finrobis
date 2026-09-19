import { Intro } from "~/components/Intro/Intro";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { Benefits } from "~/components/Benefits/Benefits";
import { ItemTextWithImageList } from "~/components/ItemTextWithImageList/ItemTextWithImageList";
import { CardWithIcon } from "~/components/CardWithIcon/CardWithIcon";
import { Questions } from "~/components/Questions/Questions";
import { useLang } from "~/hooks/useLang";
import { ThemeButton } from "~/components/ui/Button/Button";

import styles from "./TradingStablecoinAccessPage.module.scss";

export function TradingStablecoinAccessPage() {
  const { trading } = useLang().content.pages;
  const stablecoinAccess = trading.stablecoinAccess;

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.introSection}>
        <Intro
          title={stablecoinAccess.intro.title}
          subtitle={stablecoinAccess.intro.subtitle}
          badgeText={stablecoinAccess.intro.badgeText}
          imageSrc={stablecoinAccess.intro.image}
          button1={{ text: stablecoinAccess.intro.button1, onClick: () => {} }}
          button1Theme={ThemeButton.GREEN}
          type="without-border"
        />
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title={stablecoinAccess.marketData.title}
          body={stablecoinAccess.marketData.body}
          imageSrc={stablecoinAccess.marketData.imageSrc}
          imageAlt={stablecoinAccess.marketData.imageAlt}
          variant="wide"
          interactiveDots
        />
      </section>

      <section className={styles.benefitsSection}>
        <Benefits items={stablecoinAccess.benefits} />
      </section>

      <section className={styles.supportedStablecoinsSection}>
        <h2 className={styles.supportedStablecoinsTitle}>
          {stablecoinAccess.supportedStablecoins.title}{" "}
          <span>{stablecoinAccess.supportedStablecoins.accentTitle}</span>
        </h2>

        <div className={styles.supportedStablecoinsGrid}>
          {stablecoinAccess.supportedStablecoins.items.map((item) => (
            <CardWithIcon
              key={item.id}
              iconSrc={item.iconSrc}
              iconAlt={item.iconAlt}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </section>

      <section className={styles.useCasesSection}>
        <h2 className={styles.useCasesTitle}>
          {stablecoinAccess.useCases.title} <span>{stablecoinAccess.useCases.accentTitle}</span>
        </h2>

        <ItemTextWithImageList items={stablecoinAccess.useCases.items} />
      </section>

      <section className={styles.complianceSection}>
        <MarketDataCard
          title={stablecoinAccess.compliance.title}
          body={stablecoinAccess.compliance.body}
          imageSrc={stablecoinAccess.compliance.imageSrc}
          imageAlt={stablecoinAccess.compliance.imageAlt}
          variant="wide"
          interactiveDots
        />
      </section>

      <section className={styles.whoUsesSection}>
        <h2 className={styles.whoUsesTitle}>
          {stablecoinAccess.whoUses.title} <span>{stablecoinAccess.whoUses.accentTitle}</span>
        </h2>

        <div className={styles.whoUsesGrid}>
          {stablecoinAccess.whoUses.cards.map((card) => (
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

      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>
          {stablecoinAccess.faqStablecoins.title}{" "}
          <span>{stablecoinAccess.faqStablecoins.accentTitle}</span>
        </h2>

        <Questions items={stablecoinAccess.faqStablecoins.items} interactiveDots />
      </section>
    </main>
  );
}
