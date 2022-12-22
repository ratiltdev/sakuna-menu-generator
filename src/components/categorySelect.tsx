import React from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Category } from "../domain/condition";

type Props = {
  id: number,
  value: Category,
  onChange: (e: SelectChangeEvent<string>, id: number) => void,
}

/**
 * Selectbox - カテゴリ
 * @param param0
 * @returns 
 */
export const CategorySelect: React.FC<Props> = ({id, value, onChange}) => (
  <FormControl fullWidth>
    <InputLabel id={`category-select-label-${id}`}>カテゴリ</InputLabel>
    <Select
      labelId={`category-select-label-${id}`}
      id={`category-select-${id}`}
      label="カテゴリ"
      value={value}
      onChange={(e) => onChange(e, id)}
    >
      <MenuItem value={Category.NONE}>{Category.NONE}</MenuItem>
      <MenuItem value={Category.MAIN}>{Category.MAIN}</MenuItem>
      <MenuItem value={Category.SOUP}>{Category.SOUP}</MenuItem>
      <MenuItem value={Category.SIDE}>{Category.SIDE}</MenuItem>
      <MenuItem value={Category.DESSERT}>{Category.DESSERT}</MenuItem>
      <MenuItem value={Category.DRINK}>{Category.DRINK}</MenuItem>
    </Select>
  </FormControl>
);