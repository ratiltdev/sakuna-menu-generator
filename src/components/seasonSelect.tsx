import React from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Season, toSeason } from "../domain/model/season";
import { DishFilterCondition } from "../domain/model/dishesFilterCondition";

type Props = {
  id: number,
  dishCond: DishFilterCondition,
  onChange: (condition: DishFilterCondition) => void,
}

export const SeasonSelect: React.FC<Props> = ({id, dishCond, onChange}) => {
  const handleChange = (e: SelectChangeEvent) =>
    onChange({...dishCond, season: toSeason(e.target.value)});

  return (
    <FormControl fullWidth>
      <InputLabel id={`season-select-label-${id}`}>旬</InputLabel>
      <Select
        labelId={`season-select-label-${id}`}
        id={`season-select-${id}`}
        label="旬"
        value={dishCond.season}
        onChange={handleChange}
      >
        <MenuItem value="">指定なし</MenuItem>
        <MenuItem value={Season.SPRING}>{Season.SPRING}</MenuItem>
        <MenuItem value={Season.SUMMER}>{Season.SUMMER}</MenuItem>
        <MenuItem value={Season.AUTUMN}>{Season.AUTUMN}</MenuItem>
        <MenuItem value={Season.WINTER}>{Season.WINTER}</MenuItem>
      </Select>
    </FormControl>
  )
}