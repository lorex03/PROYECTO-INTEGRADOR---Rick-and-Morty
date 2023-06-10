import style from  './Form.module.css';
import { useState } from "react";
import {validations} from '../.././validations/validation.js' ; 



const Form= ({login}) => {

const[userData, setUserData]=useState({
    email:"",
password:"",})

const[errors,setErrors]=useState({
    email:"",
    password:"",
})


const handleChange=(e) => {
const{name,value}= e.target
const NewUserData= {...userData,[name] :value }

setUserData(NewUserData)

const errors = validations(NewUserData)
setErrors(errors)

};

const handleSubmit=(e)=> {
e.preventDefault()
login(userData)


};
return (
<form onSubmit = {handleSubmit} >

<h1 classname = {style.fo}> 

<label>Email</label>

<input 
type="text" 
placeholder="Email..."
name ="email" 
onChange={handleChange}
value={userData.email}
 />
{errors.email && <p style={{color:"red"}} >{errors.email}</p> }


</h1>

<h1>
<label >Password </label>
<input type="Password" 
placeholder="Password..."
name="password" 
onChange={handleChange}
value={userData.password} 
/>
{errors.password && <p style={{color:"red"}} >{errors.password}</p> }


</h1>

<button >Submit</button>





</form>
);
};
export default Form;
