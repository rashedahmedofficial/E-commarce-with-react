import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useEffect, useRef, useState } from "react";
import { NextArrow, PrevArrow } from "../components/ui/Arrow";
import { IoStar } from "react-icons/io5";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { Link } from "react-router";



const Productdetails = () => {
      const [selectedSize , setselectedSize] = useState("S")
      const [val , setVal] = useState(1)
      const [nav1, setNav1] = useState(null);
      const [nav2, setNav2] = useState(null);
      let sliderRef1 = useRef(null);
      let sliderRef2 = useRef(null);
     
       useEffect(() => {
       setNav1(sliderRef1);
      setNav2(sliderRef2);
  }, []);

     const  settingsLarge = {
    dots: false,
   
    slidesToShow: 1,
    arrows : false,
  
  };
   

  const settingsmall = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
     nextArrow: <NextArrow />,
    prevArrow: <PrevArrow/>
  
  };
   
  const catagories = [
    " Direct Full Array",
    "  Quantum Dot Technology",
    "  Ambient Mode",
    "  One Remote Control"
  ]

  const size = ["S" , "M" , "L" , "X" , "XL" , "XXL"]
   

     const plus = () => {
      setVal ( val + 1) 
   
   }

   const minus = () => {
     if(val > 1)
      setVal ( val - 1)
       
      
   }

 
  return (
   <section className='py-14'>
      <div className="container grid grid-cols-2 gap-28">
         <div className='grid grid-cols-4 gap-10'>
            
      
      <Slider className='max-w-xl col-span-3'{...settingsLarge} asNavFor={nav2} ref={Slider => (sliderRef1 = Slider)}>
        <div>
          <img src="/image (5).png" alt="" className='w-full'/>
        </div>
        <div>
          <img src="/image (4).png" alt="" className='w-full'/>
        </div>
        <div>
          <img src="/image (7).png" alt="" className='w-full'/>
        </div>
        <div>
          <img src="/Image Placeholder (6).png" alt="" className='w-full'/>
        </div>
      
        
      </Slider>
       
      <Slider
        asNavFor={nav1}
        ref={Slider => (sliderRef2 = Slider)}
        slidesToShow={2}
        swipeToSlide={true}
        focusOnSelect={true}
        {...settingsmall}
        
      >
        <div>
          <img src="/image (5).png" alt="" className='w-3/4'/>
        </div>
        <div>
          <img src="/image (4).png" alt="" className='w-3/4'/>
        </div>
        <div>
          <img src="/image (7).png" alt="" className='w-3/4'/>
        </div>
        <div>
          <img src="/Image Placeholder (6).png" alt="" className='w-3/4'/>
        </div>
      </Slider>
      
         </div>
         
         <div >
          <div className='border-b pb-6 border-[#EAEAEA]  '>
            
            <p className='text-primary font-medium text-2xl w-[610px]'>Super Skinny Rib Trouser & Joggers for Men By Sowdagar Trouser</p>

            <div className='flex items-center gap-2 my-6'>
              <p className='text-xl'>4.0</p>
               <IoStar className='text-xl text-yellow-500'/>
               <IoStar className='text-xl text-yellow-500'/>
               <IoStar className='text-xl text-yellow-500'/>
               <IoStar className='text-xl text-yellow-500'/>
               <IoStar className='text-xl text-gray-300'/>
               <p className='text-primary/50'>(223)</p>
                <span className='text-primary/50'>|</span>

                <div className='flex items-center gap-2'>
                  <FaCheck className='text-green-400' />
                  <p>4,320 Sold</p>
                  <span className='text-primary/50'>|</span>

                </div>

                <div className='flex items-center gap-3'>
                  <IoMdHeart className='text-gray-400 text-xl'/>
                  <p className='font-semibold text-base text-brand'>Add to wishlist</p>

                </div>
            </div>

            <div className='my-8 flex  items-center gap-4'>
              <p className='text-4xl font-semibold text-brand '>$976.33</p>
              <p className='line-through text-xl text-primary/50'>$1,020.99</p>
              <p className='bg-badge px-2.5 py-1 text-white'>20%</p>
            </div>

            <div className='flex gap-6 items-center'>
              <p>SKU: <span className='text-primary/60'>12314124124</span></p>
              <div className='flex items-center gap-1'>
                <FaCheckCircle className='text-green-500'/>
              <p className='text-primary/60'>In Stock</p>
              </div>

            </div>
          </div>
          <div className='my-8'>
            <p className='text-xl w-[640px] text-primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
               et dolore magna aliqua. Ut enim ad minim veniam</p>

               <div className='ml-7 my-4 flex '>
                   <ol className='list-disc space-y-4 '>
                    {
                      catagories.map((item)=>(
                        <li className='text-primary'>{item}</li>

                      ))
                    }
                   </ol>
               </div>
          </div>
          <div className='flex gap-6 items-center'>
            <p>Size</p>
             {
              size.map((item)=>(

                <label key={item} htmlFor={item} className={`py-1 px-3 border border-secondary/10 ${selectedSize === item && "bg-brand text-white"}`}>
                  {item}
                 <input onChange={(e) => setselectedSize (e.target.value)} value={item} type="radio" name='size' id={item} hidden/>
                </label>
               
              ))
             }

        
          </div>

          <div className='py-4 flex gap-8 items-center mt-4 '>
            <p>Quantity: </p>
            
           <div className='flex gap-4 border items-center border-[#EAEAEA] rounded'>
             <button onClick={minus} className='bg-[#EFEFEF] px-4 py-2 text-xl'>-</button>
            <p className=''>{val}</p>
            <button onClick={plus} className='bg-[#EFEFEF] px-4 py-2 text-xl '>+</button>
           </div>
            
            <Link className='bg-brand text-white px-6 py-2 rounded '>Add cart</Link>
            <Link className='border-2 border-blue-400 px-6 py-1.5 bg-blue-50 font-semibold text-blue-400 rounded'>Buy Now</Link>
          </div>
         </div>
      </div>
   </section>
  )
}


export default Productdetails
