import axios from "axios"
import Pizza from "../components/Pizza";

export const getAllPizzas=()=> async dispatch=>{
    dispatch({type:'GET_PIZZAS_REQUEST'})
     try{
        const responce =  await axios.get('/api/pizzas/getallpizzas')
        console.log(responce);
        dispatch({type:'GET_PIZZAS_SUCESS' ,payload : responce.data})
      //   window.location.href='/admin/pizzaslist'

     } catch (error) {
        dispatch({type:'GET_PIZZAS_FAILED' , payload : error})
     }
}
export const filterPizzas=(searchkey,category)=> async dispatch=>{ 

    var filteredPizzas;
   dispatch({type:'GET_PIZZAS_REQUEST'})
    try{
       const responce =  await axios.get('/api/pizzas/getallpizzas')
       filteredPizzas= responce.data.filter(pizza=>pizza.name.toLowerCase().includes(searchkey))

      if(category!='all'){
         filteredPizzas= responce.data.filter(pizza=>pizza.category.toLowerCase()==category)

      }

       dispatch({type:'GET_PIZZAS_SUCESS' ,payload : filteredPizzas})

    } catch (error) {
       dispatch({type:'GET_PIZZAS_FAILED' , payload : error})
    }
}

export const addPizza=(pizza)=> async dispatch=>{
     
   dispatch({type:'ADD_PIZZA_REQUEST'})
   try{

      const responce = await axios.post('/api/pizzas/addpizza' , {pizza})
      console.log(responce)
      dispatch({type:'ADD_PIZZA_SUCESS'})

   }
   catch(error){
      dispatch({type:'ADD_PIZZA_FAILED', payload:error})

   }

}
export const getPizzaById=(pizzaid)=> async dispatch=>{
   dispatch({type:'GET_PIZZABYID_REQUEST'})
    try{
       const responce =  await axios.post('/api/pizzas/getpizzabyid' ,{pizzaid})
       console.log(responce);
       dispatch({type:'GET_PIZZABYID_SUCESS' ,payload : responce.data})

    } catch (error) {
       dispatch({type:'GET_PIZZABYID_FAILED' , payload : error})
    }
}
export const editPizza=(editedpizza)=> async dispatch=>{
     
   dispatch({type:'EDIT_PIZZA_REQUEST'})
   try{

      const responce = await axios.post('/api/pizzas/editpizza' , {editedpizza})
      console.log(responce)
      dispatch({type:'EDIT_PIZZA_SUCESS'})
      window.location.href='/admin/pizzalist'

   }
   catch(error){
      dispatch({type:'EDIT_PIZZA_FAILED', payload:error})

   }

}
export const deletepizza=(pizzaid)=> async dispatch =>{
   try{
       const responce = await axios.post('/api/pizzas/deletepizza',{pizzaid})
       alert('pizza deleted suceesfully')
       console.log(responce)
       window.location.reload()


   }catch(error){
          alert('something went wrong')
          console.log(error)

   }
}


   


