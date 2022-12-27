import React from "react";
import { Container } from "@mui/material";
import { ConditionFormProps } from "../../hooks/useCondition";
import { RegulationContainer } from "./regulationContainer";
import { ConditionRow } from "./conditionRow";

export const ConditionForm: React.FC<ConditionFormProps> = ({
  condition,
  onChangeCategory,
  onChangeSeason,
  onChangeVentania,
  onChangeHotPot,
  onChangeAdded,
}) => (
  <Container>
    {condition.cookingConditions.map(cookingCond => (
      <ConditionRow
        key={`row-${cookingCond.id}`}
        condition={cookingCond}
        onChangeCategory={onChangeCategory}
        onChangeSeason={onChangeSeason}
      />
    ))}
    <RegulationContainer
      isIncludeVentania={condition.isIncludeVentania}
      isIncludeHotPot={condition.isIncludeHotPot}
      isIncludeAdded={condition.isIncludeAdded}
      onChangeVentania={onChangeVentania}
      onChangeHotPot={onChangeHotPot}
      onChangeAdded={onChangeAdded}
    />
  </Container>
)