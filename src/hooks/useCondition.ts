import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Category, toCategory } from "../domain/model/category";
import { Season, toSeason } from "../domain/model/season";

/**
 * 料理1枠の選出条件
 */
export type DishFilterCondition = {
  id: number,
  category: Category,
  season: Season,
}

/**
 * 献立全体の選出条件
 */
export type MenuFilterCondition = {
  dishConditions: Array<DishFilterCondition>,
  isIncludeVentania: boolean,
  isIncludeHotPot: boolean,
  isIncludeAdded: boolean,
}

export const useCondition = () => {
  const [condition, setCondition] = useState<MenuFilterCondition>({
    dishConditions: [
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
   * CategorySelect変更時にIDの一致するDishConditionを差替える
   * @param e - SelectChangeEvent
   * @param id - DishCondition.id
   */
  const onChangeCategory = (e: SelectChangeEvent, id: number): void => {
    setCondition(prevMenuCond => {
      return {
        ...prevMenuCond,
        dishConditions: prevMenuCond.dishConditions.map(prevDishCond =>
          prevDishCond.id === id ?
            {...prevDishCond, category: toCategory(e.target.value)} :
            prevDishCond
        )
      }
    });
  }
  
  /**
   * SeasonSelect変更時にIDの一致するDishConditionを差替える
   * @param e - SelectChangeEvent
   * @param id - DishCondition.id
   */
  const onChangeSeason = (e: SelectChangeEvent, id: number): void => {
    setCondition(prevMenuCond => {
      return {
        ...prevMenuCond,
        dishConditions: prevMenuCond.dishConditions.map(prevDishCond =>
          prevDishCond.id === id ?
            {...prevDishCond, season: toSeason(e.target.value)} :
            prevDishCond
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