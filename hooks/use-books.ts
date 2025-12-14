"use client";

import { useState, useEffect } from "react";
import type { Book } from "@/lib/interface";
import { graphqlFetch } from "@/lib/graphql-client";

const GET_BOOKS_QUERY = `
  query GetBooks {
    books {
      id
      title
      author
      description
      cover
      rating
      userId
      createdAt
    }
  }
`;

const GET_BOOK_QUERY = `
  query GetBook($id: ID!) {
    book(id: $id) {
      id
      title
      author
      description
      cover
      rating
      userId
      createdAt
    }
  }
`;

const CREATE_BOOK_MUTATION = `
  mutation CreateBook($title: String!, $author: String!, $description: String!, $cover: String!, $rating: Int!) {
    createBook(title: $title, author: $author, description: $description, cover: $cover, rating: $rating) {
      id
      title
      author
      description
      cover
      rating
      userId
      createdAt
    }
  }
`;

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const refetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await graphqlFetch(GET_BOOKS_QUERY);
      setBooks(data.books || []);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return { books, loading, error, refetch };
}

export function useBook(id: string) {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchBook = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await graphqlFetch(GET_BOOK_QUERY, { id });
        setBook(data.book);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  return { book, loading, error };
}

export function useCreateBook() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const createBook = async (input: {
    title: string;
    author: string;
    description: string;
    cover: string;
    rating: number;
  }) => {
    setLoading(true);
    setError(null);
    try {
      const data = await graphqlFetch(CREATE_BOOK_MUTATION, input);
      return data.createBook;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createBook, loading, error };
}
