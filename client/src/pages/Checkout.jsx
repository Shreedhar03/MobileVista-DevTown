import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import bin from '../assets/bin.svg'
import Divider from '../components/Divider'
import { Link, useNavigate } from 'react-router-dom'
import Confirmation from '../components/Confirmation'

const Cart = () => {
    const navigate = useNavigate()
    const [ordered, setOrdered] = useState(false)
    return (
        <>
            <Navbar />
            {
                ordered ? <Confirmation /> :
                    <section className='max-w-7xl mx-auto p-3 my-8 flex flex-col md:flex-row items-start justify-between gap-12'>

                        <div className='md:w-9/12 w-full'>
                            <h1 className='font-bold text-xl mb-3'>Order Overview</h1>
                            <Divider />

                            <table className='table-fixed w-full mt-3'>
                                <tr>
                                    <th className='text-left pt-8 pb-4 text-lg text-gray-500'>Item </th>
                                    <th className='text-left pt-8 pb-4 text-lg text-gray-500'>Price</th>
                                    <th className='text-left pt-8 pb-4 text-lg text-gray-500'>Quantity</th>
                                    <th className='text-left pt-8 pb-4 text-lg text-gray-500'>Item Total</th>
                                </tr>
                                <tr className='py-3'>
                                    <td className='py-6'>
                                        <img className='w-20 rounded-xl' src="https://image-us.samsung.com/us/smartphones/galaxy-z-flip4/v2/images/galaxy-z-flip4_highlights_colors_blue_front.jpg" alt="phone" />
                                        <p className='text-xl mt-2 font-bold text-gray-800 underline'>Galaxy Z Flip4</p>
                                        <button className='flex items-center gap-1 mt-2'>
                                            <img src={bin} alt="bin" />
                                            <p className='text-gray-500 text-sm'>Remove</p>
                                        </button>
                                    </td>
                                    <td className='py-6'>
                                        <p>$750.00</p>
                                    </td>
                                    <td className='py-6'>
                                        <input type="number" name="" id="" maxLength={2} max={5} className='w-14 p-2 focus:outline-none rounded-lg bg-slate-100' />
                                    </td>
                                    <td className='py-6'>
                                        <p>$750.00</p>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <aside className='md:w-3/12 w-10/12'>
                            <h1 className='font-bold text-xl mb-3'>Payment Details</h1>
                            <Divider />

                            <div className='bg-slate-100 p-3 mt-6 rounded-lg flex flex-col gap-4'>
                                <div className='flex justify-between'>
                                    <h2>MRP Total : </h2>
                                    <h2>$799</h2>
                                </div>
                                <div className='flex justify-between'>
                                    <h2>Discount : </h2>
                                    <h2 className='text-green-500'>-$49</h2>
                                </div>

                                <Divider />

                                <div className='flex justify-between'>
                                    <h2>To be paid : </h2>
                                    <h2>$750</h2>
                                </div>

                                <button className='py-2 px-4 bg-gray-800 text-white rounded-lg'>Place order</button>
                            </div>

                            <button className='mt-4 text-center text-lg text-gray-600' onClick={() => navigate('/')}>&larr; Continue shopping</button>
                        </aside>
                    </section>
            }

        </>
    )
}

export default Cart
