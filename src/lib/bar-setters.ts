import {
  Chocolate,
  ProteinFlavour,
  Texture,
  Addons,
  Fruit,
} from "./definitions";

export type BarSetters = {
  setChocolate: (c: Chocolate) => void;
  setProteinFlavour: (f: ProteinFlavour) => void;
  setTexture: (t: Texture) => void;
  toggleAddon: (key: keyof Addons) => void;
  setFruit: (f: Fruit) => void;
};
