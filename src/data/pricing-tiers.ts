// components/pricing/data/pricing-tiers.ts

export const frequencies = [
  { value: "monthly", label: "Monthly" },
  { value: "annually", label: "Annually" },
];

export const tiers = [
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
    id: "tier-athlete",
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
    id: "tier-fit",
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

export const sections = [
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
