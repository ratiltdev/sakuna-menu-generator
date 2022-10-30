import { DishName } from "../valueobject/dishname";
import { DishRecipe } from "../valueobject/dishrecipe";
import { FoodName } from "../valueobject/foodname";
import { IconId } from "../valueobject/iconid";

/**
 * 料理情報
 * 旬や食材候補・追加バージョン等の定義情報
 */
export class DishInfo {

  private readonly iconId: IconId;
  private readonly name: DishName;
  private readonly category: DishCategory;
  private readonly foodCandidate: Array<FoodName>;
  private readonly recipe: DishRecipe;
  private readonly season: Season;
  private readonly unlockType: UnlockType;
  private readonly isAdded: boolean;

  public get IconId(): IconId { return this.iconId; }
  public get Name(): DishName { return this.name; }
  public get Category(): DishCategory { return this.category; }
  public get FoodCandidate(): Array<FoodName> { return this.foodCandidate; }
  public get Recipe(): DishRecipe { return this.recipe; }
  public get Season(): Season { return this.season; }
  public get UnlockType(): UnlockType { return this.unlockType; }
  public get IsAdded(): boolean { return this.isAdded; }

  constructor(
    iconId: IconId,
    name: DishName,
    category: DishCategory,
    foodCandidate: Array<FoodName>,
    recipe: DishRecipe,
    season: Season,
    unlockType: UnlockType,
    isAdded: boolean
  ) {
    this.iconId = iconId;
    this.name = name;
    this.category = category;
    this.foodCandidate = foodCandidate;
    this.recipe = recipe;
    this.season = season;
    this.unlockType = unlockType;
    this.isAdded = isAdded;
  }
}

/**
 * 料理カテゴリ
 */
 const DishCategory = {
  MAIN: "主食",
  SOUP: "汁",
  SIDE: "菜",
  DESSERT: "菓子",
  DRINK: "飲物"
} as const;
export type DishCategory = typeof DishCategory[keyof typeof DishCategory];
export const AllDishCategory = Object.values(DishCategory);

/**
 * 旬
 */
const Season = {
  NONE: "",
  SPRING: "春",
  SUMMER: "夏",
  AUTUMN: "秋",
  WINTER: "冬"
} as const;
export type Season = typeof Season[keyof typeof Season];
export const AllSeason = Object.values(Season);

/**
 * アンロックタイプ (ベンタニア料理・鍋物はストーリー進行で開放)
 */
const UnlockType = {
  NONE: "",
  VENTANIA: "Ventania",
  HOTPOT: "HotPot"
} as const;
export type UnlockType = typeof UnlockType[keyof typeof UnlockType];
export const AllUnlockType = Object.values(UnlockType);