import { Intro } from "~/components/Intro/Intro";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { Benefits } from "~/components/Benefits/Benefits";
import { ItemText } from "~/components/ItemText/ItemText";
import { ItemTextWithImage } from "~/components/ItemTextWithImage/ItemTextWithImage";
import { ItemsContainer } from "~/components/ItemsContainer/ItemsContainer";
import { ItemTextWithImageList } from "~/components/ItemTextWithImageList/ItemTextWithImageList";
import { CardWithIcon } from "~/components/CardWithIcon/CardWithIcon";
import { Questions } from "~/components/Questions/Questions";
import { ThemeButton } from "~/components/ui/Button/Button";
import { useLang } from "~/hooks/useLang";

import styles from "./CustodyStakingPage.module.scss";

export function CustodyStakingPage() {
  const { custodyStaking } = useLang().content.pages;

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.introSection}>
        <Intro
          title={custodyStaking.intro.title}
          subtitle={custodyStaking.intro.text}
          badgeText={custodyStaking.intro.badgeText}
          imageSrc={custodyStaking.intro.imageSrc}
          button1={{ text: custodyStaking.intro.button1, onClick: () => {} }}
          button1Theme={ThemeButton.ALPHAMARK}
          type="without-border"
        />
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title={custodyStaking.marketData.title}
          body={custodyStaking.marketData.body}
          imageSrc={custodyStaking.marketData.imageSrc}
          imageAlt={custodyStaking.marketData.imageAlt}
          variant="wide"
        />
      </section>

      <section className={styles.benefitsSection}>
        <Benefits items={custodyStaking.benefits} />
      </section>

      <section className={styles.stakingFlowSection}>
        <h2 className={styles.sectionTitle}>
          {custodyStaking.stakingFlow.title} <span>{custodyStaking.stakingFlow.accentTitle}</span>
        </h2>

        <ItemTextWithImage
          title={custodyStaking.stakingFlow.item.title}
          text={custodyStaking.stakingFlow.item.text}
          imageSrc={custodyStaking.stakingFlow.item.imageSrc}
          imageAlt={custodyStaking.stakingFlow.item.imageAlt}
          imagePlacement={custodyStaking.stakingFlow.item.imagePlacement}
          className={styles.stakingFlowItem}
          itemTextClassName={styles.stakingFlowText}
          imageClassName={styles.stakingFlowImage}
        />
      </section>

      <section className={styles.stakingModelsSection}>
        <h2 className={styles.sectionTitle}>
          {custodyStaking.stakingModels.title}{" "}
          <span>{custodyStaking.stakingModels.accentTitle}</span>
        </h2>

        <ItemsContainer
          items={custodyStaking.stakingModels.items}
          className={styles.stakingModelsItems}
          showMarker={false}
        />
      </section>

      <section className={styles.riskManagementSection}>
        <h2 className={styles.sectionTitle}>
          {custodyStaking.riskManagement.title}{" "}
          <span>{custodyStaking.riskManagement.accentTitle}</span>
        </h2>

        <ItemTextWithImageList
          items={custodyStaking.riskManagement.items}
          className={styles.riskManagementList}
        />
      </section>

      <section className={styles.rewardsReportingSection}>
        <h2 className={styles.sectionTitle}>
          {custodyStaking.rewardsReporting.title}{" "}
          <span>{custodyStaking.rewardsReporting.accentTitle}</span>
        </h2>

        <div className={styles.rewardsCards}>
          {custodyStaking.rewardsReporting.cards.map((card) => (
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

      <section className={styles.supportedNetworksSection}>
        <h2 className={styles.sectionTitle}>
          {custodyStaking.supportedNetworks.title}{" "}
          <span>{custodyStaking.supportedNetworks.accentTitle}</span>
        </h2>

        <div className={styles.supportedNetworksGrid}>
          {custodyStaking.supportedNetworks.items.map((item) => (
            <ItemText key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>
          {custodyStaking.faq.title} <span>{custodyStaking.faq.accentTitle}</span>
        </h2>

        <Questions items={custodyStaking.faq.items} />
      </section>
    </main>
  );
}
