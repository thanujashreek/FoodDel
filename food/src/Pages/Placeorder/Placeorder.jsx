import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../Context/StoreContext'

const Placeorder = () => {
  const{getTotal}=useContext(StoreContext)
  return (
   <form  className='placeorder'>
    <div className="left">
      <p className="title">
        Delivery Info
      </p>
      <div className="multifield">
        <input type="text"placeholder='First name' />
        <input type="text" placeholder='Last name' />
      </div>
      <input type="email"placeholder='Email Address' />
      <input type="text"placeholder='Street' />
      <div className="multifield">
        <input type="text"placeholder='City' />
        <input type="text" placeholder='State' />
      </div>
      <div className="multifield">
        <input type="text"placeholder='Pincode' />
        <input type="text" placeholder='Country' />
      </div>
      <input type="text" placeholder='Phone number' />

      
    </div>
    <div className="right">
    <div className="carttotal">
          <h2>Cart Total</h2>
          <div>
            <div className="carttotaldetails">
              <p>Cart Total</p>
              <p>${getTotal()}</p>
            </div>
            <hr />
            <div className="carttotaldetails">
              <p>Delivery Fee</p>
              <p>${getTotal()===0 ?0:2}</p>
            </div>
            <hr />
            <div className="carttotaldetails">
              <b>Total</b>
              <b>${getTotal()===0?0:getTotal()+2}</b>
            </div>
            
          </div>
          <button >Proceed To Payment</button>

        </div>


    </div>

   </form>
  )
}

export default Placeorder
