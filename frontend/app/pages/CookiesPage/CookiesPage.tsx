import { CardWithIcon } from "~/components/CardWithIcon/CardWithIcon";
import { ItemText } from "~/components/ItemText/ItemText";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { Questions } from "~/components/Questions/Questions";
import { TextList } from "~/components/TextList/TextList";
import { useLang } from "~/hooks/useLang";

import styles from "./CookiePage.module.scss";

export default function CookiesPage() {
  const { cookies } = useLang().content.pages;

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.hero}>
        <h1 className={styles.title}>{cookies.hero.title}</h1>
        <p className={styles.text}>{cookies.hero.text}</p>
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title={cookies.marketData.title}
          body={cookies.marketData.text}
          imageSrc={cookies.marketData.imageSrc}
          imageAlt={cookies.marketData.imageAlt}
          variant="wide"
        />
      </section>

      <section className={styles.noteSection}>
        <TextList
          items={cookies.policyNote.items}
          className={styles.noteList}
          itemClassName={styles.noteListItem}
        />
      </section>

      <section className={styles.categoriesSection}>
        <h2 className={styles.sectionTitle}>
          {cookies.categories.title} <span className={styles.sectionTitleAccent}>{cookies.categories.accentTitle}</span>
        </h2>

        <article className={styles.categoriesCard}>
          <img
            className={styles.categoriesDecor}
            src={cookies.marketData.imageSrc}
            alt=""
            aria-hidden="true"
          />

          <div className={styles.categoriesPanel}>
            <div className={styles.categoriesHeaderRow}>
              {cookies.categories.headers.map((header) => (
                <div className={styles.categoriesHeaderCell} key={header}>
                  {header}
                </div>
              ))}
            </div>

            <div className={styles.categoriesBody}>
              {cookies.categories.rows.map((row) => (
                <div className={styles.categoriesRow} key={row.category}>
                  <div className={styles.categoriesCell}>
                    <span
                      className={`${styles.categoriesCellLabel} ${styles.categoriesCellLabelAccent}`.trim()}
                    >
                      {cookies.categories.headers[0]}
                    </span>
                    <span className={styles.categoriesCellValue}>{row.category}</span>
                  </div>
                  <div className={styles.categoriesCell}>
                    <span className={styles.categoriesCellLabel}>{cookies.categories.headers[1]}</span>
                    <span className={styles.categoriesCellValue}>{row.purpose}</span>
                  </div>
                  <div className={styles.categoriesCell}>
                    <span className={styles.categoriesCellLabel}>{cookies.categories.headers[2]}</span>
                    <span className={styles.categoriesCellValue}>{row.examples}</span>
                  </div>
                  <div className={styles.categoriesCell}>
                    <span className={styles.categoriesCellLabel}>{cookies.categories.headers[3]}</span>
                    <span className={styles.categoriesCellValue}>{row.deactivatable}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className={styles.specificCookiesSection}>
        <h2 className={styles.sectionTitle}>
          {cookies.specificCookies.title}{" "}
          <span className={styles.sectionTitleAccent}>{cookies.specificCookies.accentTitle}</span>
        </h2>

        <div className={styles.specificCookiesGrid}>
          {cookies.specificCookies.items.map((item) => (
            <ItemText
              key={item.title}
              title={item.title}
              text={item.text}
              className={styles.specificCookiesItem}
            />
          ))}
        </div>
      </section>

      <section className={styles.cookieUseSection}>
        <h2 className={styles.sectionTitle}>
          {cookies.legalBasesForCookieUse.title}{" "}
          <span className={styles.sectionTitleAccent}>
            {cookies.legalBasesForCookieUse.accentTitle}
          </span>
        </h2>

        <div className={styles.cookieUseGrid}>
          {cookies.legalBasesForCookieUse.items.map((item) => (
            <CardWithIcon
              key={item.title}
              title={item.title}
              text={item.text}
              iconSrc={item.iconSrc}
              iconAlt={item.iconAlt}
              className={styles.cookieUseCard}
            />
          ))}
        </div>
      </section>

      <section className={styles.consentSection}>
        <h2 className={styles.sectionTitle}>
          {cookies.managingConsent.title}{" "}
          <span className={styles.sectionTitleAccent}>{cookies.managingConsent.accentTitle}</span>
        </h2>

        <TextList
          items={cookies.managingConsent.items}
          className={styles.consentList}
          itemClassName={styles.consentListItem}
        />

        <p className={styles.consentWithdrawal}>{cookies.managingConsent.withdrawalText}</p>
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>
          {cookies.faqCookiePolicy.title}{" "}
          <span className={styles.sectionTitleAccent}>{cookies.faqCookiePolicy.accentTitle}</span>
        </h2>

        <div className={styles.faqQuestions}>
          <Questions items={cookies.faqCookiePolicy.items} />
        </div>
      </section>
    </main>
  );
}
