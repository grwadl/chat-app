import { gql } from '@apollo/client'

export const GET_KNOWN_CHATS = gql`
  query GetKnownChats($userId: Int!) {
    getKnownChats(userId: $userId) {
      chats {
        messages
      }
    }
  }
`
