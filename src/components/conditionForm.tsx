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
    {props.condition.dishConditions.map(dishCond => (
      <Stack direction={"row"} spacing={2} key={`stack-${dishCond.id}`}>
        <CategorySelect
          condition={dishCond}
          onChange={props.onChangeCategory}
        />
        <SeasonSelect
          condition={dishCond}
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