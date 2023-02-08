import { User } from '@/entities/user'
import LOGIN_USER from '@/src/modules/auth/mutations/login-user'
import { writeToStorage } from '@/lib/storage'
import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { userAuthVar } from './useAuthVar'

type LogInUserPayload = { userInfo: Omit<User, 'name'> }
export type LogInUserResponse = { login: { user: User; token: string } }

export function useLoginMutation() {
  const [logInUser, { error }] = useMutation<
    LogInUserResponse,
    LogInUserPayload
  >(LOGIN_USER)

  return { logInUser, error }
}

export function useLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { logInUser, error } = useLoginMutation()

  const onChangeEmail = (email: string) => {
    setEmail(email)
  }

  const onChangePassword = (pass: string) => {
    setPassword(pass)
  }

  const logIn = async () => {
    if (!email) return

    const { data } = await logInUser({
      variables: {
        userInfo: {
          email,
          password,
        },
      },
    })

    if (!data || error) return alert('Invalid credentials')

    userAuthVar({ ...data.login, isLogined: true })
    writeToStorage('auth-token', data?.login.token ?? '')
  }

  return { logIn, onChangeEmail, onChangePassword, email, password }
}
