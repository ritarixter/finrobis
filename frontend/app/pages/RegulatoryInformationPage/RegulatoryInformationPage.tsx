import { useLang } from "~/hooks/useLang";
import { TextList } from "~/components/TextList/TextList";
import styles from "./RegulatoryInformationPage.module.scss";

import assetLiquidityImage from "../../assets/images/Asset_Liquidity.png";

export function RegulatoryInformationPage() {
  const { regulatoryInformation } = useLang().content.pages;

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.hero}>
        <h1 className={styles.title}>{regulatoryInformation.hero.title}</h1>
        <p className={styles.text}>{regulatoryInformation.hero.text}</p>
      </section>

      <section className={styles.entitySection}>
        <h2 className={styles.sectionTitle}>
          {regulatoryInformation.entity.title}{" "}
          <span className={styles.sectionTitleAccent}>
            {regulatoryInformation.entity.accentTitle}
          </span>
        </h2>

        <article className={styles.entityCard}>
          <img className={styles.entityDecor} src={assetLiquidityImage} alt="" aria-hidden="true" />

          <div className={styles.entityPanel}>
            <div className={styles.entityList}>
              {regulatoryInformation.entity.items.map((item) => (
                <div className={styles.entityRow} key={item.title}>
                  <h3 className={styles.entityRowTitle}>{item.title}</h3>
                  <p className={styles.entityRowText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className={styles.riskNoticesSection}>
        <h2 className={styles.sectionTitle}>{regulatoryInformation.riskNotices.title}</h2>

        <p className={styles.text}>{regulatoryInformation.riskNotices.text}</p>

        <TextList items={regulatoryInformation.riskNotices.items} className={styles.riskList} />
      </section>
    </main>
  );
}
