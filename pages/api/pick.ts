import type { NextApiRequest, NextApiResponse } from "next";
import { pipe } from "fp-ts/function";
import { createQuerySchema, QueryParams, toPickParams } from "../../src/pickService/adapters/querySchema";
import { pickMenu } from "../../src/pickService/useCases/pickMenuUseCase";
import { createCookingCatalogAdapter } from "../../src/pickService/adapters/cookingCatalogAdapter";
import { Cooking } from "../../src/pickService/domain/cooking";

type Result = {
  condition: QueryParams,
  result: ReadonlyArray<Cooking | undefined>,
};

type RequestError = {
  message: string,
  issues: object,
};

const handler = (
  request: NextApiRequest,
  response: NextApiResponse<Result | RequestError>
): void => (
  pipe(
    request.query,
    createQuerySchema().safeParse,
    (parse) => parse.success ?
      pipe(
        parse.data,
        toPickParams,
        pickMenu(createCookingCatalogAdapter()),
        (cooking) => ({
          condition: parse.data,
          result: cooking,
        }),
        response.status(200).json
      ) :
      response.status(400).json(
        {message: "Bad Request", issues: parse.error.flatten()}
      )
  )
);

export default handler