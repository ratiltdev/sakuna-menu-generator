import React from "react";
import { ConditionFormProps, useCondition } from "../hooks/useCondition";
import { ConditionForm } from "./conditionForm";

export const Form: React.FC = () => {
  const conditionFormProps: ConditionFormProps = useCondition();

  return (
    <>
      <ConditionForm props={conditionFormProps} />
    </>
  )
}