// src/data/planData.ts

export const purchaseOptions = [
  { value: "subscription", label: "Subscribe", priceSuffix: "/month" },
  { value: "one-time", label: "Buy Once", priceSuffix: "" },
] as const;

export type PurchaseType = (typeof purchaseOptions)[number]["value"];

export type Plan = {
  id: string;
  name: string;
  price: Record<PurchaseType, string>;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
  preloadIsotonic?: boolean;
};

export const tiers: Plan[] = [
  {
    id: "starter",
    name: "Starter Pack",
    price: {
      subscription: "$2490",
      "one-time": "$2490",
    },
    description: "Try it with 15 bars. No commitments.",
    features: ["15 bars", "Custom flavors", "No subscription required"],
    cta: "Build with this plan",
  },
  {
    id: "monthly",
    name: "Monthly Ritual",
    price: {
      subscription: "$3990",
      "one-time": "$4290",
    },
    description: "Your daily bar ritual. 30 bars/month.",
    features: ["30 bars", "Custom builder access", "Best for habits"],
    cta: "Start Monthly Plan",
    featured: true,
  },
  {
    id: "athlete",
    name: "Athlete Pack",
    price: {
      subscription: "$4590",
      "one-time": "$4890",
    },
    description: "High-performance bars with preloaded addons.",
    features: ["30 bars", "Addons preselected", "Isotonic hydration ready"],
    cta: "Fuel like an athlete",
    preloadIsotonic: true, // we’ll use this flag in the builder later
  },
];
