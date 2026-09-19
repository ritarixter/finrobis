import { useEffect, useState, useSyncExternalStore } from "react";
import { Button, ThemeButton } from "~/components/ui/Button/Button";
import { Benefits } from "~/components/Benefits/Benefits";
import { CardsWithImage } from "~/components/CardsWithImage/CardsWithImage";
import { CardWithIcon } from "~/components/CardWithIcon/CardWithIcon";
import { MarketDataCard } from "~/components/MarketDataCard/MarketDataCard";
import { ItemsContainer } from "~/components/ItemsContainer/ItemsContainer";
import { ItemText } from "~/components/ItemText/ItemText";
import { Questions } from "~/components/Questions/Questions";
import { MarketBackgroundAnimation } from "~/components/MarketBackgroundAnimation/MarketBackgroundAnimation";
import { useNavigate } from "react-router";
import { useLang } from "~/hooks/useLang";

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

function subscribeToReducedMotion(onChange: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function TypedCode({ code }: { code: string }) {
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const reduceMotion = useSyncExternalStore(subscribeToReducedMotion, getReducedMotion, () => false);

  useEffect(() => {
    if (reduceMotion) return;

    const isComplete = visibleCharacters >= code.length;
    const nextCharacter = code[visibleCharacters];
    const delay = isComplete ? 2600 : nextCharacter === "\n" ? 100 : 22;
    const timeout = window.setTimeout(
      () => setVisibleCharacters(isComplete ? 0 : visibleCharacters + 1),
      delay,
    );

    return () => window.clearTimeout(timeout);
  }, [code, reduceMotion, visibleCharacters]);

  return (
    <div className={styles.codeViewport}>
      <pre className={styles.screenReaderCode}>{code}</pre>
      <pre className={`${styles.codeExampleText} ${styles.codeSizer}`} aria-hidden="true">
        {code}
      </pre>
      <pre className={`${styles.codeExampleText} ${styles.typedCode}`} aria-hidden="true">
        <code>{code.slice(0, reduceMotion ? code.length : visibleCharacters)}</code>
        <span className={styles.codeCursor} />
      </pre>
    </div>
  );
}

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
          className={styles.heroImage}
          src={resourcesApiDocumentation.intro.imageSrc}
          alt={resourcesApiDocumentation.intro.title}
        />
        <MarketBackgroundAnimation />

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
            className={`${styles.endpointCard} ${
              card.title === "Authentication" ? styles.authenticationCard : ""
            }`.trim()}
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
          <div className={styles.terminalGlow} aria-hidden="true" />
          <div className={styles.codeExampleContent}>
            <div className={styles.terminalBar} aria-hidden="true">
              <span />
              <span />
              <span />
              <small>finorbis-api / python</small>
            </div>
            <h3 className={styles.codeExampleTitle}>Python — Place Market Order</h3>
            <TypedCode code={codeExample} />
          </div>
        </div>
      </section>

      <section className={styles.fixSection}>
        <h2 className={styles.sectionTitle}>
          {resourcesApiDocumentation.fixApi.title}{" "}
          <span>{resourcesApiDocumentation.fixApi.accentTitle}</span>
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
          {resourcesApiDocumentation.sandboxTesting.title}{" "}
          <span>{resourcesApiDocumentation.sandboxTesting.accentTitle}</span>
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
