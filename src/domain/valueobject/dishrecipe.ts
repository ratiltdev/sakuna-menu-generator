/**
 * 料理レシピ
 */
 export class DishRecipe {

  private readonly value: string;

  public get Value(): string { return this.value; }

  constructor(value: string) {

    // 不正な値を除外
    if (!DishRecipe.isValid(value)) {
      throw new RangeError("null or undefined or empty")
    }

    this.value = value;
  }

  // バリデーション
  private static isValid(value: string): boolean {
    // null / undefined / 空文字を除外
    return value ? true : false;
  }
}