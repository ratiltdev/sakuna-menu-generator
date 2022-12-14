import { pipe } from "fp-ts/function";
import { toAddVersion, toCategory, toLockType, toSeason } from "../domain/cooking";
import { CookingCatalog, createCookingCatalog } from "../domain/cookingCatalog";
import { CookingInfo } from "../domain/cookingInfo";
import { cookingJson, CookingJson } from "../resource/cookingJson";

/**
 * 料理カタログ取得用Adapter
 */
export interface CookingCatalogAdapter {
  fetchCookingCatalog: () => CookingCatalog
};

/**
 * 料理カタログ取得Adapterを生成
 * @returns 
 */
export const createCookingCatalogAdapter = (): CookingCatalogAdapter => ({
  fetchCookingCatalog: (): CookingCatalog => pipe(
    cookingJson,
    jsonToCookingInfo,
    createCookingCatalog
  )
});

/**
 * JSONデータを料理情報リストに変換
 * @param json 
 * @returns 
 */
const jsonToCookingInfo = (json: ReadonlyArray<CookingJson>): ReadonlyArray<CookingInfo> => (
  json.map(info => (
    {
      iconId: info.iconId,
      name: info.name,
      category: toCategory(info.category),
      foodCandidates: info.foodCandidates ?? [],
      recipe: info.recipe,
      season: toSeason(info.season ?? ""),
      lockType: toLockType(info.lockType ?? ""),
      addVersion: toAddVersion(info.addVersion ?? ""),
    }
  ))
);