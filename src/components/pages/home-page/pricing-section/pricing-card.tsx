import Link from "next/link";
import { Check, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Plan, PurchaseType } from "@/data/plans-data";
import { AnimateNumber } from "motion-plus/react";

type Props = {
  tier: Plan;
  purchaseType: PurchaseType;
  priceSuffix: string;
};

export function PricingCard({ tier, purchaseType, priceSuffix }: Props) {
  return (
    <div
      className={cn(
        "relative md:rounded-3xl bg-neutral-900 p-8 ring-1 ring-white/10 flex flex-col justify-between",
        tier.featured &&
          "lg:ring-2 lg:ring-orange-500 border bg-neutral-800 border-orange-500 shadow-lg shadow-orange-500/40"
      )}
    >
      <div>
        <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
        <p className="mt-4 text-sm text-gray-300">{tier.description}</p>
        <div className="mt-6 text-4xl font-bold text-white flex items-baseline gap-1 flex-col">
          {/* Prefix the currency manually if needed */}
          <div className="flex gap-1 items-center">
            <span>$</span>
            <AnimateNumber
              className="text-4xl font-bold text-white"
              suffix={priceSuffix}
              transition={{
                visualDuration: 0.6,
                type: "spring",
                bounce: 0.25,
                opacity: { duration: 0.2, ease: "linear" },
              }}
            >
              {parseInt(tier.price[purchaseType].replace("$", ""), 10)}
            </AnimateNumber>
          </div>
        </div>
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
          <li
            key={feature.label}
            className={cn(
              "flex items-start gap-x-2",
              !feature.enabled && "line-through text-gray-500"
            )}
          >
            {feature.enabled ? (
              <Check className="h-5 w-5 flex-none text-orange-400" />
            ) : (
              <XIcon className="h-5 w-5 flex-none text-gray-400" />
            )}
            {feature.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
