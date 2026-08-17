import { Button, ThemeButton } from "~/components/ui/Button/Button";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { Benefits } from "~/components/Benefits/Benefits";
import { CardsWithImage } from "~/components/CardsWithImage/CardsWithImage";
import { CardWithIcon } from "~/components/CardWithIcon/CardWithIcon";
import { Questions } from "~/components/Questions/Questions";
import { useNavigate } from "react-router";
import { useLang } from "~/hooks/useLang";

import styles from "./WhoWeServePage.module.scss";

export function WhoWeServePage() {
  const { whoWeServe } = useLang().content.pages;
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate("/company/contact#form");
  };

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.hero}>
        <img
          className={styles.heroDecor}
          src={whoWeServe.intro.backgroundImageSrc}
          alt=""
          aria-hidden="true"
        />

        <img className={styles.heroImage} src={whoWeServe.intro.imageSrc} alt={whoWeServe.intro.title} />

        <div className={styles.heroCard}>
          <h1 className={styles.title}>{whoWeServe.intro.title}</h1>
          <p className={styles.text}>{whoWeServe.intro.text}</p>

          <Button theme={ThemeButton.GREEN} onClick={handleContactUsClick}>
            {whoWeServe.intro.button1}
          </Button>
        </div>
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title={whoWeServe.marketData.title}
          body={whoWeServe.marketData.body}
          imageSrc={whoWeServe.marketData.imageSrc}
          imageAlt={whoWeServe.marketData.imageAlt}
          variant="wide"
        />
      </section>

      <section className={styles.benefitsSection}>
        <Benefits items={whoWeServe.benefits} />
      </section>

      <section className={styles.segmentsSection}>
        <h2 className={styles.sectionTitle}>
          {whoWeServe.clientSegments.title} <span>{whoWeServe.clientSegments.accentTitle}</span>
        </h2>

        <CardsWithImage items={whoWeServe.clientSegments.items} />
      </section>

      <section className={styles.providersSection}>
        <h2 className={styles.sectionTitle}>
          {whoWeServe.providers.title} <span>{whoWeServe.providers.accentTitle}</span>
        </h2>

        <div className={styles.providersGrid}>
          {whoWeServe.providers.cards.map((card) => (
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
          {whoWeServe.faq.title} <span>{whoWeServe.faq.accentTitle}</span>
        </h2>

        <Questions items={whoWeServe.faq.items} />
      </section>
    </main>
  );
}
