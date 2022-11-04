import React from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Category } from "../domain/model/category";

type Props = {
  index: number,
  value: Category,
  onChange: (event: SelectChangeEvent) => void,
}

export const CategorySelect: React.FC<Props> = ({index, value, onChange}) => {
  const labelId = `category-select-label-${index}`;

  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>カテゴリ</InputLabel>
      <Select
        labelId={labelId}
        id={`category-select-${index}`}
        label="カテゴリ"
        value={value}
        onChange={onChange}
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