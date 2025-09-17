import type { MetadataRoute } from "next";
import { routes } from "@/lib/routes";

const baseUrl = "https://www.macaque.com.uy";
const locales = ["en", "es"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap((route) =>
    locales.map((locale) => {
      const url = `${baseUrl}/${locale}${route}`;
      return {
        url,
        lastModified,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            es: `${baseUrl}/es${route}`,
          },
        },
      };
    })
  );
}
