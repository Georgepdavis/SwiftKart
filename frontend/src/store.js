import { getAllProductsReducer, getProductByIdReducer } from "./reducers/productReducer";
import {combineReducers} from 'redux';
import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from'redux-devtools-extension/developmentOnly'
import {thunk}from 'redux-thunk'
import { cartReducer } from "./reducers/cartReducer";
import { loginReducer, registerNewUserReducer } from "./reducers/userReducer";

const finalReducer=combineReducers({
    getAllProductsReducer:getAllProductsReducer,
    getProductByIdReducer:getProductByIdReducer,
    cartReducer:cartReducer,
    registerNewUserReducer:registerNewUserReducer,
    loginReducer:loginReducer
});


const cartItems=  localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser= localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState={
    cartReducer:{cartItems:cartItems},
    loginReducer:{currentUser:currentUser}
}
const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

// const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;
const store=createStore(finalReducer,initialState,composeEnhancers(
    applyMiddleware(thunk)
));

export default store