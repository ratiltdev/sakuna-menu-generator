import { pipe } from "fp-ts/function";
import { CookingCatalogAdapter } from "../adapters/cookingCatalogAdapter"
import { PickParams } from "../adapters/querySchema";
import { PickCookingCondition, PickMenuCondition } from "../domain/condition";
import { Cooking } from "../domain/cooking"
import { CookingCatalog } from "../domain/cookingCatalog";
import { cook, CookingInfo } from "../domain/cookingInfo";
import { RandomPicker } from "../domain/randomPicker";

/**
 * 献立を選出する
 * @param cookingCatalogAdapter 
 * @param requestAdapter 
 * @returns 
 */
export const pickMenu = (
  cookingCatalogAdapter: CookingCatalogAdapter
) => (
  pickParams: PickParams
): ReadonlyArray<Cooking | undefined> => (
  pickRandomMenu(
    cookingCatalogAdapter.fetchCookingCatalog(),
    pickParams.condition,
    pickParams.randomPicker
  )
);

/**
 * 指定条件で候補を絞り込んだ後、ランダムに献立を選択する
 * @param catalog 
 * @param condition 
 * @param randomPicker 
 * @returns 
 */
const pickRandomMenu = (
  catalog: CookingCatalog,
  condition: PickMenuCondition,
  randomPicker: RandomPicker
): ReadonlyArray<Cooking | undefined> => (
  pipe(
    condition,
    catalog.filterByMenuCondition,
    (filterCatalog) => pickRandomCooking(filterCatalog, randomPicker),
    (pickCooking) => condition.cookingConditions.map(cookingCond => pickCooking(cookingCond))
  )
);

/**
 * 指定条件で候補を絞り込んだ後、ランダムに料理を選択する
 * @param catalog 料理カタログ
 * @param randomPicker RandomPicker
 * @param condition 料理1枠の選出条件
 * @returns ランダムに選択された料理情報
 */
const pickRandomCooking = (
  catalog: CookingCatalog,
  randomPicker: RandomPicker
) => (
  condition: PickCookingCondition
): Cooking | undefined => (
  pipe(
    condition,
    catalog.filterByCookingCondition,
    (filterCatalog) => filterCatalog.list,
    (list) => list.length > 0 ?
      pipe(
        list,
        randomPicker.pick,
        pickRandomFood(randomPicker)
      ) :
      undefined
  )
);

/**
 * ランダムに食材を選択する
 * @param randomPicker RandomPicker
 * @param info 料理情報 
 * @returns ランダムに食材を選択して決定した料理
 */
const pickRandomFood = (randomPicker: RandomPicker) => (info: CookingInfo): Cooking => (
  info.foodCandidates.length > 0 ?
    pipe(
      info.foodCandidates,
      randomPicker.pick,
      (food) => cook(info, food)
    ) :
    cook(info)
);