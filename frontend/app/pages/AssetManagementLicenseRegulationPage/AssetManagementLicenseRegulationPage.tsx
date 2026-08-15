import { Intro } from "~/components/Intro/Intro";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { ItemTextWithImage } from "~/components/ItemTextWithImage/ItemTextWithImage";
import { ItemTextWithImageList } from "~/components/ItemTextWithImageList/ItemTextWithImageList";
import { CardWithIcon } from "~/components/CardWithIcon/CardWithIcon";
import { useLang } from "~/hooks/useLang";
import { ThemeButton } from "~/components/ui/Button/Button";

import styles from "./AssetManagementLicenseRegulationPage.module.scss";

export function AssetManagementLicenseRegulationPage() {
  const { assetManagement } = useLang().content.pages;
  const { licenseRegulation } = assetManagement;

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.introSection}>
        <Intro
          title={licenseRegulation.intro.title}
          subtitle={licenseRegulation.intro.subtitle}
          badgeText={licenseRegulation.intro.badgeText}
          imageSrc={licenseRegulation.intro.image}
          button1={{ text: licenseRegulation.intro.button1, onClick: () => {} }}
          button1Theme={ThemeButton.GREEN}
          type="without-border"
        />
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title={licenseRegulation.marketData.title}
          body={licenseRegulation.marketData.body}
          imageSrc={licenseRegulation.marketData.imageSrc}
          imageAlt={licenseRegulation.marketData.imageAlt}
          variant="wide"
        />
      </section>

      <section className={styles.legalEntitiesSection}>
        <h2 className={styles.sectionTitle}>
          {licenseRegulation.legalEntities.title}{" "}
          <span>{licenseRegulation.legalEntities.accentTitle}</span>
        </h2>

        <ItemTextWithImage
          title={licenseRegulation.legalEntities.item.title}
          text={licenseRegulation.legalEntities.item.text}
          imageSrc={licenseRegulation.legalEntities.item.imageSrc}
          imageAlt={licenseRegulation.legalEntities.item.imageAlt}
          imagePlacement="right"
          className={styles.legalEntitiesItem}
          itemTextClassName={styles.legalEntitiesItemText}
        />
      </section>

      <section className={styles.licenseMeansSection}>
        <h2 className={styles.sectionTitle}>
          {licenseRegulation.licenseMeans.title}{" "}
          <span>{licenseRegulation.licenseMeans.accentTitle}</span>
        </h2>

        <div className={styles.licenseMeansGrid}>
          {licenseRegulation.licenseMeans.cards.map((card) => (
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

      <section className={styles.documentationSection}>
        <h2 className={styles.sectionTitle}>
          {licenseRegulation.documentation.title}{" "}
          <span>{licenseRegulation.documentation.accentTitle}</span>
        </h2>

        <ItemTextWithImageList
          items={licenseRegulation.documentation.items}
          className={styles.documentationList}
        />
      </section>
    </main>
  );
}
