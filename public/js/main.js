//const { eliminarPelicula } = require("../../controllers/adminController");

document.addEventListener('DOMContentLoaded', () => {
    const btnEliminar = document.querySelector("#btnEliminar")
    const editaPeli = document.querySelector("#editaPeli")
    const formulario = document.querySelector("formulario")


const burgerMenu = document.getElementById('burger-menu');
        const overlay = document.getElementById('menu');
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('close');
            overlay.classList.toggle('overlay');
        });

    document.addEventListener('click', async (ev) => {

        if (ev.target.id == "btnEliminar") {
            const valorID = ev.target;
            const ID = valorID.dataset.id
            console.log(ID)


            await eliminarPelicula(ID);
        }

        if (ev.target.id == "editaPeli") {
            const valorID = ev.target;
            const ID = valorID.dataset.id
            console.log(ID)


            await actualizarPelicula(ID);
        }

        if (ev.target.id == "crearPeli") {
            const valorID = ev.target;
            const ID = valorID.dataset.id
            console.log(ID)


            await actualizarPelicula(ID);
        }

    })

    formulario.addEventListener("submit", async (ev) => {

        ev.preventDefault()
        const peliCreada = {

            titulo: formulario.titulo.value,
            anio: formulario.anio.value,
            director: formulario.director.value,
            genero: formulario.genero.value,
            duracion: formulario.duracion.value

        }
        
        await crearPeli(peliCreada)
        
    })


    const eliminarPelicula = async (ID) => {

        try {
            const resp = await fetch(`https://bridge-movie-back.onrender.com/api/v1/movies/${ID}`, { method: "delete" });
            if (resp.ok) {
                console.log("eliminadi")
            }

        } catch (error) {
            console.log(error)
        }

    }

    const actualizarPelicula = async (peliCambiada) => {

        try {
            const resp = await fetch(`https://bridge-movie-back.onrender.com/api/v1/movies/64cba3bb31ecfd5375c4dc9d`, { method: "put" }, json.stringify(peliCambiada) );
            if (resp.ok) {
                console.log("modificado")
            }

        } catch (error) {
            console.log(error)
        }

       

    }

    const crearPeli = async (peliCreada) => {

        try {
            const resp = await fetch(`http://localhost:3000/api/v1/movies/`, { method: "post" }, json.stringify(peliCreada) );
            if (resp.ok) {
                console.log("creada")
            }

        } catch (error) {
            console.log(error)
        }

       

    }






})//LOAD