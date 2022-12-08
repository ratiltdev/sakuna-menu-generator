import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Category, toCategory, Season, toSeason } from "../domain/cooking";
import { MenuPickCondition } from "../domain/pickCondition";

/**
 * Form受渡し用
 */
export type ConditionFormProps = {
  condition: MenuPickCondition,
  onChangeCategory: (e: SelectChangeEvent, id: number) => void,
  onChangeSeason: (e: SelectChangeEvent, id: number) => void,
  onChangeVentania: (e: ChangeEvent<HTMLInputElement>) => void,
  onChangeHotPot: (e: ChangeEvent<HTMLInputElement>) => void,
  onChangeAdded: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const useCondition = (): ConditionFormProps => {
  const [condition, setCondition] = useState<MenuPickCondition>({
    cookingConditions: [
      {id: 1, category: Category.NONE, season: Season.NONE},
      {id: 2, category: Category.NONE, season: Season.NONE},
      {id: 3, category: Category.NONE, season: Season.NONE},
      {id: 4, category: Category.NONE, season: Season.NONE},
    ],
    isIncludeVentania: false,
    isIncludeHotPot: false,
    isIncludeAdded: true,
  });

  /**
   * CategorySelect変更時にIDの一致するCookingConditionを差替える
   * @param e - SelectChangeEvent
   * @param id - CookingCondition.id
   */
  const onChangeCategory = (e: SelectChangeEvent, id: number): void => {
    setCondition(prevMenuCond => {
      return {
        ...prevMenuCond,
        cookingConditions: prevMenuCond.cookingConditions.map(prevCookingCond =>
          prevCookingCond.id === id ?
            {...prevCookingCond, category: toCategory(e.target.value)} :
            prevCookingCond
        )
      }
    });
  }
  
  /**
   * SeasonSelect変更時にIDの一致するCookingConditionを差替える
   * @param e - SelectChangeEvent
   * @param id - CookingCondition.id
   */
  const onChangeSeason = (e: SelectChangeEvent, id: number): void => {
    setCondition(prevMenuCond => {
      return {
        ...prevMenuCond,
        cookingConditions: prevMenuCond.cookingConditions.map(prevCookingCond =>
          prevCookingCond.id === id ?
            {...prevCookingCond, season: toSeason(e.target.value)} :
            prevCookingCond
        )
      }
    });
  }

  /**
   * VentaniaCheckbox変更時にMenuConditionを変更する
   * @param e - ChangeEvent
   */
  const onChangeVentania = (e: ChangeEvent<HTMLInputElement>): void => {
    setCondition(prevMenuCond => {
      return {...prevMenuCond, isIncludeVentania: e.target.checked}
    })
  }

  /**
   * HotPotCheckbox変更時にMenuConditionを変更する
   * @param e - ChangeEvent
   */
   const onChangeHotPot = (e: ChangeEvent<HTMLInputElement>): void => {
    setCondition(prevMenuCond => {
      return {...prevMenuCond, isIncludeHotPot: e.target.checked}
    })
  }

  /**
   * VersionCheckbox変更時にMenuConditionを変更する
   * @param e - ChangeEvent
   */
   const onChangeAdded = (e: ChangeEvent<HTMLInputElement>): void => {
    setCondition(prevMenuCond => {
      return {...prevMenuCond, isIncludeAdded: e.target.checked}
    })
  }
  
  return {
    condition,
    onChangeCategory,
    onChangeSeason,
    onChangeVentania,
    onChangeHotPot,
    onChangeAdded,
  };
}