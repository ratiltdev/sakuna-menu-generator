import React from "react";
import { Container, Stack } from "@mui/material";
import { Result } from "../hooks/useResult";
import Image from "next/image";

type Props = {
  props: ReadonlyArray<Result>,
}

export const ResultView: React.FC<Props> = ({props}) => (
  <Container>
    {props.map((result, index) => (
      <Stack direction={"row"} spacing={2} key={`stack-${index}`}>
        <Image src={`/icon/${result.iconId}.png`} alt={result.name} width={30} height={30} />
        <p>{result.name}</p>
        <p>{result.recipe}</p>
      </Stack>
    ))}
  </Container>
);