import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPizza } from '../actions/pizzaAction'
import Loading from '../components/loading'
import Error from '../components/error'
import Sucess from '../components/sucess'


export default function Addpizza() {
  const [name, setname] = useState('')
  const [smallprice, setsmallprice] = useState(100)
  const [mediumprice, setmediumprice] = useState(200)
  const [largeprice, setlargeprice] = useState(300)
  const [image, setimage] = useState('')
  const [description, setdescription] = useState('')
  const [category, setcategory] = useState('')
   const dispatch=useDispatch()
   const addPizzastate=useSelector(state=>state.addPizzaReducer)
   const {sucess, error, loading} = addPizzastate
   function formHandler(e){
      
     e.preventDefault();

     if(name.length==0 || smallprice==[null] || image==""|| description.length==""||category.length=="")
        {
            alert('enter valid details')
        }
        else{
     const pizza ={
       name,
       image, 
       description,
       category,
       prices:{
            small: smallprice,
            large : largeprice,
            medium: mediumprice
       }
     }
      console.log(pizza)
      dispatch(addPizza(pizza))
    }
   }
  return (
    <div>
      <div className='text-left shadow-lg p-3 mb-5 bg-white rounded'>
        <h1>ADD PIZZA</h1>
        {loading && (<Loading/>)}
        {error && (<Error error="something went wrong"/>)}
        {sucess && (<Sucess sucess= 'new pizza added sucessfully'/>)}

        <form onSubmit={formHandler}>
          <input className='form-control' type="text" placeholder='name' value={name} onChange={(e) => { setname(e.target.value) }} />
          <input className='form-control' type="number" placeholder='small varient price' value={smallprice} onChange={(e) => { setsmallprice(e.target.value) }} />
          <input className='form-control' type="number" placeholder='medium varient price' value={mediumprice} onChange={(e) => { setmediumprice(e.target.value) }} />
          <input className='form-control' type="number" placeholder='large varient price' value={largeprice} onChange={(e) => { setlargeprice(e.target.value) }} />
          <input className='form-control' type="text" placeholder='category' value={category} onChange={(e) => { setcategory(e.target.value) }} />
          
          <input className='form-control' type="text" placeholder='description' value={description} onChange={(e) => { setdescription(e.target.value) }} />
          <input className='form-control' type="text" placeholder='image' value={image} onChange={(e) => { setimage(e.target.value) }} />
          
          
          
         <button className='btn mt-3' type="submit">Add pizza</button> 
        </form>
      </div>
    </div>
  )
}
