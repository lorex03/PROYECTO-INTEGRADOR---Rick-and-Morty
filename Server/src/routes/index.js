const getCharbyId = require('../controllers/getCharById.js');
const postFav= require('../controllers/postFav.js');
const deleteFav= require('../controllers/deleteFav.js');
const login= require('../controllers/login.js');

//para importar los controladores como corresponden fijarme en cada uno
//que coloque en el module.exports
const router = require('express').Router()
router.get('/character/:id',getCharbyId);
//en el caso de hacerlo de forma mas descripta cada ruta tiene un (req, res) del archivo que me traigo
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id',deleteFav);

module.exports = router;