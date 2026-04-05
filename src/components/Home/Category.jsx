import React from 'react'
import { BsHandbagFill, BsMinecartLoaded, BsTools } from 'react-icons/bs'
import { FaChevronRight } from 'react-icons/fa'
import { GiClothes, GiDiamondRing, GiPuppet, GiTravelDress, GiWatch } from 'react-icons/gi'
import { IoBookSharp, IoCalendarNumberOutline, IoShirtOutline } from 'react-icons/io5'
import { MdHome, MdHomeWork, MdPets, MdToys } from 'react-icons/md'
import { Link } from 'react-router'

const Category = () => {
    const categoriess =[
        {title:"Health & Household" , icon:MdHomeWork},
        {title:"Kids Fashion" , icon: GiClothes },
        {title:"Toys" , icon: MdToys  },
        {title:"Groceries" , icon: BsMinecartLoaded },
        {title:"Home & Lifestyle" , icon: MdHome  },
        {title:"Men Fashion" , icon: IoShirtOutline  },
        {title:"Women’s Fashion" , icon: GiTravelDress  },
        {title:"Stationary & Books" , icon: IoBookSharp  },
        {title:"Leather Goods" , icon: BsHandbagFill  },
        {title:"Jewelleries " , icon: GiDiamondRing },
        {title:"Watches" , icon: GiWatch  },
        {title:"boy Fashion" , icon: GiPuppet  },
        {title:"Tools & Hardware" , icon: BsTools  },
        {title:"Pet Supplies" , icon: MdPets },
        {title:"Seasonal" , icon: IoCalendarNumberOutline  }
    ]
  return (
    <section className='py-11'>
      <div className="container">
        <h3 className='sub-h'>Category</h3>
           <div className=' text-brand mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5'>
               {
                categoriess.map((item)=>(
                    <Link key={item.title} to="/" className='p-4 shadow flex items-center gap-2 rounded-xl'> 
                     <item.icon className='text-3xl ' />
                                  <p className='pl-2.5 font-normal text-base text-secendory'>{item.title}</p>
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
