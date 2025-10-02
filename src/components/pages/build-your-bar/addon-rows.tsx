"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { GridCardCorners } from "@/components/stats-grid-cards/grid-card-corners";
import { circOut } from "framer-motion";
import { Addons } from "@/lib/definitions";

type AddonKey = keyof Addons;

type Addon = {
  key: AddonKey;
  label: string;
  description: string;
};

const tr = { duration: 0.3, ease: circOut };

// ✅ Central list of add-ons
const addonsList: Addon[] = [
  { key: "extraProtein", label: "Extra Protein", description: "+12g protein" },
  { key: "extraFiber", label: "Extra Fiber", description: "+5g fiber" },
  { key: "extraNuts", label: "Extra Nuts", description: "Crunchy boost" },
  { key: "extraKcals", label: "Extra Kcals", description: "+100 kcal" },
  { key: "agave", label: "Agave", description: "Sweet swap for honey" },
  {
    key: "extraCacao",
    label: "Extra Cacao",
    description: "Rich chocolate taste",
  },
  { key: "extraSeeds", label: "Chia & Flax", description: "+Omega +Fiber" },
  { key: "sugarFree", label: "Sugar Free", description: "Zero added sugar" },
];

type AddonsRowProps = {
  addons: Addons;
  toggleAddon: (key: AddonKey) => void;
};

export default function AddonsRow({ addons, toggleAddon }: AddonsRowProps) {
  return (
    <div className="relative w-full">
      <h3 className="text-xl tracking-wide   transition-colors duration-300  font-thin py-6 pl-1 text-neutral-100 normal-case peer-hover:decoration-amber-600">
        Select Addons
      </h3>

      {/* Grid with dividers that don't overlap */}
      <div className="grid grid-cols-2 md:grid-cols-4" id="addon-grid">
        {addonsList.map((addon, i) => {
          const selected = addons[addon.key];

          const isFirstRow = i < 4; // md: 4 cols
          const isFirstCol = i % 4 === 0;
          const isLastCol = i % 4 === 3;
          const isLastRow = i >= addonsList.length - 4;

          return (
            <motion.button
              key={addon.key}
              onClick={() => toggleAddon(addon.key)}
              type="button"
              className={clsx(
                "peer group relative flex flex-col justify-end overflow-hidden px-4 py-6 text-left transition cursor-pointer",
                "focus:outline-none",
                selected ? "text-white" : "text-gray-400",
                // Borders
                "border-neutral-800 border-t border-l",
                !isFirstRow && "border-t",
                !isFirstCol && "border-l",
                isLastCol && "border-r",
                isLastRow && "border-b-0"
              )}
              initial={false}
            >
              <motion.h4 className="relative z-10 text-sm font-semibold uppercase tracking-tight">
                {addon.label}
              </motion.h4>
              <motion.p
                className="relative z-10 mt-1 text-xs"
                animate={{
                  y: selected ? 0 : 6,
                  opacity: selected ? 1 : 0,
                  color: selected ? "rgb(212 212 212)" : "#99a1af",
                }}
                transition={tr}
              >
                {addon.description}
              </motion.p>

              <motion.div
                className="absolute inset-0 pointer-events-none bg-neutral-900"
                animate={{ opacity: selected ? 0.7 : 0.1 }}
                whileHover={{ opacity: 0.9 }}
                transition={tr}
              />

              <GridCardCorners />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
