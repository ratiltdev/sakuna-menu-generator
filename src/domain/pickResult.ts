import { PickMenuCondition } from "./condition";

/**
 * 料理
 */
export type Cooking = {
  iconId: number,
  name: string,
  recipe: string,
};

/**
 * 選出結果
 */
export type PickResult = {
  condition: PickMenuCondition,
  result: [Cooking | null, Cooking | null, Cooking | null, Cooking | null, Cooking],
  shareUrl: string,
};