import { ChatRepository } from '@/src/repositories/chat-repository'

export default class ChatService {
  constructor(private chatRepository: ChatRepository) {}

  getChatsByUserId(userId: number) {
    if (!userId) throw new Error('user id is missing')

    return this.chatRepository.findMany({
      where: { users: { some: { id: userId } } },
    })
  }
}
