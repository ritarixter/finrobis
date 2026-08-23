import { Intro } from "~/components/Intro/Intro";
import { useLang } from "../../hooks/useLang";
import { Benefits } from "~/components/Benefits/Benefits";
import { ItemTextWithImageList } from "~/components/ItemTextWithImageList/ItemTextWithImageList";

import styles from "./HomePage.module.scss";
import { ItemsContainer } from "~/components/ItemsContainer/ItemsContainer";
import { Slider } from "~/components/ui";
import { TechnologyCards } from "~/components/TechnologyCards/TechnologyCards";
import { CardsWithImage } from "~/components/CardsWithImage/CardsWithImage";

export const HomePage = () => {
  const { homepage } = useLang().content.pages;

  return (
    <main className="section homepage">
      <Intro
        title={homepage.intro.title}
        subtitle={homepage.intro.subtitle}
        button1={{ text: homepage.intro.button1, onClick: () => {} }}
        button2={{ text: homepage.intro.button2, onClick: () => {} }}
        badgeText={homepage.intro.badgeText}
        imageSrc={homepage.intro.image}
        type="without-border"
      />
      <section className={styles.trust}>
        <h2 className={styles.sectionTitle}>
          {homepage.sections.trust.title}{" "}
          <span className="yellow">{homepage.sections.trust.accentTitle}</span>
        </h2>
        <Benefits items={homepage.benefits} />
      </section>
      <section className={styles.core}>
        <h2 className={styles.sectionTitle}>
          {homepage.sections.core.title}{" "}
          <span className="yellow">{homepage.sections.core.accentTitle}</span>
        </h2>
        <ItemTextWithImageList
          className={styles.solutionsList}
          itemClassName={styles.solutionItem}
          items={homepage.solutions}
        />
      </section>

      <section className={styles.why}>
        <h2 className={styles.sectionTitle}>
          {homepage.sections.why.title}{" "}
          <span className="yellow">{homepage.sections.why.accentTitle}</span>
        </h2>
        <ItemsContainer items={homepage.whyItems} />
      </section>

      <section className={styles.whoWeServe}>
        <h2 className={styles.sectionTitle}>
          {homepage.sections.whoWeServe.title}{" "}
          <span className="yellow">{homepage.sections.whoWeServe.accentTitle}</span>
        </h2>
        <Slider slides={homepage.slides} />
      </section>

      <section className={styles.programmaticAccess}>
        <h2 className={styles.sectionTitle}>
          {homepage.sections.programmaticAccess.title}
          <span className="yellow">{homepage.sections.programmaticAccess.accentTitle}</span>
        </h2>
        <div className={styles.technologyCardsContainer}>
          <TechnologyCards items={homepage.technologyItems.slice(0, 3)} />
          <TechnologyCards items={homepage.technologyItems.slice(3, 6)} />
        </div>
      </section>

      <section className={styles.institutions}>
        <h2 className={styles.sectionTitle}>
          {homepage.sections.institutions.title}{" "}
          <span className="yellow">{homepage.sections.institutions.accentTitle}</span>
        </h2>

        <CardsWithImage items={homepage.institutions} />
      </section>
    </main>
  );
};
