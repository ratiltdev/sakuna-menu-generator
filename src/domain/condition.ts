/**
 * 料理1枠の選出条件
 */
 export type PickCookingCondition = {
  id: number,
  category: number,
  season: number,
};

/**
 * 献立全体の選出条件
 */
export type PickMenuCondition = {
  cookingConditions: [PickCookingCondition, PickCookingCondition, PickCookingCondition, PickCookingCondition],
  isIncludeVentania: boolean,
  isIncludeHotPot: boolean,
  isIncludeAdded: boolean,
};

/**
 * 初期条件
 */
export const initialCondition: PickMenuCondition = {
  cookingConditions: [
    { id: 1, category: 0, season: 0 },
    { id: 2, category: 0, season: 0 },
    { id: 3, category: 0, season: 0 },
    { id: 4, category: 0, season: 0 }
  ],
  isIncludeVentania: false,
  isIncludeHotPot: false,
  isIncludeAdded: true,
};