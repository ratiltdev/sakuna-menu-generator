import { ChangeEvent, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { PickCookingCondition, PickMenuCondition } from "../domain/condition";

/**
 * Form受渡し用
 */
export type ConditionFormProps = {
  condition: PickMenuCondition,
  onChangeCategory: (e: SelectChangeEvent<number>, id: number) => void,
  onChangeSeason: (e: SelectChangeEvent<number>, id: number) => void,
  onChangeVentania: (e: ChangeEvent<HTMLInputElement>) => void,
  onChangeHotPot: (e: ChangeEvent<HTMLInputElement>) => void,
  onChangeAdded: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const useCondition = (init: PickMenuCondition): ConditionFormProps => {

  const [condition, setCondition] = useState<PickMenuCondition>(init);

  /**
   * CategorySelect変更時にIDの一致するCookingConditionを差替える
   * @param e - SelectChangeEvent
   * @param id - CookingCondition.id
   */
  const onChangeCategory = (e: SelectChangeEvent<number>, id: number): void => (
    setCondition(prev => replaceCookingConditionRow(
      prev,
      (cond: PickCookingCondition) => cond.id === id ? {...cond, category: Number(e.target.value)} : cond
    ))
  );
  
  /**
   * SeasonSelect変更時にIDの一致するCookingConditionを差替える
   * @param e - SelectChangeEvent
   * @param id - CookingCondition.id
   */
  const onChangeSeason = (e: SelectChangeEvent<number>, id: number): void => (
    setCondition(prev => replaceCookingConditionRow(
      prev,
      (cond: PickCookingCondition) => cond.id === id ? {...cond, season: Number(e.target.value)} : cond
    ))
  );

  /**
   * VentaniaCheckbox変更時にMenuConditionを変更する
   * @param e - ChangeEvent
   */
  const onChangeVentania = (e: ChangeEvent<HTMLInputElement>): void => (
    setCondition(prevMenuCond => ({...prevMenuCond, isIncludeVentania: e.target.checked}))
  );

  /**
   * HotPotCheckbox変更時にMenuConditionを変更する
   * @param e - ChangeEvent
   */
  const onChangeHotPot = (e: ChangeEvent<HTMLInputElement>): void => (
    setCondition(prevMenuCond => ({...prevMenuCond, isIncludeHotPot: e.target.checked}))
  );

  /**
   * VersionCheckbox変更時にMenuConditionを変更する
   * @param e - ChangeEvent
   */
  const onChangeAdded = (e: ChangeEvent<HTMLInputElement>): void => (
    setCondition(prevMenuCond => ({...prevMenuCond, isIncludeAdded: e.target.checked}))
  );
  
  return {
    condition,
    onChangeCategory,
    onChangeSeason,
    onChangeVentania,
    onChangeHotPot,
    onChangeAdded,
  };
}

/**
 * CookingCondition差替関数を適用して新たなMenuConditionを取得する
 * @param condition 
 * @param replaceFunc 
 * @returns 
 */
const replaceCookingConditionRow = (
  condition: PickMenuCondition,
  replaceFunc: (c: PickCookingCondition) => PickCookingCondition
): PickMenuCondition => ({
  ...condition,
  // 固定長配列のためmap関数が使えない. 個別に差替関数を適用した結果を返す
  cookingConditions: [
    replaceFunc(condition.cookingConditions[0]),
    replaceFunc(condition.cookingConditions[1]),
    replaceFunc(condition.cookingConditions[2]),
    replaceFunc(condition.cookingConditions[3])
  ]
});