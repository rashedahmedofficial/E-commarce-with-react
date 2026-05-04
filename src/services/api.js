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
    }),
    searchProduct :  build.query({
      query: (search)=> `/products/search?q=${search}`
    }),
     login : build.mutation({
      query: (data) => ({
       url: `/auth/login`,
       method: "POST",
       body: data,
      }),
  }), 
  user : build.query({
      query: (id)=> ({
        url: `/auth/me`,
      }),
    }),
}),
});

export const { useGetProductsQuery , useGetcategoriesQuery , useGetProductsDetailsQuery , useLazySearchProductQuery ,useLoginMutation, useUserQuery } = apiService ;