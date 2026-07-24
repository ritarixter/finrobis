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
import type { ImagePlacement } from "~/components/ItemTextWithImage/ItemTextWithImage";

export const content_en = {
  title: "Finorbis",
  logo,
  components: {
    header: {},
  },
  pages: {
    homepage: {
      meta: {
        title: "Finorbis - Regulated Crypto Infrastructure for Institutional Investors",
        description:
          "Trading, custody, staking, and asset management through a single licensed platform in Switzerland.",
      },
      intro: {
        title: "Regulated Crypto\nInfrastructure for\nInstitutional Investors",
        badgeText: "Join the our crypto exchange",
        subtitle:
          "Trading, custody, staking, and asset management through a single licensed platform in Switzerland.",
        button1: "Become a Client",
        button2: "Contact Sales",
        image: pages_homepage_intro,
      },
      sections: {
        trust: { title: "Trust &", accentTitle: "Facts" },
        core: { title: "Core", accentTitle: "Solutions" },
        why: { title: "Why", accentTitle: "Finorbis" },
        whoWeServe: { title: "Who We", accentTitle: "Serve" },
        programmaticAccess: { title: "Programmatic Access to", accentTitle: "Markets" },
        institutions: { title: "How Institutions Trust", accentTitle: "Finorbis" },
      },
      benefits: [
        { iconSrc: apartmentIcon, iconAlt: "Founded", title: "2019", text: "Founded" },
        {
          iconSrc: regulationIcon,
          iconAlt: "Regulation",
          title: "Regulation",
          text: "VQF Member (FINMA / SRO)",
        },
        { iconSrc: assetsIcon, iconAlt: "Assets", title: "250+", text: "Tradeable Assets" },
        {
          iconSrc: groupsIcon,
          iconAlt: "Clients",
          title: "150+",
          text: "Institutional Clients",
        },
        { iconSrc: timesIcon, iconAlt: "Availability", title: "24/7", text: "Trading & Support" },
      ],
      solutions: [
        {
          title: "Trading (OTC / Spot)",
          text: "Institutional block trades and spot execution with deep liquidity and tight spread quality.",
          imageSrc: tradingImage,
          imageAlt: "Trading",
        },
        {
          title: "Custody (MPC Vaults)",
          text: "Institutional-grade custody with secure multi-party computation vaults.",
          imageSrc: custodyImage,
          imageAlt: "Custody",
          imagePlacement: "left" as ImagePlacement,
        },
        {
          title: "Asset Management",
          text: "Structured access to digital asset strategies through a regulated platform.",
          imageSrc: assetManagementImage,
          imageAlt: "Asset management",
        },
        {
          title: "Staking",
          text: "Participate in network rewards with institutional controls and reporting.",
          imageSrc: stakingImage,
          imageAlt: "Staking",
          imagePlacement: "left" as ImagePlacement,
        },
      ],
      whyItems: [
        {
          text: "Regulated Partner Instead of Anonymous Exchange. Clients trade directly with Finorbis. No order book slippage, guaranteed execution.",
        },
        {
          text: "One Point of Entry. Trading, custody, and asset management — no multi-vendor chaos.",
        },
        {
          text: "No Offshore Risk. Swiss jurisdiction, clear regulation (VQF/AMLA).",
        },
      ],
      slides: [
        {
          title: "Fintechs\n(API, on/off-ramp)",
          imageSrc: slideFintech,
        },
        {
          title: "Corporates\n(Treasury, Conversion)",
          imageSrc: slideCorp,
        },
        {
          title: "Traders\n(OTC, algorithms)",
          imageSrc: slideTraders,
        },
        {
          title: "Corporates\n(Treasury, Conversion)",
          imageSrc: slideCorp,
        },
        {
          title: "Traders\n(OTC, algorithms)",
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
          title: "99.9% Uptime SLA",
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
          date: "03/06/2026",
          text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          srcImage: patherchaft,
        },
        {
          title: "FUNDING",
          date: "02/05/2026",
          text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          srcImage: funding,
        },
        {
          title: "REGULIERUNG",
          date: "21/02/2026",
          text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          srcImage: regulerning,
        },
        {
          title: "PARTNERSCHAFT",
          date: "17/02/2026",
          text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          srcImage: patherchaft2,
        },
      ],
    },
    notFound: {
      meta: {
        title: "Page Not Found - Finorbis",
        description: "The page you are looking for does not exist.",
      },
      title: "404",
      subtitle: "Page Not Found",
      description: "The page you are looking for does not exist.",
      backHome: "Go to Homepage",
    },
    terms: {
      meta: {
        title: "Terms and Conditions - Finorbis",
        description: "Read the terms and conditions of using Finorbis services.",
      },
    },
    privacy: {
      meta: {
        title: "Privacy Policy - Finorbis",
        description: "Read the privacy policy of Finorbis.",
      },
    },
    cookies: {
      meta: {
        title: "Cookie Policy - Finorbis",
        description: "Read the cookie policy of Finorbis.",
      },
    },
  },
};

export type ContentType = typeof content_en;
