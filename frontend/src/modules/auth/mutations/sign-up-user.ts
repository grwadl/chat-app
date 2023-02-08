import { gql } from '@apollo/client'

const SIGN_UP_USER = gql`
  mutation SignUp($userInfo: RegisterInfo!) {
    signUp(userInfo: $userInfo) {
      success
    }
  }
`

export default SIGN_UP_USER
