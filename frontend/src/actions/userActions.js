import axios from 'axios'
export const registerNewUser=(user)=>dispatch=>{
   
    dispatch({type:'USER_REGISTER_REQUEST'})

    axios.post('http://localhost:8000/api/users/register',user)
        .then((res)=>{
            console.log(res)
            dispatch({type:'USER_REGISTER_SUCCESS'});
            
        })
        .catch((error)=>{
            console.log(error)
            dispatch({type:'USER_REGISTER_FAILED'})
        })
}

export const loginUser=(user)=>dispatch=>{
    dispatch({type:'USER_LOGIN_REQUEST'})

    axios.post('http://localhost:8000/api/users/login',user)
       .then((res)=>{
           console.log(res)
           dispatch({type:'USER_LOGIN_SUCCESS'})
           localStorage.setItem("currentUser",JSON.stringify(res.data));
           console.log(res.data)
           window.location.href='/';
       })
       .catch((error)=>{
          console.log(error)
          dispatch({type:'USER_LOGIN_FAILED',payload:error})
       })
}

export const logoutUser=()=>dispatch=>{
    localStorage.removeItem('currentUser')
    localStorage.removeItem('cartItems')
    console.log("hello");

    dispatch({type:'USER_LOGOUT'})
    window.location.href='/login'
}