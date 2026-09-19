import type { CSSProperties, ReactNode } from "react";
import { Button, ThemeButton } from "~/components/ui/Button/Button";
import { Slider } from "~/components/Slider/Slider";
import { Intro } from "~/components/Intro/Intro";
import { Form } from "~/components/Form/Form";
import { Benefit } from "~/components/Benefit/Benefit";
import { CardWithIcon } from "~/components/CardWithIcon/CardWithIcon";
import { ItemText } from "~/components/ItemText/ItemText";
import { ItemTextWithImage } from "~/components/ItemTextWithImage/ItemTextWithImage";
import {
  ItemTextWithImageList,
  type ItemTextWithImageListItem,
} from "~/components/ItemTextWithImageList/ItemTextWithImageList";
import { TextList } from "~/components/TextList/TextList";
import { InfoBlockList, type InfoBlockListItem } from "~/components/InfoBlockList/InfoBlockList";
import {
  MarketDataCard,
  type MarketDataCardItem,
} from "~/components/MarketDataCard/MarketDataCard";
import { Benefits, type BenefitsItem } from "~/components/Benefits/Benefits";
import apartmentIcon from "~/assets/images/icons/apartment_1.svg";
import timesIcon from "~/assets/images/icons/times.svg";
import groupsIcon from "~/assets/images/icons/groups.svg";
import assetsIcon from "~/assets/images/icons/assets.svg";
import regulationIcon from "~/assets/images/icons/regulation.svg";
import assetLiquidityImage from "~/assets/images/Asset_Liquidity.png";
import hedgingImage from "~/assets/images/FX_Hedging.png";
import crossBorderPaymentsImage from "~/assets/images/Cross_Border_Payments.png";
import treasuryManagementImage from "~/assets/images/Treasury_Management.png";
import FXHedgingImage from "~/assets/images/FX_Hedging.png";
import tradingImage from "~/assets/images/homepage/intro/trading.png";
import styles from "./ComponentShowcase.module.scss";

type ShowcaseSection = {
  id: string;
  label: string;
  title: string;
  preview: ReactNode;
};

const itemTextWithImageListItems: ItemTextWithImageListItem[] = [
  {
    id: 1,
    title: "FX Hedging",
    text: "Institutional block trades & spot execution with deep liquidity and tight spread quality — around the clock.",
    imageSrc: FXHedgingImage,
    imageAlt: "FX Hedging",
  },
  {
    id: 2,
    title: "Treasury Management",
    text: "Automation of payment flows, faster payouts, and liquidity management via stablecoin rails in 10+ currencies.",
    imageSrc: treasuryManagementImage,
    imageAlt: "Treasury Management",
    imagePlacement: "left",
  },
  {
    id: 3,
    title: "Cross-Border Payments",
    text: "Cross-border payments in minutes — without correspondent banks, weekend delays, or intermediary fees.",
    imageSrc: crossBorderPaymentsImage,
    imageAlt: "Cross-Border Payments",
  },
];

const benefitItems: BenefitsItem[] = [
  {
    id: 1,
    iconSrc: apartmentIcon,
    iconAlt: "Apartment icon",
    title: "2019",
    text: "Founded",
  },
  {
    id: 2,
    iconSrc: regulationIcon,
    iconAlt: "regulation icon",
    title: "Regulation",
    text: "VQF Member (FINMA / SRO)",
  },
  {
    id: 3,
    iconSrc: assetsIcon,
    iconAlt: "Assets icon",
    title: "250+",
    text: "Tradeable Assets",
  },
  {
    id: 4,
    iconSrc: groupsIcon,
    iconAlt: "groups icon",
    title: "150+",
    text: "Institutional Clients",
  },
  {
    id: 5,
    iconSrc: timesIcon,
    iconAlt: "times icon",
    title: "24/7",
    text: "Trading & Support",
  },
];

const textListItems = [
  "•   Finorbis AG guarantees neither returns nor the preservation of the value of investments.",
  "•   The value of digital assets can fluctuate significantly and may both rise and fall.",
  "•   Investment decisions should be made on the basis of individual risk appetite, investment horizon, and financial situation.",
  '•   Prior to concluding a contract, all clients receive the brochure "Risks in Trading Financial Instruments" — also available at www.swissbanking.org.',
  "•   Past performance is not a reliable indicator of future results.",
];

const infoBlockShowcase = {
  compactItems: [
    {
      id: 1,
      title: "Asset Liquidity",
      text: "BTC and ETH have the tightest spreads due to their global market depth. Mid- and small-cap assets naturally have wider spreads.",
      imageSrc: assetLiquidityImage,
      imageAlt: "Asset Liquidity",
    },
  ] satisfies InfoBlockListItem[],
  marketData: {
    title: "Market Data",
    imageSrc: assetLiquidityImage,
    imageAlt: "Market data illustration",
    items: [
      {
        id: 1,
        method: "GET",
        path: "/markets",
        description: "List of all tradeable assets with symbols, networks, and minimum sizes.",
      },
      {
        id: 2,
        method: "GET",
        path: "/markets/{symbol}/ticker",
        description: "Current price, 24h volume, and bid/ask for an asset.",
      },
      {
        id: 3,
        method: "GET",
        path: "/markets/{symbol}/orderbook",
        description: "Level-2 order book with bid and ask depths.",
      },
      {
        id: 4,
        method: "GET",
        path: "/markets/{symbol}/ohlcv",
        description: "OHLCV candles for 1m, 5m, 15m, 1h, 4h, and 1d intervals.",
      },
    ] satisfies MarketDataCardItem[],
  },
  otcSpot: {
    title: "What is OTC & Spot Trading at Finorbis ?",
    body: "Over-the-counter (OTC) trading enables the direct trading of large volumes outside public order books — without slippage, without market impact. Spot trading offers immediate execution at the current market price. Finorbis combines both in a single, Swiss-licensed platform.",
    imageSrc: assetLiquidityImage,
    imageAlt: "OTC and spot trading illustration",
    style: {
      width: "min(1596px, 100%)",
      padding: "80px",
      alignItems: "center",
    } satisfies CSSProperties,
  },
};

const infoBlockPreview = (
  <div className={styles.preview}>
    <InfoBlockList items={infoBlockShowcase.compactItems} />
    <MarketDataCard {...infoBlockShowcase.marketData} />
    <MarketDataCard
      title={infoBlockShowcase.otcSpot.title}
      body={infoBlockShowcase.otcSpot.body}
      imageSrc={infoBlockShowcase.otcSpot.imageSrc}
      imageAlt={infoBlockShowcase.otcSpot.imageAlt}
      style={infoBlockShowcase.otcSpot.style}
    />
  </div>
);

const sections: ShowcaseSection[] = [
  {
    id: "buttons",
    label: "Button",
    title: "Button variants",
    preview: (
      <div className={styles.buttonRow}>
        <Button theme={ThemeButton.BLACK} onClick={() => {}}>
          Black Button
        </Button>
        <Button theme={ThemeButton.GREEN} onClick={() => {}}>
          Green Button
        </Button>
        <Button theme={ThemeButton.ALPHAMARK} onClick={() => {}}>
          Transform my brand
        </Button>
        <Button theme={ThemeButton.GREEN} disabled onClick={() => {}}>
          Disabled
        </Button>
      </div>
    ),
  },
  {
    id: "intro",
    label: "Intro",
    title: "Hero / intro block",
    preview: (
      <Intro
        title={"Regulated Crypto\nInfrastructure for\nInstitutional Investors"}
        subtitle="Trading, custody, staking, and asset management through a single licensed platform in Switzerland."
        badgeText="Join our crypto exchange"
        imageSrc={tradingImage}
        button1={{ text: "Become a Client", onClick: () => {} }}
        button2={{ text: "Contact Sales", onClick: () => {} }}
      />
    ),
  },
  {
    id: "benefit",
    label: "Benefit",
    title: "Single benefit item",
    preview: (
      <Benefit iconSrc={apartmentIcon} iconAlt="Apartment icon" title="2019" text="Founded" />
    ),
  },
  {
    id: "card-with-icon",
    label: "CardWithIcon",
    title: "Horizontal card with icon",
    preview: (
      <CardWithIcon
        iconSrc={regulationIcon}
        iconAlt="Regulated infrastructure icon"
        title="Regulated Infrastructure"
        text="All trading activity runs through a Swiss VQF-regulated entity. KYC/AML checks and blockchain analytics are fully integrated."
      />
    ),
  },
  {
    id: "item-text",
    label: "ItemText",
    title: "Title with left border",
    preview: (
      <ItemText
        title="OTC / Spot Trading"
        text="Institutional block trades & spot execution with deep liquidity and tight spread quality — around the clock."
      />
    ),
  },
  {
    id: "item-text-image",
    label: "ItemText+Image",
    title: "Text with right image",
    preview: (
      <ItemTextWithImage
        title="FX Hedging"
        text="Reduction of foreign exchange risks through direct access to fiat-stablecoin conversions at competitive rates."
        imageSrc={hedgingImage}
        imageAlt="FX Hedging"
      />
    ),
  },
  {
    id: "item-text-image-list",
    label: "ItemTextWithImageList",
    title: "Vertical list of image text cards",
    preview: <ItemTextWithImageList items={itemTextWithImageListItems} />,
  },
  {
    id: "text-list",
    label: "TextList",
    title: "Risk disclaimer list",
    preview: <TextList items={textListItems} />,
  },
  {
    id: "info-block",
    label: "InfoBlock",
    title: "Info block variants",
    preview: infoBlockPreview,
  },
  {
    id: "benefits",
    label: "Benefits",
    title: "Responsive benefit grid",
    preview: <Benefits items={benefitItems} />,
  },
  {
    id: "slider",
    label: "Slider",
    title: "Carousel (embla-carousel-react)",
    preview: <Slider slides={[]} />,
  },
  {
    id: "form",
    label: "Form",
    title: "Contact form",
    preview: (
      <Form
        title="Talk to our team"
        labels={{
          name: "Name",
          company: "Company",
          email: "Email",
          message: "Message",
        }}
        buttonText="Send message"
        errorMessages={{
          emailRequired: "Email is required",
          emailInvalid: "Please enter a valid email address",
        }}
        onSubmit={async () => {}}
      />
    ),
  },
];

export function ComponentShowcasePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Developer showcase</p>
        <h1 className={styles.title}>Reusable components preview</h1>
      </section>

      <nav className={styles.toc} aria-label="Component sections">
        {sections.map((section) => (
          <a key={section.id} className={styles.tocLink} href={`#${section.id}`}>
            {section.label}
          </a>
        ))}
      </nav>

      <div className={styles.sections}>
        {sections.map((section) => (
          <article key={section.id} id={section.id} className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionLabel}>{section.label}</p>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
            </div>

            <div className={styles.preview}>{section.preview}</div>
          </article>
        ))}
      </div>
    </main>
  );
}
