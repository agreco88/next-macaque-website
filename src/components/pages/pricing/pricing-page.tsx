// components/pages/pricing-page.tsx
"use client";

import { useTranslations } from "next-intl";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingToggle } from "@/components/pricing/PricingToggle";
import { PricingCards } from "@/components/pricing/PricingCards";
import { PricingComparison } from "@/components/pricing/PricingComparison";
import { tiers, sections } from "@/data/pricing-tiers";

export function PricingPage() {
  const t = useTranslations("PricingPage");

  return (
    <form className="group/tiers isolate overflow-hidden bg-neutral-950 mt-32">
      <div className="flow-root pt-24 pb-16 sm:pt-32 lg:pb-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <PricingHero title={t("hero.h1")} subtitle={t("hero.subtitle")} />
          <PricingToggle />
          <PricingCards tiers={tiers} />
        </div>
      </div>

      <PricingComparison tiers={tiers} sections={sections} />
    </form>
  );
}
