import { BarConfig, Macros, Addons, Fruit } from "./definitions";

// 🔥 Addon effects
export const addonEffects: Record<
  keyof Addons,
  Partial<Macros> & { price?: number }
> = {
  extraProtein: { protein: 12, kcal: 50, price: 20 },
  extraFiber: { carbs: -5, kcal: 20, price: 12 },
  extraNuts: { fat: 8, kcal: 120, price: 8 },
  extraKcals: { kcal: 100, price: 25 },
  agave: { carbs: -3, kcal: -10, price: 5 },
  extraCacao: { fat: 2, kcal: 40, price: 15 },
  extraSeeds: { protein: 3, fat: 4, fiber: 5, kcal: 60, price: 25 },
  sugarFree: { carbs: -10, kcal: -40, price: 0 },
};

// 🍌 Fruit effects
export const fruitEffects: Record<Fruit, Partial<Macros> & { price?: number }> =
  {
    banana: { carbs: 12, kcal: 50, price: 0.5 },
    cranberry: { carbs: 8, kcal: 35, price: 0.4, protein: 0, fat: 0 },
    apple: { carbs: 10, kcal: 45, price: 0.5 },
    pineapple: { carbs: 11, kcal: 42, price: 0.6 },
    coconut: { fat: 5, kcal: 80, price: 0.8 },
  };

// 🔑 Calculator
export function calculateBar(config: Omit<BarConfig, "macros" | "price">): {
  macros: Macros;
  price: number;
} {
  // Base macros
  const macros: Macros = {
    kcal: 200,
    protein: 20,
    fat: 9,
    carbs: 25,
    fiber: 5,
  };
  let price = 139;

  // Chocolate effects
  if (config.chocolate === "bitter") {
    macros.kcal -= 10;
    price += 10;
  }
  if (config.chocolate === "white") {
    macros.fat += 3;
  }

  // Flavour effects
  if (config.proteinFlavour === "strawberry") {
    macros.carbs -= 7;
  }
  if (config.proteinFlavour === "cookies") {
    macros.kcal += 20;
    macros.carbs += 3;
    price += 5;
  }

  // Texture effects
  if (config.texture === "crunchy") {
    macros.protein += 0;
    price += 10;
  }
  if (config.texture === "soft") {
    macros.fat -= 2;
  }

  // Addons
  for (const [key, active] of Object.entries(config.addons)) {
    if (active) {
      const effects = addonEffects[key as keyof Addons];
      if (effects.kcal) macros.kcal += effects.kcal;
      if (effects.protein) macros.protein += effects.protein;
      if (effects.fat) macros.fat += effects.fat;
      if (effects.carbs) macros.carbs += effects.carbs;
      if (effects.price) price += effects.price;
    }
  }

  // Fruit (single)
  if (config.fruit) {
    const effects = fruitEffects[config.fruit];
    if (effects.kcal) macros.kcal += effects.kcal;
    if (effects.protein) macros.protein += effects.protein;
    if (effects.fat) macros.fat += effects.fat;
    if (effects.carbs) macros.carbs += effects.carbs;
    if (effects.price) price += effects.price;
  }

  return { macros, price };
}
