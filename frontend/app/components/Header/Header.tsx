import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import logo from "../../assets/images/logo.svg";
import { useLang } from "../../hooks/useLang";
import styles from "./Header.module.scss";

export function Header() {
  const { lang, setLang, buildHref } = useLang();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const currentPath = location.pathname;

  const isActivePath = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath === path || currentPath.startsWith(`${path}/`);
  };

  const navigation = [
    { label: "Trading", href: buildHref("/trading") },
    { label: "Company", href: buildHref("/company-about") },
    { label: "Custody", href: buildHref("/custody") },
    { label: "Who We Serve", href: buildHref("/whoweserve") },
    { label: "Asset Management", href: buildHref("/asset-management") },
    { label: "Resources", href: buildHref("/resources") },
  ];

  const pageGroups = [
    {
      title: "Trading",
      items: [
        { label: "Trading", href: buildHref("/trading") },
        { label: "OTC / Spot", href: buildHref("/trading/otc") },
        { label: "Stablecoin Access", href: buildHref("/trading/stablecoin-access") },
      ],
    },
    {
      title: "Asset Management",
      items: [
        { label: "Asset Management", href: buildHref("/asset-management") },
        { label: "Portfolio", href: buildHref("/asset-management/portfolio") },
        {
          label: "Investment Advisory",
          href: buildHref("/asset-management/investment-advisory"),
        },
        {
          label: "License & Regulation",
          href: buildHref("/asset-management/license-regulation"),
        },
      ],
    },
    {
      title: "Who We Serve",
      items: [
        { label: "Who We Serve", href: buildHref("/whoweserve") },
        { label: "Fintechs", href: buildHref("/whoweserve/fintechs") },
        { label: "Corporates", href: buildHref("/whoweserve/corporates") },
        { label: "Traders", href: buildHref("/whoweserve/traders") },
        { label: "Institutions", href: buildHref("/whoweserve/institutions") },
        { label: "Investors", href: buildHref("/whoweserve/investors") },
      ],
    },
    {
      title: "Custody",
      items: [
        { label: "Custody", href: buildHref("/custody") },
        { label: "MPC Vaults", href: buildHref("/custody/mpcvaults") },
        { label: "Staking", href: buildHref("/custody/staking") },
        { label: "KYC / AML", href: buildHref("/custody/KYCAML") },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "Resources", href: buildHref("/resources") },
        { label: "API Documentation", href: buildHref("/resources/apidocumentation") },
        { label: "Case Studies", href: buildHref("/resources/casestudies") },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About", href: buildHref("/company-about") },
        { label: "Careers", href: buildHref("/company/careers") },
        { label: "Contact", href: buildHref("/company/contact") },
      ],
    },
    {
      title: "Legal",
      items: [
        { label: "Terms", href: buildHref("/terms") },
        { label: "Regulatory Information", href: buildHref("/regulatory-information") },
        { label: "Privacy Policy", href: buildHref("/privacypolicy") },
        { label: "Cookies", href: buildHref("/cookies") },
      ],
    },
  ];

  const isSubpageWithinPagesMenu = pageGroups.some((group) =>
    group.items.some((item) => {
      const path = item.href.split("?")[0];
      return isActivePath(path) && !navigation.some((navItem) => navItem.href.split("?")[0] === path);
    })
  );

  const mobileMenuSections = [
    {
      title: "Main Pages",
      items: navigation,
    },
    ...pageGroups.map((group) => ({
      ...group,
      items: group.title === "Legal" ? group.items : group.items.slice(1),
    })),
  ];

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setIsPagesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPagesOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.navbar}>
        <Link className={styles.logoLink} to={buildHref("/")} aria-label="Finorbis home">
          <img className={styles.logo} src={logo} alt="Finorbis" />
        </Link>

        <nav
          id="primary-navigation"
          className={`${styles.navigation} ${isMenuOpen ? styles.navigation_open : ""}`.trim()}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => {
            const active = isActivePath(item.href.split("?")[0]);

            return item.href ? (
              <Link
                key={item.label}
                to={item.href}
                className={active ? styles.activeLink : undefined}
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsPagesOpen(false);
                }}
              >
                {item.label}
              </Link>
            ) : (
              <span key={item.label} className={styles.navigationPlaceholder} aria-disabled="true">
                {item.label}
              </span>
            );
          })}

          <button
            type="button"
            className={`${styles.pagesToggle} ${isSubpageWithinPagesMenu ? styles.pagesToggleActive : ""}`.trim()}
            aria-expanded={isPagesOpen}
            aria-controls="pages-dropdown"
            onClick={() => setIsPagesOpen((open) => !open)}
          >
            <span>Pages</span>
          </button>
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
            onClick={() => {
              setIsMenuOpen((open) => !open);
              if (isMenuOpen) {
                setIsPagesOpen(false);
              }
            }}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu} aria-label="Mobile navigation">
          {mobileMenuSections.map((section) => (
            <div className={styles.mobileMenuSection} key={section.title}>
              <p
                className={`${styles.mobileMenuTitle} ${section.title === "Main Pages" ? styles.mobileMenuTitleMain : ""}`.trim()}
              >
                {section.title}
              </p>
              <div className={styles.mobileMenuLinks}>
                {section.items.map((item) => (
                  <Link
                    key={item.label}
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
            </div>
          ))}
        </div>
      )}

      {isPagesOpen && (
        <div id="pages-dropdown" className={styles.pagesDropdown}>
          {pageGroups.map((group) => (
            <div className={styles.pagesGroup} key={group.title}>
              <p className={styles.pagesGroupTitle}>{group.title}</p>
              <div className={styles.pagesLinks}>
                {group.items.map((item) => (
                  <Link
                    key={item.label}
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
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
