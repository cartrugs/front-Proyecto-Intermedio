
const logIn = (req, res) => {
    res.render('usuario.ejs', { titulo: 'Pelis the Bridge' });
};

const signUp = (req, res) => {
    res.render('nuevoUsuario.ejs', { titulo: 'Crea tu cuenta' });
};
const searchPeli = (req, res) => {
    res.render('buscaMovie.ejs', { titulo: 'Buscador' });
};

const gotPeli = async (req, res) => {

    try {
        const resp = await fetch(`https://bridge-movie-back.onrender.com/api/v1/movies`);

        if (resp.ok) {
            const peliculas = await resp.json();
            
            res.render('moviesEncontradas.ejs', {
                titulo: 'Películas encontradas:',
                peliculas: peliculas.data
            });
        };
    } catch (error) {
        console.log(error);
    };
};



module.exports = {
    logIn,
    signUp,
    searchPeli,
    gotPeli
};