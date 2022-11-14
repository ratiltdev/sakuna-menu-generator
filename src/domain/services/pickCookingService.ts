import { pipe } from "fp-ts/function";
import { Cooking } from "../entities/result";
import { AddVersion, CookingInfo, LockType } from "../entities/cookingInfo";
import { CookingPickCondition, MenuPickCondition } from "../entities/pickCondition";

export interface PickCookingService {
  pick: (list: ReadonlyArray<CookingInfo>, condition: MenuPickCondition) => ReadonlyArray<Cooking>,
};

export const usePickCookingService = (): PickCookingService => ({
  pick: (list: ReadonlyArray<CookingInfo>, condition: MenuPickCondition):ReadonlyArray<Cooking> => (
    pipe(
      list,
      filterByAddVersion(condition),
      filterByVentania(condition),
      filterByHotPot(condition),
      randomPick(condition)
    )
  )
});


const filterByAddVersion = (condition: MenuPickCondition) => (list: ReadonlyArray<CookingInfo>): ReadonlyArray<CookingInfo> => (
  condition.isIncludeAdded ?
    list :
    list.filter(cookingInfo => cookingInfo.addVersion === AddVersion.INITIAL)
);

const filterByVentania = (condition: MenuPickCondition) => (list: ReadonlyArray<CookingInfo>): ReadonlyArray<CookingInfo> => (
  condition.isIncludeVentania ?
    list :
    list.filter(cookingInfo => cookingInfo.lockType != LockType.VENTANIA)
);

const filterByHotPot = (condition: MenuPickCondition) => (list: ReadonlyArray<CookingInfo>): ReadonlyArray<CookingInfo> => (
  condition.isIncludeHotPot ?
    list :
    list.filter(cookingInfo => cookingInfo.lockType != LockType.HOTPOT)
);

const randomPick = (condition: MenuPickCondition) => (list: ReadonlyArray<CookingInfo>): ReadonlyArray<Cooking> => (
  condition.cookingConditions.map(cookingCond => pickCookingInfo(cookingCond, list))
);

const pickCookingInfo = (condition: CookingPickCondition, list: ReadonlyArray<CookingInfo>): Cooking => (
  // Mock
  {iconId: "038", name: "大吟醸", recipe: "大吟醸1"}
);