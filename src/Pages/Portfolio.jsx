import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import imagenPortafolio from "../images/Portafolios-pages.png";
import OdontosteticPages from "../images/OdontoStetic-pages.png";
import DedicatoriaPages from "../images/dedicatoria-pages.png";
import BanerHappy from "../images/Baner-happy.png";
import Letreros from "../images/letreros.png";
import Slider from "react-slick";
import AddIcon from "@mui/icons-material/Add";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/styles.css";

function Portfolio() {
  const [slidesToScroll, setSlidesToScroll] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 750) {
        setSlidesToScroll(1);
      } else {
        setSlidesToScroll(3);
      }
    };

    // Llamar a la función al montar el componente para establecer el estado inicial
    handleResize();

    // Añadir event listener para el redimensionamiento de la ventana
    window.addEventListener("resize", handleResize);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToScroll,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  const carruselConf = {
    width: "95%",
    height: "85%",
    justifyContent: "center",
    alignItems: "center",
  };
  const openPortafolios = () => {
    window.open("https://cybernetic-mike.github.io/portafolios/", "_blank");
  };
  const openOdontoStetic = () => {
    window.open("https://cybernetic-mike.github.io/odonto-stetic/", "_blank");
  };
  const openDedicatoria = () => {
    window.open(
      "https://cybernetic-mike.github.io/dedicatoria-gaby/",
      "_blank"
    );
  };
  const openHappy = () => {
    window.open(BanerHappy, "_blank");
  };
  const openLetreros = () => {
    window.open(Letreros, "_blank");
  };
  return (
    <Box
      id="portfolio"
      sx={{
        height: "100%",
        padding: "100px 0 30px 0",
        margin: "10px 20px 10px 20px",
        color: "#ffffff",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          display: "inline",
          fontWeight: "bold",
          padding: "8px",
          borderRadius: "5px",
          color: "#ffffff",
          textAlign: "left",
          backgroundColor: "#063560",
        }}
      >
        PORTAFOLIOS
      </Typography>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: "20px" }}>
          AQUI PUEDES VER MIS PROYECTOS Y DISEÑOS REALIZADOS
        </Typography>
        <Box p={5}>
          <Box
            className="slider-container"
            sx={{
              textAlign: "center",
              alignItems: "center",
              height: "auto",
              paddingTop: "100px",
              alignContent: "center",
            }}
          >
            <Slider {...settings}>
              <Box>
                <Box
                  sx={{
                    ...carruselConf,
                  }}
                >
                  <figure className="animacion-imagen">
                    <img
                      src={imagenPortafolio}
                      alt="primer Imagen"
                      className="dim-imagen-proyectos"
                    />
                    <Box className="efectos-imagen">
                      <IconButton
                        size="large"
                        color="primary"
                        onClick={openPortafolios}
                      >
                        <AddIcon fontSize="inherit" />
                      </IconButton>
                    </Box>
                  </figure>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    ...carruselConf,
                  }}
                >
                  <figure className="animacion-imagen">
                    <img
                      src={OdontosteticPages}
                      alt="primer Imagen"
                      className="dim-imagen-proyectos"
                    />
                    <Box className="efectos-imagen">
                      <IconButton
                        size="large"
                        color="primary"
                        onClick={openOdontoStetic}
                      >
                        <AddIcon fontSize="inherit" />
                      </IconButton>
                    </Box>
                  </figure>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    ...carruselConf,
                  }}
                >
                  <figure className="animacion-imagen">
                    <img
                      src={DedicatoriaPages}
                      alt="primer Imagen"
                      className="dim-imagen-proyectos"
                    />
                    <Box className="efectos-imagen">
                      <IconButton
                        size="large"
                        color="primary"
                        onClick={openDedicatoria}
                      >
                        <AddIcon fontSize="inherit" />
                      </IconButton>
                    </Box>
                  </figure>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    ...carruselConf,
                  }}
                >
                  <figure className="animacion-imagen" style={{ width: "50%" }}>
                    <img
                      src={BanerHappy}
                      alt="primer Imagen"
                      className="dim-imagen-proyectos"
                    />
                    <Box className="efectos-imagen">
                      <IconButton
                        size="large"
                        color="primary"
                        onClick={openHappy}
                      >
                        <AddIcon fontSize="inherit" />
                      </IconButton>
                    </Box>
                  </figure>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    ...carruselConf,
                  }}
                >
                  <figure className="animacion-imagen">
                    <img
                      src={Letreros}
                      alt="primer Imagen"
                      className="dim-imagen-proyectos"
                    />
                    <Box className="efectos-imagen">
                      <IconButton
                        size="large"
                        color="primary"
                        onClick={openLetreros}
                      >
                        <AddIcon fontSize="inherit" />
                      </IconButton>
                    </Box>
                  </figure>
                </Box>
              </Box>
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Portfolio;
