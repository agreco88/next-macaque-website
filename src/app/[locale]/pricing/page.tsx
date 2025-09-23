import { generateLocaleMetadata } from "@/lib/generate-locale-metadata";
import { Metadata } from "next";
import { PricingHero } from "@/components/pages/pricing/pricing-hero";
import PricingFeatures from "@/components/pages/pricing/pricing-features";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return await generateLocaleMetadata({
    locale,
    route: "pricingPage",
    path: "/pricing",
  });
}

export default function PricingPage() {
  return (
    <form className="group/tiers isolate overflow-hidden bg-neutral-950 mt-32">
      <div className="flow-root  pt-24 pb-16 sm:pt-32 lg:pb-0">
        <PricingHero />
      </div>
      <div className="relative bg-neutral-950 border-t border-orange-400 lg:pt-14">
        <PricingFeatures />
      </div>
    </form>
  );
}
