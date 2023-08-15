import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders={
    'X-RapidAPI-Key': 'b9f220ad03msh9634e44314ca942p170a4cjsn4e9b33df2fb2',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl='https://coinranking1.p.rapidapi.com';

const createRequest=(url)=>({url,headers:cryptoApiHeaders});

export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        }),
        // This below query is for checking history of coins
         getHistory:builder.query({
            query:({coinId,timePeriod})=>createRequest(`/coin/${coinId}/history`)
        }),
        getCryptoDetails:builder.query({
            query:(coinId)=> createRequest(`/coin/${coinId}`)
        })
    })
});


export const{
    useGetCryptosQuery,useGetHistoryQuery,useGetCryptoDetailsQuery
}=cryptoApi;