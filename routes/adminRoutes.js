const express = require('express');
const router = express.Router();


const {
    getPeliculas,
    vistaCrearPelicula,
    nuevaPelicula,
    editarPelicula,
    eliminarPelicula,
    vistaEditarPelicula
} = require('../controllers/adminController');


//Mostrar tabla de las peliculas
router.get('/', getPeliculas)

//Mostrar formulario de 'crear' pelicula
router.get('/crear', vistaCrearPelicula)

//Enviar la pelicula a la api de crear
router.post('/nueva', nuevaPelicula)

//Mostrar el formulario de 'editar' pelicula
router.get('/editar', vistaEditarPelicula)

//Enviar la pelicula a la api de editar
router.put('/editada', editarPelicula)

//Eliminar la pelicula de la api de eliminar
router.delete('/eliminar', eliminarPelicula)


module.exports = router