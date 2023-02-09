export interface CryptoService {
  hash(password: string, salt?: number): Promise<string>

  compareHashed(data: string, hashed: string): Promise<boolean>

  signJwtToken(data: object, key: string): string

  verifyJwtToken<T>(token: string, key: string): T
}
