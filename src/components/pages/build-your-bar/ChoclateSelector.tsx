"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { GridCardCorners } from "@/components/stats-grid-cards/grid-card-corners";
import { circOut } from "framer-motion";

type Chocolate = "white" | "milk" | "bitter";

type ChocolateCardProps = {
  value: Chocolate;
  label: string;
  description: string;
  selected: boolean;
  onSelect: (v: Chocolate) => void;
};

const tr = { duration: 0.4, ease: circOut };

// Background gradients
const chocolateGradients: Record<Chocolate, string> = {
  white: "bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200",
  milk: "bg-gradient-to-br from-amber-800 via-amber-900 to-amber-950",
  bitter: "bg-gradient-to-br from-orange-950 via-orange-950 to-orange-950",
};

// Text colors when selected
const chocolateText: Record<Chocolate, string> = {
  white: "text-amber-950",
  milk: "text-amber-100",
  bitter: "text-amber-400",
};

const chocolateDescriptionText: Record<Chocolate, string> = {
  white: "text-orange-950",
  milk: "text-orange-200",
  bitter: "text-orange-400",
};

function ChocolateCard({
  value,
  label,
  description,
  selected,
  onSelect,
}: ChocolateCardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(value)}
      className={clsx(
        "group relative cursor-pointer flex xl:h-40 flex-col justify-end overflow-hidden px-4 py-6 w-full text-left transition-colors",
        "focus:outline-none",
        selected ? chocolateText[value] : "text-white"
      )}
      initial={false}
    >
      {/* Title */}
      <motion.h3
        className="relative z-10 text-xs sm:text-xl uppercase tracking-tight"
        animate={{
          y: selected ? -5 : 0,
          opacity: selected ? 1 : 0.85,
        }}
        transition={tr}
      >
        {label}
      </motion.h3>

      {/* Description */}
      {description && (
        <motion.p
          className={clsx(
            "relative z-10 max-w-prose text-xs sm:text-sm transform-gpu will-change-transform",
            selected ? chocolateDescriptionText[value] : "text-gray-400"
          )}
          animate={{
            y: selected ? 0 : 6,
            opacity: selected ? 1 : 0,
          }}
          transition={tr}
        >
          {description}
        </motion.p>
      )}

      {/* Gradient Background */}
      <motion.div
        className={clsx(
          "absolute inset-0 pointer-events-none",
          selected ? chocolateGradients[value] : "bg-neutral-900"
        )}
        animate={{ opacity: selected ? 0.6 : 0.3 }}
        whileHover={{ opacity: 0.9 }}
        transition={tr}
      />

      {/* Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent z-0" />

      <GridCardCorners />
    </motion.button>
  );
}

type ChocolateSelectorProps = {
  selected: Chocolate;
  onSelect: (v: Chocolate) => void;
};

export default function ChocolateSelector({
  selected,
  onSelect,
}: ChocolateSelectorProps) {
  const chocolates: {
    value: Chocolate;
    label: string;
    description: string;
  }[] = [
    {
      value: "white",
      label: "White Chocolate",
      description: "Sweet & creamy.",
    },
    {
      value: "milk",
      label: "Milk Chocolate",
      description: "Balanced & classic.",
    },
    {
      value: "bitter",
      label: "Bitter Chocolate",
      description: "Rich & intense.",
    },
  ];

  return (
    <div className="container mx-auto w-full">
      {/* <StepTitle>1. Select chocolate type</StepTitle> */}
      <div className="flex flex-row w-full divide-x divide-neutral-800 border border-neutral-800">
        {chocolates.map((c) => (
          <ChocolateCard
            key={c.value}
            value={c.value}
            label={c.label}
            description={c.description}
            selected={selected === c.value}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
