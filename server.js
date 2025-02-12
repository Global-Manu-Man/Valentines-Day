const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Ruta opcional para redirigir a index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor activo en http://localhost:${port}`);
});