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
  result: [Cooking | null, Cooking | null, Cooking | null, Cooking | null, Cooking],
  shareUrl: string,
};

/**
 * 選出結果にNULLが含まれているか判定する
 * @param param0 
 * @returns boolean
 */
export const hasError = ({result}: PickResult): boolean => (
  result.filter(cooking => cooking == null).length > 0
);