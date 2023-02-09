import { User } from '@prisma/client'
import { RegisterInfo } from '../generated-types'
import { Repository } from '../repositories/types'
import { EncryptionService } from './encryption-service'

export default class AuthService {
  constructor(
    private userRepository: Repository<User>,
    private encryptionService: EncryptionService
  ) {}

  async signUp({ email, name, password }: RegisterInfo): Promise<User> {
    if (!email || !password || !name)
      throw new Error('Not enough info for registration')

    const doesAlreadyExist = await this.userRepository.findFirst({
      where: { email },
    })

    if (doesAlreadyExist) throw new Error('User already exists')

    const userDTO = {
      email,
      name,
      password: await this.encryptionService.hash(password, 10),
    }

    return this.userRepository.create({
      data: userDTO,
      select: { email: true, password: true, id: true, name: true },
    })
  }
}
