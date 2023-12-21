import React from 'react'
import cart from '../assets/cart.svg'

const Navbar = () => {
    return (
        <nav className='bg-slate-100 py-3 sticky top-0'>

            <div className='max-w-6xl mx-auto flex items-center px-6 justify-between'>
                <h2 className='text-xl font-semibold logo'>MobileVista</h2>
                {/* search box */}
                <div className='flex items-center gap-3'>
                    <input type="text" placeholder='search products' className='focus:outline-none rounded-xl px-3 py-2 text-sm' />
                    <button>
                        <img src={cart} alt="cart" className='w-6' />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
