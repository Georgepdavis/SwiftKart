import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerNewUser } from '../actions/userActions'
import Error from '../components/Error';
import Loader from '../components/Loader';
import Success from '../components/Success';

export default function Registration(){
    const registerreducer=useSelector(state=>state.registerNewUserReducer);
    const {loading,error,success}=registerreducer
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[cpassword,setCpassword]=useState('')

    const dispatch=useDispatch()

     const register=(e)=>{
         
       e.preventDefault();
    
       const user={
         name:name,
         email:email,
         password:password
      }

      if(password==cpassword){
          dispatch(registerNewUser(user))
      }else{
         alert('passwords not matched')
      }

     }

    return(
        <div>
           <div className="row justify-content-center">
              <div className='col-md-5 card mt-5'>
                <h2>Register</h2>
                {loading && <Loader />}
                {error && <Error error="Email Address is already registered"/>} 
                {success && <Success success="Your Registration is succesful" />}
                <form onSubmit={register}>
                   <input
                      type="text" 
                      className='form-control'
                      placeholder='name' value={name} 
                      required='true'
                      onChange={(e) => setName(e.target.value)}
                   />

                   <input
                      type="email" 
                      className='form-control'
                      placeholder='Email' value={email}
                      required='true'
                      onChange={(e) => setEmail(e.target.value)}
                   />

                   <input
                      type="password" 
                      className='form-control'
                      placeholder='Password' value={password}
                      required='true'
                      onChange={(e) => setPassword(e.target.value)}
                   />

                   <input
                      type="password" 
                      className='form-control'
                      placeholder='Confirm Password' value={cpassword}
                      required='true'
                      onChange={(e) => setCpassword(e.target.value)}
                   />
                   
                   <button type="submit" class="btn btn-primary mt-4" >Register</button>
                </form>
                <br/>
               
                <a href="/login" >Click here to Login</a>
               
              </div>
           </div>
        </div>
    )
}