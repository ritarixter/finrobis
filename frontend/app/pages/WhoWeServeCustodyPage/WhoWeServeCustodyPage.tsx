import { Intro } from "~/components/Intro/Intro";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { Benefits } from "~/components/Benefits/Benefits";
import { ItemText } from "~/components/ItemText/ItemText";
import { CardsWithImage } from "~/components/CardsWithImage/CardsWithImage";
import { ItemTextWithImage } from "~/components/ItemTextWithImage/ItemTextWithImage";
import { CardWithIcon } from "~/components/CardWithIcon/CardWithIcon";
import { Questions } from "~/components/Questions/Questions";
import { ThemeButton } from "~/components/ui/Button/Button";
import { useLang } from "~/hooks/useLang";

import styles from "./WhoWeServeCustodyPage.module.scss";

export function WhoWeServeCustodyPage() {
  const { whoWeServeCustody } = useLang().content.pages;

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.introSection}>
        <Intro
          title={whoWeServeCustody.intro.title}
          subtitle={whoWeServeCustody.intro.text}
          badgeText={whoWeServeCustody.intro.badgeText}
          imageSrc={whoWeServeCustody.intro.imageSrc}
          button1={{ text: whoWeServeCustody.intro.button1, onClick: () => {} }}
          button1Theme={ThemeButton.ALPHAMARK}
          type="without-border"
        />
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title={whoWeServeCustody.marketData.title}
          body={whoWeServeCustody.marketData.body}
          imageSrc={whoWeServeCustody.marketData.imageSrc}
          imageAlt={whoWeServeCustody.marketData.imageAlt}
          variant="wide"
        />
      </section>

      <section className={styles.benefitsSection}>
        <Benefits items={whoWeServeCustody.benefits} />
      </section>

      <section className={styles.solutionsSection}>
        <h2 className={styles.sectionTitle}>
          {whoWeServeCustody.custodySolutions.title}{" "}
          <span>{whoWeServeCustody.custodySolutions.accentTitle}</span>
        </h2>

        <div className={styles.solutionsGrid}>
          {whoWeServeCustody.custodySolutions.items.map((item) => (
            <ItemText key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      <section className={styles.securityArchitectureSection}>
        <h2 className={styles.sectionTitle}>
          {whoWeServeCustody.securityArchitecture.title}{" "}
          <span>{whoWeServeCustody.securityArchitecture.accentTitle}</span>
        </h2>

        <CardsWithImage
          items={whoWeServeCustody.securityArchitecture.cards}
          className={styles.securityCardsGrid}
        />
      </section>

      <section className={styles.segregatedCustodySection}>
        <h2 className={styles.sectionTitle}>
          {whoWeServeCustody.segregatedCustody.title}{" "}
          <span>{whoWeServeCustody.segregatedCustody.accentTitle}</span>
        </h2>

        <ItemTextWithImage
          title={whoWeServeCustody.segregatedCustody.item.title}
          text={whoWeServeCustody.segregatedCustody.item.text}
          imageSrc={whoWeServeCustody.segregatedCustody.item.imageSrc}
          imageAlt={whoWeServeCustody.segregatedCustody.item.imageAlt}
          imagePlacement={whoWeServeCustody.segregatedCustody.item.imagePlacement}
          className={styles.segregatedCustodyItem}
          itemTextClassName={styles.segregatedCustodyText}
          imageClassName={styles.segregatedCustodyImage}
        />
      </section>

      <section className={styles.complianceSection}>
        <h2 className={styles.sectionTitle}>
          {whoWeServeCustody.compliance.title}{" "}
          <span>{whoWeServeCustody.compliance.accentTitle}</span>
        </h2>

        <div className={styles.complianceGrid}>
          {whoWeServeCustody.compliance.cards.map((card) => (
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
        <h2 className={styles.sectionTitle}>
          {whoWeServeCustody.faq.title} <span>{whoWeServeCustody.faq.accentTitle}</span>
        </h2>

        <Questions items={whoWeServeCustody.faq.items} />
      </section>
    </main>
  );
}
