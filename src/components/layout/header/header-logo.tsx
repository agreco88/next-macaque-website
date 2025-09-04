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
      <Link href={`/${locale}`} className="flex items-center gap-4">
        <Image
          className=""
          src="/macaque-isotype.png"
          alt="Macaque Isotype"
          width={40}
          height={24}
          priority
        />
        <p className="uppercase text-xs tracking-tight font-bold">
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
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={50}
          height={11}
          priority
        />
      </Link>
    </div>
  );
}
