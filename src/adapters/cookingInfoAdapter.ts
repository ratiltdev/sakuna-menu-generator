import fs from "fs";
import path from "path";
import { pipe } from "fp-ts/function";
import { CookingInfo, toCategory, toSeason, toLockType, toAddVersion } from "../domain/entities/cookingInfo";

type CookingJson = {
  iconId: string,
  name: string,
  category: string,
  foodCandidates?: ReadonlyArray<string>,
  recipe: string,
  season?: string,
  lockType?: string,
  addVersion?: string,
};

export interface CookingInfoAdapter {
  fetch: () => ReadonlyArray<CookingInfo>
};

export const cookingInfoAdapter = (): CookingInfoAdapter => ({
  fetch: (): ReadonlyArray<CookingInfo> => (
    pipe(
      filePath,
      readFileSync,
      parseToJson,
      jsonToCooking
    )
  )
});

const filePath: string = path.join(process.cwd(), "src", "adapters", "cookingInfo.json");

const readFileSync = (path: string): string => {
  try {
    return fs.readFileSync(path, "utf-8");
  } catch (error: unknown) {
    throw new Error("Error: Could not read cooking.json");
  }
};

const parseToJson = (context: string): ReadonlyArray<CookingJson> => {
  try {
    return JSON.parse(context) as ReadonlyArray<CookingJson>;
  } catch (error: unknown) {
    throw new Error("Error: JSON bad parsing");
  }
};

const jsonToCooking = (json: ReadonlyArray<CookingJson>): ReadonlyArray<CookingInfo> => (
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