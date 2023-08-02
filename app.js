// INCIALIZAR PUERTO CON EXPRESS
const express = require('express');
require('dotenv').config()

const app = express();

const port = process.env.PORT;

// CARPETA ESTÁTICA
app.use(express.static(__dirname + '/public'));

// CONFIGURAR INGENIERIA DE PLANTILLAS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// LLAMAR RUTAS FRONT
app.use("/", require("./routes/frontRoutes"));
app.use("/admin", require('./routes/adminRoutes'))

// LLAMAR A POSIBLE ERROR
app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: 'ERROR 404'
    });
});

// MANTENER PUERTO A LA ESCUCHA
app.listen(port, () => {
    console.log(`servidor front a la escucha del puerto ${port}`);
});
