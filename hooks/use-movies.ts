"use client";

import { useState, useEffect } from "react";
import type { IMovie } from "@/lib/interface";
import { graphqlFetch } from "@/lib/graphql-client";

const GET_MOVIES_QUERY = `
  query GetMovies {
    movies {
      id
      title
      director
      description
      poster
      rating
      userId
      createdAt
    }
  }
`;

const GET_MOVIE_QUERY = `
  query GetMovie($id: ID!) {
    movie(id: $id) {
      id
      title
      director
      description
      poster
      rating
      userId
      createdAt
    }
  }
`;

const CREATE_MOVIE_MUTATION = `
  mutation CreateMovie($title: String!, $director: String!, $description: String!, $poster: String!, $rating: Int!) {
    createMovie(title: $title, director: $director, description: $description, poster: $poster, rating: $rating) {
      id
      title
      director
      description
      poster
      rating
      userId
      createdAt
    }
  }
`;

export function useMovies() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const refetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await graphqlFetch(GET_MOVIES_QUERY);
      setMovies(data.movies || []);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return { movies, loading, error, refetch };
}

export function useMovie(id: string) {
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchMovie = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await graphqlFetch(GET_MOVIE_QUERY, { id });
        setMovie(data.movie);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  return { movie, loading, error };
}

export function useCreateMovie() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const createMovie = async (input: {
    title: string;
    director: string;
    description: string;
    poster: string;
    rating: number;
  }) => {
    setLoading(true);
    setError(null);
    try {
      const data = await graphqlFetch(CREATE_MOVIE_MUTATION, input);
      return data.createMovie;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createMovie, loading, error };
}
