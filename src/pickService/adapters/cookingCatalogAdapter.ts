import { toAddVersion, toCategory, toLockType, toSeason } from "../domain/cooking";
import { CookingCatalog, createCookingCatalog } from "../domain/cookingCatalog";
import { CookingInfo } from "../domain/cookingInfo";
import { cookingJson, CookingJson, daiginjoJson } from "../resource/cookingJson";

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
  fetchCookingCatalog: (): CookingCatalog => createCookingCatalog(daiginjo)(cookingInfoList),
});

/**
 * JSONデータを料理情報リストに変換
 * @param json 
 * @returns 
 */
const jsonToCookingInfo = (json: CookingJson): CookingInfo => ({
  iconId: json.iconId,
  name: json.name,
  category: toCategory(json.category),
  foodCandidates: json.foodCandidates ?? [],
  recipe: json.recipe,
  season: toSeason(json.season ?? ""),
  lockType: toLockType(json.lockType ?? ""),
  addVersion: toAddVersion(json.addVersion ?? ""),
});

/**
 * 大吟醸
 */
const daiginjo: CookingInfo = jsonToCookingInfo(daiginjoJson);

/**
 * 料理情報リスト
 */
const cookingInfoList: ReadonlyArray<CookingInfo> = (
  cookingJson.map(info => jsonToCookingInfo(info))
);