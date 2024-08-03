import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import NavListDrawer from "./NavListDrawer";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
function Navbar(props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const sections = ["home", "about", "portfolio", "services", "contact"];
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // Ajuste opcional para el desplazamiento
    const sectionOffsets = sections.map((sectionId) => {
      const section = document.getElementById(sectionId);
      return {
        id: sectionId,
        offset: section ? section.offsetTop : 0,
      };
    });

    const currentSection = sectionOffsets.find(
      (section) => scrollPosition <= section.offset
    );

    if (currentSection) {
      setValue(sections.indexOf(currentSection.id));
    }
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      setBackgroundColor("#050d17"); // Cambia al color que desees cuando se hace scroll
    } else {
      setBackgroundColor("transparent"); // Vuelve a transparente cuando no hay scroll
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ElevationScroll>
        <AppBar
          position="fixed"
          style={{ backgroundColor, transition: "background-color 0.5s ease" }}
        >
          <Toolbar variant="dense">
            <Typography
              variant="h5"
              sx={{
                flexGrow: 1,
                color: "#ffffff",
                cursor: "pointer",
                paddingLeft: "50px",
              }}
              onClick={() => scrollToSection("home")}
            >
              {"<MC/>"}
            </Typography>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                },
                padding: "10px",
              }}
            >
              <Tabs value={value} onChange={handleChange}>
                <Tab
                  sx={{ color: "#B2B2B2" }}
                  label="Inicio"
                  onClick={() => scrollToSection("home")}
                />
                <Tab
                  sx={{ color: "#B2B2B2" }}
                  label="Sobre Mi"
                  onClick={() => scrollToSection("about")}
                />
                <Tab
                  sx={{ color: "#B2B2B2" }}
                  label="Portafolios"
                  onClick={() => scrollToSection("portfolio")}
                />
                <Tab
                  sx={{ color: "#B2B2B2" }}
                  label="Servicios"
                  onClick={() => scrollToSection("services")}
                />
                <Tab
                  sx={{ color: "#B2B2B2" }}
                  label="Contactos"
                  onClick={() => scrollToSection("contact")}
                />
                <Button
                  sx={{
                    //background: "#0788ff",
                    borderRadius: "30px 30px 30px 30px",
                  }}
                  color="secondary"
                  variant="contained"
                  size="large"
                  label="Contactos"
                  onClick={() => scrollToSection("contact")}
                >
                  Hablemos
                </Button>
              </Tabs>
            </Box>
            <Box
              sx={{
                display: { xs: "block", sm: "block", md: "none" },
                padding: "10px",
              }}
            >
              <NavListDrawer />
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Box>
  );
}

export default Navbar;
