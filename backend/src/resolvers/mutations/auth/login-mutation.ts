import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Environment } from '../../../config'
import { LoginResponse, MutationLoginArgs } from '@src/generated-types'
import { ResolverFunc } from '../../types'

export const loginResolver: ResolverFunc<
  LoginResponse,
  MutationLoginArgs,
  'userInfo'
> = async (_parent, args, { prisma }) => {
  const {
    userInfo: { email, password },
  } = args

  if (!email || !password) throw new Error('This is not a valid info')

  const candidate = await prisma.user.findFirst({ where: { email } })

  if (!candidate) throw new Error('Wrong email')

  const isValid = await bcrypt.compare(password, candidate.password)
  if (!isValid) throw new Error('Wrong password')

  return {
    user: candidate,
    token: jwt.sign({ id: candidate.id }, Environment.TOKEN_KEY),
  }
}
