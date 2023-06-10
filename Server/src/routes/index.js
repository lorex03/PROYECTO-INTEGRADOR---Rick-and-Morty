const getCharbyId = require('../controllers/getCharById.js');
const { postFav,deleteFav}= require('../controllers/handleFavorites.js');
const {login}= require('../controllers/login.js');
//para importar los controladores como corresponden fijarme en cada uno
//que coloque en el module.exports
const router = require('express').Router()
//en vez de hacer otra constante lo ejecuto cuando ya me traigo express
router.get('/character/:id',getCharbyId);
//esta es la forma mas corta y dinamica ,sino me acuerdo que cada funcion lo que pide es un request ( req), y un response(res)
//en el caso de que no me acuerde que cada ruta tiene un (req, res) del archivo que me traigo
router.get('/login', login);

router.post('/fav', postFav);

router.delete('/fav/:id',deleteFav);

module.exports = router;