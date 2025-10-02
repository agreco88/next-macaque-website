"use client";

import { useRef, useEffect } from "react";
import { useMotionValue, useTransform, animate, motion } from "framer-motion";
import { GridCardCorners } from "@/components/stats-grid-cards/grid-card-corners";

type Props = {
  duration?: number; // hold duration in ms
  onConfirm: () => void;
};

export default function HoldToConfirmButton({
  duration = 1500,
  onConfirm,
}: Props) {
  const progress = useMotionValue(0);

  const holdTimeout = useRef<NodeJS.Timeout | null>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  const startHold = () => {
    const start = Date.now();

    progressInterval.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const newProgress = Math.min(elapsed / duration, 1);
      progress.set(newProgress);
    }, 16);

    holdTimeout.current = setTimeout(() => {
      onConfirm();
      reset();
    }, duration);
  };

  const cancelHold = () => {
    if (holdTimeout.current) clearTimeout(holdTimeout.current);
    if (progressInterval.current) clearInterval(progressInterval.current);
    reset();
  };

  const reset = () => {
    animate(progress, 0, {
      duration: 0.4,
      ease: "easeOut",
    });
  };

  useEffect(() => {
    return () => cancelHold(); // Cleanup on unmount
  }, []);

  // 🟧 Color blend from amber to orange
  const fillColor = useTransform(progress, [0, 1], ["#fbbf24", "#f97316"]); // amber-400 to orange-500

  // 🟧 Width/height transforms for each border
  const fillWidth = useTransform(
    progress,
    [0, 1],
    ["calc(0% - 8px)", "calc(100% - 8px)"]
  );
  const fillHeight = useTransform(
    progress,
    [0, 1],
    ["calc(0% - 8px)", "calc(100% - 8px)"]
  );

  return (
    <div
      onMouseDown={startHold}
      onMouseUp={cancelHold}
      onMouseLeave={cancelHold}
      onTouchStart={startHold}
      onTouchEnd={cancelHold}
      className="flex border  grow h-60 xl:h-40 relative group col-span-3 flex-col gap-2 justify-center items-center cursor-pointer select-none"
    >
      {/* 🟧 Bottom fill */}
      <motion.div
        className="absolute bottom-[1px] left-[4px] h-[1px] origin-left z-10"
        style={{ width: fillWidth, backgroundColor: fillColor }}
      />
      {/* 🟧 Top fill */}
      <motion.div
        className="absolute top-[1px] left-[4px] h-[1px] origin-left z-10"
        style={{ width: fillWidth, backgroundColor: fillColor }}
      />
      {/* 🟧 Left fill */}
      <motion.div
        className="absolute left-[1px] top-[4px] w-[1px] origin-top z-10"
        style={{ height: fillHeight, backgroundColor: fillColor }}
      />
      {/* 🟧 Right fill */}
      <motion.div
        className="absolute right-[1px] top-[4px] w-[1px] origin-top z-10"
        style={{ height: fillHeight, backgroundColor: fillColor }}
      />

      {/* Texts */}
      <div className="text-3xl uppercase">Hold to confirm order</div>
      <div className="text-lg pl-1 uppercase tracking-wide text-neutral-600">
        Via WhatsApp
      </div>

      <GridCardCorners variant="always" progress={progress.get()} />
    </div>
  );
}
