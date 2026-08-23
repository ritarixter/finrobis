import { CardWithIcon } from "~/components/CardWithIcon/CardWithIcon";
import { ItemText } from "~/components/ItemText/ItemText";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { Questions } from "~/components/Questions/Questions";
import { TextList } from "~/components/TextList/TextList";
import { useLang } from "~/hooks/useLang";

import styles from "./PrivacyPage.module.scss";

export default function PrivacyPage() {
  const { privacy } = useLang().content.pages;

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.hero}>
        <h1 className={styles.title}>{privacy.hero.title}</h1>
        <p className={styles.text}>{privacy.hero.text}</p>
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title=""
          body={privacy.marketData.text}
          imageSrc={privacy.marketData.imageSrc}
          imageAlt={privacy.marketData.imageAlt}
          variant="wide"
          titleClassName={styles.hiddenTitle}
          bodyClassName={styles.marketDataBody}
        />
      </section>

      <section className={styles.controllerSection}>
        <h2 className={styles.sectionTitle}>
          {privacy.controller.title}{" "}
          <span className={styles.sectionTitleAccent}>{privacy.controller.accentTitle}</span>
        </h2>

        <article className={styles.controllerCard}>
          <img
            className={styles.controllerDecor}
            src={privacy.marketData.imageSrc}
            alt=""
            aria-hidden="true"
          />

          <div className={styles.controllerPanel}>
            <div className={styles.controllerList}>
              {privacy.controller.items.map((item) => (
                <div className={styles.controllerRow} key={item.title}>
                  <h3 className={styles.controllerRowTitle}>{item.title}</h3>
                  <p className={styles.controllerRowText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className={styles.legalBasesSection}>
        <h2 className={styles.sectionTitle}>
          {privacy.legalBases.title}{" "}
          <span className={styles.sectionTitleAccent}>{privacy.legalBases.accentTitle}</span>
        </h2>

        <p className={styles.legalBasesText}>{privacy.legalBases.text}</p>

        <TextList items={privacy.legalBases.items} className={styles.legalBasesList} />
      </section>

      <section className={styles.categoriesSection}>
        <h2 className={styles.sectionTitle}>
          {privacy.categories.title}{" "}
          <span className={styles.sectionTitleAccent}>{privacy.categories.accentTitle}</span>
        </h2>

        <p className={styles.sectionLeadText}>{privacy.categories.text}</p>

        <div className={styles.dataCategoriesGrid}>
          {privacy.categories.items.map((item) => (
            <ItemText
              key={item.title}
              title={item.title}
              text={item.text}
              className={styles.dataCategoryItem}
            />
          ))}
        </div>
      </section>

      <section className={styles.purposesSection}>
        <h2 className={styles.sectionTitle}>
          {privacy.purposes.title}{" "}
          <span className={styles.sectionTitleAccent}>{privacy.purposes.accentTitle}</span>
        </h2>

        <p className={styles.sectionLeadText}>{privacy.purposes.text}</p>

        <div className={styles.purposesGrid}>
          {privacy.purposes.items.map((item) => (
            <CardWithIcon
              key={item.title}
              title={item.title}
              text={item.text}
              iconSrc={item.iconSrc}
              iconAlt={item.iconAlt}
              className={styles.purposeCard}
            />
          ))}
        </div>
      </section>

      <section className={styles.thirdPartiesSection}>
        <h2 className={styles.sectionTitle}>
          {privacy.thirdParties.title}{" "}
          <span className={styles.sectionTitleAccent}>{privacy.thirdParties.accentTitle}</span>
        </h2>

        <p className={styles.sectionLeadText}>{privacy.thirdParties.text}</p>

        <TextList items={privacy.thirdParties.items} className={styles.legalBasesList} />
      </section>

      <section className={styles.retentionPeriodsSection}>
        <h2 className={styles.sectionTitle}>
          {privacy.retentionPeriods.title}{" "}
          <span className={styles.sectionTitleAccent}>
            {privacy.retentionPeriods.accentTitle}
          </span>
        </h2>

        <article className={styles.controllerCard}>
          <img
            className={styles.controllerDecor}
            src={privacy.marketData.imageSrc}
            alt=""
            aria-hidden="true"
          />

          <div className={styles.controllerPanel}>
            <div className={styles.controllerList}>
              {privacy.retentionPeriods.items.map((item) => (
                <div className={styles.controllerRow} key={item.title}>
                  <h3 className={styles.controllerRowTitle}>{item.title}</h3>
                  <p className={styles.controllerRowText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className={styles.rightsSection}>
        <h2 className={styles.sectionTitle}>
          {privacy.rights.title}{" "}
          <span className={styles.sectionTitleAccent}>{privacy.rights.accentTitle}</span>
        </h2>

        <div className={styles.rightsGrid}>
          {privacy.rights.items.map((item) => (
            <CardWithIcon
              key={item.title}
              title={item.title}
              text={item.text}
              iconSrc={item.iconSrc}
              iconAlt={item.iconAlt}
              className={styles.rightCard}
            />
          ))}
        </div>
      </section>

      <section className={styles.dataSecuritySection}>
        <h2 className={styles.sectionTitle}>
          {privacy.dataSecurity.title}{" "}
          <span className={styles.sectionTitleAccent}>{privacy.dataSecurity.accentTitle}</span>
        </h2>

        <TextList items={privacy.dataSecurity.items} className={styles.dataSecurityList} />
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>
          {privacy.faq.title}{" "}
          <span className={styles.sectionTitleAccent}>{privacy.faq.accentTitle}</span>
        </h2>

        <div className={styles.faqQuestions}>
          <Questions items={privacy.faq.items} />
        </div>
      </section>
    </main>
  );
}
