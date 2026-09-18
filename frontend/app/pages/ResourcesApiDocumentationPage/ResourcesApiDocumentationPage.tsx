import { useEffect } from "react";
import { Button, ThemeButton } from "~/components/ui/Button/Button";
import { Benefits } from "~/components/Benefits/Benefits";
import { CardsWithImage } from "~/components/CardsWithImage/CardsWithImage";
import { CardWithIcon } from "~/components/CardWithIcon/CardWithIcon";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { ItemsContainer } from "~/components/ItemsContainer/ItemsContainer";
import { ItemText } from "~/components/ItemText/ItemText";
import { Questions } from "~/components/Questions/Questions";
import { useNavigate } from "react-router";
import { useLang } from "~/hooks/useLang";
import assetLiquidityImage from "~/assets/images/Asset_Liquidity.png";

import styles from "./ResourcesApiDocumentationPage.module.scss";

const codeExample = `import requests, hmac, hashlib, time, json

API_KEY = «your_api_key»
API_SECRET = «your_api_secret»
BASE_URL = «https://api.finorbis.com/v1»

def place_order(symbol, side, quantity):
ts = str(int(time.time() * 1000))
payload = json.dumps({«symbol»: symbol, «side»: side,
«type»: «MARKET», «quantity»: quantity})
sig = hmac.new(API_SECRET.encode(), (ts + payload).encode(),
hashlib.sha256).hexdigest()
headers = {«X-API-Key»: API_KEY, «X-Timestamp»: ts, «X-Signature»: sig}
return requests.post(f“{BASE_URL}/orders“, data=payload, headers=headers).json()`;

export function ResourcesApiDocumentationPage() {
  const { resourcesApiDocumentation } = useLang().content.pages;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactUsClick = () => {
    navigate("/company/contact#form");
  };

  return (
    <main className={`section ${styles.page}`}>
      <section className={styles.hero}>
        <img
          className={styles.heroDecor}
          src={resourcesApiDocumentation.intro.backgroundImageSrc}
          alt=""
          aria-hidden="true"
        />

        <img
          className={styles.heroImage}
          src={resourcesApiDocumentation.intro.imageSrc}
          alt={resourcesApiDocumentation.intro.title}
        />

        <div className={styles.heroCard}>
          <h1 className={styles.title}>{resourcesApiDocumentation.intro.title}</h1>
          <p className={styles.text}>{resourcesApiDocumentation.intro.text}</p>

          <Button theme={ThemeButton.GREEN} onClick={handleContactUsClick}>
            {resourcesApiDocumentation.intro.button1}
          </Button>
        </div>
      </section>

      <section className={styles.marketDataOverviewSection}>
        <MarketDataCard
          title={resourcesApiDocumentation.marketDataOverview.title}
          body={resourcesApiDocumentation.marketDataOverview.text}
          imageSrc={resourcesApiDocumentation.marketDataOverview.imageSrc}
          imageAlt={resourcesApiDocumentation.marketDataOverview.imageAlt}
          variant="wide"
        />
      </section>

      <section className={styles.benefitsSection}>
        <Benefits items={resourcesApiDocumentation.benefits} />
      </section>

      <section className={styles.apiSection}>
        <h2 className={styles.sectionTitle}>
          {resourcesApiDocumentation.apiSection.title}{" "}
          <span>{resourcesApiDocumentation.apiSection.accentTitle}</span>
        </h2>

        <p className={styles.apiText}>{resourcesApiDocumentation.apiSection.text}</p>
      </section>

      <section className={styles.marketDataSection}>
        {resourcesApiDocumentation.marketDataCards.map((card) => (
          <MarketDataCard
            key={card.title}
            title={card.title}
            items={card.items}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            variant="compact"
            className={card.title === "Authentication" ? styles.authenticationCard : ""}
          />
        ))}
      </section>

      <section className={styles.websocketSection}>
        <h2 className={styles.sectionTitle}>
          {resourcesApiDocumentation.websocketApi.title}{" "}
          <span>{resourcesApiDocumentation.websocketApi.accentTitle}</span>
        </h2>

        <p className={styles.apiText}>{resourcesApiDocumentation.websocketApi.text}</p>

        <div className={styles.websocketGrid}>
          {resourcesApiDocumentation.websocketApi.items.map((item) => (
            <ItemText key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      <section className={styles.codeExamplesSection}>
        <h2 className={`${styles.sectionTitle} ${styles.codeExamplesTitle}`}>
          Code <span>Examples</span>
        </h2>

        <div className={styles.codeExampleCard}>
          <img
            className={styles.codeExampleImage}
            src={assetLiquidityImage}
            alt=""
            aria-hidden="true"
          />
          <div className={styles.codeExampleContent}>
            <h3 className={styles.codeExampleTitle}>Python — Place Market Order</h3>
            <pre className={styles.codeExampleText}>{codeExample}</pre>
          </div>
        </div>
      </section>

      <section className={styles.fixSection}>
        <h2 className={styles.sectionTitle}>
          {resourcesApiDocumentation.fixApi.title} <span>{resourcesApiDocumentation.fixApi.accentTitle}</span>
        </h2>

        <p className={styles.apiText}>{resourcesApiDocumentation.fixApi.text}</p>

        <div className={styles.fixGrid}>
          {resourcesApiDocumentation.fixApi.items.map((item) => (
            <CardWithIcon
              key={item.title}
              iconSrc={item.iconSrc}
              iconAlt={item.iconAlt}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </section>

      <section className={styles.securitySection}>
        <h2 className={styles.sectionTitle}>
          {resourcesApiDocumentation.securityAuthentication.title}{" "}
          <span>{resourcesApiDocumentation.securityAuthentication.accentTitle}</span>
        </h2>

        <div className={styles.securityCardsSection}>
          <CardsWithImage items={resourcesApiDocumentation.securityAuthentication.cards} />
        </div>
      </section>

      <section className={styles.sandboxSection}>
        <h2 className={styles.sectionTitle}>
          {resourcesApiDocumentation.sandboxTesting.title} <span>{resourcesApiDocumentation.sandboxTesting.accentTitle}</span>
        </h2>

        <p className={styles.apiText}>{resourcesApiDocumentation.sandboxTesting.text}</p>

        <div className={styles.sandboxGrid}>
          {resourcesApiDocumentation.sandboxTesting.items.map((item) => (
            <ItemText key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      <section className={styles.versionsSection}>
        <ItemsContainer items={resourcesApiDocumentation.versions.items} showMarker={false} />
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>
          {resourcesApiDocumentation.faqDocumentation.title}{" "}
          <span>{resourcesApiDocumentation.faqDocumentation.accentTitle}</span>
        </h2>

        <Questions items={resourcesApiDocumentation.faqDocumentation.items} />
      </section>
    </main>
  );
}
