import { FaqSection } from "@/components/pages/home-page/faq-section/faq-section";
import HomePageHero from "@/components/pages/home-page/home-page-hero";
import PricingSection from "@/components/pages/home-page/pricing-section/pricing-section";
import TestimonialsSection from "@/components/pages/home-page/testimonials-section/testimonials-section";
import { StatsGrid } from "@/components/stats-grid/stats-grid";
import { generateLocaleMetadata } from "@/lib/generate-locale-metadata";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return await generateLocaleMetadata({
    locale,
    route: "home",
    path: "/",
  });
}

export default function HomePage() {
  return (
    <>
      <HomePageHero />
      <StatsGrid />
      <PricingSection />
      <FaqSection />
      <TestimonialsSection />
    </>
  );
}
