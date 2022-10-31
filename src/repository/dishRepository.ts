import { Dish, DishCategory, Season, UnlockType } from "../domain/entity/dish";
import { DishName } from "../domain/valueobject/dishname";
import { DishRecipe } from "../domain/valueobject/dishrecipe";
import { FoodName } from "../domain/valueobject/foodname";
import { IconId } from "../domain/valueobject/iconid";
import { DishDriverInterface, DishesJson } from "../interface/driver/dishDriverInterface";
import { DishRepositoryInterface } from "../interface/repository/dishRepositotyInterface";

export class DishRepository implements DishRepositoryInterface {
  private readonly dishDriver: DishDriverInterface;

  constructor(dishDriver: DishDriverInterface) {
    this.dishDriver = dishDriver;
  }

  async findAll(): Promise<Dish[]> {
    const json: DishesJson = await this.dishDriver.findAll();
    return json.dishes.map(dish => new Dish(
      new IconId(dish.iconId),
      new DishName(dish.name),
      dish.category as DishCategory,
      dish.foodCandidate.map(value => new FoodName(value)),
      new DishRecipe(dish.recipe),
      dish.season as Season,
      dish.unlockType as UnlockType,
      dish.isAdded
    ));
  }
}