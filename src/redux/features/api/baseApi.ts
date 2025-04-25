// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
     baseUrl: 'http://localhost:5000/api/v1/todo' 
  }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getAllTodos: builder.query({
      query: () => ({
        url: '/get-all-todos',
        method: 'GET'
      })
    }),
    createTodo: builder.mutation({
      query: (data) => ({
        url: '/create-todo',
        method: 'POST',
        body: data
      })
    })

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery,  useGetAllTodosQuery, useCreateTodoMutation} = baseApi;