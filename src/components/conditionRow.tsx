import { SelectChangeEvent, Stack } from "@mui/material"
import { PickCookingCondition } from "../domain/condition"
import { CategorySelect } from "./categorySelect"
import { SeasonSelect } from "./seasonSelect"

type Props = {
  condition: PickCookingCondition,
  onChangeCategory: (e: SelectChangeEvent<number>, id: number) => void,
  onChangeSeason: (e: SelectChangeEvent<number>, id: number) => void,
}

export const ConditionRow: React.FC<Props> = ({
  condition,
  onChangeCategory,
  onChangeSeason,
}) => (
  <Stack direction={"row"} spacing={2}>
    <CategorySelect
      id={condition.id}
      value={condition.category}
      onChange={onChangeCategory}
    />
    <SeasonSelect
      id={condition.id}
      value={condition.season}
      onChange={onChangeSeason}
    />
  </Stack>
)