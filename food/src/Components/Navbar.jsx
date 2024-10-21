import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext'

const Navbar = ({setLogin}) => {
    const [menu,setMenu]=useState("menu");
    const{getTotal}=useContext(StoreContext);
  return (
   <div className="navbar">
    <img src={assets.logo} alt="" className="logo" />
   <ul className="navbar-menu">
    <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
    <a   href="#explore-menu" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
    
    <a  href="#footer"onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
   </ul>
   <div className="navbar-right">
    <img src={assets.search_icon} alt="" />
    <div className="navbar-searchicon">
        <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
        <div className={getTotal()===0 ?"":"dot"}></div>
        
    </div>
    <button onClick={()=>setLogin(true)}>Sign In</button>
   </div>
   </div>
  )
}

export default Navbar
