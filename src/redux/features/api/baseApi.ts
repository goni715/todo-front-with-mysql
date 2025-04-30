// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/todo",
  }),
  tagTypes: ["Todos", "Todo"],
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => ({
        url: "/get-all-todos",
        method: "GET",
      }),
      providesTags: ["Todos"],
    }),
    getSingleTodo: builder.query({
      query: (id) => ({
        url: `/get-single-todo/${id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, arg) => [{ type: "Todo", id: arg }],
    }),
    createTodo: builder.mutation({
      query: (data) => ({
        url: "/create-todo",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result) => {
        if (result?.success) {
          return ["Todos"];
        }
        return [];
      },
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/delete-todo/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/update-todo/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, _error, { id }) => {
        if (result?.success) {
          return ["Todos", { type: "Todo", id }];
        }
        return [];
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllTodosQuery,
  useGetSingleTodoQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation
} = baseApi;
