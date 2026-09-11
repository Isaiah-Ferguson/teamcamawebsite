import type { MetadataRoute } from "next";
import { programPath, programs } from "./lib/programs";
import { absoluteUrl } from "./lib/site";

// lastModified is intentionally omitted: a build timestamp is not a real edit date.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/classes"), changeFrequency: "monthly", priority: 0.9 },
    ...programs.map(program => ({ url: absoluteUrl(programPath(program)), changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: absoluteUrl("/about"), changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/contact"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/gallery"), changeFrequency: "monthly", priority: 0.5 },
  ];
}
