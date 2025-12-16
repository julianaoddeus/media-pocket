// graphql/types/books.ts
export type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  cover: string;
  rating: number;
  user_id: string;
  created_at: string;
};

export type GetBooksResponse = {
  booksCollection: {
    edges: {
      node: Book;
    }[];
  };
};
