import { User } from '@prisma/client'
import { Environment } from '../../config'
import { LogInInfo, LoginResponse, RegisterInfo } from '../../generated-types'
import { Repository } from '../../repositories/types'
import { CryptoService } from '../encryption-service/types'

export default class AuthService {
  constructor(
    private userRepository: Repository<User>,
    private encryptionService: CryptoService
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

  async login({ email, password }: LogInInfo): Promise<LoginResponse> {
    if (!email || !password) throw new Error('This is not a valid info')

    const candidate = await this.userRepository.findFirst({ where: { email } })

    if (!candidate) throw new Error('Wrong email')

    const isValid = await this.encryptionService.compareHashed(
      password,
      candidate.password
    )
    if (!isValid) throw new Error('Wrong password')

    return {
      user: candidate,
      token: this.encryptionService.signJwtToken(
        { id: candidate.id },
        Environment.TOKEN_KEY
      ),
    }
  }

  async validateToken(token: string): Promise<LoginResponse> {
    if (!token) throw new Error('there is no token')

    const userInfo = this.encryptionService.verifyJwtToken<{ id: number }>(
      token,
      Environment.TOKEN_KEY
    )
    if (!userInfo) throw new Error('token invalid')

    const user = await this.userRepository.findFirst({
      where: { id: userInfo.id },
    })
    return { user, token }
  }
}
