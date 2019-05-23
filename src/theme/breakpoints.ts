const sizes: { [key: string]: number } = {
  small: 32,
  medium: 48,
  large: 64,
  largest: 80,
  xlarge: 100,
  xxlarge: 120,
}

export const media = {
  // min-width
  small: `@media (min-width: ${sizes.small}em)`,
  medium: `@media (min-width: ${sizes.medium}em)`,
  large: `@media (min-width: ${sizes.large}em)`,
  largest: `@media (min-width: ${sizes.largest}em)`,
  xlarge: `@media (min-width: ${sizes.xlarge}em)`,
  xxlarge: `@media (min-width: ${sizes.xxlarge}em)`,
  // other medias
  hover: `@media (hover: hover)`,
}
