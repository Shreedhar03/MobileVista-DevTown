import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Divider from '../components/Divider'

const Admin = () => {
    const [allOrders, setAllOrders] = useState([])
    const getAllOrders = async () => {
        try {
            let { data } = await axios.get(`https://samsung-alpha.onrender.com/api/orders`)
            setAllOrders(data.orders)
            console.log(data.orders)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getAllOrders()
    }, [])
    return (
        <>
            <Navbar />

            <section className='max-w-6xl mx-4 xl:mx-auto my-8'>
                <h1 className="text-2xl font-bold">Orders ({allOrders.length})</h1>
                <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'>
                    {
                        allOrders?.map((order, key) => {
                            return <div key={key} className='border-2 rounded-xl p-4 border-slate-200'>
                                <p className='text-lg font-extrabold'>{order?.fName} {order?.lName}</p>
                                <p className='text-gray-600 mb-3'>{order?.address} | {order?.phone} | {order?.email}</p>

                                <Divider />

                                <div className='flex overflow-scroll snap-x mt-3 bg-gray-100 py-2 rounded-lg'>
                                    {
                                        order.cart?.map((cart, key) => {
                                            return <div className='shrink-0 snap-start flex gap-2 w-full'>
                                                <img className='w-24 h-24 object-cover rounded-xl' src={cart?.images?.[0]} alt="phone" />
                                                <div className='flex flex-col'>
                                                    <Link to={'/'} className='text-xl underline font-extrabold text-gray-900'>{cart?.productName}</Link>
                                                    <h1 className='font-extrabold text-gray-700'>{cart?.RAM} | {cart?.storage}</h1>
                                                    <h1 className='font-extrabold text-gray-700'>&#8377;{cart?.price - cart?.price * cart?.discountPercentage / 100}</h1>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Admin
