import HomePageHero from "@/components/pages/home-page/home-page-hero";
import { generateLocaleMetadata } from "@/lib/generate-locale-metadata";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	return await generateLocaleMetadata({
		locale,
		route: "home",
		image: {
			url: "https://yourdomain.com/images/og-home.jpg",
			width: 1200,
			height: 630,
			alt: "Website Template hero",
		},
	});
}

export default function HomePage() {
	return (
		<main className="">
			<HomePageHero />
		</main>
	);
}
