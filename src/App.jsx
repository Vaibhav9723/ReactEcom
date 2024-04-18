import React, { useState } from 'react'
import NavBar from './components/navbar/NavBar'
import Products from './components/products/Products'
import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import ProductDetail from './components/ProductDetail'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import { items } from './components/Data/Data'


const App = () => {

  const [data, setData] = useState([...items])
  const [cart,setCart] = useState([])
  return (
    <div>
      <Router>
      <NavBar cart={cart} setData={setData}/>
      <Routes>
        <Route path='/' element={<Products cart={cart} setCart={setCart} abc={data}/>}/>
        <Route path='/product/:id' element={<ProductDetail cart={cart} setCart={setCart}/>}/>
        <Route path='/search/:item' element={<SearchItem cart={cart} setCart={setCart}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App
