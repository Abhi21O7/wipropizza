import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/userAction'
import Loading from '../components/loading'
import Sucess from '../components/sucess'
import Error from '../components/error'

export default function Registerscreen() {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [ ConfirmPassword, setConfirmPassword] = useState('')
    const registerstate = useSelector(state =>state.registerUserReducer)
    const {error, loading, sucess} = registerstate



    const dispatch = useDispatch()

    function register(){
        
        if(Password!=ConfirmPassword || Email=="" || Password.length==0)
        {
            alert('passwords not matched')
        }
        else{
            const user ={
                Name,
                Email,
                Password
            }
            console.log(user);
            dispatch(registerUser(user))
        }
    }

    return (
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded'>


                     {loading && (<Loading/>)}
                     {sucess && (<Sucess sucess ='User registered succesfully'/>)}
                     {error && (<Error error = 'email already registered'/>)}

                    <h2 className='text-centre m-2' style={{ fontSize: '35px' }}>Register</h2>

                    <div>
                        <input required type="text" placeholder='Name' className='form-control' value = {Name} onChange={(e)=>{setName(e.target.value)}}></input>
                        <input required type="email" placeholder='Email' className='form-control' value = {Email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                        <input required type="password" placeholder='Password' className='form-control'value = {Password} onChange={(e)=>{setPassword(e.target.value)}}></input>
                        <input required type="password" placeholder='ConfirmPassword' className='form-control'value = {ConfirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}></input>
                        <button onClick={register} className='btn mt-4 mb-3'>REGISTER</button>
                        <br/>
                        <a style = {{color :'black'}}href="/login">Click here to Login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
