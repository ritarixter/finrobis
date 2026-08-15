import { Button, ThemeButton } from "~/components/ui/Button/Button";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { ItemText } from "~/components/ItemText/ItemText";
import { Form } from "~/components/Form/Form";
import { ItemsContainer } from "~/components/ItemsContainer/ItemsContainer";
import { Questions } from "~/components/Questions/Questions";
import { useLang } from "~/hooks/useLang";

import styles from "./CompanyContactPage.module.scss";

export function CompanyContactPage() {
  const { contact } = useLang().content.pages;

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.hero}>
        <img
          className={styles.heroDecor}
          src={contact.intro.backgroundImageSrc}
          alt=""
          aria-hidden="true"
        />

        <img className={styles.heroImage} src={contact.intro.imageSrc} alt={contact.intro.title} />

        <div className={styles.heroCard}>
          <h1 className={styles.title}>{contact.intro.title}</h1>
          <p className={styles.text}>{contact.intro.text}</p>

          <Button theme={ThemeButton.GREEN} onClick={() => {}}>
            {contact.intro.button1}
          </Button>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <MarketDataCard
          title={contact.cta.title}
          body={contact.cta.text}
          imageSrc={contact.cta.imageSrc}
          imageAlt={contact.cta.imageAlt}
          variant="wide"
        />
      </section>

      <section className={styles.summarySection}>
        {contact.reasons.map((reason) => (
          <ItemText key={reason.title} title={reason.title} text={reason.text} className={styles.summaryItemText} />
        ))}
      </section>

      <section className={styles.formSection}>
        <Form
          title={contact.form.title}
          labels={contact.form.labels}
          buttonText={contact.form.buttonText}
          errorMessages={contact.form.errorMessages}
          variant="contact"
          decorImageSrc={contact.form.backgroundImageSrc}
        />
      </section>

      <section className={styles.contactDetailsSection}>
        <div className={styles.contactDetailsHeader}>
          <h2 className={styles.sectionTitle}>
            {contact.directContact.title} <span>{contact.directContact.accentTitle}</span>
          </h2>
          <h2 className={styles.sectionTitle}>{contact.locations.title}</h2>
        </div>

        <div className={styles.contactCardsGrid}>
          <article className={styles.contactCard}>
            <img
              className={styles.contactCardDecor}
              src={contact.cta.imageSrc}
              alt=""
              aria-hidden="true"
            />

            <div className={styles.contactCardPanel}>
              <div className={styles.contactList}>
                {contact.directContact.items.map((item) => (
                  <div className={styles.contactRow} key={item.title}>
                    <h3 className={styles.contactRowTitle}>{item.title}</h3>
                    <p className={styles.contactRowText}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className={styles.contactCard}>
            <img
              className={styles.contactCardDecor}
              src={contact.cta.imageSrc}
              alt=""
              aria-hidden="true"
            />

            <div className={styles.contactCardPanel}>
              <div className={styles.locationCardContent}>
                <h3 className={styles.locationCardTitle}>{contact.locations.office.title}</h3>
                <p className={styles.locationCardText}>{contact.locations.office.text}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.onboardingSection}>
        <h3 className={styles.onboardingTitle}>
          {contact.onboarding.title} <span>{contact.onboarding.accentTitle}</span>
        </h3>

        <ItemsContainer
          items={contact.onboarding.primaryItems}
          className={styles.onboardingPrimary}
          showMarker={false}
        />

        <ItemsContainer
          items={contact.onboarding.secondaryItems}
          className={styles.onboardingSecondary}
          showMarker={false}
        />
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>
          {contact.faq.title} <span>{contact.faq.accentTitle}</span>
        </h2>

        <Questions items={contact.faq.items} />
      </section>
    </main>
  );
}
