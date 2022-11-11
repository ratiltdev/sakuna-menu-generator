import React from "react";
import { useCondition } from "../hooks/useCondition";
import { ConditionForm } from "./conditionForm";

export const Form: React.FC = () => {
  const {
    condition,
    onChangeCategory,
    onChangeSeason,
    onChangeVentania,
    onChangeHotPot,
    onChangeAdded,
  } = useCondition();

  return (
    <>
      <ConditionForm
        condition={condition}
        onChangeCategory={onChangeCategory}
        onChangeSeason={onChangeSeason}
        onChangeVentania={onChangeVentania}
        onChangeHotPot={onChangeHotPot}
        onChangeAdded={onChangeAdded}
      />
    </>
  )
}