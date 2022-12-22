import { useState } from "react";
import { pipe } from "fp-ts/function";
import * as E from "fp-ts/lib/Either";
import * as T from "fp-ts/lib/Task";
import * as TE from "fp-ts/lib/TaskEither";
import { PickMenuCondition } from "../domain/condition";
import { PickResult } from "../domain/pickResult";
import { clientSideFetch, dtoToPickResult, PickResultDTO } from "../adapters/fetchPickResult";

export type ResultViewProp = {
  result: PickResult | null,
  fetchPickResult: (condition: PickMenuCondition) => Promise<void>,
}

export const useResult = (init: PickResult | null): ResultViewProp => {

  const [result, setResult] = useState<PickResult | null>(init);

  const fetchPickResult = (condition: PickMenuCondition): Promise<void> => (
    pipe(
      TE.tryCatch(
        () => clientSideFetch(condition),
        E.toError,
      ),
      TE.fold<Error, PickResultDTO, void>(
        error => T.of(console.log(error)),
        dto => pipe(
          dto,
          dtoToPickResult,
          setResult,
          T.of
        )
      )
    )()
  );

  return {
    result: result,
    fetchPickResult: fetchPickResult,
  };
}