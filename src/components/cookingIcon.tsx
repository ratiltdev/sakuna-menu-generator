import { Box } from "@mui/material"
import { Cooking } from "../domain/pickResult";

type Props = {
  cooking: Cooking,
  width: number,
  height: number,
}

export const CookingIcon: React.FC<Props> = ({cooking, width, height}) => (
  <Box
    sx={{
      width: width,
      height: height,
      backgroundImage: "url(/icon/cookingIcons.png)",
      backgroundSize: width * 10,
      backgroundPositionX: 0 - ((cooking.iconId % 10) * (width)),
      backgroundPositionY: 0 - (Math.floor(cooking.iconId / 10) * (height)),
    }}
  />
);