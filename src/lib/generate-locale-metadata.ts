// /lib/generate-locale-metadata.ts
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://www.macaque.com.uy";
const SITE_NAME = "MACAQUE™ Protein Bars";

type OgImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

const DEFAULT_OG_IMAGE: OgImage = {
  url: `${BASE_URL}/images/og/macaque-isotype.png`,
  width: 1200,
  height: 630,
  alt: "MACAQUE™ Protein Bars",
};

type GenerateLocaleMetadataOptions = {
  locale: string;
  route: string; // key like "home", "aboutUs"
  path?: string; // optional: URL path like "/", "/about-us"
  image?: Partial<OgImage>; // override OG image
};

export async function generateLocaleMetadata({
  locale,
  route,
  path = "/",
  image,
}: GenerateLocaleMetadataOptions): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const title = t(`${route}.title`);
  const description = t(`${route}.description`);
  const ogDescription = t(`${route}.ogDescription`);
  const rawKeywords = t(`${route}.keywords`);
  const keywords = rawKeywords.split(",").map((k) => k.trim());

  const finalImage: OgImage = { ...DEFAULT_OG_IMAGE, ...image };

  // normalize to no trailing slash
  const fullUrl = `${BASE_URL}/${locale}${path}`.replace(/\/+$/, "");

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    keywords,
    openGraph: {
      title,
      description: ogDescription,
      url: fullUrl,
      siteName: SITE_NAME,
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
      images: [finalImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: ogDescription,
      images: [finalImage.url],
    },
    alternates: {
      canonical: fullUrl,
      languages: Object.fromEntries(
        routing.locales.map((l) => [
          l,
          `${BASE_URL}/${l}${path}`.replace(/\/+$/, ""),
        ])
      ),
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}
