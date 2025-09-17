import AboutUsHero from "@/components/pages/about-us/about-us-hero";
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
    route: "aboutUs",
    path: "/about-us",
  });
}

export default function AboutUsPage() {
  return <AboutUsHero />;
}
