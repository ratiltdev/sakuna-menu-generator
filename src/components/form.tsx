import React, { useState } from "react";
import { Stack } from "@mui/system";
import { Category, toCategory } from "../domain/model/category";
import { Season, toSeason } from "../domain/model/season";
import { DishesFilterCondition, DishFilterCondition } from "../domain/model/dishesFilterCondition";
import { CategorySelect } from "./categorySelect";
import { SeasonSelect } from "./seasonSelect";
import { Container, SelectChangeEvent } from "@mui/material";

export const Form: React.FC = () => {
  const [dishesCond, setDishesCond] = useState<DishesFilterCondition>({
    dishes: [
      {id: 1, category: Category.NONE, season: Season.NONE},
      {id: 2, category: Category.NONE, season: Season.NONE},
      {id: 3, category: Category.NONE, season: Season.NONE},
      {id: 4, category: Category.NONE, season: Season.NONE},
    ],
  });

  // 変更時にSelect側からDishCondRowを受取り、IDが一致するRowを差替える
  const handleChange = (dishCond: DishFilterCondition) =>
    setDishesCond({dishes: dishesCond.dishes.map(row => row.id === dishCond.id ? dishCond : row)});

  return (
    <Container>
      {dishesCond.dishes.map((dishCond) => (
        <Stack direction={"row"} spacing={2} key={`stack-${dishCond.id}`}>
          <CategorySelect
            id={dishCond.id}
            dishCond={dishCond}
            onChange={handleChange}
          />
          <SeasonSelect
            id={dishCond.id}
            dishCond={dishCond}
            onChange={handleChange}
          />
        </Stack>
      ))}
    </Container>
  );
}