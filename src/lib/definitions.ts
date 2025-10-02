// ========================
// Base option types
// ========================
export type Chocolate = "white" | "milk" | "bitter";
export type ProteinFlavour = "vanilla" | "strawberry" | "cookies";
export type Texture = "chewy" | "crunchy" | "soft";
export type Fruit = "banana" | "cranberry" | "apple" | "pineapple" | "coconut";

// ========================
// Addons
// ========================
export type Addons = {
  extraProtein: boolean;
  extraFiber: boolean;
  extraNuts: boolean;
  extraKcals: boolean;
  agave: boolean;
  extraCacao: boolean;
  extraSeeds: boolean;
  sugarFree: boolean;
};

// ========================
// Macros
// ========================
export type Macros = {
  kcal: number;
  protein: number;
  fat: number;
  carbs: number;
  fiber: number;
};

// ========================
// Bar Config
// ========================
export type BarConfig = {
  chocolate: Chocolate;
  proteinFlavour: ProteinFlavour;
  texture: Texture;
  addons: Addons;
  fruit: Fruit;
  macros: Macros;
  price: number;
};

// ========================
// Generic Selector Option
// ========================
export type SelectorOption<T extends string> = {
  value: T;
  label: string;
  description?: string;
  gradient: string;
  textClass?: string;
  descriptionClass?: string;
};

// ========================
// Option sets
// ========================
export const textureOptions: SelectorOption<Texture>[] = [
  {
    value: "chewy",
    label: "Chewy",
    description: "Dense & satisfying",
    gradient: "bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500",
    textClass: "text-neutral-100",
    descriptionClass: "text-neutral-400",
  },
  {
    value: "crunchy",
    label: "Crunchy",
    description: "Nutty crisp bites",
    gradient: "bg-gradient-to-br from-lime-400 via-lime-500 to-lime-600",
    textClass: "text-neutral-100",
    descriptionClass: "text-neutral-400",
  },
  {
    value: "soft",
    label: "Soft",
    description: "Light & fluffy",
    gradient: "bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600",
    textClass: "text-neutral-100",
    descriptionClass: "text-neutral-400",
  },
];

export const flavourOptions: SelectorOption<ProteinFlavour>[] = [
  {
    value: "vanilla",
    label: "Vanilla",
    description: "Smooth & classic.",
    gradient: "bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400",
    textClass: "text-yellow-300",
    descriptionClass: "text-yellow-100",
  },
  {
    value: "cookies",
    label: "Cookies",
    description: "Rich & indulgent.",
    gradient: "bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400",
    textClass: "text-amber-400",
    descriptionClass: "text-amber-100",
  },
  {
    value: "strawberry",
    label: "Strawberry",
    description: "Fruity & fresh.",
    gradient: "bg-gradient-to-br from-red-400 via-red-500 to-red-600",
    textClass: "text-red-400",
    descriptionClass: "text-red-200",
  },
];

export const fruitOptions: SelectorOption<Fruit>[] = [
  {
    value: "banana",
    label: "Banana",
    description: "Sweet & tropical",
    gradient: "bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500",
    textClass: "text-yellow-600",
    descriptionClass: "text-yellow-100",
  },
  {
    value: "cranberry",
    label: "Cranberry",
    description: "Tangy & sharp",
    gradient: "bg-gradient-to-br from-red-500 via-red-600 to-red-700",
    textClass: "text-pink-500",
    descriptionClass: "text-pink-300",
  },
  {
    value: "apple",
    label: "Apple",
    description: "Crisp & fresh",
    gradient: "bg-gradient-to-br from-green-300 via-green-400 to-green-500",
    textClass: "text-lime-400",
    descriptionClass: "text-lime-100",
  },
  {
    value: "pineapple",
    label: "Pineapple",
    description: "Bright & juicy",
    gradient: "bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500",
    textClass: "text-amber-200",
    descriptionClass: "text-lime-100",
  },
  {
    value: "coconut",
    label: "Coconut",
    description: "Nutty & tropical",
    gradient:
      "bg-gradient-to-br from-neutral-200 via-neutral-300 to-neutral-400",
    textClass: "text-neutral-200",
    descriptionClass: "text-neutral-200",
  },
];
