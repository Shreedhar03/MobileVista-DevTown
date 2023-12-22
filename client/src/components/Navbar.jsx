import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cart from '../assets/cart.svg'
import logo from '../assets/samsung.svg'
import ExpandDiv from './ExpandDiv'
const Navbar = () => {
    const [height, setHeight] = useState(window.scrollY)
    const [navBg, setNavBg] = useState(false)
    useEffect(() => {
        console.log(height)
        window.addEventListener('scroll', () => {
            setHeight(window.scrollY)
        })

        height > 60 ? setNavBg(true) : setNavBg(false)
    }, [height])
    const navigate = useNavigate()
    return (
        <nav className={`sticky top-0 ${navBg ? 'bg-gray-100' : 'bg-white'} z-20 `}>

            <div className='max-w-6xl mx-auto flex relative px-6 justify-between'>
                {/* <div className='flex items-center gap-1'> */}
                    <img src={logo} alt="logo" className='w-24' onClick={() => navigate('/')} />
                {/* </div> */}

                <ul className='flex gap-14'>
                    <ExpandDiv products={[
                        { title: 'Galaxy Z Flip5', image: 'https://images.samsung.com/is/image/samsung/assets/in/2307/pcd/PCD_B5_Whats-new_376x376_pc_default.png?$376_376_PNG$' },
                        { title: 'Galaxy S23 Ultra', image: 'https://images.samsung.com/in/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg' },
                        { title: 'Galaxy Z Flip4', image: 'https://image-us.samsung.com/us/smartphones/galaxy-z-flip4/v2/images/galaxy-z-flip4_highlights_colors_blue_front.jpg' },

                    ]} title='Featured' />
                    <ExpandDiv products={[
                        { title: 'Galaxy Z Flip5', image: 'https://images.samsung.com/is/image/samsung/assets/in/2307/pcd/PCD_B5_Whats-new_376x376_pc_default.png?$376_376_PNG$' },
                        { title: 'Galaxy Z Flip5', image: 'https://images.samsung.com/is/image/samsung/assets/in/2307/pcd/PCD_B5_Whats-new_376x376_pc_default.png?$376_376_PNG$' },
                    ]} title="What's new?" />
                    <ExpandDiv products={[
                        { title: 'Galaxy Z Flip5', image: 'https://images.samsung.com/is/image/samsung/assets/in/2307/pcd/PCD_B5_Whats-new_376x376_pc_default.png?$376_376_PNG$' },
                        { title: 'Galaxy Z Flip5', image: 'https://images.samsung.com/is/image/samsung/assets/in/2307/pcd/PCD_B5_Whats-new_376x376_pc_default.png?$376_376_PNG$' },
                        { title: 'Galaxy Z Flip5', image: 'https://images.samsung.com/is/image/samsung/assets/in/2307/pcd/PCD_B5_Whats-new_376x376_pc_default.png?$376_376_PNG$' },
                        { title: 'Galaxy Z Flip5', image: 'https://images.samsung.com/is/image/samsung/assets/in/2307/pcd/PCD_B5_Whats-new_376x376_pc_default.png?$376_376_PNG$' },
                    ]} title='Flagship' />
                </ul>
                {/* search box */}
                <div className='hidden sm:flex items-center gap-3'>
                    <input type="text" placeholder='search products' className='focus:outline-none border border-slate-300 rounded-xl px-4 py-2 text-sm' />
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
