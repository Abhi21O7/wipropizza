// import React from 'react'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/loading'
import Error from '../components/error'
import Filter from '../components/filter'
import { getAllPizzas , deletepizza} from '../actions/pizzaAction'
import Pizza from '../components/Pizza'
import { Link } from 'react-router-dom'


export default function Pizzalist() {
  const dispatch = useDispatch()

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer)
  const { pizzas, error, loading } = pizzasstate;
  useEffect(() => {
    dispatch(getAllPizzas())
  }, []);
  return (
    <div>
    <div className='row justify-content-center'>
        <h2>PIZZAS LIST</h2>
        {loading && (<Loading/>)}
        {error && (<Error error='something went wrong'/>)}

        <table className='table table-bordered table-responsive-sm'>
          <thead className='thead thead-dark'>
            <tr>
              <th>Name</th>
              <th>Prices</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
        
        <tbody>
        {pizzas && pizzas.map(pizza=>{

            return <tr>
              <td>{pizza.name}</td>
              <td>

              small: {pizza.prices[0]['small']} <br/>
              Medium: {pizza.prices[0]['medium']}  <br/>
              Large: {pizza.prices[0]['large']}
                
              </td>
              <td>{pizza.category}</td>
              <td>
              <i className='fa fa-trash m-1' onClick={()=>{dispatch(deletepizza(pizza._id))}}></i>
            <Link to={`/admin/editpizza/${pizza._id}`}  ><i className='fa fa-edit m-1'></i></Link>
              </td>
            </tr>
        })}
        </tbody>
        </table>
    </div>
    </div>
  )
}
