export const Season = {
  NONE: "",
  SPRING: "春",
  SUMMER: "夏",
  AUTUMN: "秋",
  WINTER: "冬"
} as const;

export type Season = typeof Season[keyof typeof Season];
export const allSeason: Season[] = Object.values(Season);

const isSeason = (value: string): value is Season => allSeason.includes(value as Season);
export const toSeason = (value: string): Season => isSeason(value) ? value as Season : Season.NONE;