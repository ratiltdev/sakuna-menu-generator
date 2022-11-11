import React from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Season } from "../domain/model/season";
import { DishFilterCondition } from "../hooks/useCondition";

type Props = {
  condition: DishFilterCondition,
  onChange: (e: SelectChangeEvent, id: number) => void,
}

export const SeasonSelect: React.FC<Props> = ({condition, onChange}) => (
  <FormControl fullWidth>
    <InputLabel id={`season-select-label-${condition.id}`}>旬</InputLabel>
    <Select
      labelId={`season-select-label-${condition.id}`}
      id={`season-select-${condition.id}`}
      label="旬"
      value={condition.season}
      onChange={(e) => onChange(e, condition.id)}
    >
      <MenuItem value="">指定なし</MenuItem>
      <MenuItem value={Season.SPRING}>{Season.SPRING}</MenuItem>
      <MenuItem value={Season.SUMMER}>{Season.SUMMER}</MenuItem>
      <MenuItem value={Season.AUTUMN}>{Season.AUTUMN}</MenuItem>
      <MenuItem value={Season.WINTER}>{Season.WINTER}</MenuItem>
    </Select>
  </FormControl>
)