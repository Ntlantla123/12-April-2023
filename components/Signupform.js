import React from "react";
import shesha from "../image/shesha.png";
import newshesha from "../image/newshesha.png";


function Signupform() {
    return (
        <section>
      <div className="container">
        
        <img src={newshesha} alt="newshesha" class="image1"/>
        
        
        <div className="container1"> 
        
        <img src={shesha} alt="shesha"/>
  
          <h1>Sign Up</h1>
          <div>
          <input type="text" placeholder="Name" className="name"/>
          </div>

          <div>
          <input type="text" placeholder="Surname" className="Surname" class="input1"/>
          </div>
  
        <div>
          <input type="password" placeholder="Password" className="name" class="input2"/>
          </div>

          <div>
          <input type="password" placeholder="Confirm Password" className="name" class="input3"/>
          </div>
          
        <button>Sign Up</button>
        
   
      <input type="checkbox" class="checkbox"/>
      <label> Remember Me</label>
          </div>
   
  
       </div>
       </section>
     
    );
  }
  
  export default Signupform;
  



      
     