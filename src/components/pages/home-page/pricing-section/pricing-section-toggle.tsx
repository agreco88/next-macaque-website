import { purchaseOptions, PurchaseType } from "@/data/plans-data";
import { cn } from "@/lib/utils";

type Props = {
  purchaseType: PurchaseType;
  setPurchaseType: React.Dispatch<React.SetStateAction<PurchaseType>>;
};

export function PricingToggle({ purchaseType, setPurchaseType }: Props) {
  return (
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
  );
}
