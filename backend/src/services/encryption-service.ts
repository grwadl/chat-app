import * as bcrypt from 'bcrypt'

export class EncryptionService {
  hash(password: string, saltLength = 10): Promise<string> {
    return bcrypt.hash(password, saltLength)
  }

  compare(password: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(password, hashed)
  }
}

const encryptionService = new EncryptionService()

export default encryptionService
