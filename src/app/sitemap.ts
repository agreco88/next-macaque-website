import type { MetadataRoute } from "next";

const baseUrl = "https://macaque.com.uy";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = ["", "/build-your-bar", "/faq", "/pricing"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    sitemapEntries.push({
      url: `${baseUrl}${route ? `/en${route}` : "/en"}`,
      lastModified,
      alternates: {
        languages: {
          en: `${baseUrl}${route ? `/en${route}` : "/en"}`,
          es: `${baseUrl}${route ? `/es${route}` : "/es"}`,
        },
      },
    });

    sitemapEntries.push({
      url: `${baseUrl}${route ? `/es${route}` : "/es"}`,
      lastModified,
      alternates: {
        languages: {
          en: `${baseUrl}${route ? `/en${route}` : "/en"}`,
          es: `${baseUrl}${route ? `/es${route}` : "/es"}`,
        },
      },
    });
  }

  return sitemapEntries;
}
