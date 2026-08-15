import styles from "./Footer.module.scss";
import logo from "../../assets/images/logo.svg";
import { useLang } from "../../hooks/useLang";

const contacts = [
  { label: "11111111111.com", icon: "globe" },
  { label: "+111111111111111", icon: "phone" },
  { label: "Somewhere in the World", icon: "pin" },
];

const socialLinks = ["LinkedIn", "X", "Telegram"];

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
  const { buildHref } = useLang();
  const navigation = [
    { label: "Trading", href: buildHref("/trading") },
    { label: "Company", href: buildHref("/company-about") },
    { label: "Custody", href: buildHref("/custody") },
    { label: "Who We Serve", href: buildHref("/whoweserve") },
    { label: "Asset Management", href: buildHref("/asset-management") },
    { label: "Resources", href: buildHref("/resources") },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.top}>
          <img className={styles.logo} src={logo} alt="Finorbis" />
          <nav className={styles.navigation} aria-label="Footer navigation">
            {navigation.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
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
          <div className={styles.socials} aria-label="Social media">
            {socialLinks.map((label) => (
              <a key={label} href="/" aria-label={label}>
                {label === "LinkedIn" ? "in" : label}
              </a>
            ))}
          </div>
          <nav className={styles.legal} aria-label="Legal navigation">
            <a href={buildHref("/privacy")}>Privacy Policy</a>
            <span aria-hidden="true" />
            <a href={buildHref("/terms")}>Regulator Information</a>
            <span aria-hidden="true" />
            <a href={buildHref("/cookies")}>Cookie Policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
