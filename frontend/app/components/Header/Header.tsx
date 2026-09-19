import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link, useLocation } from "react-router";
import logo from "../../assets/images/logo.svg";
import { useLang, type Lang } from "../../hooks/useLang";
import styles from "./Header.module.scss";

const headerCopy = {
  en: {
    nav: {
      trading: "Trading",
      company: "Company",
      custody: "Custody",
      audience: "Who We Serve",
      assets: "Asset Management",
      resources: "Resources",
    },
    pages: "Pages",
    login: "Log in",
    mainPages: "Main Pages",
    groups: {
      trading: "Trading",
      assets: "Asset Management",
      audience: "Who We Serve",
      custody: "Custody",
      resources: "Resources",
      company: "Company",
      legal: "Legal",
    },
    items: {
      otc: "OTC / Spot",
      stablecoins: "Stablecoin Access",
      portfolio: "Portfolio",
      advisory: "Investment Advisory",
      regulation: "License & Regulation",
      fintechs: "Fintechs",
      corporates: "Corporates",
      traders: "Traders",
      institutions: "Institutions",
      investors: "Investors",
      vaults: "MPC Vaults",
      staking: "Staking",
      kyc: "KYC / AML",
      api: "API Documentation",
      cases: "Case Studies",
      about: "About",
      careers: "Careers",
      contact: "Contact",
      terms: "Terms",
      regulatory: "Regulatory Information",
      privacy: "Privacy Policy",
      cookies: "Cookies",
    },
    aria: {
      home: "Finorbis home",
      primary: "Primary navigation",
      mobile: "Mobile navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchLanguage: "Switch language to German",
    },
  },
  de: {
    nav: {
      trading: "Handel",
      company: "Unternehmen",
      custody: "Verwahrung",
      audience: "Unsere Kunden",
      assets: "Vermögensverwaltung",
      resources: "Ressourcen",
    },
    pages: "Seiten",
    login: "Anmelden",
    mainPages: "Hauptseiten",
    groups: {
      trading: "Handel",
      assets: "Vermögensverwaltung",
      audience: "Unsere Kunden",
      custody: "Verwahrung",
      resources: "Ressourcen",
      company: "Unternehmen",
      legal: "Rechtliches",
    },
    items: {
      otc: "OTC / Spot",
      stablecoins: "Stablecoin-Zugang",
      portfolio: "Portfolio",
      advisory: "Anlageberatung",
      regulation: "Lizenz & Regulierung",
      fintechs: "Fintechs",
      corporates: "Unternehmen",
      traders: "Händler",
      institutions: "Institutionen",
      investors: "Investoren",
      vaults: "MPC-Tresore",
      staking: "Staking",
      kyc: "KYC / AML",
      api: "API-Dokumentation",
      cases: "Fallstudien",
      about: "Über uns",
      careers: "Karriere",
      contact: "Kontakt",
      terms: "Geschäftsbedingungen",
      regulatory: "Regulatorische Informationen",
      privacy: "Datenschutzerklärung",
      cookies: "Cookies",
    },
    aria: {
      home: "Finorbis Startseite",
      primary: "Hauptnavigation",
      mobile: "Mobile Navigation",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
      switchLanguage: "Sprache auf Englisch umstellen",
    },
  },
} as const;

const getCopy = (lang: Lang) => headerCopy[lang];

export function Header() {
  const { lang, setLang, buildHref } = useLang();
  const copy = getCopy(lang);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const currentPath = location.pathname;

  const isActivePath = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath === path || currentPath.startsWith(`${path}/`);
  };

  const navigation = [
    { label: copy.nav.trading, href: buildHref("/trading") },
    { label: copy.nav.company, href: buildHref("/company-about") },
    { label: copy.nav.custody, href: buildHref("/custody") },
    { label: copy.nav.audience, href: buildHref("/whoweserve") },
    { label: copy.nav.assets, href: buildHref("/asset-management") },
    { label: copy.nav.resources, href: buildHref("/resources") },
  ];

  const pageGroups = [
    {
      title: copy.groups.trading,
      items: [
        { label: copy.nav.trading, href: buildHref("/trading") },
        { label: copy.items.otc, href: buildHref("/trading/otc") },
        { label: copy.items.stablecoins, href: buildHref("/trading/stablecoin-access") },
      ],
    },
    {
      title: copy.groups.assets,
      items: [
        { label: copy.nav.assets, href: buildHref("/asset-management") },
        { label: copy.items.portfolio, href: buildHref("/asset-management/portfolio") },
        {
          label: copy.items.advisory,
          href: buildHref("/asset-management/investment-advisory"),
        },
        {
          label: copy.items.regulation,
          href: buildHref("/asset-management/license-regulation"),
        },
      ],
    },
    {
      title: copy.groups.audience,
      items: [
        { label: copy.nav.audience, href: buildHref("/whoweserve") },
        { label: copy.items.fintechs, href: buildHref("/whoweserve/fintechs") },
        { label: copy.items.corporates, href: buildHref("/whoweserve/corporates") },
        { label: copy.items.traders, href: buildHref("/whoweserve/traders") },
        { label: copy.items.institutions, href: buildHref("/whoweserve/institutions") },
        { label: copy.items.investors, href: buildHref("/whoweserve/investors") },
      ],
    },
    {
      title: copy.groups.custody,
      items: [
        { label: copy.nav.custody, href: buildHref("/custody") },
        { label: copy.items.vaults, href: buildHref("/custody/mpcvaults") },
        { label: copy.items.staking, href: buildHref("/custody/staking") },
        { label: copy.items.kyc, href: buildHref("/custody/KYCAML") },
      ],
    },
    {
      title: copy.groups.resources,
      items: [
        { label: copy.nav.resources, href: buildHref("/resources") },
        { label: copy.items.api, href: buildHref("/resources/apidocumentation") },
        { label: copy.items.cases, href: buildHref("/resources/casestudies") },
      ],
    },
    {
      title: copy.groups.company,
      items: [
        { label: copy.items.about, href: buildHref("/company-about") },
        { label: copy.items.careers, href: buildHref("/company/careers") },
        { label: copy.items.contact, href: buildHref("/company/contact") },
      ],
    },
    {
      title: copy.groups.legal,
      items: [
        { label: copy.items.terms, href: buildHref("/terms") },
        { label: copy.items.regulatory, href: buildHref("/regulatory-information") },
        { label: copy.items.privacy, href: buildHref("/privacypolicy") },
        { label: copy.items.cookies, href: buildHref("/cookies") },
      ],
    },
  ];

  const isSubpageWithinPagesMenu = pageGroups.some((group) =>
    group.items.some((item) => {
      const path = item.href.split("?")[0];
      return (
        isActivePath(path) && !navigation.some((navItem) => navItem.href.split("?")[0] === path)
      );
    })
  );

  const mobileMenuSections = [
    {
      title: copy.mainPages,
      isMain: true,
      items: navigation,
    },
    ...pageGroups.map((group) => ({
      ...group,
      isMain: false,
      items: group.title === copy.groups.legal ? group.items : group.items.slice(1),
    })),
  ];

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setIsPagesOpen(false);
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPagesOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const panelInitial = shouldReduceMotion
    ? false
    : { opacity: 0, y: -12, scale: 0.985, filter: "blur(6px)" };
  const panelAnimate = shouldReduceMotion
    ? { opacity: 1 }
    : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" };
  const panelExit = shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, y: -8, scale: 0.99, filter: "blur(4px)" };

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.navbar}>
        <Link className={styles.logoLink} to={buildHref("/")} aria-label={copy.aria.home}>
          <img className={styles.logo} src={logo} alt="Finorbis" />
        </Link>

        <nav className={styles.navigation} aria-label={copy.aria.primary}>
          {navigation.map((item) => {
            const active = isActivePath(item.href.split("?")[0]);

            return (
              <Link
                key={item.href}
                to={item.href}
                className={active ? styles.activeLink : undefined}
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsPagesOpen(false);
                }}
              >
                {item.label}
              </Link>
            );
          })}

          <button
            type="button"
            className={`${styles.pagesToggle} ${isPagesOpen ? styles.pagesToggleOpen : ""} ${isSubpageWithinPagesMenu ? styles.pagesToggleActive : ""}`.trim()}
            aria-expanded={isPagesOpen}
            aria-controls="pages-dropdown"
            onClick={() => {
              setIsPagesOpen((open) => !open);
              setIsMenuOpen(false);
            }}
          >
            <span>{copy.pages}</span>
            <span className={styles.pagesChevron} aria-hidden="true" />
          </button>
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.language}
            aria-label={copy.aria.switchLanguage}
            onClick={() => {
              setLang(lang === "en" ? "de" : "en");
              setIsPagesOpen(false);
              setIsMenuOpen(false);
            }}
          >
            {lang.toUpperCase()}
          </button>
          <Link className={styles.login} to={buildHref("/")}>
            {copy.login}
          </Link>
          <button
            type="button"
            className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ""}`.trim()}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? copy.aria.closeMenu : copy.aria.openMenu}
            onClick={() => {
              setIsMenuOpen((open) => !open);
              setIsPagesOpen(false);
            }}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            className={styles.mobileMenu}
            aria-label={copy.aria.mobile}
            initial={shouldReduceMotion ? false : { height: 0, opacity: 0, y: -8 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0, y: -8 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className={styles.mobileMenuInner}>
              {mobileMenuSections.map((section, sectionIndex) => (
                <motion.div
                  className={styles.mobileMenuSection}
                  key={section.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.01 : 0.3,
                    delay: shouldReduceMotion ? 0 : 0.05 + sectionIndex * 0.025,
                  }}
                >
                  <p
                    className={`${styles.mobileMenuTitle} ${section.isMain ? styles.mobileMenuTitleMain : ""}`.trim()}
                  >
                    {section.title}
                  </p>
                  <div className={styles.mobileMenuLinks}>
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`${styles.mobileMenuLink} ${isActivePath(item.href.split("?")[0]) ? styles.activeLink : ""}`.trim()}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsPagesOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isPagesOpen && (
          <motion.div
            id="pages-dropdown"
            className={styles.pagesDropdown}
            initial={panelInitial}
            animate={panelAnimate}
            exit={panelExit}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {pageGroups.map((group, groupIndex) => (
              <motion.div
                className={styles.pagesGroup}
                key={group.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 0.24,
                  delay: shouldReduceMotion ? 0 : 0.04 + groupIndex * 0.025,
                }}
              >
                <p className={styles.pagesGroupTitle}>{group.title}</p>
                <div className={styles.pagesLinks}>
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`${styles.pagesLink} ${isActivePath(item.href.split("?")[0]) ? styles.activeLink : ""}`.trim()}
                      onClick={() => {
                        setIsPagesOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
