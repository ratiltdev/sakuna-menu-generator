import { useState } from "react";
import { CookingDictionary } from "../domain/cookingDictionary";
import { MenuPickCondition } from "../domain/pickCondition";
import { PickMenu, usePickMenu } from "./usePickMenu";
import { Seed } from "./useSeed";
import { Cooking } from "../domain/cooking";

export type Result = {
  iconId: string,
  name: string,
  recipe: string,
};

export type ResultViewProps = {
  result: ReadonlyArray<Result>,
  pickResult: (
    dictionary: CookingDictionary,
    condition: MenuPickCondition,
    seed: Seed
  ) => void
};

export const useResult = (): ResultViewProps => {
  const [result, setResult] = useState<ReadonlyArray<Result>>([
    {iconId: "", name: "", recipe: ""},
    {iconId: "", name: "", recipe: ""},
    {iconId: "", name: "", recipe: ""},
    {iconId: "", name: "", recipe: ""},
    {iconId: "", name: "", recipe: ""}
  ]);
  const pickMenu: PickMenu = usePickMenu();
  
  const daiginjo: Result = {
    iconId: "038",
    name: "大吟醸",
    recipe: "大吟醸1"
  };

  const toResult = (cooking: Cooking): Result => ({
    iconId: cooking.iconId,
    name: cooking.name,
    recipe: cooking.recipe,
  });

  const pickResult = (
    dictionary: CookingDictionary,
    condition: MenuPickCondition,
    seed: Seed
  ): void => (
    setResult([
      ...pickMenu(dictionary, condition, seed).map(cooking => toResult(cooking)),
      daiginjo
    ])
  );
  
  return {
    result: result,
    pickResult: pickResult
  }
};