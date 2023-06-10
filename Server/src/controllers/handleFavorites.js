let myFavorites = [];
const postFav = ((req,res) => {

const char=req.body
myFavorites.push(char)
return res.status(200).json(myFavorites)



})
const deleteFav= ((req,res) => {
  const {id}=req.params
  const Favfilt =myFavorites.filter(fav => fav.id !== +id );
  //prefiero hacer una constante para tener la copia de el array original y no modificarlo directamente 
  return res.status(200).json(Favfilt) 

})


module.exports = {
    postFav,
    deleteFav
}