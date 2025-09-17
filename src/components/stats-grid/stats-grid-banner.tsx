// components/stats-grid/cards/stats-grid-banner-card.tsx
// (server-safe: no hooks, no "use client")
import React from "react";

type Variant = "headline" | "cta";

type Props = {
  variant: Variant;
  /**
   * For "headline": split across two lines, with the top line accented.
   * For "cta": split across two lines; the top line gets hover accent when link is present.
   */
  topLine: string;
  bottomLine: string;
  /** Optional link wraps the whole card (use for CTA) */
  href?: string;
  className?: string;
};

export function StatsGridBanner({
  variant,
  topLine,
  bottomLine,
  href,
  className = "",
}: Props) {
  const content = (
    <div
      className={
        "group relative flex sm:h-56 flex-col justify-center lg:justify-between !normal-case" +
        "bg-neutral-950 px-6 py-16 lg:h-80 md:p-9 " +
        className
      }
    >
      <h2
        className={` text-4xl leading-tight ${
          variant === "headline"
            ? " transition-colors duration-500  "
            : "text-neutral-50 flex flex-col h-full  justify-around "
        }`}
      >
        <span
          className={
            variant === "headline"
              ? "text-orange-400 transition-colors duration-500  "
              : ""
          }
        >
          {topLine}
        </span>
        <br />
        <span className="text-orange-400">{bottomLine}</span>
      </h2>
    </div>
  );

  // If there's an href, make the whole card a link (CTA behavior)
  return href ? (
    <a
      href={href}
      target="_blank"
      className="block focus:outline-none focus:ring-2 focus:ring-orange-400/60 border-orange-500 border text-neutral-950"
    >
      {content}
    </a>
  ) : (
    content
  );
}
