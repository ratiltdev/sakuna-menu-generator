import React from "react";
import { Container, Stack } from "@mui/material";
import { ConditionFormProps } from "../hooks/useCondition";
import { VersionCheckbox } from "./versionCheckbox";
import { CategorySelect } from "./categorySelect";
import { HotPotCheckbox } from "./hotpotCheckbox";
import { SeasonSelect } from "./seasonSelect";
import { VentaniaCheckbox } from "./ventaniaCheckbox";

type Props = {
  props: ConditionFormProps,
}

export const ConditionForm: React.FC<Props> = ({props}) => (
  <Container>
    {props.condition.cookingConditions.map(cookingCond => (
      <Stack direction={"row"} spacing={2} key={`stack-${cookingCond.id}`}>
        <CategorySelect
          condition={cookingCond}
          onChange={props.onChangeCategory}
        />
        <SeasonSelect
          condition={cookingCond}
          onChange={props.onChangeSeason}
        />
      </Stack>
    ))}
    <VentaniaCheckbox
      checked={props.condition.isIncludeVentania}
      onChange={props.onChangeVentania}
    />
    <HotPotCheckbox
      checked={props.condition.isIncludeHotPot}
      onChange={props.onChangeHotPot}
    />
    <VersionCheckbox
      checked={props.condition.isIncludeAdded}
      onChange={props.onChangeAdded}
    />
  </Container>
)