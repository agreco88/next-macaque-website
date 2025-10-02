"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useFullBar } from "@/lib/bar-store";
import type { Chocolate, Texture } from "@/lib/definitions";
import { GridCardCorners } from "@/components/stats-grid-cards/grid-card-corners";

// Mapping: chocolate -> texture -> image
const chocolateTextureMap: Record<Chocolate, Record<Texture, string>> = {
  milk: {
    soft: "/images/bar/milk-soft.png",
    crunchy: "/images/bar/milk-crunchy.png",
    chewy: "/images/bar/milk.png",
  },
  white: {
    soft: "/images/bar/white-soft.png",
    crunchy: "/images/bar/white-crunchy.png",
    chewy: "/images/bar/white.png",
  },
  bitter: {
    soft: "/images/bar/bitter-soft.png",
    crunchy: "/images/bar/bitter-crunchy.png",
    chewy: "/images/bar/bitter.png",
  },
};

export default function ChocolatePreview() {
  const bar = useFullBar();

  const selectedImage =
    chocolateTextureMap[bar.chocolate]?.[bar.texture] ?? null;

  return (
    <div className="w-full bg-amber grow flex items-center justify-center relative self-center  shadow-inner border border-neutral-800 ">
      <AnimatePresence mode="wait">
        {selectedImage ? (
          <motion.div
            key={`${bar.chocolate}-${bar.texture}`}
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(5px)" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <GridCardCorners />

            {/* Actual image */}
            <Image
              src={selectedImage}
              alt={`${bar.chocolate} chocolate protein bar with ${bar.texture} texture`}
              width={1000}
              height={1000}
              className="object-center min-h-[1150px]"
            />

            {/* Vignette overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0)_30%,_rgba(0,0,0,0.9)_95%)]" />
          </motion.div>
        ) : (
          <motion.span
            key="no-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400 font-bold text-2xl"
          >
            Select a chocolate type
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
