import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";

import logo from "~/assets/images/logo.svg";
import logoShort from "~/assets/logo-short.svg";
import {
  Button,
  DropdownItem,
  DropdownMenu,
  Icon,
  IconButton,
  LinkButton,
  NavigationButton,
  type IconName,
} from "~/components/ui";

import styles from "./AccountLayout.module.scss";

const SIDEBAR_STORAGE_KEY = "finorbis-account-sidebar-collapsed";

type AccountLayoutContextValue = {
  collapsed: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

const AccountLayoutContext = createContext<AccountLayoutContextValue | null>(null);

type NavigationLeaf = {
  label: string;
  to: string;
};

type NavigationItem = {
  label: string;
  to: string;
  icon: IconName;
  children?: NavigationLeaf[];
};

const primaryNavigation: NavigationItem[] = [
  { label: "Wallets", to: "/account/wallets", icon: "wallet" },
  { label: "Trades", to: "/account/trades", icon: "trades" },
  {
    label: "Payments",
    to: "/account/payments",
    icon: "payments",
    children: [
      { label: "Deposit", to: "/account/payments/deposit" },
      { label: "Withdrawal", to: "/account/payments/withdrawal" },
    ],
  },
  { label: "Beneficiaries", to: "/account/beneficiaries", icon: "users" },
  {
    label: "History",
    to: "/account/history",
    icon: "history",
    children: [
      { label: "Trade History", to: "/account/history/trades" },
      { label: "Deposit History", to: "/account/history/deposits" },
      { label: "Withdrawal History", to: "/account/history/withdrawals" },
      { label: "Statement", to: "/account/history/statement" },
    ],
  },
  { label: "Information", to: "/account/information", icon: "info" },
];

const secondaryNavigation: NavigationItem[] = [
  {
    label: "Account Settings",
    to: "/account/settings",
    icon: "settings",
    children: [{ label: "Your Accounts", to: "/account/settings/accounts" }],
  },
  { label: "Profile", to: "/account/profile", icon: "profile" },
  { label: "Support", to: "/account/support", icon: "support" },
];

export interface AccountLayoutProps {
  defaultCollapsed?: boolean;
}

export function AccountLayout({ defaultCollapsed = false }: AccountLayoutProps) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  useEffect(() => {
    const savedValue = window.localStorage.getItem(SIDEBAR_STORAGE_KEY);

    const animationFrame = window.requestAnimationFrame(() => {
      if (savedValue !== null) {
        setCollapsed(savedValue === "true");
      } else if (window.matchMedia("(max-width: 900px)").matches) {
        setCollapsed(true);
      }
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  const setSidebarCollapsed = useCallback((nextValue: boolean) => {
    setCollapsed(nextValue);
    window.localStorage.setItem(SIDEBAR_STORAGE_KEY, String(nextValue));
  }, []);

  const toggleSidebar = useCallback(() => {
    setCollapsed((currentValue) => {
      const nextValue = !currentValue;
      window.localStorage.setItem(SIDEBAR_STORAGE_KEY, String(nextValue));
      return nextValue;
    });
  }, []);

  const closeSidebar = useCallback(() => setSidebarCollapsed(true), [setSidebarCollapsed]);

  useEffect(() => {
    if (collapsed) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && window.matchMedia("(max-width: 900px)").matches) {
        closeSidebar();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [closeSidebar, collapsed]);

  const contextValue = useMemo(
    () => ({ collapsed, toggleSidebar, closeSidebar }),
    [closeSidebar, collapsed, toggleSidebar]
  );

  return (
    <AccountLayoutContext.Provider value={contextValue}>
      <div className={`${styles.layout} ${collapsed ? styles.collapsed : ""}`}>
        <AccountSidebar />
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Close navigation"
          tabIndex={collapsed ? -1 : 0}
          onClick={closeSidebar}
        />
        <div className={styles.routeContent}>
          <Outlet />
        </div>
      </div>
    </AccountLayoutContext.Provider>
  );
}

function useAccountLayout() {
  const context = useContext(AccountLayoutContext);

  if (!context) {
    throw new Error("AccountPage must be rendered inside AccountLayout.");
  }

  return context;
}

function AccountSidebar() {
  const { collapsed, closeSidebar } = useAccountLayout();
  const location = useLocation();
  const navigate = useNavigate();
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() => ({
    Payments: true,
    History: false,
    "Account Settings": false,
  }));

  const isActive = useCallback(
    (path: string) =>
      (path === "/account/wallets" && location.pathname === "/account") ||
      location.pathname === path ||
      (path !== "/account/wallets" && location.pathname.startsWith(`${path}/`)),
    [location.pathname]
  );

  const goTo = useCallback(
    (path: string) => {
      void navigate(path);
      if (window.matchMedia("(max-width: 900px)").matches) closeSidebar();
    },
    [closeSidebar, navigate]
  );

  const renderNavigation = (items: NavigationItem[]) =>
    items.map((item) => {
      const hasChildren = Boolean(item.children?.length);
      const hasActiveChild = Boolean(
        item.children?.some((child) => location.pathname.startsWith(child.to))
      );
      const groupOpen = Boolean(openGroups[item.label]) || hasActiveChild;
      const itemActive = isActive(item.to);

      return (
        <li key={item.to} className={styles.navItemWrapper}>
          <NavigationButton
            icon={item.icon}
            label={<span className={styles.navText}>{item.label}</span>}
            active={itemActive}
            expanded={!collapsed && hasChildren ? groupOpen : undefined}
            className={styles.navItem}
            title={collapsed ? item.label : undefined}
            onClick={() => {
              if (hasChildren && !collapsed) {
                setOpenGroups((currentGroups) => ({
                  ...currentGroups,
                  [item.label]: !currentGroups[item.label],
                }));
                return;
              }
              goTo(item.to);
            }}
          />
          {hasChildren ? (
            <div
              className={`${styles.submenu} ${groupOpen && !collapsed ? styles.submenuOpen : ""}`}
              aria-hidden={!groupOpen || collapsed}
            >
              <ul>
                {item.children?.map((child) => (
                  <li key={child.to}>
                    <button
                      type="button"
                      className={`${styles.submenuItem} ${isActive(child.to) ? styles.submenuItemActive : ""}`}
                      tabIndex={groupOpen && !collapsed ? 0 : -1}
                      aria-current={isActive(child.to) ? "page" : undefined}
                      onClick={() => goTo(child.to)}
                    >
                      {child.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </li>
      );
    });

  return (
    <aside className={styles.sidebar} aria-label="Account navigation">
      <Link to="/account/wallets" className={styles.brand} aria-label="Finorbis account home">
        <img className={styles.brandLogo} src={logo} alt="Finorbis" />
        <img className={styles.brandLogoShort} src={logoShort} alt="" aria-hidden="true" />
      </Link>

      <nav className={styles.navigation}>
        <ul>{renderNavigation(primaryNavigation)}</ul>
        <ul className={styles.secondaryNavigation}>{renderNavigation(secondaryNavigation)}</ul>
      </nav>
    </aside>
  );
}

export interface AccountPageProps {
  title: string;
  children: ReactNode;
  showBack?: boolean;
  backTo?: string;
  onBack?: () => void;
  actions?: ReactNode;
  accountName?: string;
  accountReference?: string;
  sessionLabel?: string;
}

export function AccountPage({
  title,
  children,
  showBack = false,
  backTo,
  onBack,
  actions,
  accountName = "Client",
  accountReference = "Account FB-000000",
  sessionLabel = "Session ends in 29:25",
}: AccountPageProps) {
  const { collapsed, toggleSidebar } = useAccountLayout();
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (backTo) {
      void navigate(backTo);
    } else {
      void navigate(-1);
    }
  };

  return (
    <div className={styles.page}>
      <header className={styles.topbar}>
        <div className={styles.topbarTitleGroup}>
          <IconButton
            icon={collapsed ? "menu-expand" : "menu-collapse"}
            label={collapsed ? "Expand navigation" : "Collapse navigation"}
            size="sm"
            className={styles.sidebarToggle}
            active={!collapsed}
            onClick={toggleSidebar}
          />
          <h2 className={styles.pageTitle}>{title}</h2>
        </div>

        <div className={styles.accountTools}>
          <span className={styles.sessionLabel}>
            <Icon name="history" size={13} />
            {sessionLabel}
          </span>
          <div className={styles.languages} aria-label="Language">
            <Button appearance="filled" size="xs" active>
              EN
            </Button>
            <Button appearance="ghost" size="xs">
              DE
            </Button>
          </div>
          <IconButton icon="bell" label="Notifications" size="sm" />
          <AccountProfileMenu
            accountName={accountName}
            accountReference={accountReference}
            sessionLabel={sessionLabel}
          />
        </div>
      </header>

      <main className={styles.main}>
        {showBack || actions ? (
          <AccountActionBar showBack={showBack} onBack={handleBack}>
            {actions}
          </AccountActionBar>
        ) : null}
        <div className={styles.pageContent}>{children}</div>
      </main>

      <AccountFooter />
    </div>
  );
}

export interface AccountActionBarProps {
  showBack?: boolean;
  onBack?: () => void;
  children?: ReactNode;
}

export function AccountActionBar({ showBack = false, onBack, children }: AccountActionBarProps) {
  return (
    <div className={styles.actionBar}>
      <div>
        {showBack ? (
          <Button
            appearance="secondary"
            size="sm"
            leadingIcon={<Icon name="arrow-right" size={14} className={styles.backIcon} />}
            onClick={onBack}
          >
            Back
          </Button>
        ) : null}
      </div>
      {children ? <div className={styles.actionButtons}>{children}</div> : null}
    </div>
  );
}

interface AccountProfileMenuProps {
  accountName: string;
  accountReference: string;
  sessionLabel: string;
}

function AccountProfileMenu({
  accountName,
  accountReference,
  sessionLabel,
}: AccountProfileMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        containerRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const goTo = (path: string) => {
    setOpen(false);
    void navigate(path);
  };

  return (
    <div className={styles.profileControl} ref={containerRef}>
      <Button
        appearance="ghost"
        size="sm"
        leadingIcon={<span className={styles.avatar}>{accountName.slice(0, 1)}</span>}
        trailingIcon={
          <Icon
            name="chevron-down"
            size={13}
            className={`${styles.profileChevron} ${open ? styles.profileChevronOpen : ""}`}
          />
        }
        className={styles.accountButton}
        active={open}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="account-profile-menu"
        onClick={() => setOpen((currentValue) => !currentValue)}
      >
        <span className={styles.accountIdentity}>
          <span>{accountName}</span>
          <small>{accountReference}</small>
        </span>
      </Button>

      {open ? (
        <div className={styles.profileMenuPopover} id="account-profile-menu">
          <DropdownMenu
            className={styles.profileMenu}
            headerClassName={styles.profileMenuHeaderShell}
            itemsClassName={styles.profileMenuItems}
            width={260}
            label={
              <div className={styles.profileMenuHeader}>
                <div className={styles.profileMenuIdentity}>
                  <strong>{accountName}</strong>
                  <span>{accountReference}</span>
                </div>
                <div className={styles.profileMenuSession}>
                  <Icon name="history" size={16} />
                  <span>{sessionLabel}</span>
                </div>
                <div className={styles.profileMenuDivider} role="separator" />
              </div>
            }
          >
            <DropdownItem
              icon="profile"
              iconSize={18}
              className={`${styles.profileMenuItem} ${styles.profileMenuItemFirst}`}
              onClick={() => goTo("/account/profile")}
            >
              Profile
            </DropdownItem>
            <DropdownItem
              icon="settings"
              iconSize={18}
              className={styles.profileMenuItem}
              onClick={() => goTo("/account/settings")}
            >
              Account settings
            </DropdownItem>
            <div className={styles.profileMenuDivider} role="separator" />
            <DropdownItem
              icon="logout"
              iconSize={18}
              className={`${styles.profileMenuItem} ${styles.profileMenuItemAfterDivider}`}
              onClick={() => goTo("/")}
            >
              Log out
            </DropdownItem>
          </DropdownMenu>
        </div>
      ) : null}
    </div>
  );
}

function AccountFooter() {
  return (
    <footer className={styles.footer}>
      <span>© 2026 Finorbis</span>
      <div className={styles.footerLinks}>
        <LinkButton href="/terms">Terms of Use</LinkButton>
        <LinkButton href="/privacypolicy">Privacy Policy</LinkButton>
      </div>
    </footer>
  );
}
