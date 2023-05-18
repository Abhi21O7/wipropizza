import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaAction'
// import pizzas from '../pizzasdata'
import Pizza from '../components/Pizza'
import Loading from '../components/loading'
import Error from '../components/error'
import Filter from '../components/filter'

export default function Homescreen() {

  const dispatch = useDispatch()

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer)
  const { pizzas, error, loading } = pizzasstate
  useEffect(() => {
    dispatch(getAllPizzas())
  }, []);
  return (
    <div>
   <Filter/>
      <div className="row justify-content-center">
        {/* <Filter/> */}

        {loading ? (<Loading/>) : error ? (<Error  error="something went wrong"/>) : (

          pizzas.map((pizza) => {

            return (
               <div className="col-md-3 m-3 " key={pizza._id}>
              <div>
                <Pizza pizza={pizza} />
              </div>
            </div>
            );
          })

        )}



      </div>
    </div>
  );
}
