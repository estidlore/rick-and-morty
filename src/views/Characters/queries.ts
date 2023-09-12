import { gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters(page: 1) {
      results {
        id
        image
        location {
          name
        }
        name
        species
        status
      }
    }
  }
`;

export { GET_CHARACTERS };
