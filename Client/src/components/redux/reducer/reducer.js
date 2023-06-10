import {ADD_FAV,REMOVE_FAV,FILTER,ORDER} from '../actions/types';


const initialState={
   myFavorites:[],
   allCharacters :[]
}


const rootReducer = (state=initialState, { type, payload} )=> {
switch(type) {


    case ADD_FAV:
        return{
     ...state,
     myFavorites:payload,
     allCharacters:payload
        }
     
        case REMOVE_FAV:
            return{
         ...state,
         myFavorites:payload
            }
           
        case FILTER:
         const filterchar=[...state.allCharacters].filter((char) => char.gender === payload )
         return {
            ...state,
            myFavorites:filterchar
         };


         case ORDER:
            const filtOrder=[...state.allCharacters].sort((a,b) => {
               if(a.id > b.id) {
                  return payload === "Ascendente"? 1 : -1
               }
               else if(a.id < b.id) {
                  return payload === "Descendente"? 1 : -1
               } else{
                  return 0
               }
            });
            return{
               ...state,myFavorites:filtOrder,
            }




            default:
            return {...state}
    }
   


    }
    export default  rootReducer;

