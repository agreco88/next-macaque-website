// /lib/generate-locale-metadata.ts
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

const BASE_URL = "https://macaque.bar"; // <-- set your real domain
const SITE_NAME = "MACAQUE™ Protein Bars";

type OgImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

const DEFAULT_OG_IMAGE: OgImage = {
  url: `${BASE_URL}/images/og/macaque-default.jpg`, // <-- your default
  width: 1200,
  height: 630,
  alt: "MACAQUE™ Protein Bars",
};

type GenerateLocaleMetadataOptions = {
  locale: string;
  route: string; // translation key like "home", "aboutUs", etc.
  path?: string; // optional: the URL path (e.g. "/", "/about-us")
  image?: Partial<OgImage>; // allow overriding just url or alt, etc.
};

export async function generateLocaleMetadata({
  locale,
  route,
  path = "/", // sensible default
  image,
}: GenerateLocaleMetadataOptions): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const title = t(`${route}.title`);
  const description = t(`${route}.description`);
  const ogDescription = t(`${route}.ogDescription`);
  const rawKeywords = t(`${route}.keywords`);
  const keywords = rawKeywords.split(",").map((k) => k.trim());

  // Merge defaults with any per-page overrides
  const finalImage: OgImage = { ...DEFAULT_OG_IMAGE, ...image };

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description: ogDescription,
      url: `${BASE_URL}/${locale}${path}`,
      siteName: SITE_NAME,
      images: [finalImage],
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: ogDescription,
      images: [finalImage.url],
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}
