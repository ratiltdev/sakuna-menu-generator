/**
 * 料理1枠の選出条件
 */
 export type PickCookingCondition = {
  id: number,
  category: Category,
  season: Season,
};

/**
 * 献立全体の選出条件
 */
export type PickMenuCondition = {
  cookingConditions: [PickCookingCondition, PickCookingCondition, PickCookingCondition, PickCookingCondition],
  isIncludeVentania: boolean,
  isIncludeHotPot: boolean,
  isIncludeAdded: boolean,
};

/**
 * カテゴリ
 */
export const Category = {
  NONE: "指定なし",
  MAIN: "主食",
  SOUP: "汁",
  SIDE: "菜",
  DESSERT: "菓子",
  DRINK: "飲物"
} as const;
export type Category = typeof Category[keyof typeof Category];
export const allCategory: Category[] = Object.values(Category);

const isCategory = (value: string): value is Category => allCategory.includes(value as Category);
export const toCategory = (value: string): Category => isCategory(value) ? value as Category : Category.NONE;

/**
 * 旬
 */
export const Season = {
  NONE: "指定なし",
  SPRING: "春",
  SUMMER: "夏",
  AUTUMN: "秋",
  WINTER: "冬"
} as const;
export type Season = typeof Season[keyof typeof Season];
export const allSeason: Season[] = Object.values(Season);

const isSeason = (value: string): value is Season => allSeason.includes(value as Season);
export const toSeason = (value: string): Season => isSeason(value) ? value as Season : Season.NONE;

/**
 * 初期条件
 */
export const initialCondition: PickMenuCondition = {
  cookingConditions: [
    { id: 1, category: Category.NONE, season: Season.NONE },
    { id: 2, category: Category.NONE, season: Season.NONE },
    { id: 3, category: Category.NONE, season: Season.NONE },
    { id: 4, category: Category.NONE, season: Season.NONE }
  ],
  isIncludeVentania: false,
  isIncludeHotPot: false,
  isIncludeAdded: true,
};