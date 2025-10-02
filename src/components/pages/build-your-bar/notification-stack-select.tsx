"use client";

import { motion } from "framer-motion";

const NOTIFICATION_HEIGHT = 60;
const NOTIFICATION_WIDTH = 280;
const NOTIFICATION_GAP = 8;

type Option<T extends string> = {
  value: T;
  label: string;
};

interface NotificationsStackProps<T extends string> {
  value: T;
  onChange: (v: T) => void;
  options: Option<T>[];
}

export default function NotificationsStack<T extends string>({
  value,
  onChange,
  options,
}: NotificationsStackProps<T>) {
  return (
    <div className="relative flex flex-col gap-2">
      {options.map((opt, i) => (
        <motion.div
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`flex items-center justify-center rounded-2xl select-none cursor-pointer transition-colors ${
            value === opt.value
              ? "bg-orange-500 text-black font-semibold"
              : "bg-neutral-200 text-neutral-800 hover:bg-neutral-300"
          }`}
          style={{
            height: NOTIFICATION_HEIGHT,
            width: NOTIFICATION_WIDTH,
            zIndex: options.length - i,
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          animate={{
            opacity: value === opt.value ? 1 : 0.8,
            scale: value === opt.value ? 1 : 0.95,
            y: value === opt.value ? 0 : i * (NOTIFICATION_GAP + 4),
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        >
          {opt.label}
        </motion.div>
      ))}
    </div>
  );
}
