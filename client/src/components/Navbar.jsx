import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cartimg from '../assets/cart.svg'
import logo from '../assets/samsung.svg'
import menu from '../assets/menu.svg'
import ExpandDiv from './ExpandDiv'
import { AppContext } from '../App'

const Navbar = () => {
    const [height, setHeight] = useState(window.scrollY)
    const [navBg, setNavBg] = useState(false)
    const [expandNav, setExpandNav] = useState(false)
    const { cart } = useContext(AppContext)
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

            <div className={`max-w-6xl mx-auto flex flex-col sm:flex-row relative px-6 justify-between pb-10 sm:pb-0 border-b-2 sm:border-b-0 border-gray-300 ${expandNav ? 'max-h-96' : 'max-h-24'}  overflow-hidden sm:overflow-visible transition-all`}>

                <img src={logo} alt="logo" className='w-24' onClick={() => navigate('/')} />

                <ul className='flex flex-wrap gap-4 sm:gap-14'>
                    <ExpandDiv url={'/products'} title={'All Smartphones'}/>
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
                <div className='flex items-center gap-3'>
                    <input type="text" placeholder='search products' className='focus:outline-none border border-slate-300 rounded-xl px-4 py-2 text-sm' />
                    <button className='relative' onClick={() => navigate('/checkout')}>
                        <img src={cartimg} alt="cart" className='w-6' />
                        <p className={`absolute -top-1 -right-1 bg-red-700 ${cart.length==0 && 'hidden'} w-4 h-4 rounded-full flex items-center justify-center text-xs text-white`}>{cart.length>0 && cart.length}</p>
                    </button>
                </div>

                <button className='absolute w-5 block sm:hidden top-9 right-10' onClick={() => setExpandNav(!expandNav)}>
                    <img src={menu} alt="menu" />
                </button>
            </div>
        </nav>

    )
}

export default Navbar
