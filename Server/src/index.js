const server = require("./app")
const PORT = 3001;
const { database } = require('./DB_connection');
//console.log(conn)
database.sync({ force: false }).then(() => {
   server.listen(PORT, () => {
     console.log("Server raised");
   });
});
