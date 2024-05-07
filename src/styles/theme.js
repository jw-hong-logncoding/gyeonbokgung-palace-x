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
        main: '#323F51',
        dark: '#1C1E22',
        light: '#7A7A7A'
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
        fontFamily: "'Times New Roman', Times, serif",
        letterSpacing: '10px',
        // color: 'white',
        // color: 'transparent',
        // backgroundClip: 'text',
        // '-webkit-background-clip': 'text',
        // background: 'linear-gradient(to bottom, white, transparent)'
      },
      mainSubtitle: {
        fontSize: '14px',
        color: 'white',
      }
    },
  });
theme = responsiveFontSizes(theme);

export default theme;