import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation CreateUser($userName: String!) {
    user(userName: $userName) {
      name
    }
  }
`;

export default CREATE_USER;
