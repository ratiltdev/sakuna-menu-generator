import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { ChangeEvent } from "react";

type Props = {
  checked: boolean,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const VentaniaCheckbox: React.FC<Props> = ({checked, onChange}) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={onChange}
          />}
        label="ベンタニア料理" />
    </FormGroup>
  )
}