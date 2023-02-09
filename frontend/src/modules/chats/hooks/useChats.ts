import { Chat } from '@/entities/chat'
import { useQuery } from '@apollo/client'
import { userAuthVar } from '../../auth/hooks/useAuthVar'
import { GET_KNOWN_CHATS } from '../queries/get-known-chats'

type GetKnownChatsQueryProps = {
  userId: number
}

export default function useChats() {
  const authVar = userAuthVar()
  if (!authVar.user) throw new Error('user is not logined')

  const data = useQuery<Chat[], GetKnownChatsQueryProps>(GET_KNOWN_CHATS, {
    variables: {
      userId: authVar.user?.id,
    },
  })

  return data
}
