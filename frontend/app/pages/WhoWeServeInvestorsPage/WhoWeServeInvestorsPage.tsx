import { Button, ThemeButton } from "~/components/ui/Button/Button";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { Benefits } from "~/components/Benefits/Benefits";
import { ItemText } from "~/components/ItemText/ItemText";
import { CardWithIcon } from "~/components/CardWithIcon/CardWithIcon";
import { ItemsContainer } from "~/components/ItemsContainer/ItemsContainer";
import { Questions } from "~/components/Questions/Questions";
import { useNavigate } from "react-router";
import { useLang } from "~/hooks/useLang";

import styles from "./WhoWeServeInvestorsPage.module.scss";

export function WhoWeServeInvestorsPage() {
  const { whoWeServeInvestors } = useLang().content.pages;
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate("/company/contact#form");
  };

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.hero}>
        <img
          className={styles.heroDecor}
          src={whoWeServeInvestors.intro.backgroundImageSrc}
          alt=""
          aria-hidden="true"
        />

        <img
          className={styles.heroImage}
          src={whoWeServeInvestors.intro.imageSrc}
          alt={whoWeServeInvestors.intro.title}
        />

        <div className={styles.heroCard}>
          <h1 className={styles.title}>{whoWeServeInvestors.intro.title}</h1>
          <p className={styles.text}>{whoWeServeInvestors.intro.text}</p>

          <Button theme={ThemeButton.GREEN} onClick={handleContactUsClick}>
            {whoWeServeInvestors.intro.button1}
          </Button>
        </div>
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title={whoWeServeInvestors.marketData.title}
          body={whoWeServeInvestors.marketData.body}
          imageSrc={whoWeServeInvestors.marketData.imageSrc}
          imageAlt={whoWeServeInvestors.marketData.imageAlt}
          variant="wide"
        />
      </section>

      <section className={styles.benefitsSection}>
        <Benefits items={whoWeServeInvestors.benefits} />
      </section>

      <section className={styles.solutionsSection}>
        <h2 className={styles.sectionTitle}>
          {whoWeServeInvestors.investmentSolutions.title}{" "}
          <span>{whoWeServeInvestors.investmentSolutions.accentTitle}</span>
        </h2>

        <div className={styles.solutionsGrid}>
          {whoWeServeInvestors.investmentSolutions.items.map((item) => (
            <ItemText key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      <section className={styles.strategiesSection}>
        <h2 className={styles.sectionTitle}>
          {whoWeServeInvestors.strategies.title} <span>{whoWeServeInvestors.strategies.accentTitle}</span>
        </h2>

        <div className={styles.strategiesGrid}>
          {whoWeServeInvestors.strategies.cards.map((card) => (
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

      <section className={styles.familyOfficesSection}>
        <h2 className={styles.sectionTitle}>
          {whoWeServeInvestors.familyOffices.title} <span>{whoWeServeInvestors.familyOffices.accentTitle}</span>
        </h2>

        <p className={styles.familyOfficesDescription}>{whoWeServeInvestors.familyOffices.description}</p>

        <ItemsContainer
          items={whoWeServeInvestors.familyOffices.items}
          className={styles.familyOfficesItems}
          showMarker={false}
        />
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>
          {whoWeServeInvestors.faq.title} <span>{whoWeServeInvestors.faq.accentTitle}</span>
        </h2>

        <Questions items={whoWeServeInvestors.faq.items} />
      </section>
    </main>
  );
}
