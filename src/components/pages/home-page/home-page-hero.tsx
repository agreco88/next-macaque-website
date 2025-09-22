"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";
import SplitText from "./split-text";
import { useEffect, useState } from "react";
import VideoBackground from "@/components/common/video-background";
import { waterfallList, waterfallItem } from "@/lib/animation-variants";

export default function HomePageHero() {
  const hero = useTranslations("HomePageHero");
  const locale = useLocale();
  const isMobile = useIsMobile();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-dvh flex bg-black text-white overflow-hidden pt-16">
      <VideoBackground isMobile={isMobile} />

      <div className="relative mx-auto xl:container z-10 w-full px-4 sm:px-8 xl:px-0 flex justify-center sm:justify-start">
        <motion.div
          className="sm:max-w-2xl flex flex-col gap-4 sm:gap-6 items-center sm:items-start w-full md:justify-center justify-around text-left pt-safe sm:pt-24"
          variants={waterfallList}
          initial="hidden"
          animate={isMounted ? "show" : "hidden"}
        >
          <div className="flex flex-col gap-8 justify-between sm:justify-center text-center sm:text-start h-full sm:h-auto">
            <div className="flex flex-col gap-4 max-w-2xl items-center sm:items-start">
              <motion.span
                className="text-sm sm:text-xl text-gray-200 flex gap-2 uppercase tracking-wide"
                variants={waterfallItem}
              >
                {hero("main")}
              </motion.span>

              <motion.h1
                className="text-2xl sm:text-6xl text-center text-balance sm:text-start font-bold uppercase md:text-white md:border-l-[1px] border-orange-400 md:pl-3 leading-tight"
                variants={waterfallItem}
              >
                {hero("subtitle")}
              </motion.h1>
            </div>

            <p className="text-gray-300 self-center sm:self-start text-sm max-w-sm md:max-w-xl sm:text-base">
              <span className="sm:hidden">
                <SplitText text={hero("subtext_mobile")} />
              </span>
              <span className="hidden sm:inline">
                <SplitText text={hero("subtext")} />
              </span>
            </p>
          </div>

          {/* CTA buttons */}
          <motion.ul
            role="list"
            className="my-4 sm:mt-8 flex flex-col sm:flex-row self-center sm:self-start gap-1 sm:gap-4 w-full sm:w-auto"
            variants={waterfallList}
          >
            <motion.li role="listitem" variants={waterfallItem}>
              <Button
                variant="default"
                className="sm:px-6 h-12 sm:h-auto w-full sm:w-auto bg-amber-600 text-orange-100 hover:bg-amber-500 uppercase sm:normal-case transition-all duration-500"
                asChild
              >
                <Link href={`/${locale}/about-us`}>{hero("cta")}</Link>
              </Button>
            </motion.li>

            <motion.li role="listitem" variants={waterfallItem}>
              <Button
                variant="ghost"
                className="sm:px-6 h-12 hover:bg-orange-50 sm:h-auto w-full sm:w-auto hover:text-amber-500 uppercase sm:normal-case transition-all duration-500"
                asChild
              >
                <Link href={`/${locale}#whymacaque`}>{hero("cta2")}</Link>
              </Button>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
