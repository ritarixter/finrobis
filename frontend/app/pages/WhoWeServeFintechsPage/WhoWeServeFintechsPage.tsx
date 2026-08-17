import { Button, ThemeButton } from "~/components/ui/Button/Button";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { Benefits } from "~/components/Benefits/Benefits";
import { CardsWithImage } from "~/components/CardsWithImage/CardsWithImage";
import { CardWithIcon } from "~/components/CardWithIcon/CardWithIcon";
import { Questions } from "~/components/Questions/Questions";
import { useNavigate } from "react-router";
import { useLang } from "~/hooks/useLang";

import styles from "./WhoWeServeFintechsPage.module.scss";

export function WhoWeServeFintechsPage() {
  const { whoWeServeFintechs } = useLang().content.pages;
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate("/company/contact#form");
  };

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.hero}>
        <img
          className={styles.heroDecor}
          src={whoWeServeFintechs.intro.backgroundImageSrc}
          alt=""
          aria-hidden="true"
        />

        <img
          className={styles.heroImage}
          src={whoWeServeFintechs.intro.imageSrc}
          alt={whoWeServeFintechs.intro.title}
        />

        <div className={styles.heroCard}>
          <h1 className={styles.title}>{whoWeServeFintechs.intro.title}</h1>
          <p className={styles.text}>{whoWeServeFintechs.intro.text}</p>

          <Button theme={ThemeButton.GREEN} onClick={handleContactUsClick}>
            {whoWeServeFintechs.intro.button1}
          </Button>
        </div>
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title={whoWeServeFintechs.marketData.title}
          body={whoWeServeFintechs.marketData.body}
          imageSrc={whoWeServeFintechs.marketData.imageSrc}
          imageAlt={whoWeServeFintechs.marketData.imageAlt}
          variant="wide"
        />
      </section>

      <section className={styles.benefitsSection}>
        <Benefits items={whoWeServeFintechs.benefits} />
      </section>

      <section className={styles.solutionsSection}>
        <h2 className={styles.sectionTitle}>
          {whoWeServeFintechs.solutions.title} <span>{whoWeServeFintechs.solutions.accentTitle}</span>
        </h2>

        <CardsWithImage items={whoWeServeFintechs.solutions.items} />
      </section>

      <section className={styles.useCasesSection}>
        <h2 className={styles.sectionTitle}>
          {whoWeServeFintechs.useCases.title} <span>{whoWeServeFintechs.useCases.accentTitle}</span>
        </h2>

        <div className={styles.useCasesGrid}>
          {whoWeServeFintechs.useCases.cards.map((card) => (
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
          {whoWeServeFintechs.faq.title} <span>{whoWeServeFintechs.faq.accentTitle}</span>
        </h2>

        <Questions items={whoWeServeFintechs.faq.items} />
      </section>
    </main>
  );
}
