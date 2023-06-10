const users = require('../utils/users.js')


const login=((req,res) => {
const {email,password}=req.query

const userValid=users.find((user)=> user.email === email &&
user.password === password)

return userValid ?  
res.status(200).json({access:true})
: res.status(404).json({access:true})
//utilizo ternarios , es otra forma en vez de usar if
})







module.exports={
    login
};