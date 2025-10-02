"use client";

import { ChevronDownIcon } from "lucide-react";
import * as Select from "@radix-ui/react-select";
import { motion } from "framer-motion";

type BuilderOption<T extends string> = {
  value: T;
  label: string;
};

interface RadixBuilderSelectProps<T extends string> {
  value: T;
  onChange: (v: T) => void;
  options: BuilderOption<T>[];
  placeholder?: string;
}

export function RadixBuilderSelect<T extends string>({
  value,
  onChange,
  options,
  placeholder,
}: RadixBuilderSelectProps<T>) {
  return (
    <Select.Root value={value} onValueChange={(val) => onChange(val as T)}>
      <Select.Trigger
        asChild
        className="flex items-center justify-between w-full rounded border border-neutral-700 bg-neutral-900 text-white px-4 py-2"
      >
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Select.Value placeholder={placeholder} />
          <Select.Icon>
            <ChevronDownIcon />
          </Select.Icon>
        </motion.button>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className="z-50 mt-2 overflow-hidden rounded-md border border-neutral-700 bg-neutral-900 text-white shadow-md"
          asChild
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 500, damping: 40 }}
          >
            <Select.Viewport className="p-1">
              {options.map((opt) => (
                <Select.Item
                  key={opt.value}
                  value={opt.value}
                  className="flex cursor-pointer select-none items-center rounded px-3 py-2 text-sm hover:bg-neutral-800"
                >
                  <Select.ItemText>{opt.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </motion.div>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
