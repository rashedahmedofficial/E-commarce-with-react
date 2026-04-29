import React, { useEffect, useState, useRef } from 'react'
import Input from '../ui/input'
import { IoSearch } from 'react-icons/io5'
import { Link } from 'react-router'
import Button from '../ui/button'
import { FaRegUser } from 'react-icons/fa'
import { TiShoppingCart } from 'react-icons/ti'
import { useGetcategoriesQuery, useLazySearchProductQuery } from '../../services/api'
import SearchDropdown from '../ui/Searchdropdown'


const Navber = () => {
  const { data } = useGetcategoriesQuery();
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTrigger, { data: searchProducts }] = useLazySearchProductQuery();
  const containerRef = useRef(null);

  // debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim()) {
        searchTrigger(search);
        setShowDropdown(true);
      } else {
        setShowDropdown(false);
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [search]);

  // close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header >
      <nav className='py-8'>
        <div className="container flex justify-between flex-wrap md:flex-nowrap gap-5">
          <Link to="/" className='order-1'>
            <img src="/Logo.png" alt="logo" />
          </Link>

          <div ref={containerRef} className='relative w-full md:max-w-md xl:max-w-3xl order-3 md:order-2'>
            <div className='flex bg-[#F1F1F1] items-center h-fit rounded-md'>
              <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={"I'm looking for..."} className='border-none'/>
              <Button className='rounded-l-none px-5'>
                <IoSearch className='text-xl' />
              </Button>
            </div>

            {/* 👇 dropdown component */}
            {showDropdown && (
              <SearchDropdown
                search={search}
                searchProducts={searchProducts}
                onClose={() => setShowDropdown(false)}
              />
            )}
          </div>

          <div className='flex gap-5 md:gap-10 order-2 md:order-3'>
            <Link to="/" className='flex gap-1.5 items-center text-base text-primary font-normal'><FaRegUser /> <span className='hidden md:block'>Login</span></Link>
            <Link to="/" className='flex gap-1.5 items-center text-base text-primary font-normal'><TiShoppingCart /><span className='hidden md:block'>My cart</span></Link>
          </div>
        </div>
      </nav>

      <div className='w-full pb-1.5 border-b border-b-[#EFEEEE]'>
        <div className='container'>
          <ul className='flex gap-14 items-center px-5 overflow-auto'>
            {data?.map((item) => (
              <li key={item}>
                <Link to={`/shop?category=${item}`} className='text-base font-medium text-primary uppercase text-nowrap'>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navber