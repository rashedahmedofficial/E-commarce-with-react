import React from 'react'
import { Link } from 'react-router'
import Select from '../components/ui/Select'
import Productcard from '../components/ui/Productcard'

const Shop = () => {
    const sortOptions = [
        {
            value: "newest_items",
            label: "Newest Items"
        },
        {
            value: "oldest_items",
            label: "Oldest Items"
        }
    ]
    const categories = [
        { title: "Health & Household",},
        { title: "Kids Fashion", },
        {     title: "Toys", },
        {  title: "Groceries",   },
        {    title: "Men Fashion", },
        {    title: "Women’s Fashion", },
        {    title: "Stationary & Books",  }
    ]
    return (
        <main className='py-12'>
            <div className="container grid grid-cols-12 gap-14">
                <div className="col-span-3 bg-white py-6 px-5 h-fit sticky top-0 left-0">
                    <h3 className='text-lg font-medium text-primary'>Related Categories</h3>
                    <div className='space-y-1.5'>
                        {
                            categories.map((item) => (
                                <Link to="/shop" key={item.title} className='block text-base text-secondary'>
                                    {item.title}
                                </Link>
                            ))
                        }
                    </div>
                    <div className='py-6 my-6 border-y-2 border-y-[#F4F4F4]'>
                        <h3 className='text-lg font-medium text-primary'>Filter by Price</h3>
                        <input type="range" name="" id="" className='w-full my-6'/>
                        <p>Price: ৳1000 - ৳2500 </p>
                    </div>
                </div>
                <div className="col-span-9">
                    <div className='flex items-center justify-between'>
                        <p className='font-medium text-lg text-[#424241]/50'>Showing  <span className='text-secondary'>20</span> of <span className='text-secondary'>160</span> product</p>
                        <div className='w-fit flex items-center gap-7'>
                            <p>Sort By:</p>
                            <Select className="max-w-44" options={sortOptions} />
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-6 mt-6'>
                        <Productcard title="Headrest Executive Mesh Office Chairset" img="/Features-1.png" price="৳10500"/>
                        <Productcard title="Headrest Executive Mesh Office Chairset" img="/Features-3.png" price="৳10000" />
                        <Productcard title="Women fashion dress set" img="/Features-2.png" price="৳10500"/>
                        <Productcard title="Headrest Executive Mesh Office Chairset" img="/Features-4.png" price="৳5000"/>
                        <Productcard title="Headrest Executive Mesh Office Chairset" img="/Features-5.png" price="৳10579" />
                        <Productcard title="Women fashion dress set" img="/Features-6.png" price="৳9"/>
                        <Productcard title="Headrest Executive Mesh Office Chairset" img="/Features-7.png" price="৳10599"/>
                        <Productcard title="Headrest Executive Mesh Office Chairset" img="/Features-9.png" price="৳9999"/>
                        <Productcard title="Headrest Executive Mesh Office Chairset" img="/Features-11.png" price="৳90500"/>
                        <Productcard title="Headrest Executive Mesh Office Chairset" img="/Features-12.png" price="৳80500" />
                        <Productcard title="Women fashion dress set" img="/Features-14.png" price="৳500"/>
                        <Productcard title="Headrest Executive Mesh Office Chairset" img="/Features-13.png" price="৳70500"/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Shop
