import React from 'react'
import {useCart} from 'react-use-cart' 

export default function Items(props) { 
  const { addItem } = useCart()
  return (
    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'> 
        <div class='card p-0 overflow-hidden h-100 shadow' style={{borderRadius:'10px'}}>
            <img src={props.img} /> //  
            <div class='card-body text-center'>
                <h5 class='card-title'>{props.name}</h5>
                <h5 class='card-title'>{props.price} $</h5>
                <button class='btn btn-success' style={{color: 'black', backgroundColor:"transparent"}}
                onClick={()=> addItem(props.item)}>Add To Cart</button>

            </div>
        </div>
    </div>
  )
}