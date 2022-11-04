import React from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Season } from "../domain/model/season";

type Props = {
  index: number,
  value: Season,
  onChange: (event: SelectChangeEvent) => void,
}

export const SeasonSelect: React.FC<Props> = ({index, value, onChange}) => {
  const labelId = `season-select-label-${index}`;

  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>旬</InputLabel>
      <Select
        labelId={labelId}
        id={`season-select-${index}`}
        label="旬"
        value={value}
        onChange={onChange}
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