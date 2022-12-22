import React from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

type Props = {
  id: number,
  value: number,
  onChange: (e: SelectChangeEvent<number>, id: number) => void,
}

/**
 * カテゴリ
 */
const Category = {
  NONE: "指定なし",
  MAIN: "主食",
  SOUP: "汁",
  SIDE: "菜",
  DESSERT: "菓子",
  DRINK: "飲物"
} as const;
type Category = typeof Category[keyof typeof Category];

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
      <MenuItem value={0}>{Category.NONE}</MenuItem>
      <MenuItem value={1}>{Category.MAIN}</MenuItem>
      <MenuItem value={2}>{Category.SOUP}</MenuItem>
      <MenuItem value={3}>{Category.SIDE}</MenuItem>
      <MenuItem value={4}>{Category.DESSERT}</MenuItem>
      <MenuItem value={5}>{Category.DRINK}</MenuItem>
    </Select>
  </FormControl>
);