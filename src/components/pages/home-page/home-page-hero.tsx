"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";
import SplitText from "./split-text";
import { useEffect, useState } from "react";
import VideoBackground from "@/components/common/video-background";

export default function HomePageHero() {
  const hero = useTranslations("HomePageHero");
  const locale = useLocale();
  const isMobile = useIsMobile();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // delay animations until fully mounted
  }, []);

  return (
    <section className="relative min-h-dvh flex bg-black text-white overflow-hidden">
      <VideoBackground isMobile={isMobile} />

      <div className="relative container mx-auto z-10 w-full  px-4 sm:px-8 xl:px-0 flex justify-center sm:justify-start">
        <div className="sm:max-w-2xl flex flex-col gap-4 sm:gap-6 items-end sm:items-start  w-full md:justify-center justify-around text-left pt-18 sm:pt-24">
          <div className="flex flex-col gap-8 justify-between sm:justify-center text-center sm:text-start h-full sm:h-auto">
            <div className="flex flex-col gap-2 max-w-xl  items-center sm:items-start">
              <span className="text-sm sm:text-xl text-gray-200  flex gap-2  uppercase tracking-wide">
                {isMounted && <SplitText text={hero("main")} />}
              </span>

              <h1 className="text-2xl text-balance sm:text-4xl text-center sm:text-start font-bold uppercase  md:text-white md:border-l-[1px] border-orange-400 md:pl-3 leading-tight">
                {isMounted && <SplitText text={hero("subtitle")} />}
              </h1>
            </div>

            <p className="text-gray-300 text-sm max-w-lg sm:text-base text-balance">
              <span className="sm:hidden">
                <SplitText text={hero("subtext_mobile")} />
              </span>
              <span className="hidden sm:inline">
                <SplitText text={hero("subtext")} />
              </span>
            </p>
          </div>
          <div className="flex-1 sm:flex-[0]"></div>
          <motion.ul
            role="list"
            className="mb-4 sm:mt-8 flex flex-col sm:flex-row self-end sm:self-start gap-1 sm:gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isMounted
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 1.2, duration: 0.6 },
                  }
                : {}
            }
          >
            <motion.li role="listitem">
              <Button
                variant="default"
                className="
                  sm:px-6
                  h-12 sm:h-auto
                  w-full sm:w-auto
                  bg-amber-600
                  text-orange-100
                  hover:bg-amber-500
                  uppercase sm:normal-case
                  transition-all duration-500 
                "
                asChild
              >
                <Link href={`/${locale}/about-us`}>{hero("cta")}</Link>
              </Button>
            </motion.li>

            <motion.li role="listitem">
              <Button
                variant="ghost"
                className="
                  sm:px-6
                  opacity-50 sm:opacity-100 
                  h-12 sm:h-auto
                  w-full sm:w-auto 
                  hover:text-amber-500
                  uppercase sm:normal-case
                  transition-all duration-500
                "
                asChild
              >
                <Link href={`/${locale}#whymacaque`}>{hero("cta2")}</Link>
              </Button>
            </motion.li>
          </motion.ul>
        </div>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-black/20 z-[5]" />
    </section>
  );
}
