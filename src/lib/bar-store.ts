import { create } from "zustand";
import {
  BarConfig,
  Chocolate,
  ProteinFlavour,
  Texture,
  Fruit,
  Addons,
} from "./definitions";
import { calculateBar } from "./calculate-bar";

// ========================
// State type
// ========================
type BarState = Omit<BarConfig, "macros" | "price"> & {
  setChocolate: (c: Chocolate) => void;
  setProteinFlavour: (f: ProteinFlavour) => void;
  setTexture: (t: Texture) => void;
  setFruit: (f: Fruit) => void;
  toggleAddon: (key: keyof Addons) => void;
  reset: () => void;
};

// ========================
// Defaults
// ========================
const defaultState: Omit<BarConfig, "macros" | "price"> = {
  chocolate: "milk",
  proteinFlavour: "vanilla",
  texture: "chewy",
  fruit: "banana",
  addons: {
    extraProtein: false,
    extraFiber: false,
    extraNuts: false,
    extraKcals: false,
    agave: false,
    extraCacao: false,
    extraSeeds: false,
    sugarFree: false,
  },
};

// ========================
// Store
// ========================
export const useBarStore = create<BarState>((set, get) => ({
  ...defaultState,

  setChocolate: (c) => set({ chocolate: c }),
  setProteinFlavour: (f) => set({ proteinFlavour: f }),
  setTexture: (t) => set({ texture: t }),
  setFruit: (f) => set({ fruit: f }),
  toggleAddon: (key) =>
    set((state) => ({
      addons: { ...state.addons, [key]: !state.addons[key] },
    })),
  reset: () => set(defaultState),
}));

// ========================
// Derived selector
// ========================
export const useFullBar = () => {
  const state = useBarStore();
  const { macros, price } = calculateBar(state);
  return { ...state, macros, price } as BarConfig;
};
