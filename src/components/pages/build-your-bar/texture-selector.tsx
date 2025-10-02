"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { GridCardCorners } from "@/components/stats-grid-cards/grid-card-corners";
import { circOut } from "framer-motion";
import { Texture } from "@/lib/definitions";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

type TextureCardProps = {
  value: Texture;
  label: string;
  description: string;
  selected: boolean;
  onSelect: (v: Texture) => void;
};

const tr = { duration: 0.4, ease: circOut };

const gradients: Record<Texture, string> = {
  chewy: "bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500",
  crunchy: "bg-gradient-to-br from-lime-400 via-lime-500 to-lime-600",
  soft: "bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600",
};

function TextureCard({
  value,
  label,
  description,
  selected,
  onSelect,
}: TextureCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={clsx(
        "group relative flex w-full cursor-pointer flex-col bg-neutral-950 flex-grow justify-center px-4 md:h-20 overflow-hidden text-left transition",
        selected ? "text-white" : "text-gray-300",
        "hover:opacity-100"
      )}
    >
      {/* Background gradient */}
      <div
        className={clsx(
          "absolute inset-0 w-full flex transition-opacity duration-300",
          gradients[value]
        )}
        style={{ opacity: selected ? 0.9 : 0.4 }}
      />

      {/* Dark overlay at the bottom for text contrast */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xs sm:text-xl uppercase tracking-tight">{label}</h3>
        {description && (
          <p className="max-w-prose text-xs sm:text-sm text-gray-200/80">
            {description}
          </p>
        )}
      </div>

      {/* Corner decoration */}
      <GridCardCorners />
    </button>
  );
}

type TextureSelectorProps = {
  selected: Texture;
  onSelect: (v: Texture) => void;
};

export default function TextureSelector({
  selected,
  onSelect,
}: TextureSelectorProps) {
  const textures = [
    { value: "chewy", label: "Chewy", description: "Dense & satisfying" },
    { value: "crunchy", label: "Crunchy", description: "Nutty crisp bites" },
    { value: "soft", label: "Soft", description: "Light & fluffy" },
  ] as const;

  const selectedTexture = textures.find((t) => t.value === selected)!;

  return (
    <div className="relative flex-grow w-full">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-2xl mt-8 mb-2 font-semibold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent"
      >
        Texture
      </motion.h3>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            <TextureCard
              {...selectedTexture}
              selected={true}
              onSelect={() => {}} // no-op in trigger
            />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-[var(--radix-dropdown-menu-trigger-width)] bg-transparent border-0 shadow-none flex flex-col gap-2"
          align="start"
        >
          {textures.map((t) =>
            t.value === selected ? null : (
              <DropdownMenuItem
                key={t.value}
                className="p-0 bg-transparent focus:bg-transparent w-full"
                onClick={() => onSelect(t.value)}
              >
                <div className="w-full">
                  <TextureCard {...t} selected={false} onSelect={onSelect} />
                </div>
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
