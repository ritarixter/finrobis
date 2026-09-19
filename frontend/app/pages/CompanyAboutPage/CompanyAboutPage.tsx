import { Button, ThemeButton } from "~/components/ui/Button/Button";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { Benefits } from "~/components/Benefits/Benefits";
import { CardsWithImage } from "~/components/CardsWithImage/CardsWithImage";
import { ItemText } from "~/components/ItemText/ItemText";
import { Questions } from "~/components/Questions/Questions";
import { TextList } from "~/components/TextList/TextList";
import { useNavigate } from "react-router";
import { useLang } from "~/hooks/useLang";

import styles from "./CompanyAboutPage.module.scss";

export function CompanyAboutPage() {
  const { company } = useLang().content.pages;
  const about = company.about;
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate("/company/contact#form");
  };

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.hero}>
        <img
          className={styles.heroDecor}
          src={about.intro.backgroundImageSrc}
          alt=""
          aria-hidden="true"
        />

        <img className={styles.heroImage} src={about.intro.imageSrc} alt={about.intro.title} />

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

          <img
            className={styles.missionImage}
            src={about.mission.imageSrc}
            alt={about.mission.imageAlt}
          />
        </div>
      </section>

      <section className={styles.valuesSection}>
        <h2 className={styles.valuesTitle}>
          {about.values.title} <span>{about.values.accentTitle}</span>
        </h2>

        <CardsWithImage items={about.values.items} />
      </section>

      <section className={styles.regulatorySection}>
        <h2 className={styles.regulatoryTitle}>
          {about.regulatoryFramework.title} <span>{about.regulatoryFramework.accentTitle}</span>
        </h2>

        <div className={styles.regulatoryItems}>
          <div className={styles.regulatoryTopRow}>
            {about.regulatoryFramework.items.slice(0, 2).map((item) => (
              <ItemText key={item.id} title={item.title} text={item.text} />
            ))}
          </div>

          <div className={styles.regulatoryBottomRow}>
            <ItemText
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

        <Questions items={about.faqAbout.items} />
      </section>
    </main>
  );
}
