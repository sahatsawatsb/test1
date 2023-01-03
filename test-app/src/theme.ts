import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    lightGrey: Palette["primary"];
    lightGrey2: Palette["primary"];
    darkGrey: Palette["primary"];
    status: Palette["primary"] | any;
    default: Palette["primary"];
  }
  interface PaletteOptions {
    lightGrey?: PaletteOptions["primary"];
    lightGrey2?: PaletteOptions["primary"];
    darkGrey?: PaletteOptions["primary"];
    status?: PaletteOptions["primary"] | any;
    default?: PaletteOptions["primary"]
  }
}
const { palette } = createTheme();

export const colorTheme = {
  $lightGrey: palette.augmentColor({
    color: { main: "#F48900" },
    name: "$prime",
  }),
  $grey: palette.augmentColor({
    color: { main: "#E3E4E8" },
    name: "$grey",
  }),
  $grey2: palette.augmentColor({
    color: { main: "#ABADBA" },
    name: "$grey2",
  }),
  $darkGrey: palette.augmentColor({
    color: { main: "#454754" },
    name: "$darkGrey",
  }),
  $darkGrey2: palette.augmentColor({
    color: { main: "#73768C" },
    name: "$darkGrey2",
  }),
  $lightMagenta: palette.augmentColor({
    color: { main: "#F6E5F6" },
    name: "$lightMagenta",
  }),
};
export const theme = createTheme({
  palette: {
    text: {
      primary: "#454754",
    },
    primary: {
      main: "#F48900",
    },
    secondary: {
      main: "#F48900",
    },
    lightGrey: {
      main: " #F7F7F8",
    },
    lightGrey2: {
      main: "#EFF0F4",
    },
    darkGrey: {
      main: "#454754",
    },
    success: {
      main: "#6FCF97",
    },
    error: {
      main: "#EB6666",
    },
   
    status: {
      expired_bg: "#FFF0F0",
      expired: "#DB0000",
      pending: "#F48900",
      pending_bg: "#FFF2DF",
    },
    default: {
      main: "#454754"
    }
  },

});
