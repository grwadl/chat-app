import userRepository from '../repositories/user-repository'
import AuthService from './auth-service'
import encryptionService from './encryption-service'

const rootService = {
  authService: new AuthService(userRepository, encryptionService),
}

export type RootService = typeof rootService

export default rootService
