import { Chat } from '@prisma/client'
import { QueryGetKnownChatsArgs } from '@src/generated-types'
import { ResolverFunc } from '@src/resolvers/types'

const getKnownChats: ResolverFunc<Chat[], QueryGetKnownChatsArgs, 'userId'> = (
  _parent,
  { userId },
  { rootService }
) => rootService.chatService.getChatsByUserId(userId)

export default getKnownChats
