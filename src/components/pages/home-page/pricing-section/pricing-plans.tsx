import { Plan, purchaseOptions, PurchaseType } from "@/data/plans-data";
import { PricingCard } from "./pricing-card";

type Props = {
  purchaseType: PurchaseType;
  tiers: Plan[];
  purchaseOptions: typeof purchaseOptions;
};

export function PricingPlans({ tiers, purchaseType, purchaseOptions }: Props) {
  return (
    <div className="mt-16 grid md:gap-8 sm:grid-cols-2 md:px-4 lg:px-0 xl:grid-cols-3">
      {tiers.map((tier) => (
        <PricingCard
          key={tier.id}
          tier={tier}
          purchaseType={purchaseType}
          priceSuffix={
            purchaseOptions.find((opt) => opt.value === purchaseType)
              ?.priceSuffix ?? ""
          }
        />
      ))}
    </div>
  );
}
