import { Button, ThemeButton } from "~/components/ui/Button/Button";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { ItemText } from "~/components/ItemText/ItemText";
import { Form } from "~/components/Form/Form";
import { ItemsContainer } from "~/components/ItemsContainer/ItemsContainer";
import { Questions } from "~/components/Questions/Questions";
import { MarketBackgroundAnimation } from "~/components/MarketBackgroundAnimation/MarketBackgroundAnimation";
import { useLang } from "~/hooks/useLang";

import styles from "./CompanyContactPage.module.scss";

function ContactCardAnimation() {
  return (
    <div className={styles.contactCardAnimation} aria-hidden="true">
      <svg className={styles.network} viewBox="0 0 700 620" preserveAspectRatio="none">
        <g className={styles.networkLines}>
          <path d="M-30 115 L120 58 L245 145 L390 72 L540 168 L730 90" />
          <path d="M-20 420 L105 330 L250 390 L405 285 L555 370 L720 255" />
          <path d="M120 58 L105 330 M245 145 L250 390 M390 72 L405 285 M540 168 L555 370" />
          <path d="M105 330 L245 145 M250 390 L390 72 M405 285 L540 168" />
        </g>

        <g className={styles.networkNodes}>
          {[
            [120, 58],
            [245, 145],
            [390, 72],
            [540, 168],
            [105, 330],
            [250, 390],
            [405, 285],
            [555, 370],
          ].map(([cx, cy], index) => (
            <g key={`${cx}-${cy}`} style={{ animationDelay: `${index * 320}ms` }}>
              <circle className={styles.nodePulse} cx={cx} cy={cy} r="20" />
              <circle className={styles.nodeCore} cx={cx} cy={cy} r="4" />
            </g>
          ))}
        </g>
      </svg>

      <span className={styles.networkSweep} />
    </div>
  );
}

export function CompanyContactPage() {
  const { contact } = useLang().content.pages;

  const handleScrollToForm = () => {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.hero}>
        <img className={styles.heroImage} src={contact.intro.imageSrc} alt={contact.intro.title} />
        <MarketBackgroundAnimation className={styles.heroMarketAnimation} />

        <div className={styles.heroCard}>
          <h1 className={styles.title}>{contact.intro.title}</h1>
          <p className={styles.text}>{contact.intro.text}</p>

          <Button theme={ThemeButton.GREEN} onClick={handleScrollToForm}>
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
          interactiveDots
        />
      </section>

      <section className={styles.summarySection}>
        {contact.reasons.map((reason) => (
          <ItemText
            key={reason.title}
            title={reason.title}
            text={reason.text}
            className={styles.summaryItemText}
            titleClassName={styles.summaryItemTitle}
          />
        ))}
      </section>

      <section className={styles.formSection} id="form">
        <Form
          title={contact.form.title}
          labels={contact.form.labels}
          buttonText={contact.form.buttonText}
          errorMessages={contact.form.errorMessages}
          variant="contact"
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
            <ContactCardAnimation />

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
            <ContactCardAnimation />

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

        <Questions items={contact.faq.items} interactiveDots />
      </section>
    </main>
  );
}
