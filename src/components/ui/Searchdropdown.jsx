import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { Link } from 'react-router'
import Productcard from './Productcard';


const SearchDropdown = ({ search, searchProducts, onClose }) => {

  if (!search.trim()) return null;

  return (
    
    <div className='fixed  left-1/2 -translate-x-1/2 w-[90vw] max-w-6xl mt-1.5 border border-gray-200 rounded-xl overflow-hidden backdrop-blur-md bg-white/30 z-50'>

      {/* no results */}
      {searchProducts?.products?.length === 0 && (
        <div className='flex flex-col items-center py-8 gap-2 text-gray-400'>
          <IoSearch className='text-3xl opacity-30' />
          <p className='text-sm'>No results for <span className='font-medium text-gray-600'>"{search}"</span></p>
        </div>
      )}

      {/* results */}
      {searchProducts?.products?.length > 0 && (
        <>
          <div className='flex items-center justify-between px-4 pt-3 pb-2'>
            <p className='text-[11px] font-semibold uppercase tracking-widest text-gray-400'>
              {searchProducts.products.length} results
            </p>
            <Link
              to={`/shop?search=${search}`}
              onClick={onClose}
              className='text-xs font-medium text-primary hover:underline'
            >
              View all →
            </Link>
          </div>

          <div className='px-4 pb-4 max-h-[80vh] overflow-y-auto'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-3' onClick={onClose}>
              {searchProducts.products.map((item) => (
                <Productcard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default SearchDropdown