import { Link } from "react-router";
import styles from "./Footer.module.scss";
import logo from "../../assets/images/logo.svg";
import linkedinIcon from "../../assets/images/icons/in.svg";
import telegramIcon from "../../assets/images/icons/tg.svg";
import xIcon from "../../assets/images/icons/x.svg";
import { useLang, type Lang } from "../../hooks/useLang";

const contacts = [
  { label: "11111111111.com", icon: "globe" },
  { label: "+111111111111111", icon: "phone" },
  { label: "Somewhere in the World", icon: "pin" },
];

const socialLinks = [
  { label: "LinkedIn", icon: linkedinIcon },
  { label: "X", icon: xIcon },
  { label: "Telegram", icon: telegramIcon },
];

const footerCopy = {
  en: {
    navigation: {
      trading: "Trading",
      company: "Company",
      custody: "Custody",
      audience: "Who We Serve",
      assets: "Asset Management",
      resources: "Resources",
    },
    copyright: "Finorbis. All rights reserved",
    privacy: "Privacy Policy",
    regulatory: "Regulatory Information",
    cookies: "Cookie Policy",
    aria: {
      home: "Finorbis home",
      navigation: "Footer navigation",
      socials: "Social media",
      legal: "Legal navigation",
    },
  },
  de: {
    navigation: {
      trading: "Handel",
      company: "Unternehmen",
      custody: "Verwahrung",
      audience: "Unsere Kunden",
      assets: "Vermögensverwaltung",
      resources: "Ressourcen",
    },
    copyright: "Finorbis. Alle Rechte vorbehalten",
    privacy: "Datenschutzerklärung",
    regulatory: "Regulatorische Informationen",
    cookies: "Cookie-Richtlinie",
    aria: {
      home: "Finorbis Startseite",
      navigation: "Fußzeilennavigation",
      socials: "Soziale Medien",
      legal: "Rechtliche Navigation",
    },
  },
} as const;

const getCopy = (lang: Lang) => footerCopy[lang];

function ContactIcon({ type }: { type: string }) {
  if (type === "phone") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.contactIcon}>
        <path d="M7.7 4.5 5.8 5.9c-.9.7-1.2 2-.7 3.1 2 4.5 5.4 7.9 9.9 9.9 1.1.5 2.4.2 3.1-.7l1.4-1.9-3.1-2.3-1.5 1.6a15.3 15.3 0 0 1-5.4-5.4l1.6-1.5-2.3-3.1Z" />
      </svg>
    );
  }

  if (type === "pin") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.contactIcon}>
        <path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2.2" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.contactIcon}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.8 12h16.4M12 3.5c2 2.3 3 5.1 3 8.5s-1 6.2-3 8.5c-2-2.3-3-5.1-3-8.5s1-6.2 3-8.5Z" />
    </svg>
  );
}

export function Footer() {
  const { lang, buildHref } = useLang();
  const copy = getCopy(lang);
  const navigation = [
    { label: copy.navigation.trading, href: buildHref("/trading") },
    { label: copy.navigation.company, href: buildHref("/company-about") },
    { label: copy.navigation.custody, href: buildHref("/custody") },
    { label: copy.navigation.audience, href: buildHref("/whoweserve") },
    { label: copy.navigation.assets, href: buildHref("/asset-management") },
    { label: copy.navigation.resources, href: buildHref("/resources") },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.top}>
          <Link className={styles.logoLink} to={buildHref("/")} aria-label={copy.aria.home}>
            <img className={styles.logo} src={logo} alt="Finorbis" />
          </Link>
          <nav className={styles.navigation} aria-label={copy.aria.navigation}>
            {navigation.map((item) => (
              <Link key={item.href} to={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.divider} />

        <address className={styles.contacts}>
          {contacts.map((contact) => (
            <a key={contact.label} href={contact.icon === "phone" ? "tel:+111111111111111" : "/"}>
              <ContactIcon type={contact.icon} />
              <span>{contact.label}</span>
            </a>
          ))}
        </address>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <div className={styles.socials} aria-label={copy.aria.socials}>
            {socialLinks.map((label) => (
              <a key={label.label} href="/" aria-label={label.label}>
                <img src={label.icon} alt="" aria-hidden="true" />
              </a>
            ))}
          </div>
          <Link className={styles.copyright} to={buildHref("/terms")}>
            {copy.copyright}
          </Link>
          <nav className={styles.legal} aria-label={copy.aria.legal}>
            <Link to={buildHref("/privacypolicy")}>{copy.privacy}</Link>
            <span aria-hidden="true" />
            <Link to={buildHref("/regulatory-information")}>{copy.regulatory}</Link>
            <span aria-hidden="true" />
            <Link to={buildHref("/cookies")}>{copy.cookies}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
