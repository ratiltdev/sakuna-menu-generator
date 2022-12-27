import React, { ChangeEvent } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

type Props = {
  label: string,
  checked: boolean,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const RegulationCheckbox: React.FC<Props> = ({label, checked, onChange}) => (
  <FormGroup>
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
        />}
      label={label}
    />
  </FormGroup>
)