import React from "react";
import { Container, Stack } from "@mui/material";
import { PickResult } from "../domain/pickResult";
import { CookingIcon } from "./cookingIcon";

export const ResultView: React.FC<PickResult> = (pickResult) => (
  <Container>
    {pickResult.result.map((cooking, index) => (
      cooking && (
        <Stack direction={"row"} spacing={2} key={`stack-${index}`}>
          <CookingIcon cooking={cooking} width={30} height={30}/>
          <p>{cooking.name}</p>
          <p>{cooking.recipe}</p>
        </Stack>
      )
    ))}
  </Container>
);