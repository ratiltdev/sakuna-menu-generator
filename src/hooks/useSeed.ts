import { useState } from "react";

export type Seed = {
  createSeed: () => number,
  currentSeed: () => number,
}

export const useSeed = (): Seed => {
  const [seed, setSeed] = useState<number>(0);

  const createSeed = (): number => {
    const newSeed: number = Math.floor(Math.random() * 1000000000);
    setSeed(newSeed);
    return newSeed;
  }

  const currentSeed = (): number => seed;

  return {
    createSeed: createSeed,
    currentSeed: currentSeed,
  };
}