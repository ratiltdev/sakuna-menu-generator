import { Dish } from "../../domain/entity/dish";

export interface DishRepositoryInterface {
  findAll(): Promise<Dish[]>;
}