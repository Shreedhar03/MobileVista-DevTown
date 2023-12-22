import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import MobileCard from '../components/MobileCard'
import FeaturedCard from '../components/FeaturedCard'
import Divider from '../components/Divider'
import WhatsNew from '../components/WhatsNew'

const HomePage = () => {
  return (
    <>
      <Navbar />
      {/* <Banner />  */}

      <section className='max-w-6xl sm:my-6 p-6 rounded-xl mx-auto'>

        <FeaturedCard flip={false} headText='More innovation, less footprint' title='Galaxy S23 Ultra' secText=' From repurposed glass to the colour of the polished metal frame, beauty is second nature in this form' image={'https://images.samsung.com/in/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg'} />
        <Divider />
        <FeaturedCard flip={true} headText='The phone that claps back' title='Galaxy Z Flip4' secText='Details are brought to light even in the dark with bigger pixels on the Wide Camera. Say cheese!' image={'https://image-us.samsung.com/us/smartphones/galaxy-z-flip4/v2/images/galaxy-z-flip4_highlights_colors_blue_front.jpg'} />

        <WhatsNew />
        <Divider/>
        <section className='flex flex-col'>
          <button className='text-sm underline underline-offset-1 font-semibold mt-24 mb-4 self-end mx-4'>View all</button>
          <div className='flex gap-8 flex-wrap mb-24'>
            <MobileCard />
            <MobileCard />
            <MobileCard />
            <MobileCard />
          </div>
        </section>
      </section>

    </>
  )
}

export default HomePage
