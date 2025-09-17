import HomePageHero from "@/components/pages/home-page/home-page-hero";
import PricingSection from "@/components/pages/home-page/pricing-section";
import { AnimatedStatsGrid } from "@/components/stats-grid/animated-stats-grid";
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
      <AnimatedStatsGrid />
      <PricingSection />
    </>
  );
}
