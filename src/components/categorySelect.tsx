import React from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Category, toCategory } from "../domain/model/category";
import { DishFilterCondition } from "../domain/model/dishesFilterCondition";

type Props = {
  id: number,
  dishCond: DishFilterCondition,
  onChange: (condition: DishFilterCondition) => void,
}

export const CategorySelect: React.FC<Props> = ({id, dishCond, onChange}) => {
  const handleChange = (e: SelectChangeEvent) =>
    onChange({...dishCond, category: toCategory(e.target.value)});

  return (
    <FormControl fullWidth>
      <InputLabel id={`category-select-label-${id}`}>カテゴリ</InputLabel>
      <Select
        labelId={`category-select-label-${id}`}
        id={`category-select-${id}`}
        label="カテゴリ"
        value={dishCond.category}
        onChange={handleChange}
      >
        <MenuItem value="">指定なし</MenuItem>
        <MenuItem value={Category.MAIN}>{Category.MAIN}</MenuItem>
        <MenuItem value={Category.SOUP}>{Category.SOUP}</MenuItem>
        <MenuItem value={Category.SIDE}>{Category.SIDE}</MenuItem>
        <MenuItem value={Category.DESSERT}>{Category.DESSERT}</MenuItem>
        <MenuItem value={Category.DRINK}>{Category.DRINK}</MenuItem>
      </Select>
    </FormControl>
  )
}