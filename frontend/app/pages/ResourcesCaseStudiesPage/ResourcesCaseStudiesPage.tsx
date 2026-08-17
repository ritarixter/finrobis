import { Button, ThemeButton } from "~/components/ui/Button/Button";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { ItemTextWithImageList } from "~/components/ItemTextWithImageList/ItemTextWithImageList";
import { Questions } from "~/components/Questions/Questions";
import { useNavigate } from "react-router";
import { useLang } from "~/hooks/useLang";

import styles from "./ResourcesCaseStudiesPage.module.scss";

export function ResourcesCaseStudiesPage() {
  const { resourcesCaseStudies } = useLang().content.pages;
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate("/company/contact#form");
  };

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.hero}>
        <img
          className={styles.heroDecor}
          src={resourcesCaseStudies.intro.backgroundImageSrc}
          alt=""
          aria-hidden="true"
        />

        <img
          className={styles.heroImage}
          src={resourcesCaseStudies.intro.imageSrc}
          alt={resourcesCaseStudies.intro.title}
        />

        <div className={styles.heroCard}>
          <h1 className={styles.title}>{resourcesCaseStudies.intro.title}</h1>
          <p className={styles.text}>{resourcesCaseStudies.intro.text}</p>

          <Button theme={ThemeButton.GREEN} onClick={handleContactUsClick}>
            {resourcesCaseStudies.intro.button1}
          </Button>
        </div>
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title={resourcesCaseStudies.marketData.title}
          body={resourcesCaseStudies.marketData.body}
          imageSrc={resourcesCaseStudies.marketData.imageSrc}
          imageAlt={resourcesCaseStudies.marketData.imageAlt}
          variant="wide"
        />
      </section>

      <section className={styles.commonSection}>
        <h2 className={styles.sectionTitle}>
          {resourcesCaseStudies.commonSection.title} <span>{resourcesCaseStudies.commonSection.accentTitle}</span>
        </h2>

        <ItemTextWithImageList
          items={resourcesCaseStudies.commonSection.items}
          className={styles.commonList}
        />
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>
          {resourcesCaseStudies.faq.title} <span>{resourcesCaseStudies.faq.accentTitle}</span>
        </h2>

        <Questions items={resourcesCaseStudies.faq.items} />
      </section>
    </main>
  );
}
