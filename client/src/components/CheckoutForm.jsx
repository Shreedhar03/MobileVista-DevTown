import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AppContext } from '../App';

const CheckoutForm = ({ setShowForm,setOrdered }) => {
    const { setCart,cart } = useContext(AppContext)
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        phone: '',
        email: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const placeOrder = async () => {
        try {
            let { data } = await axios.post(`${import.meta.env.VITE_FETCH_URL}api/place-order`, {
                orderData: { ...formData, cart },
            });
            console.log(data)
            setOrdered(true)
            setCart([])
        } catch (error) {
            console.log(error.message)
        }
    };

    return (
        <form className='p-6 z-30 bg-slate-200 rounded-xl flex flex-col gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h2 className='text-lg font-extrabold text-gray-800'>Please provide the details</h2>
            <div className='flex gap-2'>
                <input
                    required
                    type='text'
                    name='fName'
                    value={formData.fName}
                    onChange={handleChange}
                    placeholder='First name'
                    className='focus:outline-none border border-slate-300 rounded-lg px-3 py-2 text-sm'
                />
                <input
                    required
                    type='text'
                    name='lName'
                    value={formData.lName}
                    onChange={handleChange}
                    placeholder='Last name'
                    className='focus:outline-none border border-slate-300 rounded-lg px-3 py-2 text-sm'
                />
            </div>
            <div className='flex gap-2'>
                <input
                    required
                    type='text'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder='Phone'
                    className='focus:outline-none border border-slate-300 rounded-lg px-3 py-2 text-sm'
                />
                <input
                    required
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Email'
                    className='focus:outline-none border border-slate-300 rounded-lg px-3 py-2 text-sm'
                />
            </div>
            <textarea
                required
                name='address'
                id='address'
                value={formData.address}
                onChange={handleChange}
                cols='30'
                rows='4'
                placeholder='Complete address'
                className='focus:outline-none border border-slate-300 rounded-lg px-3 py-2 text-sm'
            ></textarea>
            <div className='flex gap-2 w-full'>
                <button
                    className='text-sm w-1/2 px-3 py-2 rounded-lg border border-slate-900'
                    type='reset'
                    onClick={() => setShowForm(false)}
                >
                    Cancel
                </button>
                <button
                    className='text-sm w-1/2 px-3 py-2 rounded-lg bg-slate-900 text-white'
                    type='button'
                    onClick={placeOrder}
                >
                    Confirm
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;
