import fs from "fs";
import path from "path";
import { flow } from "fp-ts/function";
import { toCategory, toSeason, toLockType, toAddVersion } from "../domain/cooking";
import { CookingDictionary } from "../domain/cookingDictionary";

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

export const fetchCookingDictionary = (): CookingDictionary => (
  flow(
    readFileSync,
    parseToJson,
    jsonToCooking
  )(filePath)
);

const filePath: string = path.join(process.cwd(), "public", "cookingInfo.json");

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

const jsonToCooking = (json: ReadonlyArray<CookingJson>): CookingDictionary => (
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