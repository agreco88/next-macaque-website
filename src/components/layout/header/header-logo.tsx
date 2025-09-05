"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function HeaderLogo() {
  const locale = useLocale();

  return (
    <div className="flex items-center">
      {/* Logo on medium+ screens */}
      <Link
        href={`/${locale}`}
        className="hidden md:flex flex-col items-center gap-4"
      >
        <Image
          className="opacity-80"
          src="/images/logo/macaque-isotype-small.png"
          alt="Ripped macaque holding doing biceps curls with 40kg"
          width={80}
          height={80}
          priority
        />{" "}
        <p className="sr-only uppercase text-xs tracking-tight font-bold">
          MACAQUE™ PROTEIN BARS
        </p>
      </Link>

      {/* Isotype on small screens only */}
      <Link
        href={`/${locale}`}
        className={cn(
          buttonVariants({ variant: "link" }),
          "md:hidden p-0 font-bold text-xl"
        )}
      >
        <Image
          className="opacity-80"
          src="/images/logo/macaque-isotype-small.png"
          alt="Ripped macaque holding doing biceps curls with 40kg"
          width={40}
          height={40}
          priority
        />{" "}
      </Link>
    </div>
  );
}
