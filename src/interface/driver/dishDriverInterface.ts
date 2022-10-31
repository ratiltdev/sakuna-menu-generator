export interface DishDriverInterface {
  findAll(): Promise<DishesJson>;
}

export type DishesJson = {
  dishes: DishJson[];
}

export type DishJson = {
  iconId: number;
  name: string;
  category: string;
  foodCandidate: string[];
  recipe: string;
  season: string;
  unlockType: string;
  isAdded: boolean;
}