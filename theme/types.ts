export interface Brand {
  hue: number;
  saturation: number;
  lightness: number;
}

export interface ThemeProperties {
  name: Theme;
  brand: string;
  text1: string;
  text2: string;
  surface1: string;
  surface2: string;
  surface3: string;
  surface4: string;
  surfaceShadow: string;
  shadowStrength: number;
}

export enum Theme {
  light,
  dark,
  dim,
}

export interface ThemeState {
  name: Theme;
  brand: string;
  primaryText: string;
  secondaryText: string;
  primaryBackground: string;
  secondaryBackground: string;
  tertiaryBackground: string;
  altBackground: string;
  shadow: string;
  shadowStrength: number;
}
