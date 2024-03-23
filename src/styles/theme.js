import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#305E69'
      },
      secondary: {
        main: '#323F51'
      },
    },
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