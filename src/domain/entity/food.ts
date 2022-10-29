import { FoodName } from "../valueobject/foodname";

/**
 * 食材
 */
export class Food {

  private readonly name: FoodName;
  private readonly category: FoodCategory;

  public get Name(): FoodName { return this.name; }
  public get Category(): FoodCategory { return this.category; }

  constructor(name: FoodName, category: FoodCategory) {
    this.name = name;
    this.category = category;
  }
}

/**
 * 食材カテゴリ
 */
const FoodCategory = {
  GRAIN: "穀",
  MEAT: "肉",
  FISH: "魚",
  INSECT: "虫",
  VEGETABLE: "菜",
  POWDER: "粉",
  FLAKES: "薄片"
} as const;
export type FoodCategory = typeof FoodCategory[keyof typeof FoodCategory];
export const AllFoodCategory = Object.values(FoodCategory);