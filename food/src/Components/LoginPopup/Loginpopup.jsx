import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'

const Loginpopup = ({setLogin}) => {
    const[currentstate,setCurrentstate]=useState("Login")
  return (
   <div className="login-pop-up">
       <form  className='login-container'>
        <div className="login-title">
            <h2>{currentstate}</h2>
            <img  onClick={()=>setLogin(false)}src={assets.cross_icon} alt="" />
        </div>
        <div className="logininput">
            {currentstate==="Login"?<></>:<input type='text' placeholder=' Your name' required></input>}
            <input type="email" placeholder='your email' required />
            <input type="password" placeholder='password' required />
        </div>
        <button>{currentstate==="Sign Up"?"Create account":"Login In "}</button>
        <div className="logincondition">
            <input type="checkbox" required />
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
         {currentstate==="Login"?<p>Create A new Account?<span onClick={()=>setCurrentstate("Sign Up")}>Click Here</span></p>:<p>Already have an account?<span onClick={()=>"Login"}>Login here</span></p>}
         
        
       </form>
   </div>
  )
}

export default Loginpopup
