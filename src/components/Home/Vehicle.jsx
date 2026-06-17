import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router'
import Productcard from '../ui/Productcard'
import { useGetProductsQuery } from '../../services/api'

const Vehicle = () => {
   const { data, isLoading, error } = useGetProductsQuery({
    Limit : 4 ,
    skip:1,
    category: "vehicle",
  });
  return (
    <section className='pb-7'>
      <div className="container">
        <div className='flex justify-between'>
            <h3 className='sub-h '>Vehicle</h3>
        <Link to="/shop?category=vehicle" className='flex items-center gap-5 font-normal text-[#757575] text-xl'> View more <FaArrowRightLong /> </Link>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-5 gap-1 md:gap-6'>
          {
            data?.products.map((item)=>(
               <Productcard key={item.id} data={item} />

            ))
          }

        </div>
      </div>
    </section>
  )
}

export default Vehicle
