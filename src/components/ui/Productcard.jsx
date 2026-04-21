import React from 'react'
import { BiCart } from 'react-icons/bi'
import { MdStarRate } from 'react-icons/md'

const Productcard = ({data }) => {
  return (
    <div className='p-2.5 border border-[#F2F2F2] bg-white rounded-2xl '>
      <div className='rounded-2xl  overflow-hidden relative'>
        <img src={data?.thumbnail} alt="Flash-product " className='w-full' />
        { (<p className='absolute top-0 py-1 px-3 left-0 text-xs md:text-base  bg-tag text-white rounded-lt-2xl'>-${data?.discountPercentage} OFF</p>)}
      </div>
      <div className='p-3.5'>
        <div className='flex gap-0.5 items-center text-[#FAC96B] text-2xl'>
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate className='text-[#D3D3D3]' />
            <span className='text-primary text-xl'>{data?.rating}</span>
        </div>
        <h4 className='py-2.5 text-[18px] font-medium text-primary'>{data?.title}</h4>
        <div className='flex items-center justify-between'>
            <p className='font-medium text-2xl text-brand'>{data?.price} $</p>
            <BiCart className='font-medium text-lg md:text-3xl text-brand'/>
        </div>
      </div>
    </div>
  )
}

export default Productcard
