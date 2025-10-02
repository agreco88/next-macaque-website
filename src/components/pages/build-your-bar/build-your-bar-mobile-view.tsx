"use client";

import {
  textureOptions,
  flavourOptions,
  fruitOptions,
} from "@/lib/definitions";
import { SelectableCardDropdown } from "./selectable-card-dropdown";
import ChocolateSelector from "./ChoclateSelector";
import { useFullBar, useBarStore } from "@/lib/bar-store";
import AddonsRow from "./addon-rows";

export default function MobileView() {
  // State with macros + price
  const bar = useFullBar();

  // Actions
  const { setChocolate, setTexture, setProteinFlavour, setFruit, toggleAddon } =
    useBarStore();

  return (
    <div className="flex flex-col gap-6 container mx-auto">
      {/* Chocolate selector */}
      <ChocolateSelector selected={bar.chocolate} onSelect={setChocolate} />

      {/* Texture / Flavour / Fruit */}
      <SelectableCardDropdown
        title="Texture"
        options={textureOptions}
        selected={bar.texture}
        onSelect={setTexture}
      />

      <SelectableCardDropdown
        title="Protein Flavour"
        options={flavourOptions}
        selected={bar.proteinFlavour}
        onSelect={setProteinFlavour}
      />

      <SelectableCardDropdown
        title="Fruit"
        options={fruitOptions}
        selected={bar.fruit}
        onSelect={setFruit}
      />

      {/* Add-ons */}
      <AddonsRow addons={bar.addons} toggleAddon={toggleAddon} />

      {/* Preview macros + price (mobile-friendly layout) */}
      <div className="bg-neutral-900 rounded p-4 text-center">
        <p className="text-lg font-semibold">Price: ${bar.price}</p>
        <p className="text-sm text-gray-400">
          {bar.macros.protein}g protein · {bar.macros.carbs}g carbs ·{" "}
          {bar.macros.fat}g fat · {bar.macros.kcal} kcal
        </p>
      </div>
    </div>
  );
}
