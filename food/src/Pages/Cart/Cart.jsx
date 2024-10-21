import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, food_list, removeFromcart,getTotal } = useContext(StoreContext);
  const navigate= useNavigate();
  return (
    <div className="cart">
      <div className="cartitems">
        <div className="cartitemstitle">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div>
                <div className="cartitemstitle cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p onClick={()=>removeFromcart(item._id)} className="cross">x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cartbottom">
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
          <button onClick={()=>navigate('/order')}>Proceed To Check</button>

        </div>
      </div>
    </div>
  );
};

export default Cart;
