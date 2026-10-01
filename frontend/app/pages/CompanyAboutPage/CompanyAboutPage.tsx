import { Button, ThemeButton } from "~/components/ui/Button/Button";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { Benefits } from "~/components/Benefits/Benefits";
import { CardsWithImage } from "~/components/CardsWithImage/CardsWithImage";
import { ItemText } from "~/components/ItemText/ItemText";
import { Questions } from "~/components/Questions/Questions";
import { TextList } from "~/components/TextList/TextList";
import { MarketBackgroundAnimation } from "~/components/MarketBackgroundAnimation/MarketBackgroundAnimation";
import { useNavigate } from "react-router";
import { useLang } from "~/hooks/useLang";
import { useScrollCardMotion } from "~/hooks/useScrollCardMotion";

import styles from "./CompanyAboutPage.module.scss";

export function CompanyAboutPage() {
  const { company } = useLang().content.pages;
  const about = company.about;
  const navigate = useNavigate();
  const valuesRef = useScrollCardMotion<HTMLDivElement>(`.${styles.valuesMotionCard}`);
  const regulatoryRef = useScrollCardMotion<HTMLDivElement>(`.${styles.regulatoryMotionCard}`);

  const handleContactUsClick = () => {
    navigate("/company/contact#form");
  };

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.hero}>
        <img className={styles.heroImage} src={about.intro.imageSrc} alt={about.intro.title} />
        <MarketBackgroundAnimation className={styles.heroMarketAnimation} />

        <div className={styles.heroCard}>
          <h1 className={styles.title}>{about.intro.title}</h1>
          <p className={styles.text}>{about.intro.text}</p>

          <Button theme={ThemeButton.GREEN} onClick={handleContactUsClick}>
            {about.intro.button1}
          </Button>
        </div>
      </section>

      <section className={styles.storySection}>
        <MarketDataCard
          title={about.story.title}
          body={about.story.body}
          imageSrc={about.story.imageSrc}
          imageAlt={about.story.imageAlt}
          variant="wide"
          interactiveDots
        />
      </section>

      <section className={styles.benefitsSection}>
        <Benefits items={about.benefits} />
      </section>

      <section className={styles.missionSection}>
        <div className={styles.missionHeader}>
          <h2 className={styles.missionTitle}>
            {about.mission.title} <span>{about.mission.accentTitle}</span>
          </h2>
          <p className={styles.missionText}>{about.mission.text}</p>
        </div>

        <div className={styles.missionContent}>
          <TextList items={[about.mission.quote]} className={styles.missionQuoteList} />

          <div className={styles.missionVisual}>
            <img
              className={styles.missionImage}
              src={about.mission.imageSrc}
              alt={about.mission.imageAlt}
            />
            <MarketBackgroundAnimation />
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <h2 className={styles.valuesTitle}>
          {about.values.title} <span>{about.values.accentTitle}</span>
        </h2>

        <div
          ref={valuesRef}
          className={styles.valuesMotionRoot}
          data-scroll-motion-root="company-values"
        >
          <CardsWithImage
            items={about.values.items}
            itemClassName={styles.valuesMotionCard}
          />
        </div>
      </section>

      <section className={styles.regulatorySection}>
        <h2 className={styles.regulatoryTitle}>
          {about.regulatoryFramework.title} <span>{about.regulatoryFramework.accentTitle}</span>
        </h2>

        <div
          ref={regulatoryRef}
          className={styles.regulatoryItems}
          data-scroll-motion-root="regulatory-framework"
        >
          <div className={styles.regulatoryTopRow}>
            {about.regulatoryFramework.items.slice(0, 2).map((item) => (
              <ItemText
                key={item.id}
                className={styles.regulatoryMotionCard}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>

          <div className={styles.regulatoryBottomRow}>
            <ItemText
              className={styles.regulatoryMotionCard}
              title={about.regulatoryFramework.items[2].title}
              text={about.regulatoryFramework.items[2].text}
            />
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>
          {about.faqAbout.title} <span>{about.faqAbout.accentTitle}</span>
        </h2>

        <Questions items={about.faqAbout.items} interactiveDots />
      </section>
    </main>
  );
}
