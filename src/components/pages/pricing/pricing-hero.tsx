"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckIcon } from "lucide-react";
import { pricingTiers } from "@/data/pricing";
import { cn } from "@/lib/utils";
import { AnimateNumber } from "motion-plus/react";

export const PricingHero = () => {
  const [frequency, setFrequency] = useState<"monthly" | "annually">("monthly");

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="relative z-10">
        <h2 className="mx-auto max-w-4xl text-center text-5xl font-semibold tracking-tight text-balance  text-white sm:text-6xl">
          Plans that adapts to your needs
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-neutral-400 sm:text-xl/8">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
        <div className="mt-16 flex justify-center">
          <fieldset aria-label="Payment frequency">
            <div className="grid  grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs/5 font-semibold text-white">
              <label className="group relative rounded-full px-2.5 py-1 has-checked:bg-orange-500">
                <input
                  defaultValue="monthly"
                  checked={frequency === "monthly"}
                  onChange={() => setFrequency("monthly")}
                  name="frequency"
                  type="radio"
                  className="absolute inset-0 appearance-none rounded-full cursor-pointer"
                />
                <span className="text-white">Monthly</span>
              </label>
              <label className="group relative rounded-full px-2.5 py-1 has-checked:bg-orange-500">
                <input
                  defaultValue="annually"
                  checked={frequency === "annually"}
                  onChange={() => setFrequency("annually")}
                  name="frequency"
                  type="radio"
                  className="absolute inset-0 appearance-none rounded-full cursor-pointer"
                />
                <span className="text-white">One time</span>
              </label>
            </div>
          </fieldset>
        </div>
      </div>
      <Image
        src="/images/homepage-background-orange.png"
        fill
        priority
        alt="dotted background"
        className="opacity-35 object-contain -z-50"
      />
      <div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
        <div
          aria-hidden="true"
          className="hidden lg:absolute lg:inset-x-px lg:top-4 lg:bottom-0 lg:block lg:rounded-t-2xl lg:bg-neutral-800/80 lg:ring-1 lg:ring-white/10"
        />
        {pricingTiers.map((tier) => (
          <div
            key={tier.id}
            data-featured={tier.featured ? "true" : undefined}
            className={cn(
              tier.featured
                ? "z-10 bg-neutral-900 outline-1 -outline-offset-1 outline-orange-500  "
                : "bg-neutral-800/80 outline-1 -outline-offset-1 outline-white/10 lg:bg-transparent lg:pb-14 lg:outline-0",
              "group/tier relative rounded-2xl"
            )}
          >
            <div className="p-6 lg:pt-12 xl:p-10 xl:pt-14">
              <h3
                id={`tier-${tier.id}`}
                className={`"text-sm/6 font-semibold  ${
                  tier.featured
                    ? "bg-gradient-to-r from-orange-600 !font-bold to-amber-500 bg-clip-text text-transparent"
                    : "text-white"
                }`}
              >
                MACAQUE™ {tier.name}
              </h3>
              <div className="flex  flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                <div className="mt-2 flex items-center gap-x-4">
                  <div className="text-4xl font-semibold tracking-tight text-white min-w-28 flex items-center">
                    $<AnimateNumber>{tier.price[frequency]}</AnimateNumber>
                  </div>
                  <div className="text-sm">
                    <p className="text-white">UYU</p>
                    <p className="text-neutral-400">
                      {frequency === "monthly"
                        ? "Billed monthly"
                        : "Billed once"}
                    </p>
                  </div>
                </div>
                <button
                  value={tier.id}
                  name="tier"
                  type="submit"
                  aria-describedby={`tier-${tier.id}`}
                  className="w-full rounded-md cursor-pointer bg-white/10 px-3 py-2 text-center text-sm/6 font-semibold text-white not-group-data-featured:inset-ring not-group-data-featured:inset-ring-white/5 group-data-featured/tier:bg-orange-500 hover:bg-white/20 group-data-featured/tier:hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/75 group-data-featured/tier:focus-visible:outline-orange-500"
                >
                  Edit plan and checkout
                </button>
              </div>
              <div className="mt-8 flow-root sm:mt-10">
                <ul
                  role="list"
                  className="-my-2 divide-y divide-white/5 border-t border-white/5 text-sm/6 text-white group-data-featured/tier:divide-white/10 group-data-featured/tier:border-white/10 lg:border-t-0"
                >
                  {tier.highlights.map((mainFeature) => (
                    <li key={mainFeature} className="flex gap-x-3 py-2">
                      <CheckIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-neutral-500 group-data-featured/tier:text-orange-400"
                      />
                      {mainFeature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
