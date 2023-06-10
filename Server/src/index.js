const express = require('express')
const router = require('../src/routes/index.js')
const server = express(); //para inicializarlo aunque tambien podria hacerlo misma en la primer linea ejecutarlo con ()
const PORT = 3001;

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use(express.json());

server.use("/rickandmorty", router);


server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});