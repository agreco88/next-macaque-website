"use client";

import { CheckIcon, XIcon } from "lucide-react";
import { pricingFeatureSections, pricingTiers } from "@/data/pricing";
import { cn } from "@/lib/utils";

export default function PricingFeatures() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      {/* Mobile layout */}
      <section
        aria-labelledby="mobile-comparison-heading"
        className="lg:hidden"
      >
        <h2 id="mobile-comparison-heading" className="sr-only">
          Feature comparison
        </h2>
        <div className="mx-auto max-w-2xl space-y-16">
          {pricingTiers.map((tier) => (
            <div key={tier.id} className="border-t border-white/10">
              <div
                className={cn(
                  tier.featured ? "border-orange-500" : "border-transparent",
                  "-mt-px w-72 border-t-2 pt-10 md:w-80"
                )}
              >
                <h3
                  className={cn(
                    tier.featured ? "text-orange-400" : "text-white",
                    "text-sm/6 font-semibold"
                  )}
                >
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm/6 text-neutral-400">
                  {tier.description}
                </p>
              </div>

              <div className="mt-10 space-y-10">
                {pricingFeatureSections.map((section) => (
                  <div key={section.name}>
                    <h4 className="text-sm/6 font-semibold text-white">
                      {section.name}
                    </h4>
                    <div className="relative mt-6">
                      <div
                        aria-hidden="true"
                        className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-neutral-800/50 sm:block"
                      />

                      <div
                        className={cn(
                          tier.featured
                            ? "ring-2 ring-orange-500"
                            : "ring-1 ring-white/10",
                          "relative rounded-lg bg-neutral-800/50 sm:rounded-none sm:bg-transparent sm:ring-0"
                        )}
                      >
                        <dl className="divide-y divide-white/10 text-sm/6">
                          {section.features.map((feature) => (
                            <div
                              key={feature.name}
                              className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
                            >
                              <dt className="pr-4 text-neutral-400">
                                {feature.name}
                              </dt>
                              <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                                {typeof feature.tiers[tier.name] ===
                                "string" ? (
                                  <span
                                    className={
                                      tier.featured
                                        ? "font-semibold text-orange-400"
                                        : "text-white"
                                    }
                                  >
                                    {feature.tiers[tier.name]}
                                  </span>
                                ) : feature.tiers[tier.name] === true ? (
                                  <CheckIcon
                                    aria-hidden="true"
                                    className="mx-auto size-5 text-orange-400"
                                  />
                                ) : (
                                  <XIcon
                                    aria-hidden="true"
                                    className="mx-auto size-5 text-neutral-600"
                                  />
                                )}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>

                      <div
                        aria-hidden="true"
                        className={cn(
                          tier.featured
                            ? "ring-2 ring-orange-500"
                            : "ring-1 ring-white/10",
                          "pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Desktop layout */}
      <section aria-labelledby="comparison-heading" className="hidden lg:block">
        <h2 id="comparison-heading" className="sr-only">
          Feature comparison
        </h2>

        <div className="grid grid-cols-4 gap-x-8 border-t border-white/10 before:block">
          {pricingTiers.map((tier) => (
            <div key={tier.id} aria-hidden="true" className="-mt-px">
              <div
                className={cn(
                  tier.featured ? "border-orange-500" : "border-transparent",
                  "border-t-2 pt-10"
                )}
              >
                <p
                  className={cn(
                    tier.featured ? "text-orange-400" : "text-white",
                    "text-sm/6 font-semibold"
                  )}
                >
                  MACAQUE™ {tier.name}
                </p>
                <p className="mt-1 text-sm/6 text-neutral-400">
                  {tier.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="-mt-6 space-y-16">
          {pricingFeatureSections.map((section) => (
            <div key={section.name}>
              <h3 className="text-sm/6 font-semibold text-white">
                {section.name}
              </h3>
              <div className="relative -mx-8 mt-10">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                >
                  <div className="size-full rounded-lg bg-neutral-800/50" />
                  <div className="size-full rounded-lg bg-neutral-800/50" />
                  <div className="size-full rounded-lg bg-neutral-800/50" />
                </div>

                <table className="relative w-full border-separate border-spacing-x-8">
                  <thead>
                    <tr className="text-left">
                      <th scope="col">
                        <span className="sr-only">Feature</span>
                      </th>
                      {pricingTiers.map((tier) => (
                        <th key={tier.id} scope="col">
                          <span className="sr-only">{tier.name} tier</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.features.map((feature, featureIdx) => (
                      <tr key={feature.name}>
                        <th
                          scope="row"
                          className="w-1/4 py-3 pr-4 text-left text-sm/6 font-normal text-white"
                        >
                          {feature.name}
                          {featureIdx !== section.features.length - 1 && (
                            <div className="absolute inset-x-8 mt-3 h-px bg-white/10" />
                          )}
                        </th>
                        {pricingTiers.map((tier) => (
                          <td
                            key={tier.id}
                            className="relative w-1/4 px-4 py-0 text-center"
                          >
                            <span className="relative size-full py-3">
                              {typeof feature.tiers[tier.name] === "string" ? (
                                <span
                                  className={cn(
                                    tier.featured
                                      ? "font-semibold text-orange-400"
                                      : "text-white",
                                    "text-sm/6"
                                  )}
                                >
                                  {feature.tiers[tier.name]}
                                </span>
                              ) : feature.tiers[tier.name] === true ? (
                                <CheckIcon
                                  aria-hidden="true"
                                  className="mx-auto size-5 text-orange-400"
                                />
                              ) : (
                                <XIcon
                                  aria-hidden="true"
                                  className="mx-auto size-5 text-neutral-600"
                                />
                              )}
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                >
                  {pricingTiers.map((tier) => (
                    <div
                      key={tier.id}
                      className={cn(
                        tier.featured
                          ? "ring-2 ring-orange-500"
                          : "ring-1 ring-white/10",
                        "rounded-lg"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
