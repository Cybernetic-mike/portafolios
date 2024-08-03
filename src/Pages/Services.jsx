import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import services1 from "../images/services-1.png";
import services2 from "../images/services-2.png";
import services3 from "../images/services-3.png";
import services4 from "../images/services-4.png";

function Services() {
  const description = {
    position: "absolute",
    bottom: "0",
    textAlign: "left",
    padding: "20px 0 5px 5px",
    background:
      "linear-gradient(to top, rgb(0,0,0),rgba(0,0,0,0.7),rgba(0,0,0,0))",
  };
  return (
    <Box
      id="services"
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
        SERVICIOS
      </Typography>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: "20px" }}>
          AQUI TE MUESTRO TODOS LOS SERVIVIOS QUE BRINDO
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          height: "auto",
          padding: {
            xs: "20px 40px 0px 40px",
            sm: "20px 150px 0px 150px",
            md: "100px 100px 0px 100px",
          },
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12} ms={6} md={6} lg={3}>
            <Box>
              <figure className="figure-servicios">
                <img className="dim-imagen-servicios" src={services1} alt="" />
                <Box sx={{ ...description }}>
                  <Typography
                    variant="body1"
                    sx={{
                      display: "inline",
                      fontWeight: "bold",
                      padding: "8px",
                      borderRadius: "5px",
                      color: "#ffffff",
                      textAlign: "left",
                      background: "rgb(6,53,96, 0.7)",
                    }}
                  >
                    Desarrollo Web
                  </Typography>
                  <Typography>
                    Puedo crear tu página web personalizada, con un diseño
                    responsivo y moderno que se adapte a cualquier dispositivo
                  </Typography>
                </Box>
              </figure>
            </Box>
          </Grid>
          <Grid item xs={12} ms={6} md={6} lg={3}>
            <Box>
              <figure className="figure-servicios">
                <img className="dim-imagen-servicios" src={services2} alt="" />
                <Box sx={{ ...description }}>
                  <Typography
                    variant="body1"
                    sx={{
                      display: "inline",
                      fontWeight: "bold",
                      padding: "8px",
                      borderRadius: "5px",
                      color: "#ffffff",
                      textAlign: "left",
                      background: "rgb(6,53,96, 0.7)",
                    }}
                  >
                    Diseño Grafico
                  </Typography>
                  <Typography>
                    Te ayudo a crear anuncios, logos y marcas con un estilo
                    personalizado y minimalista que resalte entre los demás
                  </Typography>
                </Box>
              </figure>
            </Box>
          </Grid>
          <Grid item xs={12} ms={6} md={6} lg={3}>
            <Box>
              <figure className="figure-servicios">
                <img
                  width={400}
                  className="dim-imagen-servicios"
                  src={services3}
                  alt=""
                />
                <Box sx={{ ...description }}>
                  <Typography
                    variant="body1"
                    sx={{
                      display: "inline",
                      fontWeight: "bold",
                      padding: "8px",
                      borderRadius: "5px",
                      color: "#ffffff",
                      textAlign: "left",
                      background: "rgb(6,53,96, 0.7)",
                    }}
                  >
                    Tutoría Personalizada
                  </Typography>
                  <Typography>
                    Si tienes problemas con la programación o quieres empezar en
                    este mundo del desarrollo, puedo ayudarte a mejorar tus
                    habilidades.
                  </Typography>
                </Box>
              </figure>
            </Box>
          </Grid>
          <Grid item xs={12} ms={6} md={6} lg={3}>
            <Box>
              <figure className="figure-servicios">
                <img className="dim-imagen-servicios" src={services4} alt="" />
                <Box sx={{ ...description }}>
                  <Typography
                    variant="body1"
                    sx={{
                      display: "inline",
                      fontWeight: "bold",
                      padding: "8px",
                      borderRadius: "5px",
                      color: "#ffffff",
                      textAlign: "left",
                      background: "rgb(6,53,96, 0.7)",
                    }}
                  >
                    Soporte Tecnico
                  </Typography>
                  <Typography>
                    Brindo servicios de Soporte Tecnico a domicilio y virtual,
                    solo contactame y te dare un diagnostico sin costo
                  </Typography>
                </Box>
              </figure>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Services;
