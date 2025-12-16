"use client";

import { useQuery } from "@apollo/client/react";
import { GET_ANIMES_QUERY } from "@/graphql/queries/animes";
import { GetAnimesResponse } from "@/graphql/types/anime";

export function useAnimes() {
  const { data, loading, error } =
    useQuery<GetAnimesResponse>(GET_ANIMES_QUERY);

  const animes = data?.animesCollection?.edges.map((e: any) => e.node) ?? [];

  return { animes, loading, error };
}
