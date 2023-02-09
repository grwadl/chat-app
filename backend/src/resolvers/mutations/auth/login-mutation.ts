import { LoginResponse, MutationLoginArgs } from '@src/generated-types'
import { ResolverFunc } from '../../types'

export const loginResolver: ResolverFunc<
  LoginResponse,
  MutationLoginArgs,
  'userInfo'
> = async (_parent, { userInfo }, { rootService: { authService } }) => {
  return authService.login(userInfo)
}
