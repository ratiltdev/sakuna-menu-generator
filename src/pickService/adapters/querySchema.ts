import { pipe } from "fp-ts/function";
import { z } from "zod";
import { PickMenuCondition } from "../domain/condition";
import { allCategory, allSeason, Category, Season } from "../domain/cooking";
import { createRandomPicker, RandomPicker } from "../domain/randomPicker";

/**
 * Schema - seed
 * 数値型 / 1以上の整数 / default: 正の整数乱数
 */
const seedSchema = z.preprocess(
  v => Number(v),
  z
    .number()
    .positive()
    .int()
)
.default(
  pipe(
    Math.random() * 10000000000,
    Math.floor
  )
);

/**
 * Schema - category
 * 数値型 / 0～5の整数 / default: 0
 */
const categorySchema = z.preprocess(
  v => Number(v),
  z
    .number()
    .int()
    .min(0)
    .max(5)
    .transform(v => allCategory[v])
)
.default(Category.NONE);

/**
 * Schema - season
 * 数値型 / 0～4の整数 / default: 0
 */
const seasonSchema = z.preprocess(
  v => Number(v),
  z
    .number()
    .int()
    .min(0)
    .max(4)
    .transform(v => allSeason[v])
)
.default(Season.NONE);

/**
 * Schema - ventania
 * 数値型 / 0 or 1 / default
 */
const ventaniaSchema = z.preprocess(
  v => Number(v),
  z
    .number()
    .int()
    .min(0)
    .max(1)
    .transform(v => !!v)
)
.default(false);

/**
 * Schema - hotpot
 * 数値型 / 0 or 1 / default
 */
 const hotpotSchema = z.preprocess(
  v => Number(v),
  z
    .number()
    .int()
    .min(0)
    .max(1)
    .transform(v => !!v)
)
.default(false);

/**
 * Schema - added
 * 数値型 / 0 or 1 / default
 */
 const addedSchema = z.preprocess(
  v => Number(v),
  z
    .number()
    .int()
    .min(0)
    .max(1)
    .transform(v => !!v)
)
.default(true);

/**
 * Schema - NextApiRequest.query
 */
export const querySchema = z.object({
  seed: seedSchema,
  c1: categorySchema,
  c2: categorySchema,
  c3: categorySchema,
  c4: categorySchema,
  s1: seasonSchema,
  s2: seasonSchema,
  s3: seasonSchema,
  s4: seasonSchema,
  v: ventaniaSchema,
  h: hotpotSchema,
  a: addedSchema,
});

type QueryParams = z.infer<typeof querySchema>;

export type PickParams = {
  condition: PickMenuCondition,
  randomPicker: RandomPicker,
};

/**
 * クエリパラメータを献立全体の選出条件およびシード値に変換する
 * @param params 
 * @returns 
 */
export const toPickParams = (params: QueryParams): PickParams => ({
  condition: toCondition(params),
  randomPicker: toRandomPicker(params),
})

/**
 * クエリパラメータを献立全体の選出条件に変換する
 * @param params クエリパラメータ
 * @returns 献立全体の選出条件
 */
const toCondition = (params: QueryParams): PickMenuCondition => ({
  cookingConditions: [
    {category: params.c1, season: params.s1},
    {category: params.c2, season: params.s2},
    {category: params.c3, season: params.s3},
    {category: params.c4, season: params.s4}
  ],
  isIncludeVentania: params.v,
  isIncludeHotPot: params.h,
  isIncludeAdded: params.a,
});

/**
 * クエリパラメータをシード値に変換する
 * @param params クエリパラメータ
 * @returns シード値
 */
const toRandomPicker = (params: QueryParams): RandomPicker => (
  createRandomPicker(params.seed)
);