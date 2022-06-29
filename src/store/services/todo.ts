// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"



// const todoAPI = createApi({
//     reducerPath: 'todoAPI',
//     baseQuery: fetchBaseQuery(
//         { baseUrl: `https://jsonplaceholder.typicode.com` }
//         ),
//     endpoints: (builder) => ({
//         alltodo: builder.query({
//             query: (todoID) => `todos/${todoID}`
//         })
//     })
// })

// // export const { useAllTodoQuery } = todoAPI

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseURL = `http://jsonplaceholder.typicode.com`

// http://jsonplaceholder.typicode.com/photos?_start=0&_limit=50
export const todoAPI = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseURL}`,
    }),
    endpoints: (builder) => ({
        getJokeByType: builder.query({
            query: ({ start, limit }) => `/photos?_start=${start}&_limit=${limit}`,
        }),
    }),
});

// export const { useGetJokeByTypeQuery } = todoApi;
export const { useGetJokeByTypeQuery } = todoAPI
