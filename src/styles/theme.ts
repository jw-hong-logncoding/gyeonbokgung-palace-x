import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    typography: {
      subtitle1: {
        fontSize: 12,
      },
      body1: {
        fontWeight: 500,
      },
    },
  });
theme = responsiveFontSizes(theme);

export default theme;