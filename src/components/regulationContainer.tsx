import React, { ChangeEvent } from "react";
import { Container } from "@mui/material";
import { PickMenuCondition } from "../domain/condition";
import { RegulationCheckbox } from "./regulationCheckbox";

type Props = {
  condition: PickMenuCondition,
  onChangeVentania: (e: ChangeEvent<HTMLInputElement>) => void,
  onChangeHotPot: (e: ChangeEvent<HTMLInputElement>) => void,
  onChangeAdded: (e: ChangeEvent<HTMLInputElement>) => void,
};

export const RegulationContainer: React.FC<Props> = ({
  condition,
  onChangeVentania,
  onChangeHotPot,
  onChangeAdded,
}) => (
  <Container>
    <RegulationCheckbox
      label="ベンタニア料理"
      checked={condition.isIncludeVentania}
      onChange={onChangeVentania}
    />
    <RegulationCheckbox
      label="鍋物"
      checked={condition.isIncludeHotPot}
      onChange={onChangeHotPot}
    />
    <RegulationCheckbox
      label="ver.Nov 8 2021追加料理"
      checked={condition.isIncludeAdded}
      onChange={onChangeAdded}
    />
  </Container>
);