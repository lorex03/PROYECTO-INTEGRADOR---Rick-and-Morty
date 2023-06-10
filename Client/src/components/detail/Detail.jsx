import axios from "axios";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./detail.module.css";


const Detail =() =>{
  const {id}=useParams()
  


  useEffect(() => {
    axios((`http://localhost:3001/rickandmorty/character/${id}`)).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);
 
 // EL ID <= REPERESENTA LA DEPENDECIA QUE CUANDO CAMBIE EL ID SIGNIFICA QUE SE VUELVA A EJECUTAR EL useEffect


//o cada vez que lea un cambio
const [character,setCharacter]=useState({})
console.log(character)
return (
   <>
{character ? (
 <div className={styles.container}>
   <h1>Name:{character.name} </h1>
<h1>Specie:{character.species} </h1>
<h1>Gender:{character.gender} </h1>
<h1>From:{character.origin?.name}</h1>




<div className={styles.img}>
<img src ={character.image} alt="Not found"/>


</div>
</div>
):




<div>
LOADING
  </div>}


<Link to ={"/"} className={styles.container}>
   <div>
      Volver Atras
   </div>


</Link>


</>




);
};
export default Detail;
