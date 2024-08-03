import { Button } from "@mui/material";
import React from "react";
import GetAppIcon from "@mui/icons-material/GetApp";

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CVMiguel.pdf"; // Ruta al archivo PDF en la carpeta public
    link.download = "CV-Miguel-Callizaya.pdf"; // Nombre del archivo que se descargará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      size="small"
      color="info"
      startIcon={<GetAppIcon />}
      variant="contained"
      onClick={handleDownload}
      sx={{ borderRadius: "20px" }}
    >
      Descargar CV
    </Button>
  );
};

export default DownloadButton;
