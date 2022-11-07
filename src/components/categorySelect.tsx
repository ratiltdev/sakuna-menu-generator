import React from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Category } from "../domain/model/category";
import { DishFilterCondition } from "../hooks/useCondition";

type Props = {
  condition: DishFilterCondition,
  onChange: (e: SelectChangeEvent, id: number) => void,
}

export const CategorySelect: React.FC<Props> = ({condition, onChange}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={`category-select-label-${condition.id}`}>カテゴリ</InputLabel>
      <Select
        labelId={`category-select-label-${condition.id}`}
        id={`category-select-${condition.id}`}
        label="カテゴリ"
        value={condition.category}
        onChange={(e) => onChange(e, condition.id)}
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