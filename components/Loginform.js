import React from "react";
import shesha from "../image/shesha.png";
import sheshalogin from "../image/sheshalogin.png";


function Loginform() {
    return (
        <section>
      <div className="container">
        <img src={sheshalogin} alt="sheshalogin" class="image1"/>
        
        
        <div className="container1"> 
        
        <img src={shesha} alt="shesha"/>
  
          <h1>Login</h1>
          <div>
          <input type="text" placeholder="Username" className="name"/>
          </div>
  
        <div>
          <input type="password" placeholder="Password" className="name" class="input2"/>
          </div>
          
        <button>Log In</button>
        <p class="p1">Do you an Account ? <a href="./components/signupform.js">Sign Up</a></p>
   
       <a href=""><p>Forgot password</p></a>
      
          </div>
   
  
       </div>
       </section>
     
    );
  }
  
  export default Loginform;
  