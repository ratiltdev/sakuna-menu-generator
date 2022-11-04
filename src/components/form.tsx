import React, { useState } from "react";
import { Stack } from "@mui/system";
import { Category, toCategory } from "../domain/model/category";
import { Season, toSeason } from "../domain/model/season";
import { CategorySelect } from "./categorySelect";
import { SeasonSelect } from "./seasonSelect";
import { Container, SelectChangeEvent } from "@mui/material";

type Condition = {
  category: Category,
  season: Season,
}

export const Form: React.FC = () => {
  const [values, setValues] = useState<Condition>(
    {category: Category.NONE, season: Season.NONE}
  );
  const categoryHandleChange = (event: SelectChangeEvent) => setValues(
    {...values, category: toCategory(event.target.value)}
  );
  const seasonHandleChange = (event: SelectChangeEvent) => setValues(
    {...values, season: toSeason(event.target.value)}
  );

  return (
    <Container>
      <Stack direction={"row"} spacing={2}>
        <CategorySelect
          index={1}
          value={values.category}
          onChange={categoryHandleChange}
        />
        <SeasonSelect
          index={1}
          value={values.season}
          onChange={seasonHandleChange}
        />
      </Stack>
    </Container>
  );
}