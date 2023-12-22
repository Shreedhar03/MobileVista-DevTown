import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Product from './pages/Product'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id' element={<Product />}/>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
