
import { useState } from 'react';
import style from './SearchBar.module.css'

 

    export default function SearchBar({onSearch}) {
  
       const[id,setId]=useState('')
    const handleChange=(event) => {
         setId(event.target.value)
         
      }
 return (
   
      <div className={style.search} >
          <input type="search"
           onChange={handleChange}
          value={id}
          />
          
          <button onClick= {() => onSearch(id)}>Agregar</button>
          
      </div>
     
   );
}

 