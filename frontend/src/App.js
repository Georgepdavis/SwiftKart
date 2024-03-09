import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import bootstrap1 from '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import ProductDescription from './screens/ProductDescription';
import Cart from './screens/Cart';
import Registration from './screens/Registration';
import Login from './screens/Login';


function App() {
  return (
    <div className="App">
       <Navbar/>
       <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/product/:id' element={<ProductDescription/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/register' element={<Registration/>} />
              <Route path='/login' element={<Login/>} />
          </Routes>
       </BrowserRouter>
       
    </div>
  );
}

export default App;
