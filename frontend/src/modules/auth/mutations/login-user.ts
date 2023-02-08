import { gql } from '@apollo/client'

const LOGIN_USER = gql`
  mutation ($userInfo: LogInInfo!) {
    login(userInfo: $userInfo) {
      user {
        email
        name
      }
      token
    }
  }
`

export default LOGIN_USER
