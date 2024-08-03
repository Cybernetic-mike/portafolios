// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e3f2fd",
      light: "#90caf9",
      dark: "#42a5f5",
      contrastText: "#fff",
    },
    secondary: {
      main: "#0788ff",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 300,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 300,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Color del borde
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Color del borde al pasar el cursor
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Color del borde al enfocar el input
          },
          backgroundColor: "transparent", // Fondo transparente
        },
        input: {
          color: "white", // Color del texto
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "white", // Color del label
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Color del borde del Autocomplete
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Color del borde al pasar el cursor
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Color del borde al enfocar el input
          },
          backgroundColor: "transparent", // Fondo transparente
        },
      },
    },
  },
});

export default theme;
