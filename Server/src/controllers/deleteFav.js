const {Favorite} = require('../DB_connection');
const deleteFav = async (req,res) =>{

    try {
   const {id} =req.params   
   if(!id ) return res.status(400).json({error:"Faltan Datos"})

     await Favorite.destroy({
    where: {
        id:id
    }})
 const All=await deleteFav.findAll()
return res.status(200).json(All)

    } catch (error) {
     return res.status(500).json({error:error.message});   
    }
}
module.exports = deleteFav;