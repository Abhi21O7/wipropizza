 import axios from "axios"
export const registerUser=(user)=> async dispatch=>{


    dispatch({type:'USER_REGISTER_REQUEST'})

    try{
         const responce = await axios.post('/api/users/register' , user);
         console.log(responce)
        dispatch({type:'USER_REGISTER_SUCESS'})
        



    }
    catch(error) {
        dispatch({type:'USER_REGISTER_FAILED', payload:error})

    }
}

export const loginUser=(user)=> async dispatch=>{


    dispatch({type:'USER_LOGIN_REQUEST'})

    try{
         const responce = await axios.post('/api/users/login' , user);
         console.log(responce)
        dispatch({type:'USER_LOGIN_SUCESS',payload:responce.data})
        localStorage.setItem('currentUser', JSON.stringify(responce.data))
        window.location.href='/'
        



    }
    catch(error) {
        dispatch({type:'USER_LOGIN_FAILED', payload:error})

    }
}
export const logoutUser= ()=>dispatch=>{
    localStorage.removeItem('currentUser')
    window.location.href='/login'
}
export const getAllUsers=()=> async dispatch=>{
    dispatch({type:'GET_USERS_REQUEST'})
     try{
        const responce =  await axios.get('/api/users/getallusers')
        console.log(responce);
        dispatch({type:'GET_USERS_SUCESS' ,payload : responce.data})
      //   window.location.href='/admin/pizzaslist'

     } catch (error) {
        dispatch({type:'GET_USERS_FAILED' , payload : error})
     }
}
export const deleteUser=(userid)=> async dispatch=>{
    try{
      await axios.post('/api/users/deleteuser', {userid})
      alert("user deleted sucesfully")
      window.location.reload()
    }catch(error){
        alert('something went wrong')
        console.log(error)

    }
}