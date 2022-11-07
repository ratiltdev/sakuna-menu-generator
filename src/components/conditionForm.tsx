import { Container, SelectChangeEvent, Stack } from "@mui/material";
import React from "react";
import { MenuFilterCondition } from "../hooks/useCondition";
import { CategorySelect } from "./categorySelect";
import { SeasonSelect } from "./seasonSelect";

type ConditionFormProps = {
  condition: MenuFilterCondition,
  onChangeCategory: (e: SelectChangeEvent, id: number) => void,
  onChangeSeason: (e: SelectChangeEvent, id: number) => void,
}

export const ConditionForm: React.FC<ConditionFormProps> = ({condition, onChangeCategory, onChangeSeason}) => {

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
    </Container>
  )
}