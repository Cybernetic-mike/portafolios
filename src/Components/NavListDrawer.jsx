import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";

function NavListDrawer() {
  const [state, setState] = React.useState(false);
  const [value, setValue] = React.useState(0);
  //const sections = ["home", "about", "portfolio", "services", "contact"];

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY - 200; // Ajuste opcional para el desplazamiento
    /*const sectionOffsets = sections.map((sectionId) => {
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
    }*/
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ [anchor]: open });
  };
  const scrollToSection = (sectionId, index) => {
    const section = document.getElementById(sectionId);
    setSelectedIndex(index);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key="right">
          <MenuIcon
            fontSize="large"
            color="primary"
            onClick={toggleDrawer(anchor, true)}
          />
          <Drawer
            anchor="top"
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Box
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
              sx={{ background: "#050c16" }}
            >
              <List value={value}>
                <ListItemButton
                  selected={selectedIndex === 0}
                  onClick={() => scrollToSection("home", 0)}
                >
                  <ListItem>
                    <ListItemText
                      sx={{ color: "#B2B2B2" }}
                      label="Inicio"
                      primary="Inicio"
                    />
                  </ListItem>
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 1}
                  onClick={() => scrollToSection("about", 1)}
                >
                  <ListItem>
                    <ListItemText
                      sx={{ color: "#B2B2B2" }}
                      label="Sobre Mi"
                      primary="Sobre Mi"
                    />
                  </ListItem>
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 2}
                  onClick={() => scrollToSection("portfolio", 2)}
                >
                  <ListItem>
                    <ListItemText
                      sx={{ color: "#B2B2B2" }}
                      label="Portafolios"
                      primary="Portafolios"
                    />
                  </ListItem>
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 3}
                  onClick={() => scrollToSection("services", 3)}
                >
                  <ListItem>
                    <ListItemText
                      sx={{ color: "#B2B2B2" }}
                      label="Servicios"
                      primary="Servicios"
                    />
                  </ListItem>
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 4}
                  onClick={() => scrollToSection("contact", 4)}
                >
                  <ListItem>
                    <ListItemText
                      sx={{ color: "#B2B2B2" }}
                      label="Contactos"
                      primary="Contactos"
                    />
                  </ListItem>
                </ListItemButton>
              </List>
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default NavListDrawer;
