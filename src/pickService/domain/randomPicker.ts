import { pipe } from "fp-ts/function";

/**
 * 配列の要素をランダムに取得する
 */
export interface RandomPicker {
  readonly seed: number,
  pick: <T>(array: ReadonlyArray<T>) => T,
};

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
 * 再現可能な乱数列に基づいて配列内の要素をランダムに取得する関数を生成する
 * @param seed シード値
 * @returns 配列内の要素をランダムに取得する関数とシード値
 */
export const createRandomPicker = (seed: number): RandomPicker => {

  /**
   * State
   */
  let props: XorshiftProps = initialProps(seed);

  /**
   * propsのstateを更新
   * @param nextProps 更新後props
   * @returns 更新後props
   */
  const setProps = (nextProps: XorshiftProps): XorshiftProps => (
    right(props = nextProps)(nextProps)
  );

  /**
   * 配列内の要素をランダムに取得する
   * @param array Array
   * @returns 配列内のランダムな1要素
   */
  const randomPick = <T>(array: ReadonlyArray<T>): T => (
    array.length > 0 ?
      pipe(
        props,
        xorshift,
        setProps,
        pickBasedOnProps(array)
      ) :
      (() => {throw new Error("Error: Array is empty")})()
  );

  return {
    seed: seed,
    pick: randomPick
  }
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
  pipe(
    props,
    (props) => props.a ^ (props.a << 11),
    (t) => ({
      a: props.b,
      b: props.c,
      c: props.d,
      d: (props.d ^ (props.d >>> 19)) ^ (t ^ (t >>> 8)),
    })
  )
);

/**
 * XorshiftPropsに基づいて配列から要素を選択する
 * @param array Array
 * @returns 配列内のランダムな1要素
 */
const pickBasedOnProps = <T>(array: ReadonlyArray<T>) => (props: XorshiftProps): T => (
  array[Math.abs(props.d) % array.length]
);

/**
 * 1つ目の引数を破棄して2つ目の引数を返す関数
 * @param a 
 * @returns 
 */
const right = (a: any) => (b: any) => b;