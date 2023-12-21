import React from 'react'

const FeaturedCard = (props) => {
    return (
        <>
            <div className='flex my-8 sm:my-16 rounded-xl flex-col gap-2'>
                <h1 className={`bg-[#9c850a] text-white py-1 px-3 ${props.flip ? 'self-end' : 'self-start'} rounded-xl text-sm`}>Featured</h1>
                <div className={`flex flex-col  ${props.flip ? 'sm:flex-row-reverse' : 'sm:flex-row'} justify-between gap-16`}>
                    <img className='w-96 h-80 object-cover' src={props.image} alt="phone" />
                    <div>
                        <p className='text-xl font-semibold'>{props.headText}</p>
                        <h1 className='text-5xl font-semibold'>{props.title}</h1>
                        <p className='text-lg mt-3'>{props.secText}</p>
                        <button className='bg-gray-900 px-3 mt-4 text-sm text-white py-2 rounded-md'>See more</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedCard
