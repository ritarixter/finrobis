import { CardWithIcon } from "~/components/CardWithIcon/CardWithIcon";
import { CardWithImage } from "~/components/CardWithImage/CardWithImage";
import { ItemText } from "~/components/ItemText/ItemText";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { Questions } from "~/components/Questions/Questions";
import { TextList } from "~/components/TextList/TextList";
import { useLang } from "~/hooks/useLang";

import styles from "./TermsPage.module.scss";

export default function TermsPage() {
  const { terms } = useLang().content.pages;

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.hero}>
        <h1 className={styles.title}>{terms.hero.title}</h1>
        <p className={styles.text}>{terms.hero.text}</p>
      </section>

      <section className={styles.marketDataSection}>
        <MarketDataCard
          title=""
          body={terms.marketData.text}
          imageSrc={terms.marketData.imageSrc}
          imageAlt={terms.marketData.imageAlt}
          variant="wide"
          className={styles.marketDataHeroCard}
          titleClassName={styles.hiddenTitle}
          bodyClassName={styles.marketDataBody}
          imageWrapperStyle={{
            position: "absolute",
            top: 0,
            left: 0,
            right: "auto",
            bottom: "auto",
          }}
          imageStyle={{
            width: "100%",
            height: "auto",
            maxWidth: "none",
          }}
        />
      </section>

      <section className={styles.disclaimerSection}>
        <h2 className={styles.sectionTitle}>
          {terms.disclaimer.title}{" "}
          <span className={styles.sectionTitleAccent}>{terms.disclaimer.accentTitle}</span>
        </h2>

        <div className={styles.itemsGrid}>
          {terms.disclaimer.items.map((item) => (
            <ItemText
              key={item.title}
              title={item.title}
              text={item.text}
              className={styles.itemCard}
            />
          ))}
        </div>
      </section>

      <section className={styles.targetAudienceSection}>
        <h2 className={styles.sectionTitle}>
          {terms.targetAudience.title}{" "}
          <span className={styles.sectionTitleAccent}>{terms.targetAudience.accentTitle}</span>
        </h2>

        <TextList
          items={terms.targetAudience.items}
          className={styles.lineOnlyList}
          itemClassName={styles.lineOnlyListItem}
        />
      </section>

      <section className={styles.investmentDisclaimerSection}>
        <h2 className={`${styles.sectionTitle} ${styles.investmentDisclaimerTitle}`.trim()}>
          {terms.investmentDisclaimer.title}{" "}
          <span className={styles.sectionTitleAccent}>
            {terms.investmentDisclaimer.accentTitle}
          </span>
        </h2>

        <p className={styles.sectionLeadText}>{terms.investmentDisclaimer.text}</p>

        <TextList items={terms.investmentDisclaimer.items} className={styles.bulletList} />
      </section>

      <section className={styles.termsSection}>
        <h2 className={styles.sectionTitle}>
          {terms.termsOfUse.title}{" "}
          <span className={styles.sectionTitleAccent}>{terms.termsOfUse.accentTitle}</span>
        </h2>

        <div className={styles.itemsGrid}>
          {terms.termsOfUse.items.map((item) => (
            <ItemText
              key={item.title}
              title={item.title}
              text={item.text}
              className={styles.itemCard}
            />
          ))}
        </div>
      </section>

      <section className={styles.copyrightSection}>
        <h2 className={styles.sectionTitle}>
          {terms.copyright.title}{" "}
          <span className={styles.sectionTitleAccent}>{terms.copyright.accentTitle}</span>
        </h2>

        <p className={styles.sectionLeadText}>{terms.copyright.text}</p>
      </section>

      <section className={styles.applicableLawSection}>
        <h2 className={styles.sectionTitle}>
          {terms.applicableLaw.title}{" "}
          <span className={styles.sectionTitleAccent}>{terms.applicableLaw.accentTitle}</span>
        </h2>

        <div className={styles.applicableLawGrid}>
          {terms.applicableLaw.items.map((item) => (
            <CardWithIcon
              key={item.title}
              title={item.title}
              text={item.text}
              iconSrc={item.iconSrc}
              iconAlt={item.iconAlt}
              className={styles.applicableLawCard}
            />
          ))}
        </div>
      </section>

      <section className={styles.amendmentHistorySection}>
        <h2 className={styles.sectionTitle}>
          {terms.amendmentHistory.title}{" "}
          <span className={styles.sectionTitleAccent}>{terms.amendmentHistory.accentTitle}</span>
        </h2>

        <div className={styles.amendmentHistoryGrid}>
          {terms.amendmentHistory.items.map((item, index) => (
            <CardWithImage
              key={item.title}
              title={item.title}
              text={item.text}
              srcImage={item.srcImage}
              className={
                index === 0 ? styles.amendmentHistoryCardFirst : styles.amendmentHistoryCardSecond
              }
              style={
                index === 0
                  ? {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      padding: "80px 80px 77px 80px",
                      gap: "10px",
                    }
                  : {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      padding: "80px 80px 133px 80px",
                      gap: "10px",
                    }
              }
              imageStyle={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "190px",
                height: "auto",
                maxWidth: "none",
                objectFit: "contain",
              }}
              titleClassName={styles.amendmentHistoryTitle}
              textClassName={styles.amendmentHistoryText}
              titleStyle={{
                width: "100%",
                maxWidth: "100%",
                padding: "0",
                margin: "0 0 8px 0",
                overflowWrap: "anywhere",
                wordBreak: "break-word",
              }}
              textStyle={{
                width: "100%",
                maxWidth: "100%",
                padding: "0",
                margin: "0",
                overflowWrap: "anywhere",
                wordBreak: "break-word",
              }}
            />
          ))}
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>
          {terms.faq.title}{" "}
          <span className={styles.sectionTitleAccent}>{terms.faq.accentTitle}</span>
        </h2>

        <div className={styles.faqQuestions}>
          <Questions items={terms.faq.items} />
        </div>
      </section>
    </main>
  );
}
