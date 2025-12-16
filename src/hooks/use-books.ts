"use client";

import { useQuery } from "@apollo/client/react";
import { GET_BOOKS_QUERY } from "@/graphql/queries/books";
import { GetBooksResponse } from "@/graphql/types/book";

export function useBooks() {
  const { data, loading, error } = useQuery<GetBooksResponse>(GET_BOOKS_QUERY);

  const books = data?.booksCollection?.edges.map((e: any) => e.node) ?? [];

  return { books, loading, error };
}
