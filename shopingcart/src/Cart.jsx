import React from 'react'
import {useCart} from 'react-use-cart' ; 

export default function Cart() { 
    const {
          isEmpty,
          items,
          totalItems,
          cartTotal,
          updateItemQuantity,
          removeItem,
          } = useCart();
          if(isEmpty) return <h1 className='text-center'>Your Cart is Empty</h1>
  return (
     <section className='py-4 container'>
        <div className='row justify-content-center'>
            <div className='col-12'>
                <h5>Cart ({totalItems})</h5>
                <table className='table table-hover m-0'>
                    <tbody>
                        {items.map((item, index)=>{  
                            return(
                                <tr key={index}>
                                    <td><img src={item.img} style={{height: '6rem'}} /></td>
                                    <td style={{fontSize:'25px'}}>{item.name}</td>
                                    <td style={{fontSize:'25px'}}>{item.price} $</td>
                                    <td style={{fontSize:'25px'}}>Quantity({item.quantity})</td>

                                    <td className='btn btn-info ms-2' style={{background: 'lightblue'}} onClick={()=> updateItemQuantity(item.id, item.quantity -1)} >-</td> 
                                    <td className='btn btn-info ms-2' style={{background: 'lightblue'}} onClick={()=> updateItemQuantity(item.id, item.quantity +1)}>+</td>
                                    <td className='btn btn-danger ms-2' style={{background: 'darkred'}} onClick={()=> removeItem(item.id)}>Remove Item</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className='col-auto ms-auto'>
                <h2>Total Price: {cartTotal} $</h2>
            </div>
                        <div className='col-auto'>
                <button className='btn btn-primary'>Buy</button>
            </div>


       </div>
     </section>
  )
}