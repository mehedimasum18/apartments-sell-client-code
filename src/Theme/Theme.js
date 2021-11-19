import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#095DBB",
    },
    secondary: {
      main: "#232B36",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

export default theme;
