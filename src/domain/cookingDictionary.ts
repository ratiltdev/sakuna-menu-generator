import { flow } from "fp-ts/function";
import { AddVersion, Category, Cooking, LockType, Season } from "./cooking";
import { CookingPickCondition, MenuPickCondition } from "./pickCondition";

/**
 * 料理リスト
 */
export type CookingDictionary = ReadonlyArray<Cooking>;

/**
 * レギュレーション設定によるフィルター
 * @param dictionary - CookingDictionary
 * @param menuCond - MenuPickCondition
 * @returns - CookingDictionary
 */
export const regulationFilter = (dictionary: CookingDictionary, menuCond: MenuPickCondition): CookingDictionary => (
  flow(
    filterByAddVersion(menuCond),
    filterByVentania(menuCond),
    filterByHotPot(menuCond)
  )(dictionary)
);

/**
 * 料理枠ごとの条件指定によるフィルター
 * @param dictionary - CookingDictionary
 * @param cookingCond - CookingPickCondition
 * @returns - CookingDictionary
 */
export const conditionFilter = (cookingCond: CookingPickCondition) => (dictionary: CookingDictionary): CookingDictionary => (
  flow(
    filterByCategory(cookingCond),
    filterBySeason(cookingCond)
  )(dictionary)
);

/**
 * 追加料理設定によるフィルター
 * @param menuCond - MenuPickCondition
 * @returns CookingDictionary
 */
const filterByAddVersion = (menuCond: MenuPickCondition) => (dictionary: CookingDictionary): CookingDictionary => (
  menuCond.isIncludeAdded ?
    dictionary :
    dictionary.filter(cooking => cooking.addVersion === AddVersion.INITIAL)
);

/**
 * ベンタニア料理設定によるフィルター
 * @param menuCond - MenuPickCondition
 * @returns CookingDictionary
 */
const filterByVentania = (menuCond: MenuPickCondition) => (dictionary: CookingDictionary): CookingDictionary => (
  menuCond.isIncludeVentania ?
    dictionary :
    dictionary.filter(cooking => cooking.lockType != LockType.VENTANIA)
);

/**
 * 鍋物設定によるフィルター
 * @param menuCond - MenuPickCondition
 * @returns CookingDictionary
 */
const filterByHotPot = (menuCond: MenuPickCondition) => (dictionary: CookingDictionary): CookingDictionary => (
  menuCond.isIncludeHotPot ?
    dictionary :
    dictionary.filter(cooking => cooking.lockType != LockType.HOTPOT)
);

/**
 * カテゴリ指定によるフィルター
 * @param cookingCond - CookingPickCondition
 * @returns CookingDictionary
 */
const filterByCategory = (cookingCond: CookingPickCondition) => (dictionary: CookingDictionary): CookingDictionary => (
  cookingCond.category === Category.NONE ?
    dictionary :
    dictionary.filter(cooking => cooking.category === cookingCond.category)
);

/**
 * 旬指定によるフィルター
 * @param cookingCond - CookingPickCondition
 * @returns CookingDictionary
 */
const filterBySeason = (cookingCond: CookingPickCondition) => (dictionary: CookingDictionary): CookingDictionary => (
  cookingCond.season === Season.NONE ?
    dictionary :
    dictionary.filter(cooking => cooking.season === cookingCond.season)
);