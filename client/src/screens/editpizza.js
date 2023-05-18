import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { editPizza, getPizzaById } from '../actions/pizzaAction';
import Loading from '../components/loading'
import Error from '../components/error'
import Sucess from '../components/sucess'











export default function Editpizza() {
  const { pizzaid } = useParams();

  const dispatch = useDispatch()
  const [name, setname] = useState('')
  const [smallprice, setsmallprice] = useState()
  const [mediumprice, setmediumprice] = useState()
  const [largeprice, setlargeprice] = useState()
  const [image, setimage] = useState('')
  const [description, setdescription] = useState('')
  const [category, setcategory] = useState('')

  const getpizzabyidstate = useSelector(state => state.getPizzaByIdReducer);


  const { pizzas, error, loading } = getpizzabyidstate;
  const editpizzastate=useSelector(state=>state.editPizzaReducer)
  const{editloading , editerror, editsucess}= editpizzastate

  useEffect(() => {
    // const { pizzaid } = useParams();

    if (pizzas) {
        setname(pizzas.name)
        setdescription(pizzas.description)
        setcategory(pizzas.category)
        setsmallprice(pizzas.prices[0]['small'])
        setmediumprice(pizzas.prices[0]['medium'])
        setlargeprice(pizzas.prices[0]["large"])
        setimage(pizzas.image)
    } 
    else {
      dispatch(getPizzaById(pizzaid));
    }



  }, [pizzas , dispatch]);
  function formHandler(e) {
    e.preventDefault();
    const editedpizza = {
      _id : pizzaid,
      name,
      image,
      description,
      category,
      prices: {
        small: smallprice,
        large: largeprice,
        medium: mediumprice
      }
    }
    dispatch(editPizza(editedpizza))

  }
  return (
    <div className='text-left shadow-lg p-3 mb-5 bg-white rounded'>
      <h1>EDITScreen</h1>
      {/* <h1> Pizza Id  = {pizzaid}</h1> */}

      <div>
        {loading && (<Loading />)}
        {error && (<Error error="something went wrong" />)}
        {editsucess &&(<Sucess sucess="pizza edited sucessfully"/>)}
        {editloading && (<Loading />)}



        <form onSubmit={formHandler}>
          <input className='form-control' type="text" placeholder='name' value={name} onChange={(e) => { setname(e.target.value) }} />
          <input className='form-control' type="number" placeholder='small varient price' value={smallprice} onChange={(e) => { setsmallprice(e.target.value) }} />
          <input className='form-control' type="number" placeholder='medium varient price' value={mediumprice} onChange={(e) => { setmediumprice(e.target.value) }} />
          <input className='form-control' type="number" placeholder='large varient price' value={largeprice} onChange={(e) => { setlargeprice(e.target.value) }} />
          <input className='form-control' type="text" placeholder='category' value={category} onChange={(e) => { setcategory(e.target.value) }} />

          <input className='form-control' type="text" placeholder='description' value={description} onChange={(e) => { setdescription(e.target.value) }} />
          <input className='form-control' type="text" placeholder='image' value={image} onChange={(e) => { setimage(e.target.value) }} />



          <button className='btn mt-3' type="submit">Edit pizza</button>
        </form>
      </div>
    </div>
  )
}
