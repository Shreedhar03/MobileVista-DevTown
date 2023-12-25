import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import bin from '../assets/bin.svg'
import empty from '../assets/empty.jpg'
import Divider from '../components/Divider'
import { Link, useNavigate } from 'react-router-dom'
import Confirmation from '../components/Confirmation'
import { AppContext } from '../App'
import CheckoutForm from '../components/CheckoutForm'

const Cart = () => {
    const navigate = useNavigate()
    const { cart } = useContext(AppContext)
    const [showForm, setShowForm] = useState(0);
    const [ordered, setOrdered] = useState(false)
    const getMRPTotal = () => {
        let total = 0
        cart.forEach(p => {
            total += p.price;
        })

        return total
    }
    const getToBePaid = () => {
        let total = 0
        cart.forEach(p => {
            total += p.price - p.price * p.discountPercentage / 100;
        })

        return total
    }

    return (
        <>
            <Navbar />
            {
                ordered ? <Confirmation /> :

                    cart.length === 0 ? <>
                        <div className='flex flex-col items-center mx-4 gap-3 mt-6'>
                            <img src={empty} alt="" className='w-72' />
                            <h1 className='text-gray-700 font-bold text-3xl'>Your cart is empty</h1>
                            <h1 className='text-gray-700 font-bold text-xl'>Looks like you haven't made your choice yet</h1>
                        </div>
                    </> :
                        <section className={`max-w-7xl mx-auto p-3 my-8 flex flex-col md:flex-row items-start justify-between gap-12 relative`}>

                            <div className={`md:w-9/12 w-full ${showForm && 'opacity-55'}`}>
                                <h1 className='font-bold text-xl mb-3'>Order Overview</h1>
                                <Divider />

                                <table className='table-fixed w-full mt-3 overflow-scroll'>
                                    <tr>
                                        <th className='text-left pt-8 pb-4 text-lg text-gray-500'>Item </th>
                                        <th className='text-left pt-8 pb-4 text-lg text-gray-500'>Price</th>
                                        <th className='text-left pt-8 pb-4 text-lg text-gray-500'>Quantity</th>
                                        <th className='text-left pt-8 pb-4 text-lg text-gray-500'>Item Total</th>
                                    </tr>
                                    {
                                        cart.map((p, key) => {
                                            return <tr key={key} className='py-3'>
                                                <td className='py-6'>
                                                    <img className='w-20 rounded-xl' src={p.images[0]} alt="phone" />
                                                    <p className='text-xl mt-2 font-bold text-gray-800 underline'>{p.productName}</p>
                                                    <button className='flex items-center gap-1 mt-2'>
                                                        <img src={bin} alt="bin" />
                                                        <p className='text-gray-500 text-sm'>Remove</p>
                                                    </button>
                                                </td>
                                                <td className='py-6'>
                                                    <p>&#8377; {p.price - p.price * p.discountPercentage / 100}</p>
                                                </td>
                                                <td className='py-6'>
                                                    <input type="number" name="" id="" maxLength={2} max={1} value={1} className='w-14 p-2 focus:outline-none rounded-lg bg-slate-100' />
                                                </td>
                                                <td className='py-6'>
                                                    <p>&#8377; {p.price - (p.price * p.discountPercentage / 100)}</p>
                                                </td>
                                            </tr>
                                        })
                                    }

                                </table>
                            </div>
                            {
                                showForm && <CheckoutForm setShowForm={setShowForm} setOrdered={setOrdered} />
                            }
                            <aside className={` ${showForm && 'opacity-55'} md:w-3/12 w-10/12`}>
                                <h1 className='font-bold text-xl mb-3'>Payment Details</h1>
                                <Divider />

                                <div className='bg-slate-100 p-3 mt-6 rounded-lg flex flex-col gap-4'>
                                    <div className='flex justify-between'>
                                        <h2>MRP Total : </h2>
                                        <h2>&#8377; {getMRPTotal()}</h2>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h2>Discount : </h2>
                                        <h2 className='text-green-500'>-{(getMRPTotal() - getToBePaid()).toFixed(2)}</h2>
                                    </div>

                                    <Divider />

                                    <div className='flex justify-between'>
                                        <h2>To be paid : </h2>
                                        <h2>&#8377; {getToBePaid()}</h2>
                                    </div>

                                    <button className='py-2 px-4 bg-gray-800 text-white rounded-lg' onClick={() => setShowForm(1)}>Place order</button>
                                </div>

                                <button className='mt-4 text-center text-lg text-gray-600' onClick={() => navigate('/')}>&larr; Continue shopping</button>
                            </aside>


                        </section>
            }

        </>
    )
}

export default Cart
