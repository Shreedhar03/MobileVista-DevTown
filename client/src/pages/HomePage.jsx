import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import MobileCard from '../components/MobileCard'
import FeaturedCard from '../components/FeaturedCard'
import Divider from '../components/Divider'
import WhatsNew from '../components/WhatsNew'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'

const HomePage = () => {

  const { allProducts } = useContext(AppContext)
  return (
    <>
      <Navbar />
      {/* <Banner />  */}

      <section className='max-w-6xl sm:my-6 p-6 rounded-xl mx-auto'>

        <FeaturedCard flip={false} headText='More innovation, less footprint' title='Galaxy S23 Ultra' secText=' From repurposed glass to the colour of the polished metal frame, beauty is second nature in this form' image={'https://images.samsung.com/in/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg'} />
        <Divider />
        <FeaturedCard flip={true} headText='The phone that claps back' title='Galaxy Z Flip4' secText='Details are brought to light even in the dark with bigger pixels on the Wide Camera. Say cheese!' image={'https://image-us.samsung.com/us/smartphones/galaxy-z-flip4/v2/images/galaxy-z-flip4_highlights_colors_blue_front.jpg'} />

        <WhatsNew />
        <Divider />
        <section className='flex flex-col'>
          <Link to={'/products'} className='text-sm underline underline-offset-1 font-semibold mt-24 mb-4 self-end mx-4'>View all</Link>
          <div className='flex gap-8 flex-wrap justify-center mb-24'>
            {
                allProducts.slice(0,4).map((p,key)=>{
                  return <MobileCard id={p._id} key={key} brand={p.brand} productName={p.productName} images={p.images} discountPercentage={p.discountPercentage} price={p.price} rating={p.rating}/>
                })
            }
          </div>
        </section>
      </section>
      <Footer />
    </>
  )
}

export default HomePage
