import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import MobileCard from '../components/MobileCard'
import down from '../assets/down.svg'
import up from '../assets/up.svg'
import { AppContext } from '../App'

const AllProducts = () => {
    const [showFilters, setShowFilters] = useState(0)
    const { allProducts } = useContext(AppContext)
    return (
        <>
            <Navbar />

            <section className='max-w-6xl mx-6 xl:mx-auto my-6'>
                <h2 className='text-lg flex items-center gap-1' onClick={() => setShowFilters(!showFilters)}>Apply Filters <img src={!showFilters ? down : up} alt="down" /></h2>
                <div className={`${showFilters ? 'flex' : 'hidden'} flex gap-4 sm:gap-8 flex-wrap mt-3 mb-6`}>
                    <div className='flex flex-col gap-3'>
                        <h1 className='underline'>RAM</h1>
                        <div className='flex flex-wrap gap-2 items-center'>
                            <button className='bg-slate-800 text-white px-2 py-1 rounded-lg'>All</button>
                            <button className='bg-slate-200 px-2 py-1 rounded-lg'>8GB</button>
                            <button className='bg-slate-200 px-2 py-1 rounded-lg'>16GB</button>
                            <button className='bg-slate-200 px-2 py-1 rounded-lg'>32GB</button>
                        </div>
                    </div>
                    <div className='h-20 w-[2px] bg-slate-200 hidden xl:block'></div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='underline'>Storage</h1>
                        <div className='flex flex-wrap gap-2 items-center'>
                            <button className='bg-slate-800 text-white px-2 py-1 rounded-lg'>All</button>
                            <button className='bg-slate-200 px-2 py-1 rounded-lg'>64GB</button>
                            <button className='bg-slate-200 px-2 py-1 rounded-lg'>128GB</button>
                            <button className='bg-slate-200 px-2 py-1 rounded-lg'>256GB</button>
                        </div>
                    </div>
                    <div className='h-20 w-[2px] bg-slate-200 hidden xl:block'></div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='underline'>Processor</h1>
                        <div className='flex flex-wrap gap-2 items-center'>
                            <button className='bg-slate-800 text-white px-2 py-1 rounded-lg'>All</button>
                            <button className='bg-slate-200 px-2 py-1 rounded-lg'>Dimensity</button>
                            <button className='bg-slate-200 px-2 py-1 rounded-lg'>MediaTek</button>
                            <button className='bg-slate-200 px-2 py-1 rounded-lg'>Snapdragon</button>
                            <button className='bg-slate-200 px-2 py-1 rounded-lg'>Qualcomm</button>
                        </div>
                    </div>
                </div>
                <h1 className='text-lg mt-4'>Discover All Smartphones</h1>
                <div className='flex flex-wrap items-center justify-center sm:justify-start gap-6 mt-6'>
                    {
                        allProducts.map((p,key) => {
                            return <MobileCard key={key} brand={p.brand} productName={p.productName} images={p.images} discountPercentage={p.discountPercentage} price={p.price} rating={p.rating}/>
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default AllProducts
