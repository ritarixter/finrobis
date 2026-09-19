import { Intro } from "~/components/Intro/Intro";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { Benefits } from "~/components/Benefits/Benefits";
import { ItemText } from "~/components/ItemText/ItemText";
import { CardsWithImage } from "~/components/CardsWithImage/CardsWithImage";
import { ItemTextWithImage } from "~/components/ItemTextWithImage/ItemTextWithImage";
import { ItemsContainer } from "~/components/ItemsContainer/ItemsContainer";
import { Questions } from "~/components/Questions/Questions";
import { ThemeButton } from "~/components/ui/Button/Button";
import { useLang } from "~/hooks/useLang";

import styles from "./CustodyMpcVaultsPage.module.scss";

export function CustodyMpcVaultsPage() {
  const { custodyMpcVaults } = useLang().content.pages;

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.introSection}>
        <Intro
          title={custodyMpcVaults.intro.title}
          subtitle={custodyMpcVaults.intro.text}
          badgeText={custodyMpcVaults.intro.badgeText}
          imageSrc={custodyMpcVaults.intro.imageSrc}
          button1={{ text: custodyMpcVaults.intro.button1, onClick: () => {} }}
          button1Theme={ThemeButton.ALPHAMARK}
          type="without-border"
        />
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title={custodyMpcVaults.marketData.title}
          body={custodyMpcVaults.marketData.body}
          imageSrc={custodyMpcVaults.marketData.imageSrc}
          imageAlt={custodyMpcVaults.marketData.imageAlt}
          variant="wide"
        />
      </section>

      <section className={styles.benefitsSection}>
        <Benefits items={custodyMpcVaults.benefits} />
      </section>

      <section className={styles.whyMpcSection}>
        <h2 className={styles.sectionTitle}>
          {custodyMpcVaults.whyMpc.title} <span>{custodyMpcVaults.whyMpc.accentTitle}</span>
        </h2>

        <div className={styles.whyMpcGrid}>
          {custodyMpcVaults.whyMpc.items.map((item, index) => (
            <ItemText
              key={item.title}
              title={item.title}
              text={item.text}
              className={index === 2 ? styles.whyMpcBottomLeft : ""}
            />
          ))}
        </div>
      </section>

      <section className={styles.technicalArchitectureSection}>
        <h2 className={styles.sectionTitle}>
          {custodyMpcVaults.technicalArchitecture.title}{" "}
          <span>{custodyMpcVaults.technicalArchitecture.accentTitle}</span>
        </h2>

        <CardsWithImage
          items={custodyMpcVaults.technicalArchitecture.cards}
          className={styles.technicalCardsGrid}
        />
      </section>

      <section className={styles.vaultArchitectureSection}>
        <h2 className={styles.sectionTitle}>
          {custodyMpcVaults.vaultArchitecture.title}{" "}
          <span>{custodyMpcVaults.vaultArchitecture.accentTitle}</span>
        </h2>

        <div className={styles.vaultArchitectureGrid}>
          {custodyMpcVaults.vaultArchitecture.items.map((item, index) => (
            <ItemText
              key={item.title}
              title={item.title}
              text={item.text}
              className={index === 2 ? styles.vaultArchitectureBottomLeft : ""}
            />
          ))}
        </div>
      </section>

      <section className={styles.walletConnectSection}>
        <h2 className={styles.sectionTitle}>
          {custodyMpcVaults.walletConnect.title}{" "}
          <span>{custodyMpcVaults.walletConnect.accentTitle}</span>
        </h2>

        <ItemTextWithImage
          title={custodyMpcVaults.walletConnect.item.title}
          text={custodyMpcVaults.walletConnect.item.text}
          imageSrc={custodyMpcVaults.walletConnect.item.imageSrc}
          imageAlt={custodyMpcVaults.walletConnect.item.imageAlt}
          imagePlacement={custodyMpcVaults.walletConnect.item.imagePlacement}
          className={styles.walletConnectItem}
          itemTextClassName={styles.walletConnectText}
          imageClassName={styles.walletConnectImage}
        />
      </section>

      <section className={styles.governanceSection}>
        <h2 className={styles.sectionTitle}>
          {custodyMpcVaults.governance.title} <span>{custodyMpcVaults.governance.accentTitle}</span>
        </h2>

        <ItemsContainer
          items={custodyMpcVaults.governance.items}
          className={styles.governanceItems}
          showMarker={false}
        />
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>
          {custodyMpcVaults.faq.title} <span>{custodyMpcVaults.faq.accentTitle}</span>
        </h2>

        <Questions items={custodyMpcVaults.faq.items} />
      </section>
    </main>
  );
}
