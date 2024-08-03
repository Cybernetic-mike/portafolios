import { Box, ThemeProvider, Typography } from "@mui/material";
import Home from "./Pages/Home";

import NavBar from "./Components/Navbar";
import MenuIcon from "@mui/icons-material/Menu";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./theme";
const navArrayLinks = [
  {
    title: "Inicio",
    path: "/",
    icon: <MenuIcon color="success" />,
  },
];
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <NavBar navArrayLinks={navArrayLinks} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
