import { DishDriverInterface, DishesJson } from "../interface/driver/dishDriverInterface";
import fs from "fs";
import path from "path";

export class DishDriver implements DishDriverInterface {
  async findAll(): Promise<DishesJson> {
    const filePath = path.join(process.cwd(), "resource", "dish.json");
    const data = await fs.readFileSync(filePath, "utf-8");
    const json = JSON.parse(data);

    return json;
  }
}