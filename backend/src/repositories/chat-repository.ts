import { Chat, Prisma } from '@prisma/client'
import prisma from '../client'

import { Repository } from './types'

export class ChatRepository implements Repository<Chat> {
  async create(opt: Prisma.ChatCreateArgs): Promise<Chat> {
    return prisma.chat.create(opt)
  }

  async findFirst(opt: Prisma.ChatFindFirstArgs): Promise<Chat> {
    return prisma.chat.findFirst(opt)
  }

  async findMany(opt: Prisma.ChatFindManyArgs): Promise<Chat[]> {
    return prisma.chat.findMany(opt)
  }
}

export const chatRepository = new ChatRepository()
