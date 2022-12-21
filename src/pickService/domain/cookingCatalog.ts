import { pipe } from "fp-ts/function";
import { PickCookingCondition, PickMenuCondition } from "./condition";
import { AddVersion, Category, LockType, Season } from "./cooking";
import { CookingInfo } from "./cookingInfo";

/**
 * 料理カタログ
 */
export interface CookingCatalog {
  list: ReadonlyArray<CookingInfo>,
  daiginjo: CookingInfo,
  filterByMenuCondition: (condition: PickMenuCondition) => CookingCatalog,
  filterByCookingCondition: (condition: PickCookingCondition) => CookingCatalog,
};

/**
 * 料理カタログを生成
 * @param daiginjo 料理情報 - 大吟醸
 * @param list 料理情報リスト
 * @returns 料理カタログ
 */
export const createCookingCatalog = (daiginjo: CookingInfo) => (list: ReadonlyArray<CookingInfo>): CookingCatalog => ({
  list: list,
  daiginjo: daiginjo,
  filterByMenuCondition: (condition: PickMenuCondition): CookingCatalog => (
    pipe(
      condition,
      filterByMenuCondition(list),
      createCookingCatalog(daiginjo)
    )
  ),
  filterByCookingCondition: (condition: PickCookingCondition): CookingCatalog => (
    pipe(
      condition,
      filterByCookingCondition(list),
      createCookingCatalog(daiginjo)
    )
  ),
});

/**
 * 献立全体の選出条件による絞込み
 * @param list 絞込み前料理情報リスト
 * @param condition 料理1枠の選出条件
 * @returns 絞込み後料理情報リスト
 */
const filterByMenuCondition = (list: ReadonlyArray<CookingInfo>) => (condition: PickMenuCondition): ReadonlyArray<CookingInfo> => (
  pipe(
    list,
    filterByAddVersion(condition),
    filterByVentania(condition),
    filterByHotPot(condition)
  )
);

/**
 * 料理1枠の選出条件による絞込み
 * @param list 絞込み前料理情報リスト
 * @param condition 料理1枠の選出条件
 * @returns 絞込み後料理情報リスト
 */
const filterByCookingCondition = (list: ReadonlyArray<CookingInfo>) => (condition: PickCookingCondition): ReadonlyArray<CookingInfo> => (
  pipe(
    list,
    filterByCategory(condition),
    filterBySeason(condition)
  )
);

/**
 * ver Nov.8.2021料理を除外する条件指定がある場合は絞込み
 * @param condition 献立全体の選出条件
 * @param list 絞込み前料理情報リスト
 * @returns 絞込み後料理情報リスト
 */
const filterByAddVersion = (condition: PickMenuCondition) => (list: ReadonlyArray<CookingInfo>): ReadonlyArray<CookingInfo> => (
  condition.isIncludeAdded ?
    list :
    list.filter(cooking => cooking.addVersion === AddVersion.INITIAL)
);

/**
 * ベンタニア料理を除外する条件指定がある場合は絞込み
 * @param condition 献立全体の選出条件
 * @param list 絞込み前料理情報リスト
 * @returns 絞込み後料理情報リスト
 */
const filterByVentania = (condition: PickMenuCondition) => (list: ReadonlyArray<CookingInfo>): ReadonlyArray<CookingInfo> => (
  condition.isIncludeVentania ?
    list :
    list.filter(cooking => cooking.lockType != LockType.VENTANIA)
);

/**
 * 鍋物を除外する条件指定がある場合は絞込み
 * @param condition 献立全体の選出条件
 * @param list 絞込み前料理情報リスト
 * @returns 絞込み後料理情報リスト
 */
const filterByHotPot = (condition: PickMenuCondition) => (list: ReadonlyArray<CookingInfo>): ReadonlyArray<CookingInfo> => (
  condition.isIncludeHotPot ?
    list :
    list.filter(cooking => cooking.lockType != LockType.HOTPOT)
);

/**
 * カテゴリの条件指定がある場合は絞込み
 * @param condition 料理1枠の選出条件
 * @param list 絞込み前料理情報リスト
 * @returns 絞込み後料理情報リスト
 */
const filterByCategory = (condition: PickCookingCondition) => (list: ReadonlyArray<CookingInfo>): ReadonlyArray<CookingInfo> => (
  condition.category === Category.NONE ?
    list :
    list.filter(cooking => cooking.category === condition.category)
);

/**
 * 旬の条件指定がある場合は絞込み
 * @param condition 料理1枠の選出条件
 * @param list 絞込み前料理情報リスト
 * @returns 絞込み後料理情報リスト
 */
const filterBySeason = (condition: PickCookingCondition) => (list: ReadonlyArray<CookingInfo>): ReadonlyArray<CookingInfo> => (
  condition.season === Season.NONE ?
    list :
    list.filter(cooking => cooking.season === condition.season)
);