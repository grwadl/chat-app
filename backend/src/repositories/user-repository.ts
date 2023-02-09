import { Prisma, User } from '@prisma/client'
import prisma from '../client'
import { Repository } from './types'

class UserRepository implements Repository<User> {
  async findMany(opt: Prisma.UserFindManyArgs): Promise<User[]> {
    return prisma.user.findMany(opt)
  }

  async findFirst(opt: Prisma.UserFindFirstArgs): Promise<User> {
    return prisma.user.findFirst(opt)
  }

  async create(opt: Prisma.UserCreateArgs): Promise<User> {
    return prisma.user.create(opt)
  }
}

const userRepository = new UserRepository()

export default userRepository
