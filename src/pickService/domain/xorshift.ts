import { flow } from "fp-ts/function";

/**
 * 指定範囲内の整数整数乱数を返す関数
 */
export type Random = (min: number, max: number) => number;

/**
 * Xorshift演算用プロパティ
 */
type XorshiftProps = {
  a: number,
  b: number,
  c: number,
  d: number,
};

/**
 * シード値を基に再現性のある乱数を生成する関数を生成する
 * @param seed シード値
 * @returns 指定範囲内の整数乱数を返す関数
 */
export const createRandom = (seed: number): Random => {

  let props: XorshiftProps = initialProps(seed);

  const random = (min: number, max: number): number => (
    flow(
      xorshift,
      (nextProps: XorshiftProps) => props = nextProps,
      () => min + ((Math.abs(props.d)) % (max + 1 - min))
    )(props)
  );

  return random;
};

/**
 * 初期Props
 * @param seed シード値
 * @returns Props
 */
const initialProps = (seed: number): XorshiftProps => ({
  a: 123456789,
  b: 234567890,
  c: 345678901,
  d: seed,
});

/**
 * Xorshift演算
 * @param props CurrentProps
 * @returns NextProps
 */
const xorshift = (props: XorshiftProps): XorshiftProps => (
  flow(
    (props: XorshiftProps): number => props.a ^ (props.a << 11),
    (t: number): XorshiftProps => ({
      a: props.b,
      b: props.c,
      c: props.d,
      d: (props.d ^ (props.d >>> 19)) ^ (t ^ (t >>> 8)),
    })
  )(props)
);