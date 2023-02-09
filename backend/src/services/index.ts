import { chatRepository } from '../repositories/chat-repository'
import userRepository from '../repositories/user-repository'
import AuthService from './auth-service'
import ChatService from './chat-service'
import encryptionService from './encryption-service'

const rootService = {
  authService: new AuthService(userRepository, encryptionService),
  chatService: new ChatService(chatRepository),
}

export type RootService = typeof rootService

export default rootService
