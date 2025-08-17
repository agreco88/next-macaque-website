import AboutUsHero from "@/components/pages/about-us/about-us-hero";
import { generateLocaleMetadata } from "@/lib/generate-locale-metadata";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	return await generateLocaleMetadata({
		locale,
		route: "aboutUs",
		image: {
			url: "https://yourdomain.com/images/og-home.jpg",
			width: 1200,
			height: 630,
			alt: "Website Template hero",
		},
	});
}

export default function AboutUsPage() {
	return (
		<main>
			<AboutUsHero />
		</main>
	);
}
