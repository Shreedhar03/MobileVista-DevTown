import React from 'react'

const MobileCard = () => {
  return (

    <div key={''} className='w-[250px] h-[320px] border border-slate-300 shadow-inner shadow-slate-100 pb-2 rounded-lg flex flex-col justify-between snap-center'>

            <div className="images flex overflow-scroll w-[250px] h-[200px] mt-3 rounded-t-2xl snap-x snap-mandatory">
                {[1,2,3,4].map((img, i) => {
                    return <img src={'https://images.samsung.com/is/image/samsung/p6pim/in/2302/gallery/in-galaxy-s23-s918-sm-s918bzgcins-thumb-534863401?imwidth=480'} key={i} className='shrink-0 w-full h-full object-contain snap-center' alt='product'></img>
                })}
            </div>

            <div className="details mx-3 flex flex-col h-[120px] justify-between py-4 relative cursor-pointer" onClick={()=>navigate(`/`)}>
                <div className='flex justify-between bg-sate-400'>
                    <div className='flex flex-col'>
                        <p className='text-sm text-gray-600'>Oppo</p>
                        <p className='text-lg font-semibold'>F19 Pro</p>
                        <div className='flex gap-2 items-center mt-2'>
                            <p className='text-lg font-semibold'>&#8377;562</p>
                            <p className='text-sm text-gray-600 border-l-2 pl-1'>⭐ 4.6</p>
                        </div>
                    </div>
                </div>

                <p className='absolute -top-4 bg-green-400 py-[2px] px-1 rounded-sm text-sm'> -26% </p>
            </div>

            <button className='bg-gray-900 text-sm text-white py-2 mx-2 rounded-md'>Add To Cart</button>
        </div>
  )
}

export default MobileCard
