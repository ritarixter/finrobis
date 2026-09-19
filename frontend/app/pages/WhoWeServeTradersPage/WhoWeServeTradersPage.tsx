import { Button, ThemeButton } from "~/components/ui/Button/Button";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { Benefits } from "~/components/Benefits/Benefits";
import { ItemText } from "~/components/ItemText/ItemText";
import { ItemTextWithImage } from "~/components/ItemTextWithImage/ItemTextWithImage";
import { CardWithIcon } from "~/components/CardWithIcon/CardWithIcon";
import { Questions } from "~/components/Questions/Questions";
import { MarketBackgroundAnimation } from "~/components/MarketBackgroundAnimation/MarketBackgroundAnimation";
import { useNavigate } from "react-router";
import { useLang } from "~/hooks/useLang";

import styles from "./WhoWeServeTradersPage.module.scss";

export function WhoWeServeTradersPage() {
  const { whoWeServeTraders } = useLang().content.pages;
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate("/company/contact#form");
  };

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.hero}>
        <img
          className={styles.heroImage}
          src={whoWeServeTraders.intro.imageSrc}
          alt={whoWeServeTraders.intro.title}
        />
        <MarketBackgroundAnimation />

        <div className={styles.heroCard}>
          <h1 className={styles.title}>{whoWeServeTraders.intro.title}</h1>
          <p className={styles.text}>{whoWeServeTraders.intro.text}</p>

          <Button theme={ThemeButton.GREEN} onClick={handleContactUsClick}>
            {whoWeServeTraders.intro.button1}
          </Button>
        </div>
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title={whoWeServeTraders.marketData.title}
          body={whoWeServeTraders.marketData.body}
          imageSrc={whoWeServeTraders.marketData.imageSrc}
          imageAlt={whoWeServeTraders.marketData.imageAlt}
          variant="wide"
        />
      </section>

      <section className={styles.benefitsSection}>
        <Benefits items={whoWeServeTraders.benefits} />
      </section>

      <section className={styles.tradingInfrastructureSection}>
        <h2 className={styles.sectionTitle}>
          {whoWeServeTraders.tradingInfrastructure.title}{" "}
          <span>{whoWeServeTraders.tradingInfrastructure.accentTitle}</span>
        </h2>

        <div className={styles.tradingInfrastructureGrid}>
          {whoWeServeTraders.tradingInfrastructure.items.map((item) => (
            <ItemText key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      <section className={styles.executionAccessSection}>
        <h2 className={styles.sectionTitle}>
          {whoWeServeTraders.executionAccess.title}{" "}
          <span>{whoWeServeTraders.executionAccess.accentTitle}</span>
        </h2>

        <ItemTextWithImage
          title={whoWeServeTraders.executionAccess.items[0].title}
          text={whoWeServeTraders.executionAccess.items[0].text}
          imageSrc={whoWeServeTraders.executionAccess.items[0].imageSrc}
          imageAlt={whoWeServeTraders.executionAccess.items[0].imageAlt}
        />
      </section>

      <section className={styles.supportedAssetsSection}>
        <h2 className={styles.sectionTitle}>
          {whoWeServeTraders.supportedAssets.title}{" "}
          <span>{whoWeServeTraders.supportedAssets.accentTitle}</span>
        </h2>

        <div className={styles.supportedAssetsGrid}>
          {whoWeServeTraders.supportedAssets.cards.map((card) => (
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
          {whoWeServeTraders.faq.title} <span>{whoWeServeTraders.faq.accentTitle}</span>
        </h2>

        <Questions items={whoWeServeTraders.faq.items} />
      </section>
    </main>
  );
}
