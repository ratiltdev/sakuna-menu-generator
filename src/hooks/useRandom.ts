import { useState } from "react";

type Props = {
  a: number,
  b: number,
  c: number,
  d: number,
}

export const useRandom = (seed: number) => {
  const [props, setProps] = useState<Props>({
    a: 123456789,
    b: 234567890,
    c: 345678901,
    d: seed,
  });

  const random = (min: number, max: number): number => {
    const next: Props = nextProps(props);
    setProps(next);
    return nextInt(next, min, max);
  }

  return random;
}

const nextProps = (props: Props): Props => {
  const t = props.a ^ (props.a << 11);
  return {
    a: props.b,
    b: props.c,
    c: props.d,
    d: (props.d ^ (props.d >>> 19)) ^ (t ^ (t >>> 8))
  }
};

const nextInt = (props: Props, min: number, max: number): number => {
  return min + ((Math.abs(props.d)) % (max + 1 - min));
}