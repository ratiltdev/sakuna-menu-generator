import { Category, Season } from "./cookingInfo"

/**
 * 料理1枠の選出条件
 */
 export type CookingPickCondition = {
  id: number,
  category: Category,
  season: Season,
}

/**
 * 献立全体の選出条件
 */
export type MenuPickCondition = {
  cookingConditions: Array<CookingPickCondition>,
  isIncludeVentania: boolean,
  isIncludeHotPot: boolean,
  isIncludeAdded: boolean,
}