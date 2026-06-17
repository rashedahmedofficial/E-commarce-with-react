import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import { Link } from 'react-router'
import Productcard from '../ui/Productcard'
import { useGetProductsQuery } from '../../services/api'


const FeturedProduct = () => {
     const { data, isLoading, error } = useGetProductsQuery({
    Limit: 20,
    skip: 0,
  });
    return (
        <section className='pb-12'>
            <div className="container">
                <div className='flex justify-between'>
                    <h3 className='sub-h'>Featured Product</h3>
                    <Link to="/shop" className='flex items-center gap-5 font-normal text-[#757575] text-xl'>View more <IoMdArrowForward />
                    </Link>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-5 gap-1 md:gap-6'>
                    {
                        data?.products.map((item)=>(
                             <Productcard  key={item.id} data={item} />

                        ))}
                </div>
            </div>
        </section>
    )
}

export default FeturedProduct
