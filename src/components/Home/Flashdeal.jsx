import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router'
import Productcard from '../ui/Productcard'

const Flashdeal = () => {
  return (
    <section className='pb-7'>
      <div className="container">
        <div className='flex justify-between'>
            <h3 className='sub-h '>Flash Deals</h3>
        <Link className='flex items-center gap-5 font-normal text-[#757575] text-xl'> View more <FaArrowRightLong /> </Link>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-5 gap-1 md:gap-6'>
            <Productcard title="Headrest Executive Mesh Office Chairset" img="Flash-Product-card-1.png" price="৳10500" tag="-25% OFF" />
            <Productcard title="Women fashion dress set" img="Flash-Product-card-2.png" price="৳1000" tag="-25% OFF"/>
            <Productcard title="Headrest Executive Mesh Office Chairset" img="Flash-Product-card-3.png" price="৳5000" tag="-25% OFF"/>
            <Productcard title="Women black dress and red hat collections" img="Flash-Product-card-4.png" price="৳1000.00" tag="-25% OFF"/>

        </div>
      </div>
    </section>
  )
}

export default Flashdeal
