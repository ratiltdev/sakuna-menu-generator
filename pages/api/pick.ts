import type { NextApiRequest, NextApiResponse } from "next";
import { pipe } from "fp-ts/function";
import { querySchema, toPickParams } from "../../src/pickService/adapters/querySchema";
import { pickResult } from "../../src/pickService/useCases/pickMenuUseCase";
import { createCookingCatalogAdapter } from "../../src/pickService/adapters/cookingCatalogAdapter";

const handler = (
  request: NextApiRequest,
  response: NextApiResponse<any>
): void => (
  pipe(
    request.query,
    querySchema.safeParse,
    (result) => result.success ?
      pipe(
        result.data,
        toPickParams,
        pickResult(
          createCookingCatalogAdapter()
        ),
        response.status(200).json
      ) :
      response.status(400).json(
        {message: "Bad Request", issues: result.error.flatten()}
      )
  )
);

export default handler