"use client";

import { motion } from "framer-motion";
import { useFullBar } from "@/lib/bar-store";
import { AnimateNumber } from "motion-plus/react";

const MacroCard = ({
  label,
  value,
  unit = "",
}: {
  label: string;
  value: number;
  unit?: string;
}) => {
  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="flex flex-col p-4 group relative bg-neutral-950 text-orange-400 h-40 overflow-hidden "
    >
      <AnimateNumber
        suffix={unit}
        className="number-section-pos-2 text-neutral-200"
      >
        {value}
      </AnimateNumber>
      <span className="text-lg pl-1 uppercase tracking-wide text-neutral-600">
        {label}
      </span>
    </motion.div>
  );
};

export default function MacrosRow() {
  const bar = useFullBar();

  return (
    <div className="grid grid-cols-3 divide-x border">
      <MacroCard label="Protein" unit="g" value={bar.macros.protein} />
      <MacroCard label="kcal" value={bar.macros.kcal} />
      <MacroCard label="Carbs" unit="g" value={bar.macros.fat} />
    </div>
  );
}
