import { Intro } from "~/components/Intro/Intro";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { Benefits } from "~/components/Benefits/Benefits";
import { CardWithIcon } from "~/components/CardWithIcon/CardWithIcon";
import { ItemTextWithImageList } from "~/components/ItemTextWithImageList/ItemTextWithImageList";
import { ItemsContainer } from "~/components/ItemsContainer/ItemsContainer";
import { Questions } from "~/components/Questions/Questions";
import { ThemeButton } from "~/components/ui/Button/Button";
import { useLang } from "~/hooks/useLang";

import styles from "./CustodyKycAmlPage.module.scss";

export function CustodyKycAmlPage() {
  const { custodyKycAml } = useLang().content.pages;

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.introSection}>
        <Intro
          title={custodyKycAml.intro.title}
          subtitle={custodyKycAml.intro.text}
          badgeText={custodyKycAml.intro.badgeText}
          imageSrc={custodyKycAml.intro.imageSrc}
          button1={{ text: custodyKycAml.intro.button1, onClick: () => {} }}
          button1Theme={ThemeButton.GREEN}
          type="without-border"
        />
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title={custodyKycAml.marketData.title}
          body={custodyKycAml.marketData.body}
          imageSrc={custodyKycAml.marketData.imageSrc}
          imageAlt={custodyKycAml.marketData.imageAlt}
          variant="wide"
        />
      </section>

      <section className={styles.benefitsSection}>
        <Benefits items={custodyKycAml.benefits} />
      </section>

      <section className={styles.kycSection}>
        <h2 className={styles.sectionTitle}>
          {custodyKycAml.kyc.title} <span>{custodyKycAml.kyc.accentTitle}</span>
        </h2>
        <p className={styles.sectionDescription}>{custodyKycAml.kyc.description}</p>

        <div className={styles.kycCardsGrid}>
          {custodyKycAml.kyc.cards.map((card) => (
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

      <section className={styles.amlSection}>
        <h2 className={styles.sectionTitle}>
          {custodyKycAml.aml.title} <span>{custodyKycAml.aml.accentTitle}</span>
        </h2>

        <ItemTextWithImageList items={custodyKycAml.aml.items} className={styles.amlList} />
      </section>

      <section className={styles.complianceSection}>
        <h2 className={styles.sectionTitle}>
          {custodyKycAml.complianceFramework.title}{" "}
          <span>{custodyKycAml.complianceFramework.accentTitle}</span>
        </h2>

        <ItemTextWithImageList
          items={custodyKycAml.complianceFramework.items}
          className={styles.complianceList}
        />
      </section>

      <section className={styles.onboardingSection}>
        <h2 className={styles.sectionTitle}>
          {custodyKycAml.onboarding.title} <span>{custodyKycAml.onboarding.accentTitle}</span>
        </h2>

        <ItemsContainer
          items={custodyKycAml.onboarding.items}
          className={styles.onboardingItems}
          showMarker={false}
        />
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>
          {custodyKycAml.faq.title} <span>{custodyKycAml.faq.accentTitle}</span>
        </h2>

        <Questions items={custodyKycAml.faq.items} />
      </section>
    </main>
  );
}
