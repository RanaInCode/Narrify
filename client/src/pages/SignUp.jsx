import "./pages.css"
import axios from 'axios';
import { useState } from 'react';
import MyImage from "../images/login.jpg"

export default function SignUp(){

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [message, setMessage] = useState('');
   const [username, setUsername] = useState('');
   const [isError, setIsError] = useState(false);

   function handleEmailChange(e){
      setEmail(e.target.value);
   }
   function handlePasswordChange(e){
      setPassword(e.target.value);
   }
   
   function handleUsernameChange(e){
      setUsername(e.target.value);
   }

   function handleOnClick(){
       axios.post("http://localhost:3000/signup",{
         username: username,
         email: email,
         password: password
       }).then((res)=>{
            console.log(res.data.msg);
            setMessage(res.data.msg);
            setIsError(false);
       }).catch((err)=>{
         console.log(err);
            console.log(err.response.data.msg);
            setMessage(err.response.data.msg);
            setIsError(true);
       })    
       }

    return(
      <>
         <div className="image-container"><img src={MyImage} ></img></div>
         <div className="container">
            <div className="login">
                 <h1 style={{ fontFamily: "Dancing Script, cursive" }}>Narrify</h1>
                 <h3>Welcome to the narrators world</h3>
                 <input
                     className="login-input"
                     type="text" 
                     onChange={handleUsernameChange} 
                     placeholder="Username">
                 </input>
                 <input 
                     className="login-input" 
                     type="text" 
                     onChange={handleEmailChange} 
                     placeholder="Email" 
                  />
                 <input
                     className="login-input" 
                     type="password" 
                     onChange={handlePasswordChange} 
                     placeholder="Password" 
                  />
                 <button className="login-button" onClick={handleOnClick}>Sign Up</button>
                 <div style={{ color: isError? "red": "green", marginTop:" 4px" }}>{message}</div>
                 <p className="or-divider">or</p>
                 <button className="google-signin">Sign Up with Google</button>
            </div>

         </div>
      </>
    )
  }

  