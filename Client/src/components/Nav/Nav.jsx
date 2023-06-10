import SearchBar from"../SearchBar/SearchBar";
import {Link} from "react-router-dom";


const Nav = ({onSearch})=>{
    return(
<div>
<Link to ="/home">
<button> Home </button>
</Link> 

<Link to ="/about">
<button> ABOUT </button>
</Link> 

<Link to ="/favorites">
<button> FAV </button>
</Link> 


<SearchBar onSearch={onSearch}/>

 </div>
       );
 };

 export default Nav;

