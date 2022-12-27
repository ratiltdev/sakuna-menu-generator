import { Box } from "@mui/material"

type Props = {
  iconId: number,
  width: number,
  height: number,
}

export const CookingIcon: React.FC<Props> = ({iconId, width, height}) => (
  <Box
    sx={{
      width: width,
      height: height,
      backgroundImage: "url(/icon/cookingIcons.png)",
      backgroundSize: width * 10,
      backgroundPositionX: 0 - ((iconId % 10) * (width)),
      backgroundPositionY: 0 - (Math.floor(iconId / 10) * (height)),
    }}
  />
);