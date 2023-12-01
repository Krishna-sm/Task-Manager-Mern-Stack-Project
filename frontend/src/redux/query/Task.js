import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const TaskApi = createApi({
  reducerPath: 'TaskApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://tiny-beanie-ox.cyclic.app/api/v1' }),
  endpoints: (builder) => ({
    getAllTask: builder.query({
      query: () => `/task`,
    }),
    updateTask: builder.mutation({
      query: (id) => ({
        url:`/task/${id}`,
        method:"PUT"
      })
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url:`/task/${id}`,
        method:"DELETE"
      })
    }),
    AddTask: builder.mutation({
      query: (obj) => ({
        url:`/task`,
        method:"POST",
        body:obj
      })
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllTaskQuery,useUpdateTaskMutation,useDeleteTaskMutation , useAddTaskMutation} = TaskApi