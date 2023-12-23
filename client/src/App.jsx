import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Product from './pages/Product'
import Cart from './pages/Checkout'
import AllProducts from './pages/AllProducts'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id' element={<Product />}/>
          <Route path='/checkout' element={<Cart />} />
          <Route path='/products' element={<AllProducts />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
