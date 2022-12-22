import { z } from "zod";

/**
 * Schema - seed
 * 数値型 / 1以上の整数 / 必須
 */
 const seedSchema = z.preprocess(
  v => Number(v),
  z
    .number()
    .positive()
    .int()
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
)
.default(0);

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
)
.default(0);

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
)
.default(0);

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
)
.default(0);

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
)
.default(1);

/**
 * Schema - GetServerSidePropsContext.query
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

/**
 * クエリパラメータ
 */
export type QueryParams = z.infer<typeof querySchema>;