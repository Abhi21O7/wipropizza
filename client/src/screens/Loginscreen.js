
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userAction'
import Loading from '../components/loading'
import Error from '../components/error'
// import Error from '../components/error'
// import Loading from '../components/loading'


export default function Loginscreen() {
    // const [Name, setName] = useState('')

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const loginstate = useSelector(state => state.loginUserReducer)
    const { loading, error } = loginstate
    // const [ ConfirmPassword, setConfirmPassword] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {

        if (localStorage.getItem('currentUser')) {
            window.location.href = '/'
        }

    }, [])

    function login() {
        const user = { Email, Password }
        dispatch(loginUser(user))

    }

    return (
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded'>


                    <h2 className='text-centre m-2' style={{ fontSize: '35px' }}>Login</h2>

                    {loading && (<Loading/>)}
                    {error && (<Error error='invalid credentials' />)}
                    <div>
                        {/* <input required type="text" placeholder='Name' className='form-control' value = {Name} onChange={(e)=>{setName(e.target.value)}}></input> */}
                        <input required type="email" placeholder='Email' className='form-control' value={Email} onChange={(e) => { setEmail(e.target.value) }}></input>
                        <input required type="password" placeholder='Password' className='form-control' value={Password} onChange={(e) => { setPassword(e.target.value) }}></input>
                        {/* <input required type="text" placeholder='ConfirmPassword' className='form-control'value = {ConfirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}></input> */}
                        <button onClick={login} className='btn mt-4 mb-3'>LOGIN</button>
                        <br />
                        <a style={{ color: 'black' }} href="/register" className='m-2'><b>Click here to register</b></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
