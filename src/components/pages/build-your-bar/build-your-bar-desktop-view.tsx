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
import ChocolatePreview from "./chocolate-preview";
import MacrosRow from "./macro-card";
import PriceDisplay from "./price-display";
import StepTitle from "./step-title";
import HoldToConfirmButton from "./hold-to-confirm-button";

export default function DesktopView() {
  // Pull full state (with macros + price)
  const bar = useFullBar();

  // Actions
  const { setChocolate, setTexture, setProteinFlavour, setFruit, toggleAddon } =
    useBarStore();

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-6 container mx-auto mt-12 md:mt-32 lg:mt-12">
      {/* Left side: selectors */}
      <div className="flex flex-col">
        <ChocolateSelector selected={bar.chocolate} onSelect={setChocolate} />
        <div className="w-full">
          <StepTitle>Select texture and flavour</StepTitle>
          <div className="flex">
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
              title="Dried fruit"
              options={fruitOptions}
              selected={bar.fruit}
              onSelect={setFruit}
            />
          </div>
        </div>
        <div className="flex flex-col grow h-full">
          <AddonsRow addons={bar.addons} toggleAddon={toggleAddon} />
          <MacrosRow />
          <PriceDisplay />
          <HoldToConfirmButton
            onConfirm={() => {
              window.open("https://wa.me/your-number-here", "_blank");
            }}
          />{" "}
        </div>
      </div>

      {/* Right side: preview */}
      <div className="min-h-[1000px]">
        <ChocolatePreview />
      </div>
    </div>
  );
}
