export const Category = {
  NONE: "",
  MAIN: "主食",
  SOUP: "汁",
  SIDE: "菜",
  DESSERT: "菓子",
  DRINK: "飲物"
} as const;

export type Category = typeof Category[keyof typeof Category];
export const allCategory: Category[] = Object.values(Category);

const isCategory = (value: string): value is Category => allCategory.includes(value as Category);
export const toCategory = (value: string): Category => isCategory(value) ? value as Category : Category.NONE;