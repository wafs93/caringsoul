import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about/", "/what-we-do/", "/get-involved/", "/donate/", "/contact/"].map((p) => ({
    url: `${site.url}${p || "/"}`,
    lastModified: new Date(),
  }));
}
