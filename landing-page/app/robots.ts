import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { basePath, withBasePath } from "@/lib/base-path";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: basePath },
    ...(siteUrl && { sitemap: new URL(withBasePath("/sitemap.xml"), siteUrl).href }),
  };
}
