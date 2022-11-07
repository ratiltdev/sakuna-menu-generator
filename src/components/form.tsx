import React from "react";
import { useCondition } from "../hooks/useCondition";
import { ConditionForm } from "./conditionForm";

export const Form: React.FC = () => {
  const {condition, onChangeCategory, onChangeSeason} = useCondition();

  return (
    <ConditionForm
      condition={condition}
      onChangeCategory={onChangeCategory}
      onChangeSeason={onChangeSeason}
    />
  )
}