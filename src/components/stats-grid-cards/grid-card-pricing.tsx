"use client";

import { useState } from "react";
import { AnimateNumber } from "motion-plus/react";
import { Eye } from "lucide-react";
import Image from "next/image";

export const GridCardPricing = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="#"
      target="_blank"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex h-56 flex-col justify-end overflow-hidden p-6 transition-colors hover:bg-neutral-950 md:h-80 md:p-9"
    >
      {/* Top Title */}
      <h2 className="relative z-10 text-xl uppercase tracking-wide text-neutral-400 group-hover:text-orange-400 transition-colors duration-500">
        PRICE
      </h2>

      {/* AnimateNumber */}
      <span className="text-6xl font-medium text-gray-50 leading-none">
        <AnimateNumber
          format={{
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }}
          locales="en-US"
          className="number"
          transition={{
            visualDuration: 0.6,
            type: "spring",
            bounce: 0.25,
            opacity: { duration: 0.2, ease: "linear" },
          }}
        >
          {hovered ? 2999 : 166}
        </AnimateNumber>
      </span>
      <p className="relative z-10 mt-2 max-w-prose text-sm text-neutral-400 transition-all duration-500 group-hover:text-neutral-300  line-clamp-2">
        Per {hovered ? "month" : "day"}
      </p>

      {/* Icon */}
      <Eye className="absolute right-3 top-4 z-10 text-2xl text-neutral-400 transition-colors group-hover:text-neutral-50" />

      {/* Image Background */}
      <div
        className="absolute bottom-0 left-0 right-0 top-0  opacity-0 transition-opacity duration-500 group-hover:opacity-20"
        style={{
          backgroundImage: `url(/images/animated-card-grid/image-card-pricing.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Corners />
    </a>
  );
};

const Corners = () => (
  <>
    <span className="absolute left-[1px] top-[1px] z-10 h-3 w-[1px] origin-top scale-0 bg-orange-400 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute left-[1px] top-[1px] z-10 h-[1px] w-3 origin-left scale-0 bg-orange-400 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-[1px] right-[1px] z-10 h-3 w-[1px] origin-bottom scale-0 bg-orange-400 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-[1px] right-[1px] z-10 h-[1px] w-3 origin-right scale-0 bg-orange-400 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-[1px] left-[1px] z-10 h-3 w-[1px] origin-bottom scale-0 bg-orange-400 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-[1px] left-[1px] z-10 h-[1px] w-3 origin-left scale-0 bg-orange-400 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute right-[1px] top-[1px] z-10 h-3 w-[1px] origin-top scale-0 bg-orange-400 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute right-[1px] top-[1px] z-10 h-[1px] w-3 origin-right scale-0 bg-orange-400 transition-all duration-500 group-hover:scale-100" />
  </>
);
