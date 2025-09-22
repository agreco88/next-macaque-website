// src/data/planData.ts

export const purchaseOptions = [
  { value: "subscription", label: "Subscribe", priceSuffix: "/month" },
  { value: "one-time", label: "Buy Once", priceSuffix: "" },
] as const;

export type PurchaseType = (typeof purchaseOptions)[number]["value"];

export type Feature = {
  label: string;
  enabled: boolean;
};

export type Plan = {
  id: string;
  name: string;
  price: Record<PurchaseType, string>;
  description: string;
  features: Feature[];
  cta: string;
  featured?: boolean;
  preloadIsotonic?: boolean;
};

export const tiers: Plan[] = [
  {
    id: "starter",
    name: "Starter Pack",
    price: {
      subscription: "$1990",
      "one-time": "$2490",
    },
    description: "Try it with 15 bars. No commitments.",
    features: [
      { label: "15 bars", enabled: true },
      { label: "Cancel anytime", enabled: true },
      { label: "Custom flavors", enabled: true },
      { label: "Addons preselected", enabled: false },
      { label: "MACAQUE™ ISOTONIC HYDRATION included", enabled: false },
      { label: "Free shipping", enabled: false },
      { label: "Priority production", enabled: false },
      { label: "1x MACAQUE™ Water bottle included", enabled: false },
    ],

    cta: "Build with this plan",
  },
  {
    id: "monthly",
    name: "Monthly Ritual",
    price: {
      subscription: "$2490",
      "one-time": "$2990",
    },
    description: "Your daily bar ritual. 30 bars/month.",
    features: [
      { label: "30 bars", enabled: true },
      { label: "Cancel anytime", enabled: true },
      { label: "Custom flavors", enabled: true },
      { label: "Addons preselected", enabled: true },
      { label: "MACAQUE™ ISOTONIC HYDRATION included", enabled: true },
      { label: "Free shipping", enabled: true },
      { label: "Priority production", enabled: false },
      { label: "1x MACAQUE™ Water bottle included", enabled: false },
    ],
    cta: "Start Monthly Plan",
    featured: true,
  },
  {
    id: "athlete",
    name: "Athlete Pack",
    price: {
      subscription: "$4590",
      "one-time": "$4990",
    },
    description: "High-performance bars with preloaded addons.",
    features: [
      { label: "45 bars", enabled: true },
      { label: "Cancel anytime", enabled: true },
      { label: "Custom flavors", enabled: true },
      { label: "Addons preselected", enabled: true },
      { label: "MACAQUE™ ISOTONIC HYDRATION included", enabled: true },
      { label: "Free shipping", enabled: true },
      { label: "Priority production", enabled: true },
      { label: "1x MACAQUE™ Water bottle included", enabled: true },
    ],
    cta: "Fuel like an athlete",
  },
];
