import { createTheme } from "@mui/material/styles";
import { color, typography } from "./constants";

export const baseTheme = createTheme({
  palette: {
    primary: {
      main: color.primary.main,
    },
    secondary: {
      main: color.secondary.main,
    },
  },
  typography: {
    fontSize: typography.fontSize,
    body1: {
      fontSize: typography.body1.fontSize,
    },
    body2: {
      fontSize: typography.body2.fontSize,
    },
    caption: {
      fontSize: typography.caption.fontSize,
    },
    h1: {
      fontSize: typography.h1.fontSize,
    },
    h2: {
      fontSize: typography.h2.fontSize,
    },
  },
});
