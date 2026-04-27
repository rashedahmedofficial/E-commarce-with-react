import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import Select from '../components/ui/Select'
import Productcard from '../components/ui/Productcard'
import { useGetcategoriesQuery, useGetProductsQuery } from '../services/api'
import { Pagination } from '../components/ui/pagination'

const Shop = () => {
    const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

    const [Limit ,setLimit] = useState(30);
     const [pageNum, setPageNum] = useState(1);
     const [totalPage, setTotalPage] = useState(1);
    const { data, isLoading, error } = useGetProductsQuery({Limit ,  skip:Limit * (pageNum - 1), category });
     const { data: categories } = useGetcategoriesQuery();

     useEffect(() => {
    if (data?.total) {
      setTotalPage(Math.ceil(data?.total / Limit));
    }
  }, [data?.total, Limit]);
    

    const sortOptions = [
        {
            value: "10",
            label: "10"
        },
        {
            value: "20",
            label: "20"
        },
        {
            value: "40",
            label: "40"
        },
        {
            value: "50",
            label: "50"
        },
        {
            value: "80",
            label: "80"
        }
    ]
    // const categories = [
    //     { title: "Health & Household",},
    //     { title: "Kids Fashion", },
    //     {     title: "Toys", },
    //     {  title: "Groceries",   },
    //     {    title: "Men Fashion", },
    //     {    title: "Women’s Fashion", },
    //     {    title: "Stationary & Books",  }
    // ]
    return (
        <main className='py-12'>
            <div className="container grid grid-cols-12 gap-14">
                <div className="col-span-3 bg-white py-6 px-5 h-fit sticky top-0 left-0">
                    <h3 className='text-lg font-medium text-primary'>Related Categories</h3>
                    <div className='py-6 my-6 border-y-2 border-y-[#F4F4F4]'>
                        <h3 className='text-lg font-medium text-primary'>Filter by Price</h3>
                        <input type="range" name="" id="" className='w-full my-6'/>
                        <p>Price: ৳1000 - ৳2500 </p>
                    </div>
                    <div className="space-y-1.5">
                   {categories?.map((item) => (
                    <Link
                                to={`/shop?category=${item}`}
                        key={item}
                          className="block text-base text-secondary capitalize"  >
                         {item}
                        </Link>
            ))}
          </div>
                </div>
                <div className="col-span-9">
                    <div className='flex items-center justify-between'>
                        <p className='font-medium text-lg text-[#424241]/50'>Showing  <span className='text-secondary'>{Limit * (pageNum - 1) + 1} - {data?.total > Limit * pageNum ? Limit * pageNum : data?.total}</span> {" "} of <span className='text-secondary'>{data?.total}</span> product</p>
                        <div className='w-fit flex items-center gap-7'>
                            <p>Shown Product:</p>
                            <Select className="max-w-20" options={sortOptions} value={Limit} onChange={(e)=>setLimit(e.target.value)} />
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-6 mt-6'>
                        {isLoading? (
                            <p>Loading products ....</p>
                        ): (
                            data?.products?.map((item) => (
                                <Productcard key={item.id} data={item}  />
                            )) 
                            )}
                    </div>
                    <Pagination handelChange={(num) => setPageNum(num)}
            pageNum={pageNum}
            totalPage={totalPage}/>
                </div>
            </div>
        </main>
    )
}

export default Shop
