import { gql } from "@apollo/client";

export const VALIDATE_TOKEN = gql`
  query ValidateToken($token: String!) {
    validateToken(token: $token) {
      user {
        name
        email
      }
      token
    }
  }
`;
