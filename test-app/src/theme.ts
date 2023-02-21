import { createTheme } from "@mui/material";

const { palette } = createTheme();

export const colorTheme = {
  $lightOrange: palette.augmentColor({
    color: { main: "#F48900" },
    name: "$prime",
  }),
  $grey: palette.augmentColor({
    color: { main: "#E3E4E8" },
    name: "$grey",
  }),
  $darkGrey: palette.augmentColor({
    color: { main: "#454754" },
    name: "$darkGrey",
  }),
};

