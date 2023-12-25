import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ProductDetail from '../components/ProductDetail'
import Divider from '../components/Divider'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { AppContext } from '../App'

const Product = () => {
    const {cart,setCart}=useContext(AppContext)
    const navigate = useNavigate()
    const id = useParams('id').id
    const [data, setData] = useState({})
    const fetchData = async () => {
        try {
            let { data } = await axios.get(`https://samsung-alpha.onrender.com/api/product/${id}`)
            setData(data.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    const handleAddToCart = ()=>{
        cart.find(c=>c._id===data._id) || setCart([...cart,data])
    }
    return (
        <>
            <Navbar />
            <section className='max-w-6xl lg:mx-auto mt-6 mb-24 flex flex-col gap-4 mx-4'>
                <img src={data?.images ? data?.images[0] : ''} className='w-full h-72 object-contain' alt="phone" />
                <h1 className='font-extrabold text-4xl mt-4'>{data.productName}</h1>
                <Divider />
                <div className='p-2 rounded-lg flex flex-wrap gap-6'>
                    <ProductDetail title='Storage' data={data.storage} />
                    <ProductDetail title='RAM' data={data.RAM} />
                    <ProductDetail title='Camera' data={data.camera} />
                    <ProductDetail title='Processor' data={data.processor} />
                </div>
                <Divider />
                <div>
                    <button className='border inline border-gray-900 text-lg self-start text-gray-900 py-2 px-4 mx-2 rounded-md' onClick={handleAddToCart}>{
                        cart.find(c=>c._id===data._id) ? 'Added' : 'Add to Cart'
                    }</button>
                    <button className='bg-gray-900 inline text-lg self-start text-white py-2 px-4 mx-2 rounded-md' onClick={()=>{
                        handleAddToCart();
                        navigate('/checkout')
                    }}>Buy Now</button>
                </div>
            </section>
        </>
    )
}

export default Product
