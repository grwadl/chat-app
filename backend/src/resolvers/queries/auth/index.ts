import jwt from 'jsonwebtoken'
import { Environment } from '../../../config'
import { LoginResponse, QueryValidateTokenArgs } from '@src/generated-types'
import { ResolverFunc } from '@src/resolvers/types'

export const validateTokenResolver: ResolverFunc<
  LoginResponse,
  QueryValidateTokenArgs,
  'token'
> = async (parent, { token }, { prisma }) => {
  if (!token) throw new Error('there is no token')

  const userInfo = jwt.verify(token, Environment.TOKEN_KEY) as { id: number }
  if (!userInfo) throw new Error('token invalid')

  const user = await prisma.user.findFirst({ where: { id: userInfo.id } })
  return { user, token }
}
