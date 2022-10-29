import { IconId } from "../valueobject/iconid";
import { DishName } from "../valueobject/dishname";
import { DishRecipe } from "../valueobject/dishrecipe";

/**
 * 料理
 */
export class Dish {

  private readonly iconId: IconId;
  private readonly name: DishName;
  private readonly recipe: DishRecipe;

  public get IconId(): IconId { return this.iconId; }
  public get Name(): DishName { return this.name; }
  public get Recipe(): DishRecipe { return this.recipe; }

  constructor(
    iconId: IconId,
    name: DishName,
    recipe: DishRecipe
  ) {
    this.iconId = iconId;
    this.name = name;
    this.recipe = recipe;
  }
}