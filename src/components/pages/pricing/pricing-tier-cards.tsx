"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";

export type Tier = {
  name: string;
  id: string;
  href: string;
  featured: boolean;
  description: string;
  price: {
    monthly: number;
    annually: number;
  };
  highlights: string[];
};

type Props = {
  tiers: Tier[];
  frequency: "monthly" | "annually";
  onSelect?: (tierId: string) => void;
};

export default function PricingTierCards({
  tiers,
  frequency,
  onSelect,
}: Props) {
  return (
    <div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
      <div
        aria-hidden="true"
        className="hidden lg:absolute lg:inset-x-px lg:top-4 lg:bottom-0 lg:block lg:rounded-t-2xl lg:bg-neutral-800/80 lg:ring-1 lg:ring-white/10"
      />
      {tiers.map((tier) => (
        <div
          key={tier.id}
          data-featured={tier.featured ? "true" : undefined}
          className={cn(
            tier.featured
              ? "z-10 bg-neutral-800 outline-1 -outline-offset-1 outline-orange-500"
              : "bg-neutral-800/80 outline-1 -outline-offset-1 outline-white/10 lg:bg-transparent lg:pb-14 lg:outline-0",
            "group/tier relative rounded-2xl"
          )}
        >
          <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
            <h3
              id={`tier-${tier.id}`}
              className="text-sm/6 font-semibold text-white"
            >
              {tier.name}
            </h3>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
              <div className="relative h-12">
                <motion.p
                  key={`${tier.id}-${frequency}`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-0 top-0 text-4xl font-semibold tracking-tight text-white"
                >
                  ${tier.price[frequency]}
                </motion.p>
              </div>

              <button
                value={tier.id}
                name="tier"
                type="button"
                aria-describedby={`tier-${tier.id}`}
                onClick={() => onSelect?.(tier.id)}
                className="w-full rounded-md bg-white/10 px-3 py-2 text-center text-sm/6 font-semibold text-white not-group-data-featured:inset-ring not-group-data-featured:inset-ring-white/5 group-data-featured/tier:bg-orange-500 hover:bg-white/20 group-data-featured/tier:hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/75 group-data-featured/tier:focus-visible:outline-orange-500"
              >
                Buy this plan
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
  );
}
