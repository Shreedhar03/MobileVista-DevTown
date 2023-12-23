import React from 'react'
import confirm from '../assets/confirm.svg'
import { Link } from 'react-router-dom'

const Confirmation = () => {
    return (
        <div className='max-w-xl py-12 rounded-lg bg-slate-200 mx-auto mt-12 flex flex-col gap-5 items-center'>
            <h1 className='font-extrabold text-3xl'>
                Order Confirmation
            </h1>
            <img src={confirm} alt="confirm" />
            <p className='font-extrabold text-2xl'>Thank you!</p>
            <p className='text-xl'>We have received your ordered</p>
            <Link to={'/'} className='px-4 py-2 rounded-xl bg-gray-800 text-white'>Back to Shopping</Link>
        </div>
    )
}

export default Confirmation
