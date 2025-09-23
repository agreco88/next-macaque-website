export type PricingTierName = "Starter" | "Fit" | "Athlete";

export type PricingTier = {
  name: PricingTierName;
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

export type FeatureComparison = {
  name: string;
  tiers: {
    [key in PricingTierName]?: boolean | string;
  };
};

export type FeatureSection = {
  name: string;
  features: FeatureComparison[];
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    id: "tier-starter",
    href: "#",
    featured: false,
    description: "For people looking for a nutritious snack.",
    price: { monthly: 1990, annually: 2490 },
    highlights: [
      "High quality chocolate",
      "Customizable flavours and price",
      "Free shipping",
      "20g of whey protein",
      "100 kcal",
    ],
  },
  {
    name: "Athlete",
    id: "tier-Athlete",
    href: "#",
    featured: true,
    description: "For people who want to grow muscle.",
    price: { monthly: 2490, annually: 2990 },
    highlights: [
      "High quality chocolate",
      "Customizable flavours and price",
      "Free shipping",
      "32g of whey protein",
      "226 kcal",
      "Includes MACAQUE™ ISOTONIC DRINKS",
      "Priority production",
    ],
  },
  {
    name: "Fit",
    id: "tier-Fit",
    href: "#",
    featured: false,
    description: "For people trying to get into shape.",
    price: { monthly: 4590, annually: 4990 },
    highlights: [
      "High quality chocolate",
      "Customizable flavours and price",
      "Free shipping",
      "27g of whey protein",
      "54 kcal",
    ],
  },
];

export const pricingFeatureSections: FeatureSection[] = [
  {
    name: "Features",
    features: [
      {
        name: "High quality chocolate",
        tiers: { Starter: true, Fit: true, Athlete: true },
      },
      {
        name: "Customizable flavour and addons",
        tiers: { Starter: true, Fit: true, Athlete: true },
      },
      {
        name: "Priority production",
        tiers: { Starter: false, Fit: false, Athlete: true },
      },
    ],
  },
  {
    name: "Shipping",
    features: [
      {
        name: "Free shipping",
        tiers: { Starter: true, Fit: true, Athlete: true },
      },
      {
        name: "Amount of MACAQUE™ bars (per month)",
        tiers: { Starter: "15", Fit: "30", Athlete: "45" },
      },
      {
        name: "Includes 30x MACAQUE™ isotonic drinks",
        tiers: { Starter: false, Fit: false, Athlete: true },
      },
    ],
  },
  {
    name: "Macros (Per bar)",
    features: [
      {
        name: "Kilocalories (kcal)",
        tiers: { Starter: "100", Fit: "154", Athlete: "226" },
      },
      {
        name: "Protein (grams)",
        tiers: { Starter: "20", Fit: "27", Athlete: "32" },
      },
      {
        name: "Carbohydrates (grams)",
        tiers: { Starter: "27", Fit: "48", Athlete: "60" },
      },
    ],
  },
];
