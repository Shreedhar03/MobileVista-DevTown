import React from 'react'
import { Link } from 'react-router-dom'

const ExpandDiv = ({ title, products,url }) => {
    return (
        <>
            <li className='group self-center'>
                <Link to={url} className='cursor-pointer font-semibold py-9'>{title}</Link>
                {products && <section className={`max-h-0 flex gap-8 flex-wrap group-hover:max-h-[500px] group-hover:p-8 overflow-hidden transition-none bg-slate-100 absolute right-0 top-20 w-full p-0 rounded-lg`}>
                    {
                        products?.map((p, key) => {
                            return (
                                <>
                                    <div key={key} className='bg-slate-200 p-4 rounded-lg'>
                                        <img src={p.image} className='w-24 h-28 object-cover' alt="phone" />
                                        <h3 className='text-center mt-4 font-semibold text-xs'>{p.title}</h3>
                                    </div>
                                </>
                            )
                        })
                    }
                </section>
                }
            </li>
        </>
    )
}

export default ExpandDiv
