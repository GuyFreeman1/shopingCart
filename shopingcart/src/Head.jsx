import React from 'react';
import Items from './Items.jsx'; 
import Data from './Data.jsx'; 
import logo2 from './logo2.png'; 
import './Head.css'; 

export default function Head() {
  return (
     <><br />
<div class='logo'><img src={logo2} height={'230px'} /></div>
     <section className='py-4 container'> 
            <div className='row justify-content-center'>
              {Data.productInfo.map((item, index)=>{ 
                return( 
               <Items img={item.img}
                      name={item.name}
                      price={item.price}
                      item={item}
                      key={index}/>)
              })}
            </div>

        </section>



    </>
  )
};
