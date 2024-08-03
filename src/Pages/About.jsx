import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import FotoPerfil2 from "../images/FotoPerfil2.png";
import DownloadButton from "../class/DownloadButton";
import IconReact from "../images/logos--react.svg";
import IconHtml from "../images/devicon--html5.svg";
import IconCss from "../images/devicon--css3.svg";
import IconJavascript from "../images/skill-icons--javascript.svg";

function About() {
  return (
    <Box
      id="about"
      sx={{
        height: "100%",
        padding: "100px 0 30px 0",
        margin: "0 20px 0 20px",
        color: "#ffffff",
      }}
    >
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} ms={12} md={6}>
            <Box sx={{ padding: "0 20px 0 20px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  //paddingTop: "50px",
                }}
              >
                <img
                  className="dim-imagen-about"
                  alt="foto de perfil"
                  src={FotoPerfil2}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} ms={12} md={6}>
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
              SOBRE MI
            </Typography>
            <Box sx={{ width: "80%", margin: "20px 0" }}>
              <Box
                sx={{
                  borderRadius: "10px",
                  boxShadow: "10",
                  elevation: "20px",
                  padding: "10px 20px 10px 20px",
                  lineHeight: "2",
                  fontSize: "19px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ lineHeight: "2", fontWeight: "bold" }}
                >
                  ¿QUIEN SOY?
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ lineHeight: "2", fontWeight: "bold", color: "#0788ff" }}
                >
                  MIGUEL CALLIZAYA - DESARROLLADOR WEB / SOPORTE TI
                </Typography>
                <Typography sx={{ lineHeight: "1.5" }}>
                  Profesional en Ingeniería Informática con experiencia en
                  Soporte de Tecnologias Informaticas (TI), capacidad de
                  resolución de problemas. Desarrollador y Direñador Web,
                  experto brindado una atencion al cliente de manera
                  profesional. <br />
                </Typography>
              </Box>
            </Box>
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
              MIS HABILIDADES
            </Typography>
            <Box sx={{ textAlign: "center", width: "80%", marginTop: "20px" }}>
              <Box
                sx={{
                  borderRadius: "10px",
                  boxShadow: "10",
                  elevation: "20px",
                  //padding: "10px 20px 10px 20px",
                }}
              >
                <img className="dim-icon" src={IconHtml} alt="Icon Html5" />
                <img className="dim-icon" src={IconCss} alt="Icon Css3" />
                <img
                  className="dim-icon"
                  src={IconJavascript}
                  alt="Icon JavaScript"
                />
                <img className="dim-icon" src={IconReact} alt="Icon React" />
              </Box>
              <Box
                sx={{
                  textAlign: "left",
                  paddingTop: "15px",
                }}
              >
                <DownloadButton />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default About;
