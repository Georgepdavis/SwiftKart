import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/userActions'

export default function Navbar() {
    const addtocartstate= useSelector(state=>state.cartReducer)
    const {cartItems}=addtocartstate
    const currentUser=JSON.parse(localStorage.getItem('currentUser'));
    const dispatch=useDispatch();
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">SwiftCart</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <div className='navbar-nav ms-auto'>
                            {currentUser ? (<div class="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {currentUser.name}
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/profile">Profile</a></li>
                                    <li><a className="dropdown-item" href="/orders">Orders</a></li>
                                    <li className="dropdown-item" onClick={(e)=>dispatch(logoutUser())}>Logout</li>
                                </ul>
                            </div>) : (<li class="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>)}
                            <li className="nav-item">
                                <a className="nav-link" href="/cart">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    {cartItems && cartItems.length}
                                </a>

                            </li>
                        </div>






                    </div>
                </div>
            </nav>
        </div>
    )
}