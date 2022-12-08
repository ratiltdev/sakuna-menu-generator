import React from "react";
import { ConditionFormProps, useCondition } from "../hooks/useCondition";
import { ConditionForm } from "./conditionForm";
import { Cooking } from "../domain/cooking";
import { Seed, useSeed } from "../hooks/useSeed";
import { ResultViewProps, useResult } from "../hooks/useResult";
import { ResultView } from "./resultView";
import { PickButton } from "./pickButton";

type Props = {
  list: ReadonlyArray<Cooking>
}

export const Form: React.FC<Props> = ({list}) => {
  const conditionFormProps: ConditionFormProps = useCondition();
  const seed: Seed = useSeed();
  const resultViewProps: ResultViewProps = useResult();

  return (
    <>
      <ConditionForm props={conditionFormProps} />
      <PickButton onClick={e => resultViewProps.pickResult(list, conditionFormProps.condition, seed)}/>
      <ResultView props={resultViewProps.result} />
    </>
  )
}