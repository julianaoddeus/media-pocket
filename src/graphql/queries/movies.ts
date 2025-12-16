import { gql } from "@apollo/client";

export const GET_MOVIES_QUERY = gql`
  query GetMovies {
    moviesCollection(filter: { rating: { eq: 5 } }) {
      edges {
        node {
          id
          title
          director
          description
          poster
          rating
          user_id
          created_at
        }
      }
    }
  }
`;
