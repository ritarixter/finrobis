import type { Route } from "./+types/whoweserve.investors";
import { WhoWeServeInvestorsPage } from "../pages/WhoWeServeInvestorsPage/WhoWeServeInvestorsPage";
import { content_de } from "../constants/content_de";
import { content_en } from "../constants/content_en";
import { BASE_URL } from "~/settings";

export function meta({ location }: Route.MetaArgs) {
  const lang =
    new URL(location.pathname + location.search, BASE_URL).searchParams.get("lang") === "de"
      ? "de"
      : "en";
  const { pages } = lang === "de" ? content_de : content_en;

  return [
    { title: pages.whoWeServeInvestors.meta.title },
    { name: "description", content: pages.whoWeServeInvestors.meta.description },
  ];
}

export default function WhoWeServeInvestorsRoute() {
  return <WhoWeServeInvestorsPage />;
}
