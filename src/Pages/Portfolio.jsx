import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import imagenPortafolio from "../images/Portafolio.png";
import imagen2 from "../images/services-2.png";
import Slider from "react-slick";
import AddIcon from "@mui/icons-material/Add";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/styles.css";
import { Opacity, Visibility } from "@mui/icons-material";

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
                      <IconButton size="large" color="primary">
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
                      src={imagen2}
                      alt="primer Imagen"
                      className="dim-imagen-proyectos"
                    />
                    <Box className="efectos-imagen">
                      <IconButton size="large" color="primary">
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
                      src={imagenPortafolio}
                      alt="primer Imagen"
                      className="dim-imagen-proyectos"
                    />
                    <Box className="efectos-imagen">
                      <IconButton size="large" color="primary">
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
                      src={imagenPortafolio}
                      alt="primer Imagen"
                      className="dim-imagen-proyectos"
                    />
                    <Box className="efectos-imagen">
                      <IconButton size="large" color="primary">
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
                      src={imagenPortafolio}
                      alt="primer Imagen"
                      className="dim-imagen-proyectos"
                    />
                    <Box className="efectos-imagen">
                      <IconButton size="large" color="primary">
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
                      src={imagenPortafolio}
                      alt="primer Imagen"
                      className="dim-imagen-proyectos"
                    />
                    <Box className="efectos-imagen">
                      <IconButton size="large" color="primary">
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
