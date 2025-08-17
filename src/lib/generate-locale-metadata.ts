import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

type GenerateLocaleMetadataOptions = {
	locale: string;
	route: string; // e.g., "/about-us"
	image?: {
		url: string;
		width: number;
		height: number;
		alt: string;
	};
};

export async function generateLocaleMetadata({
	locale,
	route,
	image = {
		url: "https://yourdomain.com/images/default-og.jpg",
		width: 1200,
		height: 630,
		alt: "Conexum",
	},
}: GenerateLocaleMetadataOptions): Promise<Metadata> {
	const t = await getTranslations({ locale, namespace: "Metadata" });

	const title = t(`${route}.title`);
	const description = t(`${route}.description`);
	const ogDescription = t(`${route}.ogDescription`);
	const rawKeywords = t(`${route}.keywords`);
	const keywords = rawKeywords.split(",").map((k) => k.trim());

	return {
		title,
		description,
		keywords,
		openGraph: {
			title,
			description: ogDescription,
			url: `https://www.conexum.co/${locale}${route}`,
			siteName: "Conexum",
			images: [image],
			locale: locale === "es" ? "es_ES" : "en_US",
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title,
			description: ogDescription,
			images: [image.url],
		},
		icons: {
			icon: "/favicon.ico",
		},
	};
}
