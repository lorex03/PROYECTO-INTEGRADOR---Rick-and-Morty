const {User} = require('../DB_connection');

const login = async (req,res) =>{
    try {
        const {email,password} =req.query;
        
        if(!email || !password){
         return res.status(400).json({message:"Faltan datos"})
     }     
     const [user] = await User.findOne({
         where: {
             email: email,
         }
     });

     if(!user)
      return res.status(404).json({message:"Usuario no encontrado"})
     
     if(user.password != password)
        return res.status(403).json({message:"Contraseña incorrecta"})
    
        return res.status(200).json({
            access: true,
         });
        
    
    } catch (error) {
          return res.status(500).json(error.message);   
         }
     
        }
module.exports = login;