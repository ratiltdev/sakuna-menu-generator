import { Button } from "@mui/material"
import React from "react"

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const PickButton: React.FC<Props> = ({onClick}) => (
  <Button
    variant="contained"
    onClick={onClick}
  >選出</Button>
)