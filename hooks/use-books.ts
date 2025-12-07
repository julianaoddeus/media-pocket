import { Book } from "@/lib/db";
import { graphqlFetch } from "@/lib/graphql-client";
import { useEffect, useState } from "react";

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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const refetch = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await graphqlFetch(GET_BOOKS_QUERY);
      setBooks(data.books || []);
    } catch (err) {
      setError(err as Error);
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return { books, loading, error, refetch };
}

export function useBook(id: string) {
  const [book, setBook] = useState<Book[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  if (!id) return;

  const fetchBook = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await graphqlFetch(GET_BOOKS_QUERY, { id });
      setBook(data.book || null);
    } catch (err) {
      setError(err as Error);
    }

    useEffect(() => {
      fetchBook();
    }, [id]);
  };

  return { book, loading, error, fetchBook };
}

export function useCreateBook() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const creatBook = async (input: {
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
    } catch (error) {
      setError(error as Error);
    }
  };

  return { loading, error, creatBook };
}
