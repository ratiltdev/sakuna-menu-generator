import React, { ChangeEvent } from "react";
import { Container } from "@mui/material";
import { RegulationCheckbox } from "./regulationCheckbox";

type Props = {
  isIncludeVentania: boolean,
  isIncludeHotPot: boolean,
  isIncludeAdded: boolean,
  onChangeVentania: (e: ChangeEvent<HTMLInputElement>) => void,
  onChangeHotPot: (e: ChangeEvent<HTMLInputElement>) => void,
  onChangeAdded: (e: ChangeEvent<HTMLInputElement>) => void,
};

export const RegulationContainer: React.FC<Props> = ({
  isIncludeVentania,
  isIncludeHotPot,
  isIncludeAdded,
  onChangeVentania,
  onChangeHotPot,
  onChangeAdded,
}) => (
  <Container>
    <RegulationCheckbox
      label="ベンタニア料理"
      checked={isIncludeVentania}
      onChange={onChangeVentania}
    />
    <RegulationCheckbox
      label="鍋物"
      checked={isIncludeHotPot}
      onChange={onChangeHotPot}
    />
    <RegulationCheckbox
      label="ver.Nov 8 2021追加料理"
      checked={isIncludeAdded}
      onChange={onChangeAdded}
    />
  </Container>
);