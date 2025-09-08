import { AnimatedStatsGrid } from "@/components/animated/animated-stats-grid";
import HomePageHero from "@/components/pages/home-page/home-page-hero";
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
    image: {
      url: "/macaque-isotype.webp", // <-- just reference from /public
      width: 1200,
      height: 630,
      alt: "MACAQUE™ Protein Bars",
    },
  });
}

export default function HomePage() {
  return (
    <main className="">
      <HomePageHero />
      <AnimatedStatsGrid />
    </main>
  );
}
