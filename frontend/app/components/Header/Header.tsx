import { useState } from "react";
import { Link } from "react-router";
import logo from "../../assets/images/logo.svg";
import { useLang } from "../../hooks/useLang";
import styles from "./Header.module.scss";

export function Header() {
  const { lang, setLang, buildHref } = useLang();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [
    { label: "Trading", href: buildHref("/trading") },
    { label: "Company", href: buildHref("/company-about") },
    { label: "Custody", href: buildHref("/custody") },
    { label: "Who We Serve", href: buildHref("/whoweserve") },
    { label: "Asset Management", href: buildHref("/asset-management") },
    { label: "Resources", href: buildHref("/resources") },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <Link className={styles.logoLink} to={buildHref("/")} aria-label="Finorbis home">
          <img className={styles.logo} src={logo} alt="Finorbis" />
        </Link>

        <nav
          id="primary-navigation"
          className={`${styles.navigation} ${isMenuOpen ? styles.navigation_open : ""}`.trim()}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            item.href ? (
              <Link key={item.label} to={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>
            ) : (
              <span key={item.label} className={styles.navigationPlaceholder} aria-disabled="true">
                {item.label}
              </span>
            )
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
          <Link className={styles.login} to={buildHref("/")}>
            Log in
          </Link>
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
