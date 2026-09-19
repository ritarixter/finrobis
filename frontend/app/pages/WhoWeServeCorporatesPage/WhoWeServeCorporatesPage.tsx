import { Button, ThemeButton } from "~/components/ui/Button/Button";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { Benefits } from "~/components/Benefits/Benefits";
import { CardsWithImage } from "~/components/CardsWithImage/CardsWithImage";
import { CardWithIcon } from "~/components/CardWithIcon/CardWithIcon";
import { Questions } from "~/components/Questions/Questions";
import { useLang } from "~/hooks/useLang";

import styles from "./WhoWeServeCorporatesPage.module.scss";

export function WhoWeServeCorporatesPage() {
  const { whoWeServeCorporates } = useLang().content.pages;

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.hero}>
        <img
          className={styles.heroDecor}
          src={whoWeServeCorporates.intro.backgroundImageSrc}
          alt=""
          aria-hidden="true"
        />

        <img
          className={styles.heroImage}
          src={whoWeServeCorporates.intro.imageSrc}
          alt={whoWeServeCorporates.intro.title}
        />

        <div className={styles.heroCard}>
          <h1 className={styles.title}>{whoWeServeCorporates.intro.title}</h1>
          <p className={styles.text}>{whoWeServeCorporates.intro.text}</p>

          <Button theme={ThemeButton.GREEN} onClick={() => {}}>
            {whoWeServeCorporates.intro.button1}
          </Button>
        </div>
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title={whoWeServeCorporates.marketData.title}
          body={whoWeServeCorporates.marketData.body}
          imageSrc={whoWeServeCorporates.marketData.imageSrc}
          imageAlt={whoWeServeCorporates.marketData.imageAlt}
          variant="wide"
        />
      </section>

      <section className={styles.benefitsSection}>
        <Benefits items={whoWeServeCorporates.benefits} />
      </section>

      <section className={styles.solutionsSection}>
        <h2 className={styles.sectionTitle}>
          {whoWeServeCorporates.solutions.title}{" "}
          <span>{whoWeServeCorporates.solutions.accentTitle}</span>
        </h2>

        <CardsWithImage items={whoWeServeCorporates.solutions.items} />
      </section>

      <section className={styles.useCasesSection}>
        <h2 className={styles.sectionTitle}>
          {whoWeServeCorporates.useCases.title}{" "}
          <span>{whoWeServeCorporates.useCases.accentTitle}</span>
        </h2>

        <div className={styles.useCasesGrid}>
          {whoWeServeCorporates.useCases.cards.map((card) => (
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
          {whoWeServeCorporates.faq.title} <span>{whoWeServeCorporates.faq.accentTitle}</span>
        </h2>

        <Questions items={whoWeServeCorporates.faq.items} />
      </section>
    </main>
  );
}
