import { Button, ThemeButton } from "~/components/ui/Button/Button";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { Benefits } from "~/components/Benefits/Benefits";
import { CardsWithImage } from "~/components/CardsWithImage/CardsWithImage";
import { CardWithIcon } from "~/components/CardWithIcon/CardWithIcon";
import { Questions } from "~/components/Questions/Questions";
import { useNavigate } from "react-router";
import { useLang } from "~/hooks/useLang";

import styles from "./WhoWeServeInstitutionsPage.module.scss";

export function WhoWeServeInstitutionsPage() {
  const { whoWeServeInstitutions } = useLang().content.pages;
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate("/company/contact#form");
  };

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.hero}>
        <img
          className={styles.heroDecor}
          src={whoWeServeInstitutions.intro.backgroundImageSrc}
          alt=""
          aria-hidden="true"
        />

        <img
          className={styles.heroImage}
          src={whoWeServeInstitutions.intro.imageSrc}
          alt={whoWeServeInstitutions.intro.title}
        />

        <div className={styles.heroCard}>
          <h1 className={styles.title}>{whoWeServeInstitutions.intro.title}</h1>
          <p className={styles.text}>{whoWeServeInstitutions.intro.text}</p>

          <Button theme={ThemeButton.GREEN} onClick={handleContactUsClick}>
            {whoWeServeInstitutions.intro.button1}
          </Button>
        </div>
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title={whoWeServeInstitutions.marketData.title}
          body={whoWeServeInstitutions.marketData.body}
          imageSrc={whoWeServeInstitutions.marketData.imageSrc}
          imageAlt={whoWeServeInstitutions.marketData.imageAlt}
          variant="wide"
        />
      </section>

      <section className={styles.benefitsSection}>
        <Benefits items={whoWeServeInstitutions.benefits} />
      </section>

      <section className={styles.solutionsSection}>
        <h2 className={styles.sectionTitle}>
          {whoWeServeInstitutions.solutions.title}{" "}
          <span>{whoWeServeInstitutions.solutions.accentTitle}</span>
        </h2>

        <CardsWithImage items={whoWeServeInstitutions.solutions.items} />
      </section>

      <section className={styles.clientsSection}>
        <h2 className={styles.sectionTitle}>
          {whoWeServeInstitutions.clients.title}{" "}
          <span>{whoWeServeInstitutions.clients.accentTitle}</span>
        </h2>

        <div className={styles.clientsGrid}>
          {whoWeServeInstitutions.clients.cards.map((card) => (
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
          {whoWeServeInstitutions.faq.title} <span>{whoWeServeInstitutions.faq.accentTitle}</span>
        </h2>

        <Questions items={whoWeServeInstitutions.faq.items} />
      </section>
    </main>
  );
}
