"use client";

import { useState } from "react";
import { tiers, purchaseOptions, PurchaseType } from "@/data/plans-data";
import { PricingHeader } from "./pricing-section-header";
import { PricingToggle } from "./pricing-section-toggle";
import { PricingPlans } from "./pricing-plans";
import { LinkToPricing } from "./pricing-section-link";
import Image from "next/image";

export default function PricingSection() {
  const [purchaseType, setPurchaseType] =
    useState<PurchaseType>("subscription");

  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32 border-t border-neutral-800">
      {/* Background Image */}

      <Image
        src="/images/woman-training-athletics-macaque.webp"
        alt="Athlete stretching"
        fill
        priority
        className="object-cover object-center opacity-40 -z-10"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/5 via-black/50 to-black/95" />

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <PricingHeader />
        <PricingToggle
          purchaseType={purchaseType}
          setPurchaseType={setPurchaseType}
        />
        <PricingPlans
          purchaseType={purchaseType}
          tiers={tiers}
          purchaseOptions={purchaseOptions}
        />
      </div>

      <LinkToPricing />
    </section>
  );
}
