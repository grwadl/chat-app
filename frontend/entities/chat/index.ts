import { User } from '../user'

export type Message = {
  author: User
  chat: Chat
  text: string
}

export type Chat = {
  messages: Message[]
  users: User[]
}
