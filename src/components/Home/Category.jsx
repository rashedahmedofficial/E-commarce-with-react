import React from 'react'
import { BsHandbagFill, BsMinecartLoaded, BsTools } from 'react-icons/bs'
import { FaChevronRight } from 'react-icons/fa'
import { GiClothes, GiDiamondRing, GiPuppet, GiTravelDress, GiWatch } from 'react-icons/gi'
import { IoBookSharp, IoCalendarNumberOutline, IoShirtOutline } from 'react-icons/io5'
import { MdHome, MdHomeWork, MdPets, MdToys } from 'react-icons/md'
import { Link } from 'react-router'
import { useGetcategoriesQuery } from '../../services/api'

const Category = () => {
  const {data} = useGetcategoriesQuery();
  
  return (
    <section className='py-9'>
      <div className="container">
        <h3 className='sub-h'>Category</h3>
           <div className=' text-brand mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5'>
               {
                data?.map((item)=>(
                    <Link key={item} to={`/shop?category=${item}`} className='p-4 shadow flex items-center gap-2 rounded-xl'> 
                    
                                  <p className='pl-2.5 font-medium text-base text-secendory capitalize'>{item}</p>
                                  <FaChevronRight className='text-[#999999] ml-auto' />
                     </Link>
                ))
               }
           </div>
      </div>
    </section>
  )
}

export default Category
