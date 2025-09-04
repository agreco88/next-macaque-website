// src/components/pages/home-page/home-page-hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";
import {
  waterfallList,
  waterfallItem,
  ctaList,
  ctaItem,
} from "@/lib/animation-variants";
import SplitText from "./split-text";
import VideoHero from "@/components/video-hero";

// lib/animation-variants.ts

export default function HomePageHero() {
  const hero = useTranslations("HomePageHero");
  const locale = useLocale();

  return <VideoHero />;
}
