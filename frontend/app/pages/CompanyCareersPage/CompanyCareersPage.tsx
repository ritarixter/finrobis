import { Button, ThemeButton } from "~/components/ui/Button/Button";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { Benefits } from "~/components/Benefits/Benefits";
import { CardsWithImage } from "~/components/CardsWithImage/CardsWithImage";
import { ItemText } from "~/components/ItemText/ItemText";
import { ItemsContainer } from "~/components/ItemsContainer/ItemsContainer";
import { Questions } from "~/components/Questions/Questions";
import { useNavigate } from "react-router";
import { useLang } from "~/hooks/useLang";

import styles from "./CompanyCareersPage.module.scss";

export function CompanyCareersPage() {
  const { careers } = useLang().content.pages;
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate("/company/contact#form");
  };

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.hero}>
        <img
          className={styles.heroDecor}
          src={careers.intro.backgroundImageSrc}
          alt=""
          aria-hidden="true"
        />

        <img className={styles.heroImage} src={careers.intro.imageSrc} alt={careers.intro.title} />

        <div className={styles.heroCard}>
          <h1 className={styles.title}>{careers.intro.title}</h1>
          <p className={styles.text}>{careers.intro.text}</p>

          <Button theme={ThemeButton.GREEN} onClick={handleContactUsClick}>
            {careers.intro.button1}
          </Button>
        </div>
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title={careers.marketData.title}
          body={careers.marketData.body}
          imageSrc={careers.marketData.imageSrc}
          imageAlt={careers.marketData.imageAlt}
          variant="wide"
        />
      </section>

      <section className={styles.benefitsSection}>
        <Benefits items={careers.benefits} />
      </section>

      <section className={styles.workCultureSection}>
        <h2 className={styles.sectionTitle}>
          {careers.workCulture.title} <span>{careers.workCulture.accentTitle}</span>
        </h2>

        <CardsWithImage items={careers.workCulture.items} />
      </section>

      <section className={styles.offerSection}>
        <h2 className={styles.sectionTitle}>
          {careers.offer.title} <span>{careers.offer.accentTitle}</span>
        </h2>

        <div className={styles.offerItems}>
          {careers.offer.items.map((item) => (
            <ItemText key={item.id} title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      <section className={styles.processSection}>
        <h2 className={styles.sectionTitle}>
          {careers.process.title} <span>{careers.process.accentTitle}</span>
        </h2>

        <ItemsContainer
          items={careers.process.items.map((item) => ({ title: item.title, text: item.text }))}
          className={styles.processItems}
        />
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>
          {careers.faq.title} <span>{careers.faq.accentTitle}</span>
        </h2>

        <Questions items={careers.faq.items} />
      </section>
    </main>
  );
}
