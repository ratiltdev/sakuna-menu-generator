import { flow, pipe } from "fp-ts/function";
import { TaskEither } from "fp-ts/lib/TaskEither";
import { cook, Cooking } from "../domain/cooking";
import { conditionFilter, CookingDictionary, regulationFilter } from "../domain/cookingDictionary";
import { CookingPickCondition, MenuPickCondition } from "../domain/pickCondition";
import { Seed } from "./useSeed";
import { initialProps, Random, useXorshift } from "./useXorshift";

export type PickMenu = (
  dictionary: CookingDictionary,
  menuCond: MenuPickCondition,
  seed: Seed
) => ReadonlyArray<Cooking>;

export const usePickMenu = (): PickMenu => {

  const pickMenu = (
    dictionary: CookingDictionary,
    menuCond: MenuPickCondition,
    seed: Seed
  ): ReadonlyArray<Cooking> => (
    pipe(
      pickCooking(
        regulationFilter(dictionary, menuCond),
        createRandom(seed)
      ),
      (pickCooking) => menuCond.cookingConditions.map(cookingCond => pickCooking(cookingCond))
    )
  );

  const createRandom = (seed: Seed): Random => (
    pipe(
      seed.createSeed(),
      initialProps,
      useXorshift
    )
  );

  const pickCooking = (
    dictionary: CookingDictionary,
    random: Random
  ) => (
    cookingCond: CookingPickCondition,
  ): Cooking => (
    flow(
      conditionFilter(cookingCond),
      pickRandomCooking(random),
      pickRandomFood(random)
    )(dictionary)
  );

  const pickRandomCooking = (random: Random) => (dictionary: CookingDictionary): Cooking => (
    dictionary[random(0, dictionary.length - 1)]
  );

  const pickRandomFood = (random: Random) => (cooking: Cooking): Cooking => (
    cooking.foodCandidates.length > 0 ?
      cook(cooking, cooking.foodCandidates[random(0, cooking.foodCandidates.length - 1)]) :
      cooking
  );
  
  return pickMenu;
}