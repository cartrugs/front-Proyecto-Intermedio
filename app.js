// INCIALIZAR PUERTO CON EXPRESS
const express = require('express');
require('dotenv').config()

const app = express();

//CONEXIÓN BBDD
// dbConnect();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())

const port = process.env.PORT;

// const multer = require('multer')
// const upload = multer({dest: '/public/assets/uploads'})

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

//MULTER UPLOADS
// app.post('/stats', upload.single('uploaded_file'), function (req, res) {
//     console.log(req.file, req.body)
// });


// MANTENER PUERTO A LA ESCUCHA
app.listen(port, () => {
    console.log(`servidor front a la escucha del puerto ${port}`);
});
