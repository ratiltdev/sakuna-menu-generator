import { Category, Season } from "./cooking"

/**
 * 料理1枠の選出条件
 */
 export type PickCookingCondition = {
  category: Category,
  season: Season,
}

/**
 * 献立全体の選出条件
 */
export type PickMenuCondition = {
  cookingConditions: Array<PickCookingCondition>,
  isIncludeVentania: boolean,
  isIncludeHotPot: boolean,
  isIncludeAdded: boolean,
}