"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { SelectableCard } from "./selectable-card";

// ⬇️ Option type is also generic: it depends on T
type Option<T extends string> = {
  value: T;
  label: string;
  description?: string;
  gradient: string;
  textClass?: string;
  descriptionClass?: string;
};

type SelectableCardDropdownProps<T extends string> = {
  title: string; // Heading text ("Texture" or "Protein")
  options: Option<T>[]; // Options array for this selector
  selected: T; // Currently selected value
  onSelect: (v: T) => void; // Callback with that type
};

// ⬇️ SelectableCardDropdown is generic too. When you use it, TS figures out "oh, T = Texture" or "T = ProteinFlavour"
export function SelectableCardDropdown<T extends string>({
  title,
  options,
  selected,
  onSelect,
}: SelectableCardDropdownProps<T>) {
  const selectedOption = options.find((o) => o.value === selected)!;

  return (
    <div className="container relative mb-5 peer">
      <h4 className="flex self-center mb-2 justify-start ml-2 tracking-loose text-neutral-400 tracking-tighter">
        {title}
      </h4>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            {/* ⬇️ Here, T flows into SelectableCard, so it matches SelectableCardDropdown */}
            <SelectableCard<T>
              {...selectedOption}
              selected={true}
              onSelect={() => {}}
            />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-[var(--radix-dropdown-menu-trigger-width)] p-0 rounded-none border border-neutral-800"
          align="start"
        >
          {options.map((o) =>
            o.value === selected ? null : (
              <DropdownMenuItem
                key={o.value}
                className="p-0 bg-transparent focus:bg-transparent w-full"
                onClick={() => onSelect(o.value)}
              >
                <div className="w-full">
                  {/* ⬇️ Same here: SelectableCard knows it's working with T */}
                  <SelectableCard<T>
                    {...o}
                    selected={false}
                    onSelect={onSelect}
                  />
                </div>
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
