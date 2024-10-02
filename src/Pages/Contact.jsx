import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import "../css/styles.css";
import fotoRostro from "../images/FotoRostro.png";
import IconFacebook from "../images/logos--facebook.svg";
import IconLinkedin from "../images/devicon--linkedin.svg";
import IconGitHhub from "../images/simple-icons--github.svg";
import emailjs from "emailjs-com";

function Contact() {
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    title: "",
    to_name: "Miguel",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí llamas a la función para enviar el correo
    console.log("Enviando datos del formulario:", formData);
    sendEmail();
  };

  const sendEmail = () => {
    const serviceID = "service_50tsbvf";
    const templateID = "template_8ojmhan";
    const userID = "wF-WfK4kkgIA_Ken3";

    emailjs.send(serviceID, templateID, formData, userID).then(
      (response) => {
        console.log("Mensaje Enviado!", response.status, response.text);
        setFormData({
          name: "",
          email: "",
          title: "",
          message: "",
        });
        setOpenSnackbar(true);
      },
      (err) => {
        console.log("Error al enviar el Mensaje...", err);
      }
    );
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (
    <Box
      id="contact"
      sx={{
        height: "100%",
        padding: "100px 0 30px 0",
        margin: "0 20px 0 20px",
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
        CONTACTOS
      </Typography>
      <Box
        sx={{
          borderRadius: "10px",
          boxShadow: "10",
          elevation: "20px",
          padding: "10px 30px 10px 30px",
          margin: {
            xs: "20px 10px 0px 10px",
            sm: "20px 150px 0px 150px",
            md: "50px 100px 0px 100px",
          },
          height: "auto",
        }}
      >
        <Box sx={{ padding: "0" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "50px",
                }}
              >
                <img
                  className="dim-fotoRostro"
                  alt="foto de perfil"
                  src={fotoRostro}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
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
            <Grid item xs={12} sm={12} md={6} lg={8}>
              <Typography variant="h4" sx={{ padding: "10px 0 10px 0" }}>
                Hablemos de tu Proyecto
              </Typography>
              <Typography variant="body1" sx={{ padding: "10px 0 10px 0" }}>
                Estoy disponible para brindarte mis servicios, no dudes en
                contactarme te responderé en la brevedad posible, (Servicio
                Técnico Presencial solo disponible para LA PAZ-BOLIVIA)
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <TextField
                      variant="outlined"
                      color="primary"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      fullWidth
                      id="name"
                      label="Nombre Completo"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <TextField
                      variant="outlined"
                      color="primary"
                      autoComplete="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      fullWidth
                      id="email"
                      label="Correo"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                      variant="outlined"
                      color="primary"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      fullWidth
                      id="title"
                      label="Tipo de servicio"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                      variant="outlined"
                      color="primary"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      fullWidth
                      multiline
                      rows={4}
                      id="message"
                      label="Breve descripcion"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="secondary"
                      sx={{ borderRadius: "20px" }}
                    >
                      Enviar Mensaje
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Mensaje Enviado!!
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
