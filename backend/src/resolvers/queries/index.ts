import { MyContext } from '@/src'
import { QueryResolvers } from '@/src/generated-types'
import { validateTokenResolver } from './auth'

export const RootQuery: QueryResolvers<MyContext> = {
  validateToken: validateTokenResolver,
}
