import { Movie } from "@/lib/db";
import { graphqlFetch } from "@/lib/graphql-client";
import { useState } from "react";
import { useCreateBook } from "./use-books";

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
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const refetch = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await graphqlFetch(GET_MOVIES_QUERY);
      setMovies(data.movies);
    } catch (error) {
      setError(error as Error);
    }
  };

  return { movies, loading, error, refetch };
}

export function useMovie(id: string) {
  const [movies, setMovies] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchMovie = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await graphqlFetch(GET_MOVIE_QUERY, { id });
      setMovies(data.movie);
    } catch (error) {
      setError(error as Error);
    }
  };

  return { movies, loading, error, fetchMovie };
}

export function useCreateMovie() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const createMovie = async (movie: {
    title: string;
    director: string;
    description: string;
    poster: string;
    rating: number;
  }) => {
    setLoading(true);
    setError(null);

    try {
      const data = await graphqlFetch(CREATE_MOVIE_MUTATION, movie);
      return data.createMovie;
    } catch (error) {
      setError(error as Error);
    }
  };

  return { createMovie, loading, error };
}
