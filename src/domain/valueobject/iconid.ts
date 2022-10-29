/**
 * 料理アイコンID
 */
export class IconId {

  private readonly value: string;

  public get Value(): string { return this.value; }

  constructor(value: number) {

    // 不正な値を除外
    if (!IconId.isValid(value)) {
      throw new RangeError("1～99の整数で指定してください")
    }

    // ゼロ埋め3桁の文字列で保持 (=アイコンファイル名)
    this.value = String(value).padStart(3, "0");
  }

  // バリデーション
  private static isValid(value: number): boolean {
    // 1～99の整数
    return Number.isInteger(value) && (value >= 1) && (value <= 99);
  }
}