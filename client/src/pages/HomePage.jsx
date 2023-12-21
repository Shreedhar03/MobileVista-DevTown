import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import MobileCard from '../components/MobileCard'

const HomePage = () => {
  return (
    <>
       <Navbar />
       {/* <Banner />  */}

       <section className='max-w-6xl my-6 p-6 rounded-xl mx-auto'>
        <h1 className='text-xl font-semibold'>Newly Launched</h1>

        <div className='flex gap-8 flex-wrap my-6'>
            <MobileCard />
            <MobileCard />
            <MobileCard />
            <MobileCard />
        </div>
       </section>

    </>
  )
}

export default HomePage
