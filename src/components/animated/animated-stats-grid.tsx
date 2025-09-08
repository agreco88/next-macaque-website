import React from "react";
import { ArrowUpRight } from "lucide-react";
import { GridCardPricing } from "../stats-grid-cards/grid-card-pricing";
import { GridCardProtein } from "../stats-grid-cards/grid-card-protein";
import { GridCard } from "../stats-grid-cards/grid-card";

export const AnimatedStatsGrid = () => {
  return (
    <div className="bg-neutral-900 p-4 min-h-screen text-neutral-50 md:p-12">
      <div className="flex flex-col max-w-6xl py-16 mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-zinc-400 mb-3">
          MEET MACAQUE™
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-white mb-4">
          {/* La barra que reemplaza el shaker. */}
          The bar that replaces the shaker
        </h2>
        <p className="text-zinc-300 max-w-prose mb-12">
          {/* Proteína de calidad con ingredientes reales y cero complicaciones.
          Elegí sabor, chocolate y textura, y recibila todos los meses. */}
          Proteína de calidad con ingredientes reales y cero complicaciones.
          Elegí sabor, chocolate y textura, y recibila todos los meses.
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-neutral-700 border border-neutral-700 md:grid-cols-3 md:divide-x md:divide-y-0">
        <FirstCard />
        <GridCardPricing />
        <GridCardProtein />
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-neutral-700 border-x border-b border-neutral-700 md:grid-cols-3 md:divide-x md:divide-y-0">
        <GridCard
          href="#"
          title="Real ingredients"
          subtitle="Real results"
          readTime="12 min"
          src="/images/animated-card-grid/image-card-ingredients.webp"
          description="Almonds, granola, chia and more."
        />{" "}
        <GridCard
          href="#"
          title="15 MACAQUE™ bars"
          subtitle="per box"
          readTime="12 min"
          src="/images/animated-card-grid/image-card-shipping.webp"
          description="Check out weekly, montly and yearly plans."
        />
        <GridCard
          href="#"
          title="Customize"
          subtitle="Price and flavour"
          readTime="12 min"
          src="/images/animated-card-grid/image-card-customizable.webp"
          description="Select flavour, texture and addons."
          video
        />
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-neutral-700 border-x border-b border-neutral-700 md:grid-cols-3 md:divide-x md:divide-y-0">
        <GridCard
          href="#"
          title="PRE WORKOUT"
          subtitle="POST WORKOUT"
          description="You decide how it fits in your lifestyle."
          readTime="11 min"
          src="/images/animated-card-grid/image-card-training.webp"
        />
        <GridCard
          href="#"
          title="Upgrade your diet"
          subtitle="Hit your macros"
          description="Take your nutrition to the next level"
          readTime="11 min"
          src="/images/animated-card-grid/image-card-nutrition.webp"
        />
        <LastCard />
      </div>
    </div>
  );
};

const FirstCard = () => {
  return (
    <div className="group relative flex h-56 flex-col justify-between bg-neutral-950 p-6 md:h-80 md:p-9">
      <h2 className="text-4xl uppercase leading-tight">
        <span className="text-orange-400 transition-colors duration-500">
          WHY PICK
        </span>
        <br />
        MACAQUE™ PROTEIN BARS?
      </h2>
    </div>
  );
};

const LastCard = () => {
  return (
    <a
      href="#"
      target="_blank"
      className="group relative flex h-56 flex-col justify-between bg-neutral-950 p-6 md:h-80 md:p-9"
    >
      <h2 className="text-4xl uppercase leading-tight">
        <span className="text-neutral-400 transition-colors duration-500 group-hover:text-orange-400">
          READY?
        </span>
        <br />
        ORDER YOUR MACAQUE™ HERE
      </h2>
      <ArrowUpRight
        className="
          absolute right-4 top-4 text-2xl text-neutral-400
          transform transition-transform duration-500
          group-hover:rotate-135 group-hover:text-orange-400
        "
      />
    </a>
  );
};
