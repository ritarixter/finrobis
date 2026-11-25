import arrowRight from "~/assets/ui-icons/arrow-right.svg";
import bell from "~/assets/ui-icons/bell.svg";
import calendar from "~/assets/ui-icons/calendar.svg";
import chevronDown from "~/assets/ui-icons/chevron-down.svg";
import chevronUp from "~/assets/ui-icons/chevron-up.svg";
import close from "~/assets/ui-icons/close.svg";
import copy from "~/assets/ui-icons/copy.svg";
import download from "~/assets/ui-icons/download.svg";
import edit from "~/assets/ui-icons/edit.svg";
import eye from "~/assets/ui-icons/eye.svg";
import filter from "~/assets/ui-icons/filter.svg";
import history from "~/assets/ui-icons/history.svg";
import info from "~/assets/ui-icons/info.svg";
import logout from "~/assets/ui-icons/logout.svg";
import menuCollapse from "~/assets/ui-icons/menu-collapse.svg";
import menuExpand from "~/assets/ui-icons/menu-expand.svg";
import payments from "~/assets/ui-icons/payments.svg";
import plus from "~/assets/ui-icons/plus.svg";
import profile from "~/assets/ui-icons/profile.svg";
import search from "~/assets/ui-icons/search.svg";
import settings from "~/assets/ui-icons/settings.svg";
import support from "~/assets/ui-icons/support.svg";
import swap from "~/assets/ui-icons/swap.svg";
import trades from "~/assets/ui-icons/trades.svg";
import trash from "~/assets/ui-icons/trash.svg";
import upload from "~/assets/ui-icons/upload.svg";
import users from "~/assets/ui-icons/users.svg";
import wallet from "~/assets/ui-icons/wallet.svg";

export const iconAssets = {
  "arrow-right": arrowRight,
  bell,
  calendar,
  "chevron-down": chevronDown,
  "chevron-up": chevronUp,
  close,
  copy,
  download,
  edit,
  eye,
  filter,
  history,
  info,
  logout,
  "menu-collapse": menuCollapse,
  "menu-expand": menuExpand,
  payments,
  plus,
  profile,
  search,
  settings,
  support,
  swap,
  trades,
  trash,
  upload,
  users,
  wallet,
} as const;

export type IconName = keyof typeof iconAssets;
