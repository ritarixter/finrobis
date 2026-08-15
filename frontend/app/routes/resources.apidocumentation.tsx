import { ResourcesApiDocumentationPage } from "../pages/ResourcesApiDocumentationPage/ResourcesApiDocumentationPage";
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
    { title: pages.resourcesApiDocumentation.meta.title },
    { name: "description", content: pages.resourcesApiDocumentation.meta.description },
  ];
}

export default function ResourcesApiDocumentationRoute() {
  return <ResourcesApiDocumentationPage />;
}
