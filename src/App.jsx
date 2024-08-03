import { Box, ThemeProvider } from "@mui/material";
import Home from "./Pages/Home";

import NavBar from "./Components/Navbar";
import MenuIcon from "@mui/icons-material/Menu";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./theme";
const navArrayLinks = [
  {
    title: "Inicio",
    path: "/portafolios",
    icon: <MenuIcon color="success" />,
  },
];
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/portafolios">
        <Box>
          <NavBar navArrayLinks={navArrayLinks} />
          <Routes>
            <Route path="/portafolios" element={<Home />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
