import React from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

type Props = {
  id: number,
  value: number,
  onChange: (e: SelectChangeEvent<number>, id: number) => void,
}

/**
 * 旬
 */
const Season = {
  NONE: "指定なし",
  SPRING: "春",
  SUMMER: "夏",
  AUTUMN: "秋",
  WINTER: "冬"
} as const;
type Season = typeof Season[keyof typeof Season];

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
      <MenuItem value={0}>{Season.NONE}</MenuItem>
      <MenuItem value={1}>{Season.SPRING}</MenuItem>
      <MenuItem value={2}>{Season.SUMMER}</MenuItem>
      <MenuItem value={3}>{Season.AUTUMN}</MenuItem>
      <MenuItem value={4}>{Season.WINTER}</MenuItem>
    </Select>
  </FormControl>
)