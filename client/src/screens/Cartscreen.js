import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addToCart } from '../actions/cartAction'
import { deleteFromCart } from '../actions/cartAction'
import Aos from 'aos'
import 'aos/dist/aos.css';

export default function Cartscreen() {

    Aos.init()

      const cartstate = useSelector(state=>state.cartReducer)
      const cartItems = cartstate.cartItems 
      var subtotal = cartItems.reduce((x , item)=> x+item.price,0)
      const dispatch= useDispatch()
  return (
    <div>
    <div className="row justify-content-center p-2" data-aos='fade-down'>
         
         <div className='col-md-6'>
            <h2 style={{fontSize:'40px'}}><b>MY CART</b></h2>
            {cartItems.map(item=>{
                return( <div className='flex-conatiner'>

                    <div className='' >
                        <h1>{item.name} [{item.varient}]</h1>
                        <h1>price : {item.quantity}*{item.prices[0][item.varient]}={item.price}</h1>
                        <h1 style={{display :'inline'}}>Quantity  :</h1>
                        <i className="fa fa-plus" onClick={()=>{dispatch(addToCart(item,item.quantity+1,item.varient))}}></i>
                        <b>{item.quantity}</b>
                        <i className='fa fa-minus' onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.varient))}}></i>
                        {/* <img src={item.image} style={{height:'80px',width:'80px'}}/> */}
                        {/* <i className='fa fa-trash'></i> */}

                        
                    </div>


                     <div className='m-1 w-100'>
                        <img src={item.image} style={{height:'80px',width:'80px'}}/>
 
                    </div>


                    <div className='m-1 w-100 mt-4'>
                    <i className='fa fa-trash'onClick={()=>{dispatch(deleteFromCart(item))}}></i>

                    </div> 
             <hr></hr>


             </div> )
                
            })}

            
         </div>
         <div className='col-md-4 text-right '>
            <h2 style={{fontSize:'45px'}}>subTotal : {subtotal} /-</h2>
            <button className='btn'>PAY NOW </button>

         </div> 
        {/* </div> */}


    </div>
    </div>
  )
}
