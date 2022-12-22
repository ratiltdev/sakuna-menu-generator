import { pipe } from "fp-ts/function";
import { PickMenuCondition } from "../domain/condition";
import { Cooking, PickResult } from "../domain/pickResult";
import { QueryParams } from "./querySchema";
import { conditionToRequestParams, paramsToCondition, paramsToQueryString, queryParamsToRequestParams, RequestParams } from "./requestParams";

/**
 * PickAPIからの返却値
 */
export type PickResultDTO = {
  params: RequestParams,
  result: [Cooking | null, Cooking | null, Cooking | null, Cooking | null, Cooking]
};

/**
 * Fetch - ServerSideRendering
 * @param params 
 * @returns 
 */
export const serverSideFetch = (params: QueryParams): Promise<PickResultDTO> => (
  pipe(
    params,
    queryParamsToRequestParams,
    fetcher
  )
);

/**
 * Fetch - ClientSideRendering
 * @param condition 
 * @returns 
 */
export const clientSideFetch = (condition: PickMenuCondition): Promise<PickResultDTO> => (
  pipe(
    condition,
    conditionToRequestParams,
    fetcher
  )
);

/**
 * DTO -> PickResult
 * @param dto 
 * @returns 
 */
export const dtoToPickResult = (dto: PickResultDTO): PickResult => ({
  condition: paramsToCondition(dto.params),
  result: dto.result,
  shareUrl: getApiUrl(dto.params),
});

/**
 * Fecther - PickAPI
 * @param params 
 * @returns 
 */
const fetcher = (params: RequestParams): Promise<PickResultDTO> => (
  pipe(
    params,
    getApiUrl,
    (url) => fetch(url).then(res => res.json() as Promise<PickResultDTO>)
  )
);

/**
 * URL - PickAPI
 * @param params 
 * @returns 
 */
const getApiUrl = (params: RequestParams): string => (
  `http://localhost:3000/api/pick?${paramsToQueryString(params)}`
);