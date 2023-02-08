import bcrypt from 'bcrypt'

export const signUpResolver = async (_parent, args, { prisma }) => {
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
