"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  waterfallList,
  waterfallItem,
  ctaList,
  ctaItem,
} from "@/lib/animation-variants";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/useIsMobile";
import SplitText from "./split-text";

export default function HomePageHero() {
  const hero = useTranslations("HomePageHero");
  const locale = useLocale();

  const [isClient, setIsClient] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsClient(true); // avoid SSR mismatch
  }, []);

  return (
    <section className="relative w-full h-dvh  flex items-center justify-center">
      {/* Video or Image */}
      {isClient && (
        <div className="absolute inset-0 z-0">
          {isMobile ? (
            <Image
              src="/video/posters/hero-poster.webp"
              alt="Hero"
              fill
              className="object-cover"
              priority
            />
          ) : (
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/video/posters/hero-poster.webp"
            >
              <source src="/video/hero/video-hero-high.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          {/* Vignette overlay */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,1.25)_125%)]" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-gray-200 container mx-auto px-4 sm:px-8 flex justify-center sm:justify-start w-full">
        <div className="max-w-2xl flex flex-col gap-2 items-start text-left">
          <span className="text-lg sm:text-xl text-gray-200 mb-2 border-orange-500 overflow-hidden flex gap-2 items-center">
            <SplitText text={hero("main")} />
          </span>
          <span className="font-medium text-3xl sm:text-5xl mb-4 sm:mb-6 uppercase text-white border-l-[1px] border-orange-400 pl-3">
            <SplitText text={hero("subtitle")} />
          </span>

          <span className="text-sm sm:text-lg text-gray-300 leading-relaxed text-pretty max-w-xl">
            <SplitText text={hero("subtext")} />
          </span>

          <motion.ul
            role="list"
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
            variants={ctaList}
            initial="hidden"
            animate="show"
          >
            <motion.li role="listitem" variants={ctaItem}>
              <Button
                variant="outline"
                className="text-gray-200 hover:text-orange-400 transition-all duration-500 w-full sm:w-auto"
                asChild
              >
                <Link href={`/${locale}/about-us`}>{hero("cta")}</Link>
              </Button>
            </motion.li>

            <motion.li role="listitem" variants={ctaItem}>
              <Button
                variant="ghost"
                className="text-white transition-colors duration-500 w-full sm:w-auto"
                asChild
              >
                <Link href={`/${locale}/#`}>{hero("cta2")}</Link>
              </Button>
            </motion.li>
          </motion.ul>
        </div>
      </div>

      {/* Overlay gradient for legibility */}
      <div className="absolute inset-0 bg-black/20 z-[5]" />
    </section>
  );
}
