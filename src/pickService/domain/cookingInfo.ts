import { Cooking } from "./cooking";

/**
 * 料理定義情報
 */
export type CookingInfo = Cooking & {
  foodCandidates: ReadonlyArray<string>,
};

/**
 * 食材を決定して料理名・レシピに反映する
 * @param info 料理情報
 * @param food 食材名(省略可)
 * @returns 料理
 */
export const cook = (info: CookingInfo, food: string = ""): Cooking => ({
  iconId: info.iconId,
  name: info.name.replace("**", food),
  category: info.category,
  recipe: info.recipe.replace("**", food),
  season: info.season,
  lockType: info.lockType,
  addVersion: info.addVersion,
});