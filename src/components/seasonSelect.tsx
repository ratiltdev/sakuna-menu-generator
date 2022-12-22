import React from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Season } from "../domain/condition";

type Props = {
  id: number,
  value: Season,
  onChange: (e: SelectChangeEvent<string>, id: number) => void,
}

/**
 * Selectbox - 旬
 * @param param0
 * @returns 
 */
export const SeasonSelect: React.FC<Props> = ({id, value, onChange}) => (
  <FormControl fullWidth>
    <InputLabel id={`season-select-label-${id}`}>旬</InputLabel>
    <Select
      labelId={`season-select-label-${id}`}
      id={`season-select-${id}`}
      label="旬"
      value={value}
      onChange={(e) => onChange(e, id)}
    >
      <MenuItem value={Season.NONE}>{Season.NONE}</MenuItem>
      <MenuItem value={Season.SPRING}>{Season.SPRING}</MenuItem>
      <MenuItem value={Season.SUMMER}>{Season.SUMMER}</MenuItem>
      <MenuItem value={Season.AUTUMN}>{Season.AUTUMN}</MenuItem>
      <MenuItem value={Season.WINTER}>{Season.WINTER}</MenuItem>
    </Select>
  </FormControl>
)