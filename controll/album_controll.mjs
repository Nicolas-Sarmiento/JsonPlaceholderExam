

async function get_all_albums(req, res) {
    try{
       const response = await fetch('https://jsonplaceholder.typicode.com/albums/');
       const albums = await response.json();

        res.render('index', { albums });
    }catch(err){
        res.status(500).send('Error al obtener los datos');
    }

}


async function get_album_by_id(req, res) {
    try{
        const { id } = req.params;
        const url = 'https://jsonplaceholder.typicode.com/albums/'+id;
        const response = await fetch(url);
        const album = await response.json();
        const albums = [album]
        res.render('index', { albums });
    }catch(err){
        res.status(500).send('Error al obtener los datos');
    }
}


export {
    get_album_by_id,
    get_all_albums,
}