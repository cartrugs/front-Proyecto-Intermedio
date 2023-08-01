const getPelis = async (req, res) => {

    try {
        const resp = await fetch('');

        if (resp.ok) {
            const pelis = await resp.json();
            
            res.render('', {
                titulo: 'Películas encontradas:',
                pelis: pelis.data
            });
        };
    } catch (error) {
        console.log(error);
    };
};



module.exports = {
    getPelis
};