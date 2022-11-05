import { Category } from "./category"
import { Season } from "./season"

/**
 * 献立1枠の選出条件
 */
export type DishFilterCondition = {
  id: number,
  category: Category,
  season: Season,
}

/**
 * 献立全体の選出条件
 */
export type DishesFilterCondition = {
  dishes: ReadonlyArray<DishFilterCondition>,
}