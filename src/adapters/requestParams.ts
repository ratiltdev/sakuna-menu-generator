import { pipe } from "fp-ts/function";
import { allCategory, allSeason, Category, PickMenuCondition, Season } from "../domain/condition";
import { QueryParams } from "./querySchema";

/**
 * PickAPI - RequestParams
 */
export type RequestParams = {
  seed?: number,
  c1: number,
  c2: number,
  c3: number,
  c4: number,
  s1: number,
  s2: number,
  s3: number,
  s4: number,
  v: number,
  h: number,
  a: number,
};

/**
 * QueryParams -> RequestParams
 * @param param0 
 * @returns 
 */
export const queryParamsToRequestParams = (params: QueryParams): RequestParams => ({
  seed: params.seed,
  c1: params.c1,
  c2: params.c2,
  c3: params.c3,
  c4: params.c4,
  s1: params.s1,
  s2: params.s2,
  s3: params.s3,
  s4: params.s4,
  v: params.v,
  h: params.h,
  a: params.a,
});

/**
 * PickMenyCondition -> RequestParams
 * @param param0 
 * @returns 
 */
export const conditionToRequestParams = (
  { cookingConditions, isIncludeVentania, isIncludeHotPot, isIncludeAdded }: PickMenuCondition
): RequestParams => ({
  c1: categoryToParam(cookingConditions[0].category),
  c2: categoryToParam(cookingConditions[1].category),
  c3: categoryToParam(cookingConditions[2].category),
  c4: categoryToParam(cookingConditions[3].category),
  s1: seasonToParam(cookingConditions[0].season),
  s2: seasonToParam(cookingConditions[1].season),
  s3: seasonToParam(cookingConditions[2].season),
  s4: seasonToParam(cookingConditions[3].season),
  v: Number(isIncludeVentania),
  h: Number(isIncludeHotPot),
  a: Number(isIncludeAdded),
});

/**
 * RequestParams -> QueryString
 * @param params 
 * @returns 
 */
export const paramsToQueryString = (params: RequestParams): string => (
  pipe(
    params,
    Object.entries,
    (array) => new URLSearchParams(array).toString()
  )
);

/**
 * Category -> RequestParam
 * @param category 
 * @returns 
 */
const categoryToParam = (category: Category): number => allCategory.findIndex(c => c === category);

/**
 * Season -> RequestParam
 * @param season 
 * @returns
 */
const seasonToParam = (season: Season): number => allSeason.findIndex(s => s === season);

/**
 * RequestParams -> PickMenuCondition
 * @param params 
 * @returns 
 */
export const paramsToCondition = (params: RequestParams): PickMenuCondition => ({
  cookingConditions: [
    { id: 1, category: valueToCategory(params.c1), season: valueToSeason(params.s1) },
    { id: 2, category: valueToCategory(params.c2), season: valueToSeason(params.s2) },
    { id: 3, category: valueToCategory(params.c3), season: valueToSeason(params.s3) },
    { id: 4, category: valueToCategory(params.c4), season: valueToSeason(params.s4) },
  ],
  isIncludeVentania: !!params.v,
  isIncludeHotPot: !!params.h,
  isIncludeAdded: !!params.a,
});

/**
 * value -> Category
 * @param value 0 ~ 5
 * @returns Category
 */
const valueToCategory = (value: number): Category => allCategory[value];

/**
 * value -> Season
 * @param value 0 ~ 4
 * @returns Season
 */
const valueToSeason = (value: number): Season => allSeason[value];