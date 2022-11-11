import { Container, SelectChangeEvent, Stack } from "@mui/material";
import React, { ChangeEvent } from "react";
import { MenuFilterCondition } from "../hooks/useCondition";
import { VersionCheckbox } from "./versionCheckbox";
import { CategorySelect } from "./categorySelect";
import { HotPotCheckbox } from "./hotpotCheckbox";
import { SeasonSelect } from "./seasonSelect";
import { VentaniaCheckbox } from "./ventaniaCheckbox";

type ConditionFormProps = {
  condition: MenuFilterCondition,
  onChangeCategory: (e: SelectChangeEvent, id: number) => void,
  onChangeSeason: (e: SelectChangeEvent, id: number) => void,
  onChangeVentania: (e: ChangeEvent<HTMLInputElement>) => void,
  onChangeHotPot: (e: ChangeEvent<HTMLInputElement>) => void,
  onChangeAdded: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const ConditionForm: React.FC<ConditionFormProps> = (
  {condition, onChangeCategory, onChangeSeason, onChangeVentania, onChangeHotPot, onChangeAdded}
) => {
  return (
    <Container>
      {condition.dishConditions.map(dishCond => (
        <Stack direction={"row"} spacing={2} key={`stack-${dishCond.id}`}>
          <CategorySelect
            condition={dishCond}
            onChange={onChangeCategory}
          />
          <SeasonSelect
            condition={dishCond}
            onChange={onChangeSeason}
          />
        </Stack>
      ))}
      <VentaniaCheckbox
        checked={condition.isIncludeVentania}
        onChange={onChangeVentania}
      />
      <HotPotCheckbox
        checked={condition.isIncludeHotPot}
        onChange={onChangeHotPot}
      />
      <VersionCheckbox
        checked={condition.isIncludeAdded}
        onChange={onChangeAdded}
      />
    </Container>
  )
}