import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../actions/cartActions'

export default function Cart() {

    const cartreducerstate = useSelector(state => state.cartReducer)
    const { cartItems } = cartreducerstate
    const dispatch=useDispatch()
    var subtotal=cartItems.reduce((acc,item)=>acc+(item.price * item.quantity), 0)

    return (
        <div>
            <div className='row mt-5 justify-content-center'>
                <div className='col-md-8 card'>
                    <h3 className='m-3'>My Cart</h3>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => {
                                return (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <select value={item.quantity} onChange={(e)=>dispatch(addToCart(item,e.target.value))}>
                                                {[...Array(item.countInStock)].map((x, i) => {
                                                    return <option value={i + 1}>{i + 1}</option>
                                                })}
                                            </select>
                                        </td>
                                        <td>{item.quantity * item.price}</td>
                                        <td><i class="fa-solid fa-trash-can" onClick={(e)=>dispatch(deleteFromCart(item))}></i></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <hr/>
                    <h4>SubTotal : {subtotal} RS/-</h4>
                    <hr/>
                    <div className='text-center mb-3'>
                      <button type="button" class="btn btn-dark">PAY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}