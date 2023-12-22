import React from 'react'
import Navbar from '../components/Navbar'
import ProductDetail from '../components/ProductDetail'
import Divider from '../components/Divider'

const Product = () => {
    return (
        <>
            <Navbar />
            <section className='max-w-6xl lg:mx-auto mt-6 mb-24 flex flex-col gap-4 mx-4'>
                <img src="https://images.samsung.com/in/smartphones/galaxy-s23-ultra/buy/DM3-web-1.jpg" alt="phone" />
                <h1 className='font-extrabold text-4xl mt-4'>Galaxy S23 Ultra</h1>
                <Divider />
                <div className='p-2 rounded-lg flex flex-wrap gap-6'>
                    <ProductDetail title='Storage' data='256GB' />
                    <ProductDetail title='RAM' data='16GB' />
                    <ProductDetail title='Camera' data='108MP | 16MP' />
                    <ProductDetail title='Processor' data='MediaTek 770T' />
                </div>
                <Divider />
                <div>
                    <button className='border inline border-gray-900 text-lg self-start text-gray-900 py-2 px-4 mx-2 rounded-md'>Add to Cart</button>
                    <button className='bg-gray-900 inline text-lg self-start text-white py-2 px-4 mx-2 rounded-md'>Buy Now</button>
                </div>
            </section>
        </>
    )
}

export default Product
