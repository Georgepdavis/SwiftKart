import React from "react";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
import Loader from "../components/Loader";
import Error from "../components/Error";


 export default function ProductDescription(){
    
    var productid=useParams();
    const dispatch=useDispatch()
    const [quantity,setQuantity]=useState(1)
    const getproductbyidstate=useSelector(state=>state.getProductByIdReducer)
    const {loading,product,error}=getproductbyidstate
    // const addtocartstate= useSelector(state=>state.addToCartReducer)
    // const {cartItems}=addtocartstate
    useEffect(()=>{
        
       dispatch(getProductById(productid))
    //    console.log(productid)
    },[])

     const addCart=()=>{
        dispatch(addToCart(product,quantity))
    }

    return (
        <div>
            {loading ? <Loader/> : error ? <Error error="Something went wrong..."/> : (

                product && <div className="row">
                    <div className="col-md-6">
                        <div className="card p-5 ">
                            <h3>{product.name}</h3>
                            <img src={product.image} className="bigimg" />
                            <p>{product.description}</p>
                        </div>

                    </div>

                    <div className="col-md-6" style={{ textAlign: "left" }}>
                        <div>
                            <h5>Price:{product.price} Rs</h5>
                            <hr />
                            <h5>Select Quantity</h5>
                            <select value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
                                {[...Array(product.countInStock)].map((x, i) => {
                                    return <option value={i + 1}>{i + 1}</option>
                                })}
                            </select>

                            <hr />
                            <button className="btn btn-dark" onClick={addCart}>ADD TO CART</button>
                            {/* {cartItems && cartItems.length} */}
                        </div>
                    </div>
                </div>
            )}


        </div>
    )
}
