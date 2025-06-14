import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders={
    'x-rapidapi-key': '30580fe030msh4ba2c38f4c89f68p1b8d05jsn352b6974421e',
	'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}
const baseUrl='https://coinranking1.p.rapidapi.com';
const createRequest=(url)=>({url, headers: cryptoApiHeaders})
export const cryptoApi=createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        }),
        getExchanges:builder.query({
            query:()=>createRequest('/exchanges')
        }),
        getCryptoDetails:builder.query({
            query:(coinId)=>createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory:builder.query({
            query:({coinId, timePeriod})=>createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
        })

    })
});
export const{
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery
}=cryptoApi;





