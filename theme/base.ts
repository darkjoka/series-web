import { Brand, ThemeProperties, ThemeState } from "./types";

export const defaultBrand: Brand = {
  hue: 200,
  saturation: 100,
  lightness: 50,
};

export const color = (hue: number, saturation: number, lightness: number): string => {
  return `hsl(${hue}deg ${saturation}% ${lightness}%)`;
};

export const theme = (identifier: (brand: Brand) => ThemeProperties, brand: Brand): ThemeState => {
  const selectTheme = identifier(brand);
  return {
    name: selectTheme.name,
    brand: selectTheme.brand,
    primaryText: selectTheme.text1,
    secondaryText: selectTheme.text2,
    primaryBackground: selectTheme.surface1,
    secondaryBackground: selectTheme.surface4,
    tertiaryBackground: selectTheme.surface3,
    altBackground: selectTheme.surface2,
    shadow: selectTheme.surfaceShadow,
    shadowStrength: selectTheme.shadowStrength,
  };
};
