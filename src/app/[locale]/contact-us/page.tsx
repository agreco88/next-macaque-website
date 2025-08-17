// src/app/[locale]/contact-us/page.tsx
import ContactForm from "@/components/pages/contact/contact-form";
import ContactHero from "@/components/pages/contact/contact-hero";
import { generateLocaleMetadata } from "@/lib/generate-locale-metadata";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	return await generateLocaleMetadata({
		locale,
		route: "contactUs",
		image: {
			url: "https://yourdomain.com/images/og-contact.jpg",
			width: 1200,
			height: 630,
			alt: "Contact Page for Next Website Starter",
		},
	});
}

export default function ContactUsPage() {
	return (
		<main className="flex md:flex-row flex-col container mx-auto items-center">
			<ContactHero />
			<ContactForm />
		</main>
	);
}
