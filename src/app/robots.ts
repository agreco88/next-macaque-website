// src/app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      // allow: "/",
      disallow: "/",
    },
    sitemap: "https://macaque.com.uy/sitemap.xml",
    host: "https://macaque.com.uy",
  };
}
