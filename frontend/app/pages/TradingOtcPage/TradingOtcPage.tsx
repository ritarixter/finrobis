import { Intro } from "~/components/Intro/Intro";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { Benefits } from "~/components/Benefits/Benefits";
import { ItemTextWithImageList } from "~/components/ItemTextWithImageList/ItemTextWithImageList";
import { SlideImageList } from "~/components/SlideImageList/SlideImageList";
import { Questions } from "~/components/Questions/Questions";
import { useLang } from "~/hooks/useLang";
import { ThemeButton } from "~/components/ui/Button/Button";

import styles from "./TradingOtcPage.module.scss";

export function TradingOtcPage() {
  const { trading } = useLang().content.pages;
  const otc = trading.otc;

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.introSection}>
        <Intro
          title={otc.intro.title}
          subtitle={otc.intro.subtitle}
          badgeText={otc.intro.badgeText}
          imageSrc={otc.intro.image}
          button1={{ text: otc.intro.button1, onClick: () => {} }}
          button1Theme={ThemeButton.ALPHAMARK}
          type="without-border"
        />
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title={otc.marketData.title}
          body={otc.marketData.body}
          imageSrc={otc.marketData.imageSrc}
          imageAlt={otc.marketData.imageAlt}
          variant="wide"
          interactiveDots
        />
      </section>

      <section className={styles.benefitsSection}>
        <Benefits items={otc.benefits} />
      </section>

      <section className={styles.orderTypesSection}>
        <h2 className={styles.orderTypesTitle}>
          {otc.orderTypes.title} <span>{otc.orderTypes.accentTitle}</span>
        </h2>

        <ItemTextWithImageList items={otc.orderTypes.items} />
      </section>

      <section className={styles.supportedAssetsSection}>
        <h2 className={styles.supportedAssetsTitle}>
          {otc.supportedAssets.title} <span>{otc.supportedAssets.accentTitle}</span>
        </h2>

        <SlideImageList items={otc.supportedAssets.items} />
      </section>

      <section className={styles.pricingSpreadsSection}>
        <MarketDataCard
          title={otc.pricingSpreads.title}
          body={otc.pricingSpreads.body}
          imageSrc={otc.pricingSpreads.imageSrc}
          imageAlt={otc.pricingSpreads.imageAlt}
          variant="wide"
          interactiveDots
        />
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>
          {otc.faq.title} <span>{otc.faq.accentTitle}</span>
        </h2>

        <Questions items={otc.faq.items} interactiveDots />
      </section>
    </main>
  );
}
