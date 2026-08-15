import { Intro } from "~/components/Intro/Intro";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { ItemsContainer } from "~/components/ItemsContainer/ItemsContainer";
import { ItemTextWithImageList } from "~/components/ItemTextWithImageList/ItemTextWithImageList";
import { CardWithIcon } from "~/components/CardWithIcon/CardWithIcon";
import { Questions } from "~/components/Questions/Questions";
import { useLang } from "~/hooks/useLang";
import { ThemeButton } from "~/components/ui/Button/Button";

import styles from "./AssetManagementPage.module.scss";

export function AssetManagementPage() {
  const { assetManagement } = useLang().content.pages;

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.introSection}>
        <Intro
          title={assetManagement.intro.title}
          subtitle={assetManagement.intro.subtitle}
          badgeText={assetManagement.intro.badgeText}
          imageSrc={assetManagement.intro.image}
          button1={{ text: assetManagement.intro.button1, onClick: () => {} }}
          button1Theme={ThemeButton.GREEN}
          type="without-border"
        />
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title={assetManagement.marketData.title}
          body={assetManagement.marketData.body}
          imageSrc={assetManagement.marketData.imageSrc}
          imageAlt={assetManagement.marketData.imageAlt}
          variant="wide"
        />
      </section>

      <section className={styles.solutionsSection}>
        <h2 className={styles.sectionTitle}>
          {assetManagement.solutions.title} <span>{assetManagement.solutions.accentTitle}</span>
        </h2>

        <ItemsContainer
          items={assetManagement.solutions.items}
          className={styles.solutionsItems}
          showMarker={false}
        />
      </section>

      <section className={styles.whySection}>
        <h2 className={styles.sectionTitle}>
          {assetManagement.whyAssetManagement.title}{" "}
          <span>{assetManagement.whyAssetManagement.accentTitle}</span>
        </h2>

        <ItemTextWithImageList
          items={assetManagement.whyAssetManagement.items}
          className={styles.whyItemTextWithImageList}
        />
      </section>

      <section className={styles.productStructureSection}>
        <h2 className={styles.sectionTitle}>
          {assetManagement.productStructure.title}{" "}
          <span>{assetManagement.productStructure.accentTitle}</span>
        </h2>

        <div className={styles.productStructureGrid}>
          {assetManagement.productStructure.cards.map((card) => (
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
          items={assetManagement.riskDisclaimer.items}
          className={styles.riskDisclaimerItems}
          showMarker={false}
        />
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>
          {assetManagement.faq.title} <span>{assetManagement.faq.accentTitle}</span>
        </h2>

        <Questions items={assetManagement.faq.items} />
      </section>
    </main>
  );
}
