"use client";

import clsx from "clsx";
import { GridCardCorners } from "@/components/stats-grid-cards/grid-card-corners";
import { ProteinFlavour } from "@/lib/definitions";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

type ProteinFlavourCardProps = {
  value: ProteinFlavour;
  label: string;
  description: string;
  selected: boolean;
  onSelect: (v: ProteinFlavour) => void;
};

// Gradients
const flavourGradients: Record<ProteinFlavour, string> = {
  vanilla: "bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400",
  cookies: "bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400",
  strawberry: "bg-gradient-to-br from-red-400 via-red-500 to-red-600",
};

// Text colors
const flavourText: Record<ProteinFlavour, string> = {
  vanilla: "text-gray-950",
  cookies: "text-gray-950",
  strawberry: "text-red-100",
};

const flavourDescriptionText: Record<ProteinFlavour, string> = {
  vanilla: "text-yellow-400",
  cookies: "text-orange-400",
  strawberry: "text-red-400",
};

function ProteinFlavourCard({
  value,
  label,
  description,
  selected,
  onSelect,
}: ProteinFlavourCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={clsx(
        "group relative flex w-full cursor-pointer flex-col justify-center px-4 md:h-20 overflow-hidden text-left transition duration-300",
        selected ? "text-white" : "text-neutral-400 hover:text-white",
        "hover:opacity-100"
      )}
    >
      {/* Background gradient */}
      <div
        className={clsx(
          "absolute inset-0 transition-opacity duration-300",
          selected ? "bg-neutral-950 border" : "bg-neutral-900"
        )}
      />

      {/* Content */}
      <div className="relative z-10 group">
        <h3 className="text-xs sm:text-xl uppercase tracking-tight">{label}</h3>
        {description && (
          <p
            className={clsx(
              "max-w-prose text-xs sm:text-sm",
              selected
                ? flavourDescriptionText[value]
                : "text-neutral-600 group-hover:text-neutral-500"
            )}
          >
            {description}
          </p>
        )}
      </div>

      <GridCardCorners />
    </button>
  );
}

type ProteinSelectorProps = {
  selected: ProteinFlavour;
  onSelect: (v: ProteinFlavour) => void;
};

export default function ProteinSelector({
  selected,
  onSelect,
}: ProteinSelectorProps) {
  const proteinFlavours: {
    value: ProteinFlavour;
    label: string;
    description: string;
  }[] = [
    { value: "vanilla", label: "Vanilla", description: "Smooth & classic." },
    { value: "cookies", label: "Cookies", description: "Rich & indulgent." },
    {
      value: "strawberry",
      label: "Strawberry",
      description: "Fruity & fresh.",
    },
  ];

  const selectedFlavour = proteinFlavours.find((c) => c.value === selected)!;

  return (
    <div className="relative flex-grow w-full">
      <h3 className="mb-6 text-2xl font-semibold">Protein</h3>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            <ProteinFlavourCard
              {...selectedFlavour}
              selected={true}
              onSelect={() => {}}
            />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-[var(--radix-dropdown-menu-trigger-width)] bg-transparent border-0 p-0 rounded-none shadow-none flex gap-1 flex-col"
          align="start"
        >
          {proteinFlavours.map((c) =>
            c.value === selected ? null : (
              <DropdownMenuItem
                key={c.value}
                className="p-0 bg-transparent focus:bg-transparent w-full"
                onClick={() => onSelect(c.value)}
              >
                <ProteinFlavourCard
                  {...c}
                  selected={false}
                  onSelect={onSelect}
                />
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
