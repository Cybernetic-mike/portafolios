import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
//import FotoPerfil from "../images/FotoPerfil.png";
import FotoPerfil2 from "../images/FotoPerfil2.png";
import "../css/styles.css";
import useIntersection from "../class/useIntersection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TypingEffect from "../Components/TypingEffect";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconFacebook from "../images/logos--facebook.svg";
import IconLinkedin from "../images/devicon--linkedin.svg";
import IconGitHhub from "../images/simple-icons--github.svg";

function SampleArrow() {
  return <div style={{ display: "none" }} />;
}

function Home() {
  const [acercaRef, isIntersectingAcerca] = useIntersection({
    threshold: 0.2,
  });
  const [serviciosRef, isIntersectingServicios] = useIntersection({
    threshold: 0.2,
  });
  const [portafoliosRef, isIntersectingPortafolios] = useIntersection({
    threshold: 0.2,
  });
  const [contactosRef, isIntersectingContactos] = useIntersection({
    threshold: 0.05,
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [stylesFb, setStylesFb] = useState(false);
  const animationButtonFb = {
    transform: stylesFb ? "translate(0px, -5px)" : "translate(0px, 0px)",
    transition: "transform 0.3s ease",
  };
  const [stylesGh, setStylesGh] = useState(false);
  const animationButtonGh = {
    transform: stylesGh ? "translate(0px, -5px)" : "translate(0px, 0px)",
    transition: "transform 0.3s ease",
  };
  const [stylesLn, setStylesLn] = useState(false);
  const animationButtonLn = {
    transform: stylesLn ? "translate(0px, -5px)" : "translate(0px, 0px)",
    transition: "transform 0.3s ease",
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #07233b,#041d34, #050c16)",
      }}
    >
      <Box
        id="home"
        sx={{
          height: "100%",
          //backgroundImage: "url(" + Fondo + ")",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          padding: "10% 0 0 0",
          marginBottom: "5px",
        }}
      >
        <Box>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  padding: {
                    xs: "12% 5% 0 5%",
                    md: "0 0 0 18%",
                    lg: "0 0 0 18%",
                  },
                }}
              >
                <Box
                  sx={{
                    textAlign: "left",
                    paddingBottom: "20px",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      display: "inline",
                      padding: "8px",
                      borderRadius: "5px",
                      color: "#ffffff",
                      textAlign: "left",
                      backgroundColor: "#063560",
                    }}
                  >
                    MIGUEL CALLIZAYA
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "block",
                    color: "white",
                  }}
                >
                  <Typography
                    variant="h4"
                    id="home"
                    sx={{
                      fontWeight: "bold",
                      textAlign: "left",

                      fontSize: {
                        xs: "24px",
                        sm: "34px",
                        md: "34px",
                        lg: "44px",
                      },
                    }}
                  >
                    HOLA! SOY MIGUEL
                  </Typography>
                </Box>
                <Box
                  sx={{
                    color: "#0788ff",
                    textAlign: "left",
                  }}
                >
                  <TypingEffect />
                </Box>
                <Typography color={"white"}>
                  Se realizan páginas web personalizadas a pedido del cliente,
                  tambien puedo ayudarte con el logo de tu marca. ¡Si tienes una
                  idea la haremos realidad!
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={4} md={6} lg={4}>
                      <Box
                        sx={{
                          display: "flex",
                          //justifyContent: "center",
                          alignItems: "center",
                          paddingTop: "8px",
                        }}
                      >
                        <Button
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "30px 30px 30px 30px",
                            width: {
                              xs: "100%",
                              sm: "auto",
                              md: "auto",
                              lg: "auto",
                            },
                          }}
                          color="secondary"
                          variant="contained"
                          size="large"
                          label="Contactos"
                          endIcon={<ArrowForwardIcon />}
                          onClick={() => scrollToSection("contact")}
                        >
                          CONTACTAME
                        </Button>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={8} md={6} lg={8}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: {
                            xs: "center",
                            sm: "left",
                          },
                        }}
                      >
                        <IconButton
                          onMouseEnter={() => setStylesFb(true)}
                          onMouseLeave={() => setStylesFb(false)}
                          sx={{
                            ...animationButtonFb,
                          }}
                          component="a"
                          href="https://www.facebook.com/miguelreynaldo.callizayameave/"
                          target="_blank"
                        >
                          <Avatar
                            src={IconFacebook}
                            sx={{
                              width: "42px",
                              height: "42px",
                            }}
                          />
                        </IconButton>
                        <IconButton
                          onMouseEnter={() => setStylesGh(true)}
                          onMouseLeave={() => setStylesGh(false)}
                          sx={{
                            ...animationButtonGh,
                          }}
                          component="a"
                          href="https://github.com/Cybernetic-mike"
                          target="_blank"
                        >
                          <Avatar
                            src={IconGitHhub}
                            sx={{
                              width: "42px",
                              height: "42px",
                              //margin: "10px 10px 5px 5px",
                            }}
                          />
                        </IconButton>
                        <IconButton
                          onMouseEnter={() => setStylesLn(true)}
                          onMouseLeave={() => setStylesLn(false)}
                          sx={{
                            ...animationButtonLn,
                          }}
                          component="a"
                          href="https://www.linkedin.com/in/miguel-callizaya-meave-b30001281/"
                          target="_blank"
                        >
                          <Avatar
                            src={IconLinkedin}
                            sx={{
                              background: "#0076b2",
                              width: "42px",
                              height: "42px",
                              //margin: "10px 0 5px 0px",
                            }}
                          />
                        </IconButton>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  //paddingTop: "50px",
                }}
              >
                <img
                  className="dim-imagen"
                  alt="foto de perfil"
                  src={FotoPerfil2}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            background: "linear-gradient(to right, #072d4f,#05192e)",
            width: "100%",
          }}
        >
          <Box className="slider-container">
            <Box
              style={{
                padding: "16px 10% 16px 10%",
                color: "#ffffff",
              }}
            >
              <Slider {...settings}>
                <Typography variant="h2">Logotipo 1</Typography>
                <Typography variant="h2">Logotipo 2</Typography>
                <Typography variant="h2">Logotipo 3</Typography>
                <Typography variant="h2">Logotipo 4</Typography>
              </Slider>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        ref={acercaRef}
        sx={{
          opacity: isIntersectingAcerca ? "1" : "0",
          transition: isIntersectingAcerca
            ? "opacity 1s ease-in-out"
            : "opacity 1s ease-in-out",
        }}
      >
        <About />
      </Box>
      <Box
        ref={portafoliosRef}
        sx={{
          opacity: isIntersectingPortafolios ? "1" : "0",
          transition: isIntersectingPortafolios
            ? "opacity 1s ease-in-out"
            : "opacity 1s ease-in-out",
        }}
      >
        <Portfolio />
      </Box>
      <Box
        ref={serviciosRef}
        sx={{
          opacity: isIntersectingServicios ? "1" : "0",
          transition: isIntersectingServicios
            ? "opacity 1s ease-in-out"
            : "opacity 1s ease-in-out",
        }}
      >
        <Services />
      </Box>
      <Box
        ref={contactosRef}
        sx={{
          opacity: isIntersectingContactos ? "1" : "0",
          transition: isIntersectingContactos
            ? "opacity 1s ease-in-out"
            : "opacity 1s ease-in-out",
        }}
      >
        <Contact />
      </Box>
    </Box>
  );
}

export default Home;
