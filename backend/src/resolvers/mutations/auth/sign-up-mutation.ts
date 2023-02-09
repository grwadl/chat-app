import { MutationSignUpArgs, RegisterResponse } from '@/src/generated-types'
import bcrypt from 'bcrypt'
import { ResolverFunc } from '../../types'

export const signUpResolver: ResolverFunc<
  RegisterResponse,
  MutationSignUpArgs,
  'userInfo'
> = async (_parent, args, { prisma }) => {
  const {
    userInfo: { email, name, password },
  } = args

  if (!email || !password || !name)
    throw new Error('Not enough info for registration')

  const doesAlreadyExist = await prisma.user.findFirst({ where: { email } })
  if (doesAlreadyExist) throw new Error('User already exists')

  const userDTO = {
    email,
    name,
    password: await bcrypt.hash(password, 10),
  }

  await prisma.user.create({
    data: userDTO,
    select: { email: true, password: true, id: true, name: true },
  })

  return {
    success: true,
  }
}
