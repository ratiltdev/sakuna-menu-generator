/**
 * 料理
 */
export type Cooking = {
  iconId: string,
  name: string,
  category: Category,
  foodCandidates: ReadonlyArray<string>,
  recipe: string,
  season: Season,
  lockType: LockType,
  addVersion: AddVersion,
}

/**
 * 食材の決定
 * @param cooking - Cooking
 * @param food - 選択食材
 * @returns - Cooking
 */
export const cook = (cooking: Cooking, food: string): Cooking => (
  cooking.foodCandidates.includes(food) ?
    {...cooking,
      name: cooking.name.replace("**", food),
      recipe: cooking.recipe.replace("**", food)
    } :
    cooking
);

/**
 * 料理カテゴリ
 */
export const Category = {
  NONE: "",
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


/**
 * ロックタイプ
 */
export const LockType = {
  NONE: "",
  VENTANIA: "Ventania",
  HOTPOT: "HotPot",
} as const;

export type LockType = typeof LockType[keyof typeof LockType];
export const allLockType: LockType[] = Object.values(LockType);

const isLockType = (value: string): value is LockType => allLockType.includes(value as LockType);
export const toLockType = (value: string): LockType => isLockType(value) ? value as LockType : LockType.NONE;

/**
 * 追加バージョン
 */
export const AddVersion = {
  INITIAL: "",
  NOV_8_2021: "Nov 8 2021"
} as const;

export type AddVersion = typeof AddVersion[keyof typeof AddVersion];
export const allAddVersion: AddVersion[] = Object.values(AddVersion);

const isAddVersion = (value: string): value is AddVersion => allAddVersion.includes(value as AddVersion);
export const toAddVersion = (value: string): AddVersion => isAddVersion(value) ? value as AddVersion : AddVersion.INITIAL;