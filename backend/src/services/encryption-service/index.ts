import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { CryptoService } from './types'

export class EncryptionService implements CryptoService {
  hash(password: string, saltLength = 10): Promise<string> {
    return bcrypt.hash(password, saltLength)
  }

  compareHashed(password: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(password, hashed)
  }

  signJwtToken(data: object, key: string): string {
    return jwt.sign(data, key)
  }

  verifyJwtToken<T>(token: string, key: string): T {
    return jwt.verify(token, key) as T
  }
}

const encryptionService = new EncryptionService()

export default encryptionService
