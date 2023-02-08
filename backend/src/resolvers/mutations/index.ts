import { MyContext } from '@/src'
import { MutationResolvers } from '@src/generated-types'
import { loginResolver, signUpResolver } from './auth'

export const RootMutation: MutationResolvers<MyContext> = {
  login: loginResolver,
  signUp: signUpResolver,
}
