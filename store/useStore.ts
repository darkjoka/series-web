import create from "zustand";
import { defaultBrand } from "../theme/base";
import { themes } from "../theme";
import { Brand, ThemeState } from "../theme/types";

const [light, dim] = themes;

const useStore = create<Store>((set) => ({
  brand: defaultBrand,
  theme: light(defaultBrand),
  toggleLight: () => set((state) => ({ theme: light(state.brand) })),
  toggleDark: () => set((state) => ({ theme: dim(state.brand) })),
  changeBrand: (brand) => set((state) => ({ brand })),
}));

interface Store {
  brand: Brand;
  theme: ThemeState;
  toggleLight: () => void;
  toggleDark: () => void;
  changeBrand: (brand: Brand) => void;
}

export default useStore;
