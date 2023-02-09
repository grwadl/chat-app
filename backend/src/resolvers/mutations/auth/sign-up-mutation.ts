import { MutationSignUpArgs, RegisterResponse } from '@/src/generated-types'
import { ResolverFunc } from '../../types'

export const signUpResolver: ResolverFunc<
  RegisterResponse,
  MutationSignUpArgs,
  'userInfo'
> = async (_parent, args, { rootService: { authService } }) => {
  const { userInfo } = args

  const user = authService.signUp(userInfo)

  return { success: !!user }
}
