import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["books"],
  endpoints: (build) => ({
    getBook: build.query({
      query: () => "/books",
      providesTags: ["books"],
    }),
    deleteBook: build.mutation({
      query: (_id) => ({
        url: `/books/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
    addBook: build.mutation({
      query: (newBook) => ({
        url: `/books`,
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const { useGetBookQuery, useDeleteBookMutation , useAddBookMutation} = bookApi;
