//Mostrar tabla de las peliculas
const getPeliculas = async (req, res) => {
    try {

        const resp = await fetch('http://localhost:4000/api/v1/movies')
        console.log(resp.data)

        if (resp.ok) {
            const peliculas = await resp.json()
            console.log(peliculas)
            res.render('admin/moviesAdmin.ejs', {
                titulo: 'Peliculas',
                peliculas: peliculas.data
            })

        }

    } catch (error) {
        console.log(error)

    }

}

//Mostrar formulario de 'crear' pelicula
const vistaCrearPelicula = (req, res) => {
    res.render('admin/crearMovie')

    // const {titulo, imagen, genero, anio, director, duracion}=req.body

}

//Enviar la pelicula a la api de crear
const nuevaPelicula = async (req, res) => {

    const { titulo, imagen, genero, anio, director, duracion } = req.body
    const body = {
        titulo,
        imagen,
        genero,
        anio,
        director,
        duracion
    }

    //CONFIRMAR RUTA
    const respuesta = await fetch('http://localhost:3000/api/v1/movies', {
        method: 'post',
        body: JSON.stringify(body),
        //EN LA DOCUMENTACION DE LA CLASE DE FETCH
        headers: {
            'Content-Type': 'application/json'
        }

    })

    //CONFIRMAR RUTA
    res.redirect('/admin/movies/crearMovie')
}

//Mostrar el formulario de 'editar' pelicula
const vistaEditarPelicula =(req,res)=>{
        //recoger el id

        //comprobar si hay servicio con ese id

        //      si existe renderizamos la pagina de editar
//     res.render('admin/editarMovie', {

// })
}


//Enviar la pelicula a la api de editar
const editarPelicula = async (req,res)=>{
    //req.params o req.body para coger el id de la pelicula que queremos editar
    //fetch request a la endpoint del api para actualizar pelicula
    //response/redirect
}


//Eliminar la pelicula de la api de eliminar
const eliminarPelicula = async (req,res)=>{
    //req.params o req.body para coger el id de la pelicula que queremos eliminar
    //fetch request a la endpoint del api para eliminar pelicula
    //response/redirect

}


module.exports = {
    getPeliculas,
    vistaCrearPelicula,
    nuevaPelicula,
    vistaEditarPelicula,
    editarPelicula,
    eliminarPelicula

}
