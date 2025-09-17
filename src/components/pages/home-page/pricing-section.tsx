// app/components/PricingSection.tsx
"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { purchaseOptions, tiers } from "@/data/plans-data";

export default function PricingSection() {
  const [purchaseType, setPurchaseType] = useState("subscription");

  return (
    <section className="bg-gradient-to-t from-neutral-950 via-neutral-950 to-neutral-900 py-24 sm:py-32 shadow-inner shadow-orange-950">
      <div className="mx-auto max-w-7xl  lg:px-8">
        <div className="mx-auto max-w-4xl text-start md:text-center text-balance">
          <h2 className="text-sm font-semibold tracking-wide px-6 text-gray-400 uppercase">
            Pricing
          </h2>
          <p className="py-2 text-4xl font-bold tracking-tight bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent sm:text-5xl px-6 text-start md:text-center">
            Plans that grow with your gains
          </p>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 px-6 text-start md:text-center">
          Choose a flexible option to get started. One-time or monthly — your
          Macaque ritual, your rules.
        </p>
        {/* Toggle */}
        <div className="mt-12 px-6 flex justify-center">
          <fieldset
            aria-label="Purchase Type"
            className="flex w-full md:justify-center"
          >
            <div className="inline-flex rounded-full bg-white/5 p-1 text-sm font-semibold ring-1 ring-white/10">
              {purchaseOptions.map((option) => (
                <label
                  key={option.value}
                  className={cn(
                    "cursor-pointer px-4 py-1 rounded-full transition-all",
                    purchaseType === option.value
                      ? "bg-orange-500 text-white"
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  <input
                    type="radio"
                    name="purchaseType"
                    value={option.value}
                    checked={purchaseType === option.value}
                    onChange={() => setPurchaseType(option.value)}
                    className="sr-only"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        {/* Plans */}
        <div className="mt-16 grid md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "md:rounded-3xl bg-neutral-800/50 p-8 ring-1 ring-white/10 flex flex-col justify-between",
                tier.featured &&
                  "lg:ring-2 lg:ring-orange-500 border border-orange-500"
              )}
            >
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {tier.name}
                </h3>
                <p className="mt-4 text-sm text-gray-300">{tier.description}</p>
                <p className="mt-6 text-4xl font-bold text-white">
                  {tier.price[purchaseType as "subscription" | "one-time"]}
                  <span className="ml-1 text-base font-medium text-gray-400">
                    {
                      purchaseOptions.find((opt) => opt.value === purchaseType)
                        ?.priceSuffix
                    }
                  </span>
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href={`/build-your-bar?plan=${tier.id}&type=${purchaseType}`}
                  className="block w-full rounded-md bg-orange-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-orange-400 transition"
                >
                  {tier.cta}
                </Link>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-x-2">
                    <Check
                      className="h-5 w-5 flex-none text-orange-400"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
