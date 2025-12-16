"use client";

import { useQuery } from "@apollo/client/react";
import { GET_MOVIES_QUERY } from "@/graphql/queries/movies";
import { GetMoviesResponse } from "@/graphql/types/movie";

export function useMovies() {
  const { data, loading, error } =
    useQuery<GetMoviesResponse>(GET_MOVIES_QUERY);

  const movies = data?.moviesCollection?.edges.map((e: any) => e.node) ?? [];

  return { movies, loading, error };
}
