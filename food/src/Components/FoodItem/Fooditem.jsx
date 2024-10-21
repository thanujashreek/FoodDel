import React,{useContext} from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const Fooditem = ({id,name,price,description,image}) => {
const {cartItem,addTocart,removeFromcart}=useContext(StoreContext)
  return (
    <div className="fooditem">
        <div className="food-item-image-container">
            <img className='food-item-image' src={image} alt="" />
             {!cartItem
                 ?<img  className="add" onClick={()=>addTocart(id)}src={assets.add_icon_white} alt=''/>
                 :<div className='food-item-counter'> 
                 <img onClick={()=>removeFromcart(id)} src={assets.remove_icon_red} alt="" />
                 <p>{cartItem[id]}</p>
                 <img  onClick={()=>addTocart(id)}src={assets.add_icon_green} alt="" />
                  </div> 

              }
          
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default Fooditem
