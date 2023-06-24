const {Favorite} = require('../DB_connection');
const postFav = async (req,res) =>{

    try {
   const {id,name,origin, image, species,gender} =req.body   
   if(!id || !name || !origin || !image || !species || !gender )

    return res.status(400).json({message:"Faltan datos"})

     await Favorite.findOrCreate({
    where: {
        id,name, origin, image, species,gender
    }})
 const Favs=await postFav.findAll()
return res.status(200).json(Favs)

    } catch (error) {
     return res.status(500).json(error.message);   
    }
}
module.exports = postFav;
 
