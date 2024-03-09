import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterProducts } from '../actions/productActions';

export default function Filter(){
    
    const[searchPdt,setSearchPdt]=useState('');
    const[sort,setSort]=useState('popular');
    const[category,setCategory]=useState('all');
    const dispatch=useDispatch();
    return(
        <div>

           <div className='row justify-content-center'>
                <div className="col-3">
                     <input  value={searchPdt} 
                        onChange={(e)=>{setSearchPdt(e.target.value)}}     
                        type="text" placeholder="search products" 
                        className='form-control' 
                     />
                </div> 

                <div className='col-2 m-2'>
                    <select className='form-control' value={sort} onChange={(e)=>{setSort(e.target.value)}} >
                        <option value="popular">Popular</option>
                        <option value="htl">Hight to Low</option>
                        <option value="lth">Low to High</option>
                    </select>
                </div>

                <div className='col-2 m-2'>
                    <select className='form-control' value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                        <option value="all">All</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="mobiles">Mobiles</option>
                        <option value="games">Games</option>
                    </select>
                </div>

                <div className="col-2 m-2">
                     <button className='btn btn-primary' onClick={()=>{dispatch(filterProducts(searchPdt,sort,category))}}>Search</button>
                </div>
           </div>

        </div>
    )
}