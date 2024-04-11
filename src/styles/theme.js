import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            overflowWrap: 'break-word'
          }
        }
      }
    },
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
      mainPageTitle: {
        fontSize: '78px',
        fontFamily: "'Times New Roman', Times, serif",
        letterSpacing: '10px',
        color: 'white',
      },
      mainSubtitle: {
        fontSize: '14px',
        color: 'white',
      }
    },
  });
theme = responsiveFontSizes(theme);

export default theme;