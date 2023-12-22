import React from 'react'

const ProductDetail = (props) => {
    const {title,data} = props
    return (
        <>
            <div className='p-3 bg-slate-200 hover:bg-slate-50 hover:border-slate-200 border rounded-lg'>
                <h2>{title}</h2>
                <p>{data}</p>
            </div>
        </>
    )
}

export default ProductDetail
