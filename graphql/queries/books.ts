import { gql } from "@apollo/client";

export const GET_BOOKS_QUERY = gql`
  query GetBooks {
    booksCollection(filter: { rating: { eq: 5 } }) {
      edges {
        node {
          id
          title
          author
          description
          cover
          rating
          user_id
          created_at
        }
      }
    }
  }
`;
