"use client";

import { motion } from "framer-motion";
import { useFullBar } from "@/lib/bar-store";
import { AnimateNumber } from "motion-plus/react";

export default function PriceDisplay() {
  const bar = useFullBar();

  return (
    <>
      {/* <h3 className="text-xl tracking-wide   transition-colors duration-300  font-thin py-6 pl-1 text-neutral-100 normal-case peer-hover:decoration-amber-600">
        4. Review & Checkout
      </h3>{" "} */}
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        // ✅ span full width of macro grid (e.g., 4 cols)
        className="grid grid-cols-2 border border-t-0  divide-x"
      >
        {/* <div className="flex flex-col gap-2 col-span-1 py-6 px-4 flex-grow">
        <div className="text-neutral-600 uppercase tracking-wide">
          Price per box
        </div>
        <div className="flex gap-1">
          <AnimateNumber
            prefix="$"
            className="text-6xl font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-400 bg-clip-text"
          >  {Number(bar.price.toFixed(2))}
          </AnimateNumber>
        </div>
      </div> */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex flex-col p-4 group relative bg-neutral-950 text-orange-400 min-h-40 overflow-hidden "
        >
          <div className="flex items-center">
            <span className="number-section-pos-2 text-neutral-200">$</span>
            <AnimateNumber
              prefix=""
              className="number-section-pos-2 text-neutral-200"
            >
              {Number((bar.price * 15).toFixed(0))}
            </AnimateNumber>
          </div>
          <span className="text-lg pl-1 uppercase tracking-wide text-neutral-600">
            TOTAL PRICE
          </span>
          {/* <GridCardCorners variant="always" /> */}
        </motion.div>

        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex flex-col p-4 group border-r-0 relative bg-neutral-950 text-orange-400 min-h-40 overflow-hidden "
        >
          <div className="flex items-center">
            <span className="number-section-pos-2 text-neutral-200">$</span>
            <AnimateNumber
              prefix=""
              className="number-section-pos-2 text-neutral-200"
            >
              {Number(bar.price.toFixed(0))}
            </AnimateNumber>
          </div>
          <span className="text-lg pl-1 uppercase tracking-wide text-neutral-600">
            TOTAL PRICE PER BAR
          </span>
          {/* <GridCardCorners variant="always" /> */}
        </motion.div>
        {/* <div className="flex flex-col gap-2 col-span-1 py-6 px-4 flex-grow">
        <div className="text-neutral-600 uppercase tracking-wide">
          Price per bar
        </div>
        <div className="flex gap-1">
          <AnimateNumber
            prefix="$"
            className="text-4xl font-bold text-neutral-50"
          >
            {Number(bar.price.toFixed(2))}
          </AnimateNumber>{" "}
          <span className="text-2xl font-bold text-neutra">UYU</span>
        </div>
      </div>{" "} */}
      </motion.div>
    </>
  );
}
