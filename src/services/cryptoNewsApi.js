import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const cryptoNewsHeaders={
    'x-rapidapi-key': '30580fe030msh4ba2c38f4c89f68p1b8d05jsn352b6974421e',
	'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
	'X-BingApis-SDK': 'true'
}
const baseUrl= 'https://bing-news-search.p.rapidapi.com';
const createRequest =(url)=>({url, headers:cryptoNewsHeaders});
export const cryptoNewsApi=createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptoNews:builder.query({
            query:({newsCategory, count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});
export const {useGetCryptoNewsQuery}= cryptoNewsApi;