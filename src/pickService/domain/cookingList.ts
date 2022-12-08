import { flow } from "fp-ts/function";
import { PickCookingCondition, PickMenuCondition } from "./condition";
import { AddVersion, Category, Cooking, LockType, Season } from "./cooking";

/**
 * 条件フィルター付き料理リスト
 */
export interface CookingList {
  list: ReadonlyArray<Cooking>,
  filterByMenuCondition: (condition: PickMenuCondition) => CookingList,
  filterByCookingCondition: (condition: PickCookingCondition) => CookingList,
}

/**
 * 条件フィルター付き料理リストを生成します
 * @param list 料理リスト
 * @returns 条件フィルター付き料理リスト
 */
export const createCookingList = (list: ReadonlyArray<Cooking>): CookingList => ({
  list: list,
  filterByMenuCondition: (condition: PickMenuCondition): CookingList => (
    flow(
      filterByMenuCondition(list),
      createCookingList
    )(condition)
  ),
  filterByCookingCondition: (condition: PickCookingCondition): CookingList => (
    flow(
      filterByCookingCondition(list),
      createCookingList
    )(condition)
  ),
})

/**
 * 献立全体の選出条件による絞込み
 * @param list 絞込み前料理リスト
 * @param condition 料理1枠の選出条件
 * @returns 絞込み後料理リスト
 */
const filterByMenuCondition = (list: ReadonlyArray<Cooking>) => (condition: PickMenuCondition): ReadonlyArray<Cooking> => (
  flow(
    filterByAddVersion(condition),
    filterByVentania(condition),
    filterByHotPot(condition)
  )(list)
);

/**
 * 料理1枠の選出条件による絞込み
 * @param list 絞込み前料理リスト
 * @param condition 料理1枠の選出条件
 * @returns 絞込み後料理リスト
 */
const filterByCookingCondition = (list: ReadonlyArray<Cooking>) => (condition: PickCookingCondition): ReadonlyArray<Cooking> => (
  flow(
    filterByCategory(condition),
    filterBySeason(condition)
  )(list)
);

/**
 * ver Nov.8.2021料理を除外する条件指定がある場合は絞込み
 * @param condition 献立全体の選出条件
 * @param list 絞込み前料理リスト
 * @returns 絞込み後料理リスト
 */
const filterByAddVersion = (condition: PickMenuCondition) => (list: ReadonlyArray<Cooking>): ReadonlyArray<Cooking> => (
  condition.isIncludeAdded ?
    list :
    list.filter(cooking => cooking.addVersion === AddVersion.INITIAL)
);

/**
 * ベンタニア料理を除外する条件指定がある場合は絞込み
 * @param condition 献立全体の選出条件
 * @param list 絞込み前料理リスト
 * @returns 絞込み後料理リスト
 */
const filterByVentania = (condition: PickMenuCondition) => (list: ReadonlyArray<Cooking>): ReadonlyArray<Cooking> => (
  condition.isIncludeVentania ?
    list :
    list.filter(cooking => cooking.lockType != LockType.VENTANIA)
);

/**
 * 鍋物を除外する条件指定がある場合は絞込み
 * @param condition 献立全体の選出条件
 * @param list 絞込み前料理リスト
 * @returns 絞込み後料理リスト
 */
const filterByHotPot = (condition: PickMenuCondition) => (list: ReadonlyArray<Cooking>): ReadonlyArray<Cooking> => (
  condition.isIncludeHotPot ?
    list :
    list.filter(cooking => cooking.lockType != LockType.HOTPOT)
);

/**
 * カテゴリの条件指定がある場合は絞込み
 * @param condition 料理1枠の選出条件
 * @param list 絞込み前料理リスト
 * @returns 絞込み後料理リスト
 */
const filterByCategory = (condition: PickCookingCondition) => (list: ReadonlyArray<Cooking>): ReadonlyArray<Cooking> => (
  condition.category === Category.NONE ?
    list :
    list.filter(cooking => cooking.category === condition.category)
);

/**
 * 旬の条件指定がある場合は絞込み
 * @param condition 料理1枠の選出条件
 * @param list 絞込み前料理リスト
 * @returns 絞込み後料理リスト
 */
const filterBySeason = (condition: PickCookingCondition) => (list: ReadonlyArray<Cooking>): ReadonlyArray<Cooking> => (
  condition.season === Season.NONE ?
    list :
    list.filter(cooking => cooking.season === condition.season)
);