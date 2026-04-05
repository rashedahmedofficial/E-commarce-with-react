import React from 'react'
import { BiCart } from 'react-icons/bi'
import { MdStarRate } from 'react-icons/md'

const Productcard = ({title,img,tag,price}) => {
  return (
    <div className='p-2.5 border border-[#F2F2F2] bg-white rounded-2xl '>
      <div className='rounded-2xl  overflow-hidden relative'>
        <img src={img} alt="Flash-product " className='w-full' />
        {tag && (<p className='absolute top-0 py-1 px-3 left-0 text-xs md:text-base  bg-tag text-white rounded-lt-2xl'>{tag}</p>)}
      </div>
      <div className='p-3.5'>
        <div className='flex gap-0.5 items-center text-[#FAC96B] text-2xl'>
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate className='text-[#D3D3D3]' />
            <span className='text-primary'>(0)</span>
        </div>
        <h4 className='py-2.5 text-[18px] font-medium text-primary'>{title}</h4>
        <div className='flex items-center justify-between'>
            <p className='font-medium text-2xl text-brand'>{price}</p>
            <BiCart className='font-medium text-lg md:text-3xl text-brand'/>
        </div>
      </div>
    </div>
  )
}

export default Productcard
