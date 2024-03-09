import React from 'react';
import axios from "axios"
import Product from '../components/Product';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Filter from '../components/Filter';
export default function Home() {

    const baseURL = "http://localhost:8000/"

    const getallproductsstate = useSelector(state => state.getAllProductsReducer)
    const { loading, products, error } = getallproductsstate
    const dispatch = useDispatch()

    useEffect(() => {
        // axios.get(`${baseURL}api/products/getallproducts`)
        // .then((res)=>{
        //     console.log(res)
        //     setProducts(res.data)
        // })
        // .catch((error)=>{console.log(error)})
        dispatch(getAllProducts())

    }, [])



    return (
        <div>

            <div className="row">
                <Filter />
                {loading ? (
                  <Loader/>
                ) : error ? (
                  <Error error="Something went wrong..."/>
                ) : (
                 products && products.map(product=>{
                     return <Product product={product} />
                 })
                )}
            </div>
        </div>
    )
}