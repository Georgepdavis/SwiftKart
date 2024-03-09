import axios from "axios"
export const getAllProducts=()=>(dispatch)=>{

    dispatch({type:'GET_PRODUCTS_REQUEST'})

    axios.get('http://localhost:8000/api/products/getallproducts')
        .then((res)=>{
            console.log(res)
            dispatch({type:'GET_PRODUCTS_SUCCESS',payload:res.data})
         })
        .catch((error)=>{
            console.log(error)
            dispatch({type:'GET_PRODUCTS_FAILED',payload:error})
        })
        
}

export const getProductById=(productid)=>(dispatch)=>{

    dispatch({type:'GET_PRODUCTBYID_REQUEST'})

    axios.post('http://localhost:8000/api/products/getproductbyid',productid)
        .then((res)=>{
            console.log(res)
            dispatch({type:'GET_PRODUCTBYID_SUCCESS',payload:res.data[0]})
         })
        .catch((error)=>{
            console.log(error)
            dispatch({type:'GET_PRODUCTBYID_FAILED',payload:error})
        })
        
}

export const filterProducts=(searchPdt,sort,category)=>dispatch=>{

   
    dispatch({type:'GET_PRODUCTS_REQUEST'})
    axios.get('http://localhost:8000/api/products/getallproducts')
    
      .then((res)=>{
          var filteredProducts=res.data;
          if(searchPdt){
              console.log("hello")
              filteredProducts=res.data.filter((product)=>{return product.name.toLowerCase().includes(searchPdt)})
          }
          if(sort!=='popular'){

             if(sort=="htl"){
               filteredProducts=res.data.sort((a,b)=>{
                  return -a.price + b.price;
               })
             }else{
                filteredProducts=res.data.sort((a,b)=>{
                    return a.price - b.price
                })
             }
          }

          if(category!=="all"){
              filteredProducts=res.data.filter(product=>product.category.toLowerCase().includes(category))
          }

          dispatch({type:'GET_PRODUCTS_SUCCESS',payload:filteredProducts})
      })
      .catch((err)=>{
         dispatch({type:'GET_PRODUCTS_FAILED'})
      })
}