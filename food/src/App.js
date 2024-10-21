import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/Placeorder/Placeorder'
import Footer from './Components/Footer/Footer'
import Loginpopup from './Components/LoginPopup/Loginpopup'


const App = () => {
  const [login,setLogin] =  useState(false)

  return (
    <>
  
    {login?<Loginpopup setLogin={setLogin} ></Loginpopup>:<></>}
       <div className='app'>
       <Navbar setLogin={setLogin}/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
       
        
      </Routes>
      
    </div>
    <Footer></Footer>
    </>
  )
}

export default App

