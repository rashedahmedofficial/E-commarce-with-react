import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import { Link } from 'react-router'
import Productcard from '../ui/Productcard'


const FeturedProduct = () => {
    return (
        <section className='pb-12'>
            <div className="container">
                <div className='flex justify-between'>
                    <h3 className='sub-h'>Featured Product</h3>
                    <Link to="/" className='flex items-center gap-5 font-normal text-[#757575] text-xl'>View more <IoMdArrowForward />
                    </Link>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-5 gap-1 md:gap-6'>
                    <Productcard title="Headrest Executive Mesh Office Chairset" img="/Features-1.png" price="৳10500" />
                    <Productcard title="Women fashion dress set" img="/Features-2.png" price="৳10500" />
                    <Productcard title="Headrest Executive Mesh Office Chairset" img="/Features-3.png" price="৳10000" />
                    <Productcard title="Headrest Executive Mesh Office Chairset" img="/Features-4.png" price="৳5000" />
                    <Productcard title="Headrest Executive Mesh Office Chairset" img="/Features-5.png" price="৳10579"/>
                    <Productcard title="Women fashion dress set" img="/Features-6.png" price="৳9"/>
                    <Productcard title="Headrest Executive Mesh Office Chairset" img="/Features-7.png" price="৳10599"/>
                    <Productcard title="Headrest Executive Mesh Office Chairset" img="/Features-8.png" price="৳10599"/>
                    <Productcard title="Headrest Executive Mesh Office Chairset" img="/Features-9.png" price="৳9999"/>
                    <Productcard title="Women fashion dress set" img="/Features-10.png" price="৳999"/>
                    <Productcard title="Headrest Executive Mesh Office Chairset" img="/Features-11.png" price="৳90500"/>
                    <Productcard title="Headrest Executive Mesh Office Chairset" img="/Features-12.png" price="৳80500"/>
                    <Productcard title="Headrest Executive Mesh Office Chairset" img="/Features-13.png" price="৳70500"/>
                    <Productcard title="Women fashion dress set" img="/Features-14.png" price="৳500"/>
                    <Productcard title="Headrest Executive Mesh Office Chairset" img="/Features-15.png" price="৳40500"/>
                    <Productcard title="Headrest Executive Mesh Office Chairset" img="/Features-16.png" price="৳50500"/>
                </div>
            </div>
        </section>
    )
}

export default FeturedProduct
