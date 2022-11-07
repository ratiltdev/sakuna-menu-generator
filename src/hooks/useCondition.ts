import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
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
}

export const useCondition = () => {
  const [condition, setCondition] = useState<MenuFilterCondition>({
    dishConditions: [
      {id: 1, category: Category.NONE, season: Season.NONE},
      {id: 2, category: Category.NONE, season: Season.NONE},
      {id: 3, category: Category.NONE, season: Season.NONE},
      {id: 4, category: Category.NONE, season: Season.NONE},
    ],
  });

  /**
   * CategorySelect変更時にIDの一致するDishConditionを差替える
   * @param e - SelectChangeEvent
   * @param id - DishCondition.id
   */
  const onChangeCategory = (e: SelectChangeEvent, id: number): void => {
    setCondition((prevMenuCond) => {
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
    setCondition((prevMenuCond) => {
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
  
  return {condition, onChangeCategory, onChangeSeason};
}