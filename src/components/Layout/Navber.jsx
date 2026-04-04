import React from 'react'
import Input from '../ui/input'
import { IoSearch } from 'react-icons/io5'
import { Link } from 'react-router'
import Button from '../ui/button'
import { FaRegUser } from 'react-icons/fa'
import { TiShoppingCart } from 'react-icons/ti'

const Navber = () => {
    const categoris =[
"Women's Fashion",
"men's Fashion",
"Kid's Fashion",
"Home & Lifestyle",
"Arts & Crafts",
"Computer & Electronics",
"Food & Grocery",
    ]
  return (
    <header>
      <nav className='py-8'>
        <div className="container flex justify-between gap-5">
            <Link to="/" className=''>
                        <img src="/Logo.png" alt="logo" />
                    </Link>
             <div className='flex  bg-[#F1F1F1] items-center h-fit rounded-md w-full max-w-3xl'>
                <Input placeholder={"I'm looking for..."} className='border-none'/>
               <Button  className='rounded-l-none px-5'>
                 <IoSearch className='text-xl' />
                 </Button>  
             </div>
             <div className='flex gap-10 ' >
               <Link to="/" className='flex gap-1.5 items-center text-base text-primary font-normal '> <FaRegUser /> Login </Link>
               <Link to="/" className='flex gap-1.5 items-center text-base text-primary font-normal '> <TiShoppingCart />My Cart </Link>
             </div>
        </div>
      </nav>
      <div className='container'>
       <ul className='flex gap-14 items-center justify-center px-5'> 
        {
                            categoris.map((item) => (
                                <li key={item}>
                                    <Link to="/" className='text-base font-medium text-primary uppercase text-nowrap'>{item}</Link>
                                </li>
                            ))
                        }
        </ul>

      </div>
    </header>
  )
}

export default Navber
