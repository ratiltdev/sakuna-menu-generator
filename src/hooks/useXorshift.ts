import { pipe } from "fp-ts/function";

export type Random = (min: number, max: number) => number;

type Props = {
  a: number,
  b: number,
  c: number,
  d: number,
};

export const initialProps = (seed: number): Props => ({
  a: 123456789,
  b: 234567890,
  c: 345678901,
  d: seed,
});

export const useXorshift = (initialProps: Props): Random => {
  let props: Props = initialProps;

  const nextProps = (props: Props): Props => (
    pipe(
      props,
      (props: Props): number => props.a ^ (props.a << 11),
      (t: number): Props => ({
        a: props.b,
        b: props.c,
        c: props.d,
        d: (props.d ^ (props.d >>> 19)) ^ (t ^ (t >>> 8))
      })
    )
  );

  const random = (min: number, max: number): number => {
    props = nextProps(props);
    return min + ((Math.abs(props.d)) % (max + 1 - min));
  };

  return random;
}