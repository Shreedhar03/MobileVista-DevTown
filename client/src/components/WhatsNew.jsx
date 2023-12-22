import React from 'react'

const WhatsNew = () => {
    return (
        <section className='max-w-6xl mx-auto my-16 p-6'>
            <h1 className="text-center font-semibold text-4xl">What's New</h1>

            <div className="flex my-20 gap-4">
                <div className='w-1/2 flex relative flex-col gap-8 p-10 bg-slate-100 rounded-xl'>
                    <img className='object-contain' src="https://images.samsung.com/is/image/samsung/assets/in/2307/pcd/PCD_B5_Whats-new_376x376_pc_default.png?$376_376_PNG$" alt="phone" />
                    <h3 className='self-center font-bold text-3xl'>Galaxy Z Flip5</h3>
                    <button className='mt-2 text-xl self-center bg-slate-900 text-white px-3 py-1 rounded-lg'>Buy Now</button>
                    <p className='bg-blue-600 px-3 py-1 rounded-md absolute top-3 right-3 text-white text-xs'>New</p>
                </div>
                <div className='grid grid-cols-2 w-1/2 gap-6'>
                    <div className='group bg-slate-100 flex flex-col gap-5 p-5 rounded-lg'>
                        <img className='w-40 h-40 object-cover group-hover:scale-105 transition-all' src="https://images.samsung.com/is/image/samsung/assets/in/2307/pcd/PCD_Q5_Whats-new_160x160_pc_default.png?$160_160_PNG$" alt="phone" />
                        <h3 className='self-center font-semibold text-xl'>Galaxy Z Fold5</h3>
                        <button className='opacity-0 mt-2 transition-all group-hover:opacity-100 self-center bg-slate-900 text-white px-3 py-1 rounded-lg'>Buy Now</button>
                    </div>
                    <div className='group bg-slate-100 flex flex-col gap-5 p-5 rounded-lg'>
                        <img className='w-40 h-40 object-cover group-hover:scale-105 transition-all' src="https://images.samsung.com/is/image/samsung/assets/in/2307/pcd/PCD_DM1_DM2_KV_Whats-new_160x160_pc.png?$160_160_PNG$" alt="phone" />
                        <h3 className='self-center font-semibold text-xl'>Galaxy S23 Ultra</h3>
                        <button className='opacity-0 mt-2 transition-all group-hover:opacity-100 self-center bg-slate-900 text-white px-3 py-1 rounded-lg'>Buy Now</button>
                    </div>
                    <div className='group bg-slate-100 flex flex-col gap-5 p-5 rounded-lg'>
                        <img className='w-40 h-40 object-cover group-hover:scale-105 transition-all' src="https://images.samsung.com/is/image/samsung/assets/in/2307/pcd/Galaxy_A_MD_Small_PC_default.png?$160_160_PNG$" alt="phone" />
                        <h3 className='self-center font-semibold text-xl'>Galaxy S23 | S23+</h3>
                        <button className='opacity-0 mt-2 transition-all group-hover:opacity-100 self-center bg-slate-900 text-white px-3 py-1 rounded-lg'>Buy Now</button>
                    </div>
                    <div className='group bg-slate-100 flex flex-col gap-5 p-5 rounded-lg'>
                        <img className='w-40 h-40 object-cover group-hover:scale-105 transition-all' src="https://images.samsung.com/is/image/samsung/assets/in/2307/pcd/PCD_DM3_KV_Whats-new_160x160_pc.png?$160_160_PNG$" alt="phone" />
                        <h3 className='self-center font-semibold text-xl'>Galaxy A54 5G</h3>
                        <button className='opacity-0 mt-2 transition-all group-hover:opacity-100 self-center bg-slate-900 text-white px-3 py-1 rounded-lg'>Buy Now</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default WhatsNew
