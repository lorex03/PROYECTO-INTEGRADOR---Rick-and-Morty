import style from  './Cards.module.css';
import Card from  '../card/Card';

export default function Cards({characters,onClose}){
 
  return (
    <div className={style.targets}> 
   
   {
  characters.map(({ id, name, species, 
    gender, origin, image }) =>  {
    return ( 
    <Card
        key={id}
         id={id}      
         name={name}
          species={species}
          gender={gender}
          image={image}
          origin={origin.name}
          onClose={ onClose}
          
    
        />
      );
    })
    }
    
    </div>
  );

}






