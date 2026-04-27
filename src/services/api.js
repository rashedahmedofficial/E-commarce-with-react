import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiService =createApi ({
     baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
  }),
  endpoints: (build) =>({
    getProducts : build.query({
        query : ({ category , Limit , skip}) =>  `/products${category? `/category/${category}` : "" }?Limit=${Limit}&skip=${skip}`,
    }),
    getcategories : build.query({
      query : ()=> "/products/category-list",
    }),
    getProductsDetails : build.query({
      query: (id)=> `/products/${id}`
    })
  }),
});

export const { useGetProductsQuery , useGetcategoriesQuery , useGetProductsDetailsQuery } = apiService;