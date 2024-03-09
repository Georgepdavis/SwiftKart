import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userActions'
import Error from '../components/Error'
import Loader from '../components/Loader'

export default function Login(){
 
    const loginreducer=useSelector(state=>state.loginReducer)
    const {loading,error}=loginreducer
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const dispatch=useDispatch()
    const login=(e)=>{
        e.preventDefault()
        const user={
            email:email,
            password:password
        }

        dispatch(loginUser(user))
    }

    useEffect(()=>{
        if(localStorage.getItem("currentUser")){
            window.location.href='/'
        }
    },[])
    return(
        <div>
           <div className='row justify-content-center'>
              <div className='col-md-4 card mt-5'>
                 <h2>Login</h2>
                
                 {loading && <Loader />}
                 {error && <Error error="Invalid Credentials"/>}
                 <form onSubmit={login}>
                     <input type="email"
                      className='form-control'
                      value={email} placeholder='Email'
                      required='true'
                      onChange={(e)=>setEmail(e.target.value)}
                     />

                     <input type="password"
                      className='form-control'
                      value={password} placeholder='Password'
                      required='true'
                      onChange={(e)=>setPassword(e.target.value)}
                     />
                    
                    <button type='submit' className='btn btn-primary mt-4'>Login</button>
                 </form>
                 <br/>
                 <a href="/register">Click here to Register</a>
              </div>
           </div>
        </div>
    )
}

