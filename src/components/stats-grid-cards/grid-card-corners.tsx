"use client";
import { motion } from "framer-motion";

type GridCardCornersProps = {
  variant?: "hover" | "always";
  progress?: number; // between 0 and 1
};

export function GridCardCorners({
  variant = "hover",
  progress = 0,
}: GridCardCornersProps) {
  const always = variant === "always";
  const baseClass = "absolute z-10 bg-orange-400 transition-all duration-500";

  const spanClasses = (pos: string) =>
    `${baseClass} ${pos} ${
      always ? "scale-100" : "scale-0 group-hover:scale-100"
    }`;

  return (
    <>
      {/* 🔳 Corners (static) */}
      {/* Top-left */}
      <span
        className={spanClasses("left-[1px] top-[1px] h-3 w-[1px] origin-top")}
      />
      <span
        className={spanClasses("left-[1px] top-[1px] h-[1px] w-3 origin-left")}
      />
      {/* Top-right */}
      <span
        className={spanClasses("right-[1px] top-[1px] h-3 w-[1px] origin-top")}
      />
      <span
        className={spanClasses(
          "right-[1px] top-[1px] h-[1px] w-3 origin-right"
        )}
      />
      {/* Bottom-left */}
      <span
        className={spanClasses(
          "bottom-[1px] left-[1px] h-3 w-[1px] origin-bottom"
        )}
      />
      <span
        className={spanClasses(
          "bottom-[1px] left-[1px] h-[1px] w-3 origin-left"
        )}
      />
      {/* Bottom-right */}
      <span
        className={spanClasses(
          "bottom-[1px] right-[1px] h-3 w-[1px] origin-bottom"
        )}
      />
      <span
        className={spanClasses(
          "bottom-[1px] right-[1px] h-[1px] w-3 origin-right"
        )}
      />

      {/* 🔶 Animated borders (connect the corners) */}
      {/* Bottom fill */}
      <motion.span
        className="absolute z-10 bottom-[1px] left-[4px] h-[1px] bg-orange-400 origin-left"
        style={{ width: `calc(${progress * 100}% - 8px)` }}
        transition={{ ease: "linear", duration: 0.1 }}
      />
      {/* Top fill */}
      <motion.span
        className="absolute z-10 top-[1px] left-[4px] h-[1px] bg-orange-400 origin-left"
        style={{ width: `calc(${progress * 100}% - 8px)` }}
        transition={{ ease: "linear", duration: 0.1 }}
      />
      {/* Left fill */}
      <motion.span
        className="absolute z-10 top-[4px] left-[1px] w-[1px] bg-orange-400 origin-top"
        style={{ height: `calc(${progress * 100}% - 8px)` }}
        transition={{ ease: "linear", duration: 0.1 }}
      />
      {/* Right fill */}
      <motion.span
        className="absolute z-10 top-[4px] right-[1px] w-[1px] bg-orange-400 origin-top"
        style={{ height: `calc(${progress * 100}% - 8px)` }}
        transition={{ ease: "linear", duration: 0.1 }}
      />
    </>
  );
}
