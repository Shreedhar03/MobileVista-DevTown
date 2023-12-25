import { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Product from './pages/Product'
import Cart from './pages/Checkout'
import AllProducts from './pages/AllProducts'
import axios from 'axios'

export const AppContext = createContext();

function App() {

  const [allProducts, setAllProducts] = useState([])
  const [cart, setCart] = useState([])
  const [order, setOrder] = useState({
    fName: "",
    lName: "",
    address: "",
    cart: {},
    orderTotal: 0,
  })
  const getAllProducts = async () => {
    let { data } = await axios.get(`http://localhost:5000/api/products`)
    setAllProducts(data.data)
    console.log(data.data)
  }

  useEffect(() => {
    getAllProducts()
  }, [])
  return (
    <>
      <AppContext.Provider value={{ allProducts, getAllProducts, cart, setCart, order, setOrder }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/checkout' element={<Cart />} />
            <Route path='/products' element={<AllProducts />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>

  )
}

export default App
