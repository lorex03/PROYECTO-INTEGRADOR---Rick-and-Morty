import style from "./Card.module.css";
import { Link } from "react-router-dom";
import {addFav,removeFav} from "./../redux/actions/actions.js";
import {connect} from 'react-redux';
import{useState,useEffect} from 'react';


function Card (props)  { 
const [isFav,setisFav]=useState(false);


const handleFavorite = (e)=>{
  e.preventDefault();
if (isFav) {  
  setisFav(false);
  props.removeFav(props.id);
}
else{
  setisFav(true);
  props.addFav(props);
}

};

useEffect(() => {
  props.myFavorites.forEach((favCard) => {
    
    if (favCard.id === props.id) {
     setisFav(true);
    }
 });
}, [ props.myFavorites]);

return(
<div className={style.target} key={props.id}>

<div> 

<button className={style.bot} 
onClick={() => props.onClose(props.id)}>   X  </button>
</div>

<div className={style.targets}>
         {
            isFav ? (
           <button onClick={handleFavorite}>❤️</button>
     )
        : (
       <button onClick={handleFavorite}>🤍</button>
            )
         }


<Link to={`/detail/${props.id}`} >
  <h3 className="card-name">{props.name}</h3>
</Link>


<h2>Specie:{props.species} </h2>
<h2>Gender:{props.gender} </h2>
<h2>From:{props.origin}</h2>


</div>


<div className={style.img}>
<img src ={props.image} alt="Not found"/>
</div>
</div>

);
};

export function mapDispatchToProps(dispatch){
  return {
    
    addFav:(char)=> dispatch(addFav(char)), removeFav: (id) => dispatch(removeFav(id))
  }
}

export function mapStateToProps(state){
return {
myFavorites: state.myFavorites,
}

}




export default connect (mapStateToProps,mapDispatchToProps)(Card);