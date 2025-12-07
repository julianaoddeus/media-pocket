import { Anime } from "@/lib/db";
import { graphqlFetch } from "@/lib/graphql-client";
import { useState } from "react";

const GET_ANIMES_QUERY = `
  query GetAnimes {
    animes {
      id
      title
      studio
      description
      poster
      rating
      episodes
      userId
      createdAt
    }
  }
`;

const GET_ANIME_QUERY = `
  query GetAnime($id: ID!) {
    anime(id: $id) {
      id
      title
      studio
      description
      poster
      rating
      episodes
      userId
      createdAt
    }
  }
`;

const CREATE_ANIME_MUTATION = `
  mutation CreateAnime($title: String!, $studio: String!, $description: String!, $poster: String!, $rating: Int!, $episodes: Int!) {
    createAnime(title: $title, studio: $studio, description: $description, poster: $poster, rating: $rating, episodes: $episodes) {
      id
      title
      studio
      description
      poster
      rating
      episodes
      userId
      createdAt
    }
  }
`;

export function useAnimes() {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const refetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await graphqlFetch(GET_ANIMES_QUERY);
      setAnimes(data.animes);
    } catch (error) {
      setError(error as Error);
    }
  };

  return { animes, loading, error, refetch };
}

export function useAnime(id: string) {
  const [anime, setAnime] = useState<Anime | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchAnime = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await graphqlFetch(GET_ANIME_QUERY, { id });
      setAnime(data.anime);
    } catch (error) {
      setError(error as Error);
    }
  };

  return { anime, loading, error, fetchAnime };
}

export async function createAnime(anime: {
  title: string;
  studio: string;
  description: string;
  poster: string;
  rating: number;
  episodes: number;
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const createAnime = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await graphqlFetch(CREATE_ANIME_MUTATION, anime);
      return data.createAnime;
    } catch (error) {
      setError(error as Error);
    }
  };

  return { loading, error, createAnime };
}
