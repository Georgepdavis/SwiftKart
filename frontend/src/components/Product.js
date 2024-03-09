import React from 'react';
import {Link} from 'react-router-dom';
import Rating from 'react-rating';



export default function Product(props){

     return(
         <div className="col-md-3 m-5 card p-2" style={{textAlign:'left'}}>

             <div>
                 <Link to={`/product/${props.product._id}`} style={{textDecoration:'none'}}>
                    <div className='text-center'>
                       <img src={props.product.image} className='img-fluid' alt="no img found" />
                    </div>
                     
                     <h3>{props.product.name}</h3>

                     <Rating 
                         style={{color:'orange'}}
                         initialRating={props.product.rating}
                         emptySymbol="fa-regular fa-star fa-1x"
                         fullSymbol="fa-solid fa-star fa-1x"
                         readonly={true}
                     />


                     <h3>Price:{props.product.price} Rs</h3>
                 </Link>
             </div>
         </div>
     )
}