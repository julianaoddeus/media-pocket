import { gql } from "@apollo/client";

export const GET_ANIMES_QUERY = gql`
  query GetAnimes {
    animesCollection(filter: { rating: { eq: 5 } }) {
      edges {
        node {
          id
          title
          studio
          description
          poster
          rating
          episodes
          user_id
          created_at
        }
      }
    }
  }
`;
