import React from 'react'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <section className='pt-3 pb-12'>
            <div className="container flex gap-4 md:gap-7">
                <div className='w-[68%]'>
                    <Link to="/shop"> <img className='w-full' src="/Banner-1.png" alt="Banner-1" /> </Link>
                </div>
                <div className='w-[33%] flex flex-col space-y-4 md:space-y-7'>
                    <Link to="/">
                        <img src="/Banner-right-1.png" alt="Banner-right-1" className='w-full' />
                    </Link>
                    <Link to="/">
                        <img src="/Banner-right-2.png" alt="Banner-right-2" className='w-full' />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Banner