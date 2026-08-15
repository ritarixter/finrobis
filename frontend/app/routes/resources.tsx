import { ResourcesNewsPage } from "../pages/ResourcesNewsPage/ResourcesNewsPage";
import { content_de } from "../constants/content_de";
import { content_en } from "../constants/content_en";
import { BASE_URL } from "~/settings";

export function meta({ location }: { location: { pathname: string; search: string } }) {
  const lang =
    new URL(location.pathname + location.search, BASE_URL).searchParams.get("lang") === "de"
      ? "de"
      : "en";
  const { pages } = lang === "de" ? content_de : content_en;

  return [
    { title: pages.resourcesNews.meta.title },
    { name: "description", content: pages.resourcesNews.meta.description },
  ];
}

export default function ResourcesNewsRoute() {
  return <ResourcesNewsPage />;
}
