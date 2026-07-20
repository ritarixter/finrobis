import { ComponentShowcasePage } from "../pages/ComponentShowcase/ComponentShowcase";

export function meta() {
  return [
    { title: "Component Showcase - Finorbis" },
    {
      name: "description",
      content: "A developer-only page for previewing reusable UI components.",
    },
  ];
}

export default function DevComponentsRoute() {
  return <ComponentShowcasePage />;
}
