import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import { useLang } from "../../hooks/useLang";
import styles from "./Header.module.scss";

const navigation = [
  { label: "Trading", href: "/" },
  { label: "Company", href: "/" },
  { label: "Custody", href: "/" },
  { label: "Who We Serve", href: "/" },
  { label: "Asset Management", href: "/" },
  { label: "Resources", href: "/" },
];

export function Header() {
  const { lang, setLang } = useLang();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <a className={styles.logoLink} href="/" aria-label="Finorbis home">
          <img className={styles.logo} src={logo} alt="Finorbis" />
        </a>

        <nav
          className={`${styles.navigation} ${isMenuOpen ? styles.navigation_open : ""}`.trim()}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.language}
            aria-label={`Switch language to ${lang === "en" ? "German" : "English"}`}
            onClick={() => setLang(lang === "en" ? "de" : "en")}
          >
            {lang.toUpperCase()}
          </button>
          <a className={styles.login} href="/">
            Log in
          </a>
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
