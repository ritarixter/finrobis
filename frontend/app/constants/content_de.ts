import { type ContentType } from "./content_en";
import logo from "../assets/images/logo.svg";
import pages_homepage_intro from "../assets/images/homepage/intro/trading.png";
import apartmentIcon from "../assets/images/icons/apartment_1.svg";
import regulationIcon from "../assets/images/icons/regulation.svg";
import assetsIcon from "../assets/images/icons/assets.svg";
import groupsIcon from "../assets/images/icons/groups.svg";
import timesIcon from "../assets/images/icons/times.svg";
import tradingImage from "../assets/images/homepage/solution/tranding.png";
import custodyImage from "../assets/images/homepage/solution/custody.png";
import assetManagementImage from "../assets/images/homepage/solution/assets_managment.png";
import stakingImage from "../assets/images/homepage/solution/staking.png";
import slideFintech from "../assets/images/homepage/who_we_serve/fintechs.png";
import slideCorp from "../assets/images/homepage/who_we_serve/corporates.png";
import slideTraders from "../assets/images/homepage/who_we_serve/traders.png";
import techRest from "../assets/images/homepage/technology_access/rest.svg";
import techSla from "../assets/images/homepage/technology_access/sla.svg";
import techFix from "../assets/images/homepage/technology_access/fix.svg";
import techHmac from "../assets/images/homepage/technology_access/hmac.svg";
import techSandbox from "../assets/images/homepage/technology_access/sandbox.svg";
import techWebsocket from "../assets/images/homepage/technology_access/websocket.svg";
import patherchaft from "../assets/images/homepage/institutions/patherchaft.png";
import patherchaft2 from "../assets/images/homepage/institutions/patherchaft_2.png";
import funding from "../assets/images/homepage/institutions/funding.png";
import regulerning from "../assets/images/homepage/institutions/regulerning.png";

export const content_de: ContentType = {
  title: "Finorbis",
  logo,
  components: {
    header: {},
  },
  pages: {
    homepage: {
      meta: {
        title: "Finorbis - Regulierte Krypto-Infrastruktur für institutionelle Investoren",
        description:
          "Trading, Verwahrung, Staking und Asset Management über eine einzige lizenzierte Plattform in der Schweiz.",
      },
      intro: {
        title: "Regulierte Krypto\nInfrastruktur für\ninstitutionelle Investoren",
        badgeText: "Schließen Sie sich unserem Krypto-Exchange an",
        subtitle:
          "Trading, Verwahrung, Staking und Asset Management über eine einzige lizenzierte Plattform in der Schweiz.",
        button1: "Zum Kunden werden",
        button2: "Vertrieb kontaktieren",
        image: pages_homepage_intro,
      },
      sections: {
        trust: { title: "Vertrauen &", accentTitle: "Fakten" },
        core: { title: "Kern", accentTitle: "Lösungen" },
        why: { title: "Warum", accentTitle: "Finorbis" },
        whoWeServe: { title: "Für wen", accentTitle: "wir arbeiten" },
        programmaticAccess: { title: "Programmierten Zugang zu", accentTitle: "Märkten" },
        institutions: { title: "Wie Institutionen Finorbis", accentTitle: "vertrauen" },
      },
      benefits: [
        { iconSrc: apartmentIcon, iconAlt: "Gegründet", title: "2019", text: "Gegründet" },
        {
          iconSrc: regulationIcon,
          iconAlt: "Regulierung",
          title: "Regulierung",
          text: "VQF-Mitglied (FINMA / SRO)",
        },
        { iconSrc: assetsIcon, iconAlt: "Assets", title: "250+", text: "Handelbare Assets" },
        {
          iconSrc: groupsIcon,
          iconAlt: "Kunden",
          title: "150+",
          text: "Institutionelle Kunden",
        },
        { iconSrc: timesIcon, iconAlt: "Verfügbarkeit", title: "24/7", text: "Trading & Support" },
      ],
      solutions: [
        {
          title: "Trading (OTC / Spot)",
          text: "Institutionelle Block-Deals und Spot-Ausführung mit hoher Liquidität und enger Spannenqualität.",
          imageSrc: tradingImage,
          imageAlt: "Trading",
        },
        {
          title: "Verwahrung (MPC Vaults)",
          text: "Institutionelle Verwahrung mit sicheren Multi-Party-Computation-Vaults.",
          imageSrc: custodyImage,
          imageAlt: "Verwahrung",
          imagePlacement: "left",
        },
        {
          title: "Asset Management",
          text: "Strukturierter Zugang zu digitalen Asset-Strategien über eine regulierte Plattform.",
          imageSrc: assetManagementImage,
          imageAlt: "Asset Management",
        },
        {
          title: "Staking",
          text: "Nehmen Sie an Netzwerkerträgen mit institutionellen Kontrollen und Reporting teil.",
          imageSrc: stakingImage,
          imageAlt: "Staking",
          imagePlacement: "left",
        },
      ],
      whyItems: [
        {
          text: "Regulierter Partner statt anonymer Börse. Kunden handeln direkt mit Finorbis. Keine Orderbuch-Slippage, garantierte Ausführung.",
        },
        {
          text: "Ein einziger Einstiegspunkt. Trading, Verwahrung und Asset Management – keine Multi-Vendor-Chaos.",
        },
        {
          text: "Kein Offshore-Risiko. Schweizer Gerichtsbarkeit, klare Regulierung (VQF/AMLA).",
        },
      ],
      slides: [
        {
          title: "Fintechs\n(API, On/Off-Ramp)",
          imageSrc: slideFintech,
        },
        {
          title: "Unternehmen\n(Treasury, Conversion)",
          imageSrc: slideCorp,
        },
        {
          title: "Trader\n(OTC, Algorithmen)",
          imageSrc: slideTraders,
        },
        {
          title: "Unternehmen\n(Treasury, Conversion)",
          imageSrc: slideCorp,
        },
        {
          title: "Trader\n(OTC, Algorithmen)",
          imageSrc: slideTraders,
        },
      ],
      technologyItems: [
        {
          title: "REST",
          iconSrc: techRest,
        },
        {
          title: "WebSocket",
          iconSrc: techWebsocket,
        },
        {
          title: "FIX (4.2 / 4.4)",
          iconSrc: techFix,
        },
        {
          title: "99,9 % Uptime-SLA",
          iconSrc: techSla,
        },
        {
          title: "HMAC-SHA256",
          iconSrc: techHmac,
        },
        {
          title: "Sandbox (Testnet)",
          iconSrc: techSandbox,
        },
      ],
      institutions: [
        {
          title: "PARTNERSCHAFT",
          date: "03.06.2026",
          text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          srcImage: patherchaft,
        },
        {
          title: "FUNDING",
          date: "02.05.2026",
          text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          srcImage: funding,
        },
        {
          title: "REGULIERUNG",
          date: "21.02.2026",
          text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          srcImage: regulerning,
        },
        {
          title: "PARTNERSCHAFT",
          date: "17.02.2026",
          text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          srcImage: patherchaft2,
        },
      ],
    },
    notFound: {
      meta: {
        title: "Seite nicht gefunden - Finorbis",
        description: "Die von Ihnen gesuchte Seite existiert nicht.",
      },
      title: "404",
      subtitle: "Seite nicht gefunden",
      description: "Die von Ihnen gesuchte Seite existiert nicht.",
      backHome: "Zur Startseite",
    },
    terms: {
      meta: {
        title: "Allgemeine Geschäftsbedingungen - Finorbis",
        description:
          "Lesen Sie die Allgemeinen Geschäftsbedingungen für die Nutzung der Finorbis-Dienste.",
      },
    },
    privacy: {
      meta: {
        title: "Datenschutzrichtlinie - Finorbis",
        description: "Lesen Sie die Datenschutzrichtlinie von Finorbis.",
      },
    },
    cookies: {
      meta: {
        title: "Cookie-Richtlinie - Finorbis",
        description: "Lesen Sie die Cookie-Richtlinie von Finorbis.",
      },
    },
  },
};
