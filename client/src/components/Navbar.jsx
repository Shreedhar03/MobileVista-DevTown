import React from 'react'
import cart from '../assets/cart.svg'
import logo from '../assets/samsung.svg'
const Navbar = () => {
    return (
        <nav className='py- sticky top-0 bg-white z-20'>

            <div className='max-w-6xl mx-auto flex items-center px-6 justify-between'>
                <div className='flex items-center gap-1'>
                <img src={logo} alt="logo" className='w-24' />
                </div>
                {/* search box */}
                <div className='hidden sm:flex items-center gap-3'>
                    <input type="text" placeholder='search products' className='focus:outline-none bg-slate-100 rounded-xl px-4 py-2 text-sm' />
                    <button>
                        <img src={cart} alt="cart" className='w-6' />
                    </button>
                </div>
            </div>
        </nav>

        // <nav className=''>
        //     <div className='flex items-center justify-center gap-1'>
        //         <img src={logo} alt="logo" className='w-32' />
        //         {/* <h2 className='text-xl font-semibold logo'>MobileVista</h2> */}
        //     </div>
        // </nav>
    )
}

export default Navbar
