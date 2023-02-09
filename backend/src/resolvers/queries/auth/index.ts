import { LoginResponse, QueryValidateTokenArgs } from '@src/generated-types'
import { ResolverFunc } from '@src/resolvers/types'

export const validateTokenResolver: ResolverFunc<
  LoginResponse,
  QueryValidateTokenArgs,
  'token'
> = async (_parent, { token }, { rootService: { authService } }) => {
  return authService.validateToken(token)
}
